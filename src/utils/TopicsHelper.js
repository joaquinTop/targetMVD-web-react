export const getTopicId = (name, topicsList) => {
  let id;
  topicsList.forEach((value) => {
    if (value.label === name) {
      id = value.id;
    }
  });
  return id;
};

export const getTopicName = (id, topicsList) => {
  let name;
  topicsList.forEach((value) => {
    if (value.id === id) {
      name = value.label;
    }
  });
  return name;
};

export const getTopicIcon = (id, topicsList) => {
  let url = '';
  topicsList.forEach((value) => {
    if (value.id === id) {
      url = value.url;
    }
  });
  return url;
};
