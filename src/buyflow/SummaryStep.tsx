import React from "react";
import { Link } from "react-router-dom";

interface SummaryStepProps1 {
  collectedData: {
    email: string;
    age: number;
  };
}

interface SummaryStepProps2 {
  collectedData: {
    email: string;
    age: number;
    FirstName: string;
    LastName: string;
  };
}

const SummaryStep1: React.FC<SummaryStepProps1> = (props) => {
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  );
};

const SummaryStep2: React.FC<SummaryStepProps2> = (props) => {
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      <div>FirstName: {props.collectedData.FirstName}</div>
      <div>LastName: {props.collectedData.LastName}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  );
};

export { SummaryStep1, SummaryStep2 };
