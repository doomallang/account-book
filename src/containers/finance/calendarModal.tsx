import moment from 'moment'
import Calendar from 'react-calendar'
import Modal from '@/config/modal'
import '@/styles/calendar.css'

export default function CalendarModal({
  isModalOpen,
  setIsModalOpen,
  changeDate,
}: {
  isModalOpen: any
  setIsModalOpen: any
  changeDate: any
}) {
  const onChange = (value: any) => {
    changeDate(value)
    setIsModalOpen(false)
  }

  return (
    <>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} classname={'modalStyle'}>
        <Calendar
          onChange={onChange}
          locale={'ko-KR'}
          calendarType={'gregory'}
          next2Label={null}
          prev2Label={null}
          formatDay={(locale, date) => moment(date).format('DD')}
        />
      </Modal>
    </>
  )
}
