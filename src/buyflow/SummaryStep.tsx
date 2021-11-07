import React from "react";
import { Link } from "react-router-dom";

interface ISummaryStepProps {
  collectedData: {
    email: string;
    age: number;
    firstname: string;
    lastname: string;
  };
}

const SummaryStep1: React.FC<ISummaryStepProps> = (props) => {
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

const SummaryStep2: React.FC<ISummaryStepProps> = (props) => {
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      <div>FirstName: {props.collectedData.firstname}</div>
      <div>LastName: {props.collectedData.lastname}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  );
};

export { SummaryStep1, SummaryStep2 };
