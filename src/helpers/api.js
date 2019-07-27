import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3000/api/v1'

export function getAllPackage() {
  return fetch(`${BASE_URL}/package/all`).then(res => res.json())
}

export function getAllCategory() {
  return fetch(`${BASE_URL}/category/all`).then(res => res.json())
}
export function getPackageId(id) {
  return fetch(`${BASE_URL}/package/${id}`).then(res => res.json())
}

export function getCategoryId(id) {
  return fetch(`${BASE_URL}/category/${id}`).then(res => res.json())
}

export function PostUser(user) {
  return axios({
    method: 'POST',
    url: `${BASE_URL}/user/register`,
    data: user,
  })
}
