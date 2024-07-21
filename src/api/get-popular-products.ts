import { api } from '@/lib/axios'

export type GetPoupularProductsResponse = {
  product: string
  amount: number
}[]

export async function getPoupularProducts() {
  const response = await api.get<GetPoupularProductsResponse>(
    '/metrics/popular-products',
  )

  return response.data
}
