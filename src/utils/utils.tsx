const convertDate = (date: any) => {
  return (
    date.getFullYear() +
    '년 ' +
    (date.getMonth() + 1) +
    '월 ' +
    date.getDate() +
    '일 ' +
    '월화수목금토일'.charAt(date.getUTCDay()) +
    '요일'
  )
}

const convertDate2 = (date: any) => {
  return (
    date.getFullYear() +
    '. ' +
    (date.getMonth() + 1) +
    '. ' +
    date.getDate() +
    ' (' +
    '월화수목금토일'.charAt(date.getUTCDay()) +
    ')'
  )
}

const convertDate3 = (date: any) => {
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}

const isObjectNullValue = (object: any) =>
  !Object.values(object).every((x) => x !== null && x !== '')

export { convertDate, convertDate2, convertDate3, isObjectNullValue }
