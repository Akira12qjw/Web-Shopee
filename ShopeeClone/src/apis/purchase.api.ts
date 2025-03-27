import { AxiosError } from 'axios'
import { Purchase, PurchaseListStatus } from 'src/types/purchase.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'purchases'

const handleError = (error: AxiosError) => {
  console.error('API Error:', error)
  throw error
}

const purchaseApi = {
  async addToCart(body: { product_id: string; buy_count: number }) {
    try {
      return await http.post<SuccessResponse<Purchase>>(`${URL}/add-to-cart`, body)
    } catch (error) {
      return handleError(error as AxiosError)
    }
  },
  async getPurchases(params: { status: PurchaseListStatus }) {
    return http
      .get<SuccessResponse<Purchase[]>>(`${URL}`, {
        params
      })
      .catch(handleError)
  },
  async buyProducts(body: { product_id: string; buy_count: number }[]) {
    return http.post<SuccessResponse<Purchase[]>>(`${URL}/buy-products`, body).catch(handleError)
  },
  async updatePurchase(body: { product_id: string; buy_count: number }) {
    return http.put<SuccessResponse<Purchase>>(`${URL}/update-purchase`, body).catch(handleError)
  },
  async deletePurchase(purchaseIds: string[]) {
    return http.delete<SuccessResponse<{ deleted_count: number }>>(`${URL}`, {
      data: purchaseIds
    })
  }
}

export default purchaseApi
