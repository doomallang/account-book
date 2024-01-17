'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PATH from '@/constants/path'

// svg
import IconTrophyWhite from '../../public/svgs/iconTrophyWhite'
import IconHomeWhite from '../../public/svgs/iconHomeWhite'
import IconHomeBlack from '../../public/svgs/iconHomeBlack'
import IconTrophyBlack from '../../public/svgs/iconTrophyBlack'
import IconMoneyPocket from '@public/svgs/iconMoneyPocket'
import IconMoneyPocketBlack from '@public/svgs/iconMoneyPocketBlack'

export default function Footer() {
  const pathname = usePathname()

  return (
    <nav className="nav nav--icons">
      <ul>
        <li>
          <Link href={PATH.MENU.home}>
            {pathname === PATH.MENU.home ? (
              <IconHomeBlack style={{ width: '24px', height: '24px' }} />
            ) : (
              <IconHomeWhite style={{ width: '24px', height: '24px' }} />
            )}
          </Link>
        </li>
        <li>
          <Link href={PATH.MENU.hot}>
            {pathname === PATH.MENU.hot ? (
              <IconTrophyBlack style={{ width: '24px', height: '24px' }} />
            ) : (
              <IconTrophyWhite style={{ width: '24px', height: '24px' }} />
            )}
          </Link>
        </li>
        <li>
          <Link href={PATH.MENU.estimate}>
            {pathname === PATH.MENU.estimate ? (
              <IconMoneyPocketBlack style={{ width: '24px', height: '24px' }} />
            ) : (
              <IconMoneyPocket style={{ width: '24px', height: '24px' }} />
            )}
          </Link>
        </li>
        <li>
          <a href="#search">
            <svg className="icon icon-search" viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M21.7 20.3l-3.7-3.7c1.2-1.5 2-3.5 2-5.6 0-5-4-9-9-9s-9 4-9 9c0 5 4 9 9 9 2.1 0 4.1-0.7 5.6-2l3.7 3.7c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4zM4 11c0-3.9 3.1-7 7-7s7 3.1 7 7c0 1.9-0.8 3.7-2 4.9 0 0 0 0 0 0s0 0 0 0c-1.3 1.3-3 2-4.9 2-4 0.1-7.1-3-7.1-6.9z"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  )
}
