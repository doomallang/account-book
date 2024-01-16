'use client'

import BackKey from '@/components/backKey'
import Title from '@/components/title'
import Content from '@/containers/diary/content'
import SaveButton from '@/components/saveButton'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { convertDate3, isObjectNullValue } from '@/utils/utils'
import useLink from '@/hooks/useLink'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

interface WebAppInterface {
  getEmotionList(): any
  getDiary(item: any): any
  addDiary(item: any): any
  modifyDiary(item: any): any
  showToast(item: any): any
}

declare const HybridApp: WebAppInterface

export default function DiaryContainer() {
  const params = useSearchParams()
  const datetime: any = params.get('date')
  const datetime2: Value = new Date(datetime)
  const { onLink } = useLink()

  const [date, setDate] = useState<Value>(datetime2)
  const [emotionList, setEmotionList] = useState([])
  const [item, setItem] = useState({
    diaryIdx: 0,
    emotionIdx: 0,
    diaryTitle: '',
    diaryContent: '',
    date: convertDate3(date),
  })

  useEffect(() => {
    getContent()
  }, [])

  const getContent = async () => {
    await getEmotionList()
    await getDiary()
  }
  const getEmotionList = async () => {
    const jsonString = await HybridApp.getEmotionList()
    const list = JSON.parse(jsonString)

    setEmotionList(list)
    setItem({
      ...item,
      emotionIdx: list[0].emotionIdx,
    })
  }

  const getDiary = async () => {
    const jsonString = await HybridApp.getDiary(item.date)
    const list = JSON.parse(jsonString)

    if (list[0] !== undefined) {
      setItem(list[0])
    }
  }

  const addDiary = async () => {
    let response = 0
    if (!isObjectNullValue(item)) {
      if (item.diaryIdx === 0) {
        response = await HybridApp.addDiary(JSON.stringify(item))
      } else {
        response = await HybridApp.modifyDiary(JSON.stringify(item))
      }
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
      <Content
        item={item}
        setItem={setItem}
        emotionList={emotionList}
        date={date}
        setDate={setDate}
      />
      <div className={'pt20'}>
        <SaveButton onClickFunc={addDiary} />
      </div>
    </>
  )
}
