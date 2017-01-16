export const getTopicId = (name, topicsList) => {
  let id;
  for (let i = 0; i < topicsList.length; i++) {
    if (topicsList[i].label === name) {
      id = topicsList[i].id;
    }
  }
  return id;
};


export const getTopicName = (id, topicsList) => {
  let name;
  for (let i = 0; i < topicsList.length; i++) {
    if (topicsList[i].id === id) {
      name = topicsList[i].label;
    }
  }
  return name;
};

export const getTopicIcon = (id, topicsList) => {
  let url = '';
  for (let i = 0; i < topicsList.length; i++) {
    if (topicsList[i].id === id) {
      url = topicsList[i].url;
    }
  }
  return url;
};
