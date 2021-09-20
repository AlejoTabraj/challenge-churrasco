import axios from 'axios'

axios.defaults.baseURL = 'https://3000-amethyst-turkey-rqubp7rl.ws-us15.gitpod.io/'
axios.defaults.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
