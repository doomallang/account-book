import IconBack from '@public/svgs/iconBack'
import Link from 'next/link'

export default function BackKey({ link }: { link: string }) {
  return (
    <div className={'back-button'}>
      <Link href={link}>
        <IconBack style={{ width: '24px', height: '24px' }} />
      </Link>
      <style jsx>{`
        .back-button {
          position: absolute;
        }
      `}</style>
    </div>
  )
}
