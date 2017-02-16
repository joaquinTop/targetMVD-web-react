import axios from 'axios';
import { BASE_URL } from '../constants/constants';

let axiosInstance;

class ApiClient {

  constructor() {
    if(!axiosInstance){
      axiosInstance = axios.create({
        // any field can be overriden dynamically
        baseURL: BASE_URL,
        timeout: 10000,
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
      });
    }

    return axiosInstance;
  }

}

export default ApiClient;
