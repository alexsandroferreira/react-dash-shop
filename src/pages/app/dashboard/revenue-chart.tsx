import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const dataMounth = [
  { date: '11/12', revenue: 970 },
  { date: '12/12', revenue: 1970 },
  { date: '13/12', revenue: 570 },
  { date: '14/12', revenue: 290 },
  { date: '15/12', revenue: 1270 },
  { date: '16/12', revenue: 1270 },
]

export function RevenueChart() {
  return (
    <Card id="chart-orders" className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no periodo
          </CardTitle>
          <CardDescription>Receita diária no periodo</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={dataMounth} style={{ fontSize: 12 }}>
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              stroke="#888"
              dy={18}
            />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.orange[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
