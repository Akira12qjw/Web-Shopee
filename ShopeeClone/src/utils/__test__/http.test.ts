import { describe, expect, it } from 'vitest'
import http from '../http'
import { HttpStatusCode } from 'src/constants/httpStatusCode.enum'

describe('http Axios', () => {
  it('Gọi API', async () => {
    const res = await http.get('products')
    // console.log(res)
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
  it('Auth request', async () => {
    await http.post('login', {
      email: 'e2@gmail.com',
      password: '123456'
    })
    const res = await http.get('me')
    expect(res.status).toBe(HttpStatusCode.Ok)
  })
})
