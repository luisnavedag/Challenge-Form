import styles from "./Buttons.module.css";


interface ButtonsProps {
    setStep: React.Dispatch<React.SetStateAction<number>>
    step: number
    formData: {
        name: string;
        email: string;
        phone: string;
        selectedPlan: {
            arcade: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            };
            advanced: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            };
            pro: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            };
        };
        subscriptionType: "Monthly" | "Annual";
        addons: {
            onlineService: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            };
            largerStorage: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            };
            customizableProfile: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            };
        };
    };
}

export const Buttons: React.FC<ButtonsProps> = ({ setStep, step, formData }) => {
    // NEXT STEP
    const nextStep = () => {
        // Validar los campos del formulario antes de pasar al siguiente paso
        if (step === 1) {
            if (!formData.name || !formData.email || !formData.phone) {
                alert("Please fill out all required fields");
                return;
            }
        }
        setStep(step + 1);
    };

    // PREVIOUS STEP
    const prevStep = () => {
        setStep(step - 1);
    };

    // HANDLE STEP
    const handleNextStep = () => {
        nextStep();
    };


    return (
        <div className={`${step === 1 ? styles.containerStep1 : step >= 5 ? styles.noContainer : styles.container}`}>
            {
                step !== 1 && step < 5 ? (
                    <p className={styles.back} onClick={prevStep}>
                        Go Back
                    </p>
                ) : null}
            {step === 4 ? (
                <button className={styles.confirm} onClick={handleNextStep}>
                    Confirm
                </button>
            ) : step <= 4 ? (
                <button className={styles.nextButton} onClick={handleNextStep}>
                    Next Step
                </button>
            ) : null}
        </div>
    )
}