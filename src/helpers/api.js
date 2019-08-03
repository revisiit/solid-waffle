import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3000/api/v1/'

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

export function postUser(user) {
  return axios({
    method: 'POST',
    url: `${BASE_URL}/user/register`,
    data: user,
  })
}

export function postCredentials(user) {
  return axios({
    method: 'POST',
    url: `${BASE_URL}/user/login`,
    data: user,
  })
}

export function postBookingDetails() {
  return axios({
    method: 'POST',
    usrl: `${BASE_URL}/book/`,
    data: bookingDetails,
  })
}
