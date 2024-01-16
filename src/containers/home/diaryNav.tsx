import IconMessage from '@public/svgs/iconMessage'

export default function DiaryNav({ onClickFunc }: { onClickFunc: any }) {
  return (
    <>
      <div className="dropdown-button" onClick={onClickFunc}>
        <IconMessage fill="#3ECA8F" style={{ width: '15vw', height: '15vh' }} />
      </div>
      <style jsx>{`
        .dropdown-button {
          border: none;
          background-color: inherit;
          position: absolute;
          bottom: 5%;
          right: 30%;
        }
      `}</style>
    </>
  )
}
