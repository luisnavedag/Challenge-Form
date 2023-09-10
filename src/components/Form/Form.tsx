import { useState } from "react";
import styles from "./Form.module.css";
import { Step1 } from "../Step1/Step1";
import { Step2 } from "../Step2/Step2";
import { Step3 } from "../Step3/Step3";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export const Form = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: ""
  });

  const [step, setStep] = useState<number>(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} prevStep={prevStep} nextStep={nextStep} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>

      </div>
      <div className={styles.divForm}>
        {renderStep()}
      </div>
    </div>
  )
}