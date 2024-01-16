'use client'

import { useEffect, useState } from 'react'
import EstimateTypeModal from '@/containers/estimate/add/estimateTypeModal'
import Content from '@/containers/estimate/add/content'
import SaveButton from '@/components/saveButton'
import { isObjectNullValue } from '@/utils/utils'
import useLink from '@/hooks/useLink'

interface WebAppInterface {
  getEstimateTypeList(): any
  addEstimate(item: any): any
  showToast(item: any): any
}

declare const HybridApp: WebAppInterface

export default function EstimateAddContainer() {
  const { onLink } = useLink()

  const [isEstimateTypeModalOpen, setIsEstimateTypeModalOpen] = useState(false)
  const [estimateType, setEstimateType] = useState([])
  const [item, setItem] = useState({
    typeIdx: 0,
    estimateTypeName: '',
    estimateName: '',
    price: 0,
    content: '',
  })

  useEffect(() => {
    getContents()
  }, [])

  const getContents = async () => {
    const jsonString = await HybridApp.getEstimateTypeList()
    const list = JSON.parse(jsonString)

    setEstimateType(list)
    setItem({
      ...item,
      typeIdx: list[0].typeIdx,
      estimateTypeName: list[0].estimateTypeName,
    })
  }

  const estimateTypeModalOpen = () => {
    setIsEstimateTypeModalOpen(true)
  }
  const modalItemChange = (typeIdx: any, estimateTypeName: any) => {
    setItem({
      ...item,
      typeIdx: typeIdx,
      estimateTypeName: estimateTypeName,
    })
    setIsEstimateTypeModalOpen(false)
  }

  const save = async () => {
    if (!isObjectNullValue(item)) {
      const response = await HybridApp.addEstimate(JSON.stringify(item))
      if (response === 1) {
        onLink('/estimate')
      }
    } else {
      HybridApp.showToast('빈 값을 모두 채워주세요.')
    }
  }

  return (
    <>
      <EstimateTypeModal
        isModalOpen={isEstimateTypeModalOpen}
        setIsModalOpen={setIsEstimateTypeModalOpen}
        estimateType={estimateType}
        onClickEvent={modalItemChange}
      />
      <Content modalOpen={estimateTypeModalOpen} item={item} setItem={setItem} />
      <div className={'pt20'}>
        <SaveButton onClickFunc={save} />
      </div>
    </>
  )
}
