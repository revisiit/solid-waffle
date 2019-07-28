import axios from 'axios'

const BASE_URL = 'https://salty-thicket-13140.herokuapp.com/api/v1'

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

export function PostCredentials(user) {
  return axios({
    method: 'POST',
    url: `${BASE_URL}/user/login`,
    data: user,
  })
}
