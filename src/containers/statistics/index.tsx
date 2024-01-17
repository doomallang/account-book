'use client'

import { useEffect, useState } from 'react'
import DonutChart from '@/components/donutChart'

interface WebAppInterface {
  getAccountBookList(item: any): any
  getDiaryList(item: any): any
  getAccountBookStatisticsList(item: any): any
}

declare const HybridApp: WebAppInterface

export default function StatisticsContainer() {
  const initDate = new Date()
  const searchDate = initDate.getFullYear() + '-' + (initDate.getMonth() + 1)

  const [accountList, setAccountList] = useState([])
  const [chartData, setChartData] = useState({})
  const [diaryList, setDiaryList] = useState([])

  useEffect(() => {
    getContents()
  }, [])

  const getContents = async () => {
    await getDiaryList(searchDate)
    await getAccountBookStatisticsList(searchDate)
  }

  const getAccountBookStatisticsList = async (date: string) => {
    const jsonString = await HybridApp.getAccountBookStatisticsList(date)
    const list = JSON.parse(jsonString)

    const priceArr: any = []
    const nameArr: any = []
    list.forEach((object: any) => {
      priceArr.push(object.price)
      nameArr.push(object.divisionName)
    })

    setChartData({
      data: priceArr,
      label: nameArr,
    })
    setAccountList(list)
  }

  /*
  const getAccountBookList = async (date: string) => {
    const jsonString = await HybridApp.getAccountBookList(date)
    const list = JSON.parse(jsonString)

    list.forEach((object: any) => {
      object
    })

    setAccountList(list)
  }
   */

  const getDiaryList = async (date: string) => {
    const jsonString = await HybridApp.getDiaryList(date)
    const list = JSON.parse(jsonString)

    setDiaryList(list)
  }
  return (
    <>
      <DonutChart data={chartData} />
    </>
  )
}
