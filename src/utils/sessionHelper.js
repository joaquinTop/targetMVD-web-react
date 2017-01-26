export const setUser = (user, withFb) => {
  if (typeof(Storage) !== "undefined") {
    let session = {};
    session.user = user;
    session.facebook = withFb;
    localStorage.setItem('user', JSON.stringify(session));
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
