import BorderBottom from '@/components/borderBottom'
import React from 'react'

export default function DiaryModal({ diary }: { diary: any }) {
  return (
    <>
      {diary === undefined ? (
        <div className={'card-body'}>오늘 작성한 일기가 없습니다.</div>
      ) : (
        <div className="card-body">
          <div className="card-body-header">
            <span>{diary.diaryTitle !== undefined ? diary.diaryTitle : <></>}</span>
            <span className="card-body-hashtag">
              {diary.emoticon !== undefined ? diary.emoticon : <></>}
            </span>
          </div>
          <p className="card-body-description">
            {diary.diaryContent !== undefined ? diary.diaryContent : <></>}
          </p>
        </div>
      )}
      <BorderBottom />
      <style jsx>
        {`
          .card-body {
            text-align: center;
            margin: auto;
            padding-bottom: 10px;
            padding-top: 10px;
          }
          .card-body-header {
            line-height: 25px;
            margin: 10px 20px 0px 20px;
            font-size: 20px;
            font-weight: 800;
          }
          .card-body-hashtag {
            padding-left: 10px;
            color: #2478ff;
          }
          .card-body-description {
            text-align: left;
            font-size: 14px;
            margin: 10px 20px 0px 20px;
          }
        `}
      </style>
    </>
  )
}
