'use client'

import Title from '@/components/title'
import BackKey from '@/components/backKey'
import TypeNav from '@/containers/finance/typeNav'
import { useEffect, useState } from 'react'
import Income from '@/containers/finance/income'
import SaveButton from '@/components/saveButton'
import useLink from '@/hooks/useLink'
import { convertDate3, isObjectNullValue } from '@/utils/utils'
import { useSearchParams } from 'next/navigation'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

interface WebAppInterface {
  getEstimateList(): any
  getDivisionList(): any
  addAccountBook(item: any): any
  showToast(item: any): any
}

declare const HybridApp: WebAppInterface

export default function FinanceContainer() {
  const params = useSearchParams()
  const datetime: any = params.get('date')
  const datetime2: Value = new Date(datetime)
  const { onLink } = useLink()

  const [type, setType] = useState(0)
  const [date, setDate] = useState<Value>(datetime2)
  const [item, setItem] = useState({
    type: 0,
    estimateIdx: 0,
    estimateName: '',
    divisionIdx: 0,
    divisionName: '',
    price: 0,
    content: '',
    date: convertDate3(datetime2),
  })

  const [estimate, setEstimate] = useState([])
  const [division, setDivision] = useState([])

  useEffect(() => {
    getEstimateDivisionList()
  }, [])

  const clickType = (type: number) => {
    setType(type)
    setItem({
      ...item,
      type: type,
    })
  }

  const getEstimateDivisionList = async () => {
    const jsonString = await HybridApp.getEstimateList()
    const list = JSON.parse(jsonString)

    const jsonString2 = await HybridApp.getDivisionList()
    const list2 = JSON.parse(jsonString2)

    setItem({
      ...item,
      estimateIdx: list[0].estimateIdx,
      estimateName: list[0].estimateName,
    })
    setEstimate(list)
    setDivision(list2)
  }

  const addAccountBook = async () => {
    if (!isObjectNullValue(item)) {
      const response = await HybridApp.addAccountBook(JSON.stringify(item))
      if (response === 1) {
        onLink('/home')
      }
    } else {
      HybridApp.showToast('빈 값을 모두 채워주세요.')
    }
  }

  return (
    <>
      <BackKey link={'/home'} />
      <Title title={'작성'} />
      <TypeNav type={type} onclick={clickType} />
      <div className={'pt20'}>
        <Income
          type={type}
          item={item}
          setItem={setItem}
          estimate={estimate}
          division={division}
          date={date}
          setDate={setDate}
        />
      </div>
      <div className={'pt20'}>
        <SaveButton onClickFunc={addAccountBook} />
      </div>
    </>
  )
}
