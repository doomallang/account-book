import Modal from '../../config/modal'

export default function DivisionModal({
  isModalOpen,
  setIsModalOpen,
  division,
  onClickEvent,
  type,
}: {
  isModalOpen: any
  setIsModalOpen: any
  division: any
  onClickEvent: any
  type: any
}) {
  return (
    <>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} classname={'modalStyle2'}>
        <div className={'modal-div'}>
          {division &&
            division.map((item: any, index: number) => {
              if (item.divisionType === type) {
                return (
                  <div
                    className={index % 3 === 1 ? 'border item-div' : 'item-div'}
                    key={item.divisionIdx}
                    onClick={() =>
                      onClickEvent({
                        divisionIdx: item.divisionIdx,
                        divisionName: item.divisionName,
                      })
                    }
                  >
                    {item.divisionName}
                  </div>
                )
              }
            })}
        </div>
      </Modal>
      <style jsx>{`
        .item-div {
          float: left;
          height: 5vh;
          line-height: 5vh;
          width: 33%;
          text-align: center;
          border-bottom: 1px solid #3eca8f;
          box-sizing: border-box;
        }
        .border {
          border-left: 1px solid #3eca8f;
          border-right: 1px solid #3eca8f;
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
