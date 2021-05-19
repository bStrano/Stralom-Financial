import ENDPOINTS from '../../constants/Endpoints';
import axios from 'axios';

const axiosCore = axios.create({
  baseURL: ENDPOINTS.AUTHENTICATION,
  timeout: 60000,
});

export default axiosCore;
