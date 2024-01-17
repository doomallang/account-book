'use client'

import Loading from '@/config/loading'
import { useRecoilValue } from 'recoil'
import { isLoadingAtom } from '@/recoil/atoms'

export default function Core({ children }: { children: React.ReactNode }) {
  const isLoading = useRecoilValue(isLoadingAtom)

  return (
    <>
      {isLoading ? <Loading /> : <></>}
      {children}
    </>
  )
}
