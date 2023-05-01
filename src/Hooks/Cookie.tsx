import Cookies from 'js-cookie';

export const setCookie = (name: string, value: string, options = {}) => {
  Cookies.set(name, value, {
    ...options,
    secure: process.env.NODE_ENV === 'production', // only send cookies over HTTPS in production
  });
};

export const removeCookie = (name: string, options = {}) => {
  Cookies.remove(name, {
    ...options,
    secure: process.env.NODE_ENV === 'production', // only send cookies over HTTPS in production
  });
};

export const getCookie = (name: string) => Cookies.get(name);
