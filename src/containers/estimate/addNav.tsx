'use client'

import IconPlusBox from '@public/svgs/iconPlusBox'
import Link from 'next/link'

export default function AddNav() {
  const addUri = '/estimate/add'

  return (
    <>
      <Link href={addUri} legacyBehavior>
        <div className="dropdown-button">
          <IconPlusBox fill="#3ECA8F" style={{ width: '15vw', height: '15vh' }} />
        </div>
      </Link>

      <style jsx>{`
        .dropdown-button {
          position: absolute;
          bottom: 5%;
          right: 10%;
        }
      `}</style>
    </>
  )
}
