export default function Contents({
  estimateList,
  estimateTypeList,
  estimateInfoList,
  estimateTypeInfoList,
}: {
  estimateList: any
  estimateTypeList: any
  estimateInfoList: any
  estimateTypeInfoList: any
}) {
  return (
    <>
      <div>
        {estimateTypeList &&
          estimateTypeList.map((item: any) => {
            return (
              <div key={item.typeIdx} className={'content-div'}>
                <div className={'sub-title-tab'}>
                  <span>{item.estimateTypeName}</span>
                  {estimateTypeInfoList[item.typeIdx] !== undefined ? (
                    Number(estimateTypeInfoList[item.typeIdx]) > 0 ? (
                      <span className={'color-red sub-title-span'}>
                        {Number(estimateTypeInfoList[item.typeIdx]).toLocaleString()}원
                      </span>
                    ) : (
                      <span className={'color-blue sub-title-span'}>
                        {Number(estimateTypeInfoList[item.typeIdx]).toLocaleString()}원
                      </span>
                    )
                  ) : (
                    <span className={'sub-title-span'}>0원</span>
                  )}
                </div>
                {estimateList &&
                  estimateList.map((item2: any) => {
                    if (item.typeIdx === item2.typeIdx) {
                      return (
                        <div key={item2.estimateIdx} className={'sub-content-div'}>
                          <span>{item2.estimateName}</span>
                          <span
                            className={
                              Number(estimateInfoList[item2.estimateIdx]) > 0
                                ? 'color-red sub-content-span'
                                : estimateInfoList[item2.estimateIdx] === undefined
                                  ? 'sub-content-span'
                                  : 'color-blue sub-content-span'
                            }
                          >
                            {estimateInfoList[item2.estimateIdx]
                              ? Number(estimateInfoList[item2.estimateIdx]).toLocaleString()
                              : 0}
                            원
                          </span>
                        </div>
                      )
                    }
                  })}
              </div>
            )
          })}
      </div>
      <style jsx>{`
        .content-div {
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          padding-bottom: 10px;
          padding-top: 10px;
        }
        .sub-title-tab {
          font-weight: 800;
          width: 100%;
        }
        .sub-title-span {
          float: right;
        }
        .sub-content-span {
          float: right;
        }
        .sub-content-div {
          padding-top: 10px;
          font-size: 14px;
        }
      `}</style>
    </>
  )
}
