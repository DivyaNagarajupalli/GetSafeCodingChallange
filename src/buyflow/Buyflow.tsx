import React, { useState } from "react";
import AgeStep from "./AgeStep";
import EmailStep from "./EmailStep";
import FirstName from "./FirstnameStep";
import LastName from "./LastnameStep";
import { SummaryStep1, SummaryStep2 } from "./SummaryStep";

interface IBuyflowProps {
  productId: ProductIds;
}

export enum ProductIds {
  devIns = "dev_ins",
  desIns = "des_ins"
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: "Developer Insurance",
  [ProductIds.desIns]: "Designer Insurance"
};

const Buyflow1: React.FC<IBuyflowProps> = (props) => {
  const [currentStep, setStep] = useState("email");
  const [collectedData, setCollectedData] = useState({
    email: "",
    age: 0,
    firstname: "",
    lastname: ""
  });

  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    setCollectedData({ ...collectedData, [field]: value });
    setStep(nextStep);
  };

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === "email" && <EmailStep cb={getStepCallback("age")} />) ||
        (currentStep === "age" && (
          <AgeStep cb={getStepCallback("summary")} />
        )) ||
        (currentStep === "summary" && (
          <SummaryStep1 collectedData={collectedData} />
        ))}
    </>
  );
};

const Buyflow2: React.FC<IBuyflowProps> = (props) => {
  const [currentStep, setStep] = useState("email");
  const [collectedData, setCollectedData] = useState({
    email: "",
    age: 0,
    firstname: "",
    lastname: ""
  });
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    setCollectedData({ ...collectedData, [field]: value });
    setStep(nextStep);
  };

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {(currentStep === "email" && <EmailStep cb={getStepCallback("age")} />) ||
        (currentStep === "age" && (
          <AgeStep cb={getStepCallback("FirstName")} />
        )) ||
        (currentStep === "FirstName" && (
          <FirstName cb={getStepCallback("LastName")} />
        )) ||
        (currentStep === "LastName" && (
          <LastName cb={getStepCallback("summary")} />
        )) ||
        (currentStep === "summary" && (
          <SummaryStep2 collectedData={collectedData} />
        ))}
    </>
  );
};

export { Buyflow1, Buyflow2 };
