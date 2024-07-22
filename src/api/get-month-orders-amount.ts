import { api } from '@/lib/axios'

interface GetMonthOdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const response = await api.get<GetMonthOdersAmountResponse>(
    'metrics/month-orders-amount',
  )

  return response.data
}
