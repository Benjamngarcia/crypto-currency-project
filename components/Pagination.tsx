import React from 'react'
import usePagination from '../hooks/usePagination'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export function Pagination() {
  const paginationInfo = usePagination()
  const { infoRequestAllMarket, decrementPage, changePage, incrementPage } = paginationInfo

  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <section>
      <ul className="flex items-center -space-x-px justify-center mx-auto mb-4">
        <button
          onClick={() => decrementPage(paginationInfo.infoRequestAllMarket.page)}
          className="block px-3 py-2 leading-tight text-gray-500 bg-white border 
          border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 400"
        >
          <IconChevronLeft />
        </button>
        {pages.map(page => (
          <li>
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`px-3 py-2 leading-tight 
              ${page == infoRequestAllMarket.page ?
                  'z-10 text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                  :
                  'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                }
              `}>
              {page}
            </button>
          </li>
        ))}
        <button
          onClick={() => incrementPage(paginationInfo.infoRequestAllMarket.page)}
          className="block px-3 py-2 leading-tight text-gray-500 bg-white border 
          border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 400"
        >
          <IconChevronRight />
        </button>
      </ul>
    </section>
  )
}
