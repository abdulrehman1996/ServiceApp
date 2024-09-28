import Axios from "axios";
import { API_URL } from "@/config";
// import { useNotificationStore } from "@/stores/notifications";
import {getLoggedInSessionToken} from "../../../auth/utils/storage";
// import { API } from "@/features/auth/api/useUser";
import { isEmpty } from "lodash";
export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
     Accept: 'application/json',

  },
});

axios.interceptors.request.use(
  async config => {
    let storedUserToken = await getLoggedInSessionToken();
    if (!isEmpty(storedUserToken)) {
    config.headers.authorization = `Bearer ${storedUserToken}`;
    }
     console.log('===config==',config)
    return config;
  },
  error => Promise.reject(error),
);

axios.interceptors.response.use(
  response => response,
  async error => {
    const {config, response} = error;
    if (
      response?.status == 401
    ) {
      // refreshToken()
      console.warn('Token expire Condition')
    }
    return Promise.reject(error);
  },
);

export class HttpClient {
  static async get<T>(url: string, params?: unknown) {
    const response = await axios.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: any) {
    const response = await axios.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await axios.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await axios.delete<T>(url);
    return response.data;
  }

  static formatSearchParams(params: Partial<SearchParamOptions>) {
    return Object.entries(params)
      .filter(([, value]) => Boolean(value))
      .map(([k, v]) =>
        ['type', 'categories', 'tags', 'author', 'manufacturer'].includes(k)
          ? `${k}.slug:${v}`
          : ['is_approved'].includes(k)
          ? formatBooleanSearchParam(k, v as boolean)
          : `${k}:${v}`
      )
      .join(';');
  }
}


function formatBooleanSearchParam(key: string, value: boolean) {
  return value ? `${key}:1` : `${key}:`;
}

interface SearchParamOptions {
  categories: string;
  code: string;
  type: string;
  name: string;
  shop_id: string;
  is_approved: boolean;
  tracking_number: string;
}


export function getFormErrors(error: unknown) {
  if (Axios.isAxiosError(error)) {
    return error.response?.data.message;
  }
  return null;
}

export function getFieldErrors(error: unknown) {
  if (Axios.isAxiosError(error)) {
    return error.response?.data.errors;
  }
  return null;
}


// export const refreshToken = async () => {
//   try {
//     const res = await API.token()
//     console.log('===res===',res)
//     // console.log('===data===',res)
//     // await saveToLocal(storageKeys.userToken, data);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
