export default {
  targets: [],
  topics: [],
  matches: [],
  messages: [],
  content: "ChatAux",
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
  session: {
    user_id: '',
    user_token: '',
    isLoggedIn: false,
    firstTime: true,
    currentPage: 'SignUpPage'
  },
  alert: {
    goal: "",
    text: "",
    alertType: ""
  }
};
