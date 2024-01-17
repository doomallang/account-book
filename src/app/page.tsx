'use client'

import useLink from '@/hooks/useLink'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { isLoadingAtom } from '@/recoil/atoms'

export default function Home() {
  const isLoading = useRecoilValue(isLoadingAtom)
  const { onLink } = useLink()

  useEffect(() => {
    if (isLoading) {
      onLink('/home')
    }
  }, [])
}
