export const getItem = key => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const setItem = (key, value) => {
  if (value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  return false;
};

export const removeItem = key => {
  return localStorage.removeItem(key);
};

export const STORAGE_KEYS = {
  APP_LOGGED_USER: "@APP/signedInUser"
};
