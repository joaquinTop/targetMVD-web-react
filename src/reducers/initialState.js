import { CONTENTS } from '../enums/enums'

export default {
  targets: [],
  topics: [],
  matches: [],
  messages: [],
  content: CONTENTS.HomeWelcome,
  currentConversation: {},
  newTarget: {
    id: 0,
    title: "",
    lat: 0,
    lng: 0,
    radius: 200,
    topic: 0,
    isVisible: false,
    isActive: true
  },
  selectedTarget: null,
  session: {
    user_id: '',
    user_token: '',
    isLoggedIn: false,
    firstTime: true,
    user: null
  },
  alert: {
    goal: "",
    text: "",
    alertType: ""
  }
};
