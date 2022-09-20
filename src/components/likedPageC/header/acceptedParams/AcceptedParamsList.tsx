import React from 'react';

interface IAcceptedParams {
  acceptedParams: string[] | null;
  chooseStyle: (i: string) => any;
  setAcceptedParams: any;
}

const AcceptedParamsList = ({
  acceptedParams,
  chooseStyle,
  setAcceptedParams,
}: IAcceptedParams) => {
  const returnToChoose = (i: string) => {
    setAcceptedParams((prev: string[]) => prev.filter((elem) => elem !== i));
  };

  return (
    <div className="flex flex-wrap w-11/12 mx-auto justify-center">
      {acceptedParams &&
        acceptedParams.map((i: string) => (
          <div onClick={() => returnToChoose(i)} className={chooseStyle(i)} key={i}>
            {i}
          </div>
        ))}
    </div>
  );
};

export default AcceptedParamsList;
