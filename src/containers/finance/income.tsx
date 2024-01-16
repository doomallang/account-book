import { convertDate2, convertDate3 } from '@/utils/utils'
import { useState } from 'react'
import CalendarModal from '@/containers/finance/calendarModal'
import EstimateModal from '@/containers/finance/estimateModal'
import DivisionModal from '@/containers/finance/divisionModal'

export default function Income({
  type,
  item,
  setItem,
  estimate,
  division,
  date,
  setDate,
}: {
  type: number
  item: any
  setItem: any
  estimate: any
  division: any
  date: any
  setDate: any
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false)
  const [isDivisionModalOpen, setIsDivisionModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function openEstimateModal() {
    setIsEstimateModalOpen(true)
  }

  function openDivisionModal() {
    setIsDivisionModalOpen(true)
  }

  function handleChange(e: any) {
    const { id, value } = e.target
    setItem({
      ...item,
      [id]: value,
    })
  }

  function modalItemChange(modalItem: any) {
    setItem({
      ...item,
      ...modalItem,
    })
    setIsEstimateModalOpen(false)
    setIsDivisionModalOpen(false)
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
      <EstimateModal
        isModalOpen={isEstimateModalOpen}
        setIsModalOpen={setIsEstimateModalOpen}
        estimate={estimate}
        onClickEvent={modalItemChange}
      />
      <DivisionModal
        isModalOpen={isDivisionModalOpen}
        setIsModalOpen={setIsDivisionModalOpen}
        type={type}
        division={division}
        onClickEvent={modalItemChange}
      />
      <div>
        <fieldset>
          <ul className={type === 0 ? 'income' : type === 1 ? 'expense' : 'transfer'}>
            <li>
              <label htmlFor="username">날짜</label>
              <input
                onClick={openModal}
                type="text"
                id="date"
                value={convertDate2(date)}
                readOnly
              />
            </li>
            <li>
              <label htmlFor="estimate">자산</label>
              <input
                type="text"
                id="estimate"
                value={item.estimateName}
                onClick={openEstimateModal}
                readOnly
              />
            </li>
            <li>
              <label htmlFor="division">분류</label>
              <input
                type="text"
                id="division"
                value={item.divisionName}
                onClick={openDivisionModal}
                readOnly
              />
            </li>
            <li>
              <label htmlFor="price">금액</label>
              <input type="number" id="price" value={item.price} onChange={handleChange} />
            </li>
            <li>
              <label htmlFor="content">내용</label>
              <input type="text" id="content" value={item.content} onChange={handleChange} />
            </li>
          </ul>
        </fieldset>
      </div>
      <style jsx>{`
        .income {
          input:focus {
            border-color: #3eca8f;
          }
        }
        .expense {
          input:focus {
            border-color: #ff6b1c;
          }
        }
        .transfer {
          input:focus {
            border-color: #149fff;
          }
        }
        div {
          margin: auto 0;
        }
        li {
          list-style: none;
          margin-top: 20px;
        }
        a {
          color: #02c;
        }
        label {
          text-align: left;
          padding-bottom: 2px;
        }
        input {
          border: none;
          border-bottom: 1px solid #ddd;
          float: right;
          width: 80%;
          padding-top: 5px;
          text-align: center;
        }
        input:focus {
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
      `}</style>
    </>
  )
}
