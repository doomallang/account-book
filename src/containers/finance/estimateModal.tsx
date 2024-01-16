import Modal from '../../config/modal'

export default function EstimateModal({
  isModalOpen,
  setIsModalOpen,
  estimate,
  onClickEvent,
}: {
  isModalOpen: any
  setIsModalOpen: any
  estimate: any
  onClickEvent: any
}) {
  return (
    <>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} classname={'modalStyle2'}>
        <div className={'modal-div'}>
          {estimate &&
            estimate.map((item: any, index: number) => {
              return (
                <div
                  className={index % 3 === 1 ? 'border item-div' : 'item-div'}
                  key={item.estimateIdx}
                  onClick={() =>
                    onClickEvent({
                      estimateIdx: item.estimateIdx,
                      estimateName: item.estimateName,
                    })
                  }
                >
                  {item.estimateName}
                </div>
              )
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
