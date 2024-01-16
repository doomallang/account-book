'use client'

import Title from '@/components/title'
import HomeCalendar from '@/containers/home/calendar'
import AddNav from '@/containers/home/addNav'
import { useEffect, useState } from 'react'

interface WebAppInterface {
  getAccountBookList(item: any): any
}

declare const HybridApp: WebAppInterface

export default function HomeContainer() {
  const initDate = new Date()
  const searchDate = initDate.getFullYear() + '-' + (initDate.getMonth() + 1)

  const [accountList, setAccountList] = useState([])

  useEffect(() => {
    getAccountBookList(searchDate)
  }, [])

  const getAccountBookList = async (date: string) => {
    const jsonString = await HybridApp.getAccountBookList(date)
    const list = JSON.parse(jsonString)

    setAccountList(list)
  }

  return (
    <>
      <Title title={'가계부'} />
      <HomeCalendar getAccountList={getAccountBookList} list={accountList} />
      <AddNav date={initDate} />
    </>
  )
}
