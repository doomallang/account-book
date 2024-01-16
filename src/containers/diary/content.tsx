import { useEffect, useState } from 'react'
import { convertDate2, convertDate3 } from '@/utils/utils'
import CalendarModal from '@/containers/finance/calendarModal'

export default function Content({
  emotionList,
  item,
  setItem,
  date,
  setDate,
}: {
  emotionList: any
  item: any
  setItem: any
  date: any
  setDate: any
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function handleChange(e: any) {
    const { id, value } = e.target
    setItem({
      ...item,
      [id]: value,
    })
  }

  const changeDate = (value: any) => {
    setDate(value)
    setItem({
      ...item,
      date: convertDate3(value),
    })
  }

  return (
    <>
      <CalendarModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        changeDate={changeDate}
      />
      <div>
        <fieldset>
          <ul>
            <li>
              <label htmlFor="username">날짜</label>
              <input
                onClick={openModal}
                type="text"
                id="username"
                value={convertDate2(date)}
                readOnly
              />
            </li>
            <li>
              <label htmlFor="diaryTitle">제목</label>
              <input type="text" id="diaryTitle" value={item.diaryTitle} onChange={handleChange} />
            </li>
            <li>
              <label htmlFor="emotion">기분</label>
              <select id={'emotionIdx'} value={item.emotionIdx} onChange={handleChange}>
                {emotionList &&
                  emotionList.map((ite: any) => (
                    <option key={ite.emotionIdx} value={ite.emotionIdx}>
                      {ite.emoticon}
                      {ite.emotionName}
                    </option>
                  ))}
              </select>
            </li>
            <li>
              <label htmlFor="diaryContent">내용</label>
            </li>
            <textarea
              id="diaryContent"
              value={item.diaryContent}
              onChange={handleChange}
            ></textarea>
          </ul>
        </fieldset>
      </div>
      <style jsx>{`
        div {
          margin: auto 0;
        }
        a {
          color: #02c;
        }
        label {
          text-align: left;
          padding-bottom: 2px;
        }
        li {
          list-style: none;
          margin-top: 20px;
        }
        textarea {
          margin-top: 10px;
          width: 100%;
          min-height: 200px;
        }
        textarea:focus {
          border-color: #3eca8f;
          outline: none;
        }
        input {
          border: none;
          border-bottom: 1px solid #ddd;
          float: right;
          width: 80%;
          &:hover {
            border-bottom: 1px solid #3eca8f;
          }
        }
        input:focus {
          border-color: #3eca8f;
          outline: none;
        }
        fieldset {
          margin: 0;
          background-color: #fff;
          border: none;
          border-radius: 5px;
        }
        legend {
          padding: 5px;
          background-color: #fff;
          border-radius: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        select {
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          font-family: 'Noto Sansf KR', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #444;
          background-color: #fff;
          padding: 0.6em 1.4em 0.5em 0.8em;
          border: none;
          margin-left: 35px;
        }
        select:hover {
          border-color: #888;
        }
        select:focus {
          border-color: #aaa;
          box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
          box-shadow: 0 0 0 3px -moz-mac-focusring;
          color: #222;
          outline: none;
        }
        select:disabled {
          opacity: 0.5;
        }
      `}</style>
    </>
  )
}
