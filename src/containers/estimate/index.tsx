'use client'

import Title from '@/components/title'
import { useEffect, useState } from 'react'
import Contents from '@/containers/estimate/contents'
import AddNav from '@/containers/estimate/addNav'

interface WebAppInterface {
  getEstimateList(): any
  getEstimateTypeList(): any
  getAccountBookList(item: any): any
}

declare const HybridApp: WebAppInterface

export default function EstimateContainer() {
  const [estimateList, setEstimateList] = useState([])
  const [estimateTypeList, setEstimateTypeList] = useState([])
  const [estimateInfoList, setEstimateInfoList] = useState({})
  const [estimateTypeInfoList, setEstimateTypeInfoList] = useState({})

  useEffect(() => {
    getContents()
  }, [])

  const getContents = async () => {
    const jsonString = await HybridApp.getEstimateList()
    const list = JSON.parse(jsonString)

    const jsonString2 = await HybridApp.getEstimateTypeList()
    const list2 = JSON.parse(jsonString2)

    const jsonString3 = await HybridApp.getAccountBookList('')
    const list3 = JSON.parse(jsonString3)

    const temp: any = {}
    list3.forEach((item: any) => {
      if (temp[item.estimateIdx] === undefined) {
        if (item.type === 0) {
          temp[item.estimateIdx] = item.price
        } else {
          temp[item.estimateIdx] = -item.price
        }
      } else {
        if (item.type === 0) {
          temp[item.estimateIdx] += item.price
        } else {
          temp[item.estimateIdx] -= item.price
        }
      }
    })

    const temp2: any = {}
    for (const key in temp) {
      list.forEach((item: any) => {
        if (Number(item.estimateIdx) === Number(key)) {
          if (temp2[item.typeIdx] === undefined) {
            temp2[item.typeIdx] = Number(temp[key])
          } else {
            temp2[item.typeIdx] += Number(temp[key])
          }
        }
      })
    }

    setEstimateTypeInfoList(temp2)
    setEstimateInfoList(temp)
    setEstimateList(list)
    setEstimateTypeList(list2)
  }

  return (
    <>
      <Title title={'자산'} />
      <Contents
        estimateList={estimateList}
        estimateTypeList={estimateTypeList}
        estimateInfoList={estimateInfoList}
        estimateTypeInfoList={estimateTypeInfoList}
      />
      <AddNav />
    </>
  )
}
