import { useState } from "react";
import styles from "./Form.module.css";
import { Step1 } from "../Step1/Step1";

export const Form = () =>{

const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
      });

const [step, setStep] = useState(1);

const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

    return(
        <div className={styles.container}>
            <div className={styles.sideBar}>

            </div>
            <div className={styles.divForm}>
                <Step1 />
            </div>
        </div>
    )
}