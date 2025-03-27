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
  addToCart(body: { product_id: string; buy_count: number }) {
    return http.post<SuccessResponse<Purchase>>(`${URL}/add-to-cart`, body).catch(handleError)
  },
  getPurchases(params: { status: PurchaseListStatus }) {
    return http
      .get<SuccessResponse<Purchase[]>>(`${URL}`, {
        params
      })
      .catch(handleError)
  },
  buyProducts(body: { product_id: string; buy_count: number }[]) {
    return http.post<SuccessResponse<Purchase[]>>(`${URL}/buy-products`, body).catch(handleError)
  },
  updatePurchase(body: { product_id: string; buy_count: number }) {
    return http.put<SuccessResponse<Purchase>>(`${URL}/update-purchase`, body).catch(handleError)
  },
  deletePurchase(purchaseIds: string[]) {
    return http.delete<SuccessResponse<{ deleted_count: number }>>(`${URL}`, {
      data: purchaseIds
    })
  }
}

export default purchaseApi
