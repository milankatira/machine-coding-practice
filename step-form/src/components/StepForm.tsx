import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import type{ FormData } from "../types";

const StepForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: "",
  });

  const next = () => {
    if (step < 3) setStep(step + 1);
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = () => {
    console.log("Final data:", formData);
    alert(`Form submitted!\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 16 }}>
      {step === 1 && <StepOne data={formData} onChange={handleChange} />}
      {step === 2 && <StepTwo data={formData} onChange={handleChange} />}
      {step === 3 && <StepThree data={formData} onChange={handleChange} />}

      <div style={{ marginTop: 16 }}>
        {step > 1 && <button onClick={back}>Back</button>}
        {step < 3 && <button onClick={next} style={{ marginLeft: 8 }}>Next</button>}
        {step === 3 && <button onClick={handleSubmit} style={{ marginLeft: 8 }}>Submit</button>}
      </div>
    </div>
  );
};

export default StepForm;
