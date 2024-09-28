export const endpoints = {
    signup: "api/v1/auth/register",
    login: "api/v1/auth/login",
    me: "/api/v1/auth/me",
    refreshToken: "/api/v1/auth/refresh",
    sendOTPCode:'/api/v1/twillio/sms/initiate-verification',
    OTPCodeVerification:'/api/v1/twillio/sms/check-verification-code'
  };