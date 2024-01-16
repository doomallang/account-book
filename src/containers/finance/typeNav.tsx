export default function TypeNav({ type, onclick }: { type: number; onclick: any }) {
  return (
    <>
      <ul>
        <li className={type === 0 ? 'active' : ''}>
          <a href="#" onClick={() => onclick(0)}>
            수입
          </a>
        </li>
        <li className={type === 1 ? 'active' : ''}>
          <a href="#" onClick={() => onclick(1)}>
            지출
          </a>
        </li>
        <li className={type === 2 ? 'active' : ''}>
          <a href="#" onClick={() => onclick(2)}>
            이체
          </a>
        </li>
      </ul>
      <style jsx>{`
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          display: flex;
          justify-content: center;
        }
        li {
          border: 1px solid #dfdfdf;
          border-radius: 15px;
          width: 30%;
          margin: 0 5px 0 5px;
          background: #ebebeb;
        }
        li a {
          display: block;
          color: #878787;
          text-align: center;
          padding: 5px 16px;
          text-decoration: none;
        }
        .active {
          border: 1px solid #3eca8f;
          background: transparent;
        }
        .active a {
          color: #3eca8f;
        }
      `}</style>
    </>
  )
}
