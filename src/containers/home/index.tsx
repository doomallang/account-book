'use client'

import Title from '@/components/title'
import HomeCalendar from '@/containers/home/calendar'
import AddNav from '@/containers/home/addNav'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { isLoadingAtom } from '@/recoil/atoms'
import moment from 'moment/moment'

interface WebAppInterface {
  getAccountBookList(item: any): any
  getDiaryList(item: any): any
}

declare const HybridApp: WebAppInterface

export default function HomeContainer() {
  const [loadingAtom, setLoadingAtom] = useRecoilState(isLoadingAtom)

  const initDate = new Date()
  const searchDate = initDate.getFullYear() + '-' + (initDate.getMonth() + 1)

  const [accountList, setAccountList] = useState([])
  const [diaryList, setDiaryList] = useState([])

  useEffect(() => {
    getContents()
  }, [])

  const getContents = async () => {
    await getDiaryList(searchDate)
    await getAccountBookList(searchDate)

    await setTimeout(function () {
      setLoadingAtom(false)
    }, 2000)
  }

  const getAccountBookList = async (date: string) => {
    const jsonString = await HybridApp.getAccountBookList(date)
    const list = JSON.parse(jsonString)

    setAccountList(list)
  }

  const getDiaryList = async (date: string) => {
    const jsonString = await HybridApp.getDiaryList(date)
    const list = JSON.parse(jsonString)

    setDiaryList(list)
  }

  return (
    <>
      <Title title={'가계부'} />
      <HomeCalendar
        getAccountList={getAccountBookList}
        list={accountList}
        getDiaryList={getDiaryList}
        diaryList={diaryList}
      />
      <AddNav date={initDate} />
    </>
  )
}
