export const getTopicId = (name, topicsList) => {
  for (let i = 0; i < topicsList.length; i++) {
    if (topicsList[i].label === name) {
      return topicsList[i].topic_id;
    }
  }
}


export const getTopicName = (id, topicsList) => {
  for (let topic in topicsList) {
    if (topic.topic_id === id) {
      return topic.label;
    }
  }
}

export const getTopicIcon = (id, topicsList) => {
  for (let topic in topicsList) {
    if (topic.topic_id === id) {
      return topic.url;
    }
  }
}
