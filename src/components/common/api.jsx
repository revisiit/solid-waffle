import React from 'react'

const BASE_Url = 'http://127.0.0.1:3000/api/v1'

export function getPackage() {
  return fetch(`${BASE_Url}/package/all`).then(res => res.json())
}

export function getCategory() {
  return fetch(`${BASE_Url}/category/all`).then(res => res.json())
}
export function getPackageId(id) {
  return fetch(`${BASE_Url}/package/${id}`).then(res => res.json())
}

export function getCategoryId(id) {
  return fetch(`${BASE_Url}/category/${id}`).then(res => res.json())
}
