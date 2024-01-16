import React from 'react'

export default function BorderBottom() {
  return (
    <>
      <div className={'border-bottom'}></div>
      <style jsx>{`
        .border-bottom {
          width: 100%;
          border-bottom: 1px solid rgba(200, 200, 200, 0.5);
        }
      `}</style>
    </>
  )
}
