import { describe, expect, it } from 'vitest'
import {
  clearLS,
  getAccessTokenFromLS,
  getRefreshTokenFromLS,
  setAccessTokenToLS,
  // setProfileToLS,
  setRefreshTokenToLS
} from '../auth'

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjEwZGYxYjExNDAwODkzZGY3M2I2MCIsImVtYWlsIjoiZTJAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyNC0wNi0xM1QwODowMzowNS4wNzVaIiwiaWF0IjoxNzE4MjY1Nzg1LCJleHAiOjE3MTgzNTIxODV9.pYlIs7vbnrxKCVaguZ82pWRCiIehjecHbPZrKoW7rjg'

const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjEwZGYxYjExNDAwODkzZGY3M2I2MCIsImVtYWlsIjoiZTJAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyNC0wNi0xM1QwODowMzowNS4wNzVaIiwiaWF0IjoxNzE4MjY1Nzg1LCJleHAiOjE3MzIwODk3ODV9.t81BbZDuuUdapKnlYjdOdy9qtaRMkWouyzurvextTQw'

// const profile =
//   '{"_id":"65b10df1b11400893df73b60","roles":["User"],"email":"e2@gmail.com","createdAt":"2024-01-24T13:17:37.095Z","updatedAt":"2024-05-14T01:51:20.039Z","__v":0,"address":"Đồng Nai","date_of_birth":"2003-09-24T17:00:00.000Z","name":"Truong Giang","phone":"0912121519","avatar":"0523f6a0-cff1-4a62-b95b-08eeb556e809.jpg"}'

describe('setAccessTokenToLS', () => {
  it('access_token được set vào localStorage', () => {
    setAccessTokenToLS(access_token)
    expect(localStorage.getItem('access_token')).toBe(access_token)
  })
})

describe('setRefreshTokenToLS', () => {
  it('refresh_token được set vào localStorage', () => {
    setRefreshTokenToLS(refresh_token)
    expect(localStorage.getItem('refresh_token')).toEqual(refresh_token)
  })
})

describe('getAccessTokenFromLS', () => {
  it('Lấy access_token', () => {
    setAccessTokenToLS(access_token)
    expect(localStorage.getItem('access_token')).toBe(access_token)
  })
})

describe('getRefreshTokenFromLS', () => {
  it('Lấy refresh_token', () => {
    setRefreshTokenToLS(refresh_token)
    expect(localStorage.getItem('refresh_token')).toBe(refresh_token)
  })
})

describe('clearLS', () => {
  it('Xóa hết access_token, refresh_token, profile', () => {
    setRefreshTokenToLS(refresh_token)
    setAccessTokenToLS(access_token)
    // setProfileToLS(profile)
    clearLS()
    expect(getAccessTokenFromLS()).toBe('')
    expect(getRefreshTokenFromLS()).toBe('')
  })
})

// describe('setProfileToLS', () => {
//   it('access_token được set vào localStorage', () => {
//     setProfileToLS(profile)
//     expect(localStorage.getItem('profilen')).toBe(profile)
//   })
// })

// describe('getProfileFromLS', () => {
//   it('Lấy profile', () => {
//     setProfileToLS(profile)
//     expect(localStorage.getItem('profile')).toBe(profile)
//   })
// })
