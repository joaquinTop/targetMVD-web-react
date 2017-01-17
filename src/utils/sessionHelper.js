export const setUser = (user) => {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export const getUser = () => {
  if (typeof(Storage) !== "undefined") {
    return JSON.parse(localStorage.getItem('user'));
  }
  return null;
};

export const removeUser = () => {
  if (typeof(Storage) !== "undefined") {
    localStorage.removeItem('user');
    localStorage.removeItem('myPositionCoords');
  }
};
