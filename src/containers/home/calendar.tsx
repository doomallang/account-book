'use client'

import Calendar from 'react-calendar'
import '@/styles/calendar.css'
import { useState } from 'react'
import moment from 'moment'
import HomeModal from '@/containers/home/modal'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function HomeCalendar({
  getAccountList,
  list,
  getDiaryList,
  diaryList,
}: {
  getAccountList: any
  list: any
  getDiaryList: any
  diaryList: any
}) {
  const [date, setDate] = useState<Value>(new Date())
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onChange = (value: any) => {
    setDate(value)
    setIsModalOpen(true)
  }

  const onMonthChange = (value: any) => {
    const searchDate =
      value.activeStartDate.getFullYear() + '-' + (value.activeStartDate.getMonth() + 1)
    getAccountList(searchDate)
    getDiaryList(searchDate)
  }

  const setContent = ({ date }: any) => {
    let income: number = 0
    let expense: number = 0
    let isDiary: boolean = false
    const contents: any[] = []
    list.forEach(function (obj: any) {
      const datetime = moment(obj.date).format('YYYY-MM-DD')
      if (datetime === moment(date).format('YYYY-MM-DD')) {
        if (obj.type === 0) {
          income = income + obj.price
        } else if (obj.type === 1) {
          expense = expense + obj.price
        }
      }
    })

    diaryList.forEach(function (obj: any) {
      const datetime = moment(obj.date).format('YYYY-MM-DD')
      if (datetime === moment(date).format('YYYY-MM-DD')) {
        isDiary = true
      }
    })

    if (isDiary) {
      contents.push(<div className={'tiles-content'}>📔</div>)
    }

    if (income !== 0) {
      contents.push(<div className={'color-red tiles-content'}>{income.toLocaleString()}</div>)
    }
    if (expense !== 0) {
      contents.push(<div className={'color-blue tiles-content'}>{expense.toLocaleString()}</div>)
    }

    return <div>{contents}</div>
  }

  return (
    <>
      <HomeModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} date={date} />
      <Calendar
        onChange={(value) => onChange(value)}
        value={date}
        locale={'ko-KR'}
        calendarType={'gregory'}
        next2Label={null}
        prev2Label={null}
        tileContent={setContent}
        onActiveStartDateChange={(value) => onMonthChange(value)}
        formatDay={(locale, date) => moment(date).format('DD')}
      />
    </>
  )
}
