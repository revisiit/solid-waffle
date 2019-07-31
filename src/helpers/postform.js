import axios from 'axios'
export function PostUser(user) {
  return axios({
    method: 'POST',
    url: 'http://localhost:3000/api/v1/user',
    data: user,
  })
}
