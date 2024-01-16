'use client'

import IconPlusBox from '@public/svgs/iconPlusBox'
import IconDollar from '@public/svgs/iconDollar'
import IconPalette from '@public/svgs/iconPalette'
import Link from 'next/link'

export default function AddNav({ date }: { date: Date }) {
  const financeUri = '/finance?date=' + date
  const diaryUri = '/diary?date=' + date

  return (
    <>
      <div className="dropdown-button">
        <IconPlusBox fill="#3ECA8F" style={{ width: '15vw', height: '15vh' }} />
        <div className="dropdown-content">
          <div className="dropdown-content-flex">
            <Link href={financeUri} legacyBehavior>
              <a className="dropdown-link">
                <IconDollar fill="#3ECA8F" style={{ width: '24px', height: '24px' }} />
                <div>가계부</div>
              </a>
            </Link>
            <Link href={diaryUri} legacyBehavior>
              <a className="dropdown-link">
                <IconPalette fill="#3ECA8F" style={{ width: '24px', height: '24px' }} />
                <div>일기</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .dropdown-button {
          position: absolute;
          bottom: 5%;
          right: 10%;
        }
        .dropdown-content {
          position: absolute;
          display: none;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          border-radius: 25px;
          z-index: 1;
        }
        .dropdown-link {
          color: black;
          padding: 20px 16px;
          text-decoration: none;
          text-align: center;
        }
        .dropdown-content a:hover {
          background-color: #f1f1f1;
        }
        .dropdown-button:hover .dropdown-content {
          display: block;
          bottom: 80%;
          right: -30%;
        }
        .dropdown-content-flex {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  )
}
