import { api } from '@/lib/axios'

interface GetMountRevenueResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const response = await api.get<GetMountRevenueResponse>(
    '/metrics/month-receipt',
  )

  return response.data
}
