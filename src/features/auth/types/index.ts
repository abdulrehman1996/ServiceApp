export interface AuthResponse {
  statusCode: number;
  message: string;
  data: User;
}

export interface User {
  id: number;
  email: string;
  username: string;
  full_name: string;
  phone_no: string;
  gender: string;
  image: string;
  d_o_b: string;
  is_vender: number;
  is_admin: number;
  is_email_verified: number;
  is_phone_verified: number;
  is_fb_verified: number;
  access_token: string;
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export enum Permission {
  SuperAdmin = 'super_admin',
  StoreOwner = 'store_owner',
  Staff = 'staff',
  Customer = 'customer',
}
export interface LoginInput {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  permissions: string[];
}
