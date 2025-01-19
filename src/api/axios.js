import axios from 'axios';
   
const axiosInstance = axios.create({
  //baseURL: 'http://localhost:5000'  
  //baseURL: 'https://ecommerce-backend-z4v3.onrender.com'
  baseURL: 'https://buffaloburger-backend-production.up.railway.app'
});
 

export default axiosInstance;
