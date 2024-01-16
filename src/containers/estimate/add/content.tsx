export default function Content({
  modalOpen,
  item,
  setItem,
}: {
  modalOpen: any
  item: any
  setItem: any
}) {
  function handleChange(e: any) {
    const { id, value } = e.target
    setItem({
      ...item,
      [id]: value,
    })
  }

  return (
    <>
      <fieldset>
        <ul>
          <li>
            <label>자산타입</label>
            <input type={'text'} value={item.estimateTypeName} readOnly onClick={modalOpen} />
          </li>
          <li>
            <label>자산이름</label>
            <input
              type={'text'}
              id="estimateName"
              value={item.estimateName}
              onChange={handleChange}
            />
          </li>
          <li>
            <label>금액</label>
            <input type={'number'} id="price" value={item.price} onChange={handleChange} />
          </li>
          <li>
            <label>내용</label>
            <input type={'text'} id="content" value={item.content} onChange={handleChange} />
          </li>
        </ul>
      </fieldset>
      <style jsx>{`
        li {
          list-style: none;
          margin-top: 20px;
        }
        label {
          text-align: left;
          padding-bottom: 2px;
        }
        input {
          border: none;
          border-bottom: 1px solid #ddd;
          float: right;
          width: 70%;
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
        ul {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  )
}
