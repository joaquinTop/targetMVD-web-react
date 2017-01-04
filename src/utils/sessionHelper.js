export const setUser = (user) => {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('user', JSON.stringify(user));
  }
}

export const getUser = () => {
  let user;
  if (typeof(Storage) !== "undefined") {
    user = JSON.parse(localStorage.getItem('user'));
  }
  return user;
}

export const removeUser = () => {
  if (typeof(Storage) !== "undefined") {
    localStorage.removeItem('user');
  }
}
