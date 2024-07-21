import { api } from '@/lib/axios'

interface GetDayOrdersAmountResponse {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount() {
  const response = await api.get<GetDayOrdersAmountResponse>(
    'metrics/day-orders-amount',
  )

  return response.data
}
