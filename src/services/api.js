import axios from 'axios'

export default axios.create({
  baseURL: 'https://contact-forms-qgj8.onrender.com',
  timeout: 100000,
  headers: { 'Content-Type': 'application/json' }
});
