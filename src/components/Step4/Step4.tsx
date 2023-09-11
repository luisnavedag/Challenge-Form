import styles from "./Step4.module.css"

interface Step4Props {
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
            },
            advanced: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            },
            pro: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            },
        },
        subscriptionType: "Monthly" | "Annual";
        addons: {
            onlineService: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            },
            largerStorage: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            },
            customizableProfile: {
                name: string;
                monthlyPrice: number;
                annualPrice: number;
                selected: boolean;
            };
        };
    };
    setFormData: React.Dispatch<
        React.SetStateAction<{
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
        }>
    >;
    nextStep: () => void;
    prevStep: () => void;
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export const Step4: React.FC<Step4Props> = ({ formData, setFormData, prevStep, nextStep, setStep }) => {

    const handlePlanChange = () => {
        setStep(2)
    };

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.title}>Finishing up</h2>
                <p className={styles.titleDesc}>
                    Double-check everything looks OK before confirming.
                </p>
            </div>

            {/* SUMMARY */}
            <div className={styles.summary}>
                <div className={styles.sumContainer}>
                    <div className={styles.divUp}>
                        <div className="w-40 border h-full pt-2 pl-2">
                            <p className="text-blue-950 text-sm font-extrabold text-left">{Object.values(formData.selectedPlan).find((plan) => plan.selected)?.name} (
                                {formData.subscriptionType === "Monthly" ? "Monthly" : "Annual"})
                            </p>
                            <p onClick={handlePlanChange} className={styles.changeLink}>
                                Change
                            </p>
                        </div>
                        <div className="w-20 border h-full">
                            <p className="text-blue-950 text-sm font-extrabold">{Object.values(formData.selectedPlan).find((plan) => plan.selected)?.name} (
                                {formData.subscriptionType === "Monthly" ? "Monthly" : "Annual"})
                            </p>
                        </div>
                    </div>
                    <hr className="border" />
                    <div className={styles.divDown}>

                    </div>
                </div>
                <div className={styles.total}>

                </div>
            </div>

            {/* NEXT AND BACK BUTTONS */}
            <div className={styles.divButtons}>
                <p className={styles.back} onClick={prevStep}>
                    Go Back
                </p>
                <button className={styles.nextButton} onClick={nextStep}>
                    Next Step
                </button>
            </div>
        </div>
    );
}
