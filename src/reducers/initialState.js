export default {
  targets:[],
  newTarget:{
    id: 0,
    title:"",
    lat: 0,
    lng: 0,
    radius: 200,
    topic: '',
    isVisible: false,
    isActive: true
  },
  session:{
    user_id:'',
    user_token:'',
    isLoggedIn:false,
    currentPage:'SignUpPage'
  },
  alert:{
    goal:"",
    text:"",
    alertType:""
  }
};
