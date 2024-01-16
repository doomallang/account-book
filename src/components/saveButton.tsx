export default function SaveButton({ onClickFunc }: { onClickFunc: any }) {
  return (
    <>
      <button className="save-button" onClick={onClickFunc}>
        저장
      </button>

      <style jsx>{`
        .save-button {
          width: 100%;
          border-radius: 10px;
          color: #3eca8f;
          border: 2px solid #3eca8f;
          background-color: white;
          padding: 10px;
          font-weight: 500;
          font-size: 16px;
        }
      `}</style>
    </>
  )
}
