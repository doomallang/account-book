export default function Table() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>James</td>
            <td>Matman</td>
          </tr>
        </tbody>
      </table>

      <style jsx>{`
        table {
          border: 1px #a39485 solid;
          font-size: 0.9em;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
          width: 100%;
          border-collapse: collapse;
          border-radius: 5px;
          overflow: hidden;
        }
        thead {
          font-weight: bold;
          color: black;
        }
        td,
        th {
          padding: 1em 0.5em;
          vertical-align: middle;
        }
        tbody {
          overflow-x: auto;
          overflow-y: hidden;
          position: relative;
          white-space: nowrap;
        }
        tr {
          display: inline-block;
          vertical-align: top;
        }
      `}</style>
    </>
  )
}
