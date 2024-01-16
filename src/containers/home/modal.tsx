'use client'

import { convertDate } from '@/utils/utils'
import Modal from '@/config/modal'
import React, { useEffect, useState } from 'react'
import BorderBottom from '@/components/borderBottom'
import AddNav from '@/containers/home/addNav'
import DiaryNav from '@/containers/home/diaryNav'
import DiaryModal from '@/containers/home/diaryModal'

interface WebAppInterface {
  getDiary(item: any): any
  getAccountBookList(item: any): any
}

declare const HybridApp: WebAppInterface

export default function HomeModal({
  isModalOpen,
  setIsModalOpen,
  date,
}: {
  isModalOpen: any
  setIsModalOpen: any
  date: any
}) {
  const [contents, setContents] = useState([])
  const [diary, setDiary] = useState({
    diaryIdx: 0,
    emotionIdx: 0,
    diaryTitle: '',
    diaryContent: '',
    date: '',
    emotionName: '',
    emoticon: '',
  })
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const datetime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  const [isDiaryModalOpen, setIsDiaryModalOpen] = useState(true)

  useEffect(() => {
    getContents()
  }, [date])

  const getContents = async () => {
    await getAccountBookList()
    await getDiary()
  }
  const getAccountBookList = async () => {
    const jsonString = await HybridApp.getAccountBookList(datetime)
    const list = JSON.parse(jsonString)

    let incomePrice = 0
    let expensePrice = 0
    list.forEach(function (obj: any) {
      if (obj.type === 0) {
        incomePrice += obj.price
      } else if (obj.type === 1) {
        expensePrice += obj.price
      }
    })

    setContents(list)

    setIncome(incomePrice)
    setExpense(expensePrice)
  }

  const getDiary = async () => {
    const jsonString = await HybridApp.getDiary(datetime)
    const list = JSON.parse(jsonString)
    setDiary(list[0])
  }

  const openDiaryModal = () => {
    document.getElementById('modal-container')!.scrollIntoView(true)
    setIsDiaryModalOpen(!isDiaryModalOpen)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    if (!isDiaryModalOpen) {
      setIsDiaryModalOpen(true)
    }
  }

  return (
    <>
      <Modal open={isModalOpen} onClose={closeModal} classname={'modalStyle'}>
        <div id="modal-container" className={'modal-container'}>
          <div className={'modal-title'}>
            <span>{convertDate(date)}</span>
            <div className={'modal-title-price'}>
              <span className={'color-blue'}>{expense.toLocaleString()}원</span>
              <span className={'pl20 color-red'}>{income.toLocaleString()}원</span>
            </div>
          </div>
        </div>
        <BorderBottom />
        {isDiaryModalOpen && <DiaryModal diary={diary} />}
        <div>
          <table>
            <tbody>
              {contents &&
                contents.map((content: any, index: number) => (
                  <tr key={index} className={'table-border-bottom'}>
                    <td>{content.divisionName}</td>
                    <td>
                      <div className={'item-title'}>{content.content}</div>
                      <div className={'color-gray'}>{content.estimateName}</div>
                    </td>
                    <td
                      className={
                        content.type === 0 ? 'color-red item-title' : 'color-blue item-title'
                      }
                    >
                      {content.price.toLocaleString()}원
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <DiaryNav onClickFunc={openDiaryModal} />
        <AddNav date={date} />
      </Modal>
      <style jsx>{`
        .modal-container {
          padding: 20px;
        }
        .modal-title {
          font-size: 15px;
        }
        .modal-title-price {
          float: right;
        }
        .item-title {
          font-size: 14px;
        }
        .table-border-bottom {
          border-bottom: 1px solid rgba(220, 220, 220, 0.3);
        }
      `}</style>
    </>
  )
}
