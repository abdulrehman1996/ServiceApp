import {
  CommonActions,
  isNaN,
  isNull,
  isUndefined,
  moment,
} from "@/utils/packages";

export const resetAndGo = (
  navigation: any,
  routeName: string,
  paramsData: string
) => {
  if (navigation && !isEmptyString(routeName)) {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: routeName, params: { data: paramsData } }],
      })
    );
  }
};
export const isEmpty = (value: any) => {
  return (
    isUndefined(value) ||
    isNaN(value) ||
    isNull(value) ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};
export const isEmptyString = (str: string) => {
  return str == "" || !str;
};

export const getFirstCharFromString = (string = "") => {
  // const getFirstCharInString = string?.match(/\b(\w)/g);
  // const firstCharInString = getFirstCharInString?.join("")?.toUpperCase() ?? "";
  // return firstCharInString;
  const isStringInEngRegex = new RegExp("^[a-zA-Z0-9]*$");
  const splitString = string?.split(" ") ?? [];
  let firstCharInString = "";
  if (
    splitString.length === 0 ||
    !isStringInEngRegex.test(splitString.join(""))
  ) {
  } else if (splitString.length === 1) {
    const joinString = splitString.join("");
    firstCharInString = `${joinString.charAt(0).toUpperCase()}${joinString
      .charAt(1)
      .toUpperCase()}`;
  } else {
    const getFirstCharInString = string.match(/\b(\w)/g);
    firstCharInString = getFirstCharInString?.join("")?.toUpperCase() ?? "";
  }
  return firstCharInString?.substring(0, 2);
};

export const calculateAgeFromDB = (dateString: any) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
export const timeFormat = (date: any) => moment(date, "hh:mm").format("hh A");
export const dateFormat = (date: any) =>
  moment(date, "YYYY-MM-DD").format("D MMM");
//  export const timeFormat = date => moment(date, 'hh:mm').format('hh:mm A');
// export const addDays = (date, days) => {
//   let result = new Date(date);
//   result.setDate(result.getDate() + days);
//   return result;
// };
// export const removeDays = (date, days) => {
//   let result = new Date(date);
//   result.setDate(result.getDate() - days);
//   return result;
// };

export const checkShiftTime = (dateTime: any, sTime: any, eTime: any) => {
  let format = "HH:mm";
  let time = moment(dateTime),
    beforeTime = moment(sTime, format),
    afterTime = moment(eTime, format);
  if (time.isBetween(beforeTime, afterTime)) return true;
  else return false;
};
export const checkShiftDate = (dateTime: any, sTime: any, eTime: any) => {
  let format = "YYYY-MM-DD";
  let time = moment(dateTime),
    beforeTime = moment(sTime, format),
    afterTime = moment(eTime, format);
  if (time.isBetween(beforeTime, afterTime)) return true;
  else return false;
};
