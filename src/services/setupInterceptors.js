import axiosInstance from '@/services/api.js'

export default axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
      config.headers.common["Authorization"] = 'Bearer ' + token;
  }
  return config;
},
(error) => {
  return Promise.reject(error);
})

axiosInstance.interceptors.response.use((response) => {
return response;
}, async (error) => {
console.log('config', error.config);
console.log('response', error.response);
console.log('error', error);
// if(error.response.status === 401) {
//     axiosInstance.post('/auth/token/update', {
//         token: localStorage.getItem('refresh_token')
//     })
// }
return Promise.reject(error);
});