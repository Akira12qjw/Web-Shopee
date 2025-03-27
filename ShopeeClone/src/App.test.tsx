import { describe, expect, test } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
  test('App render và chuyển trang ', async () => {
    render(<App />, {
      wrapper: BrowserRouter
    })
    const user = userEvent.setup()
    //Verify vào trang chủ
    await waitFor(() => {
      expect(document.querySelector('title')?.textContent).toBe('Trang Chủ')
    })

    //Verify chuyển sang trang login
    await user.click(screen.getByText(/Đăng Nhập/i))

    // await waitFor(() => {
    //   expect(screen.queryByText('Bạn đã có tài khoản ?')).toBeInTheDocument()
    //   expect(document.querySelector('title')?.textContent).toBe('Đăng nhập')
    // })

    screen.debug(document.body.parentElement as HTMLElement, 99999999)
  })
})
