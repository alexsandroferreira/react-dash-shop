import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'
export interface PaginationProps {
  pageIndex: number
  totalcount: number
  perPage: number
  onPageChange: (pageIndex: number) => Promise<void> | void
}

export function Pagination({
  pageIndex,
  perPage,
  totalcount,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalcount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalcount} item(s)
      </span>
      <div className="flex items-center gap-6 lg:gap-8">
        <div>
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => onPageChange(0)}
            id="first-page"
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pageIndex === 0}
          >
            <ChevronsLeft className="h4 w4" />
            <span className="sr-only">Primeira página</span>
          </Button>

          <Button
            onClick={() => onPageChange(pageIndex - 1)}
            id="next-page"
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pageIndex === 0}
          >
            <ChevronLeft className="h4 w4" />
            <span className="sr-only">Página anterior</span>
          </Button>

          <Button
            onClick={() => onPageChange(pageIndex + 1)}
            id="previus-page"
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pages <= pageIndex + 1}
          >
            <ChevronRight className="h4 w4" />
            <span className="sr-only">Proxima página</span>
          </Button>

          <Button
            onClick={() => onPageChange(pages - 1)}
            id="last-page"
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={pages <= pageIndex + 1}
          >
            <ChevronsRight className="h4 w4" />
            <span className="sr-only">Ultima página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
