import Modal from '@/config/modal'

export default function EstimateTypeModal({
  isModalOpen,
  setIsModalOpen,
  estimateType,
  onClickEvent,
}: {
  isModalOpen: any
  setIsModalOpen: any
  estimateType: any
  onClickEvent: any
}) {
  return (
    <>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} classname={'modalStyle2'}>
        <div className={'modal-div'}>
          {estimateType &&
            estimateType.map((item: any, index: number) => {
              return (
                <div
                  className={index % 3 === 1 ? 'border item-div' : 'item-div'}
                  key={item.typeIdx}
                  onClick={() => onClickEvent(item.typeIdx, item.estimateTypeName)}
                >
                  {item.estimateTypeName}
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
