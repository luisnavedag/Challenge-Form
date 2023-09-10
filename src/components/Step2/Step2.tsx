import styles from "./Step2.module.css"

interface Step2Props {
    formData: {
        name: string;
        email: string;
        phone: string;
    };
    setFormData: React.Dispatch<React.SetStateAction<{
        name: string;
        email: string;
        phone: string;
    }>>;
    nextStep: () => void;
    prevStep: () => void;
}


export const Step2: React.FC<Step2Props> = ({ formData, setFormData, nextStep, prevStep }) => {
    

    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.title}>Select your plan</h2>
                <p className={styles.titleDesc}>You have the option of monthly or yearly billing.</p>
            </div>
            <div className={styles.divPlans}>
                
            </div>
            <div className={styles.divButtons}>
                <p className={styles.back} onClick={prevStep}>Go Back</p>
                <button 
                className={styles.nextButton}
                >
                    Next Step
                </button>
            </div>
        </div>
    )
}