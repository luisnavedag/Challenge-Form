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

    // CAMBIAR EL PLAN
    const handlePlanChange = () => {
        setStep(2)
    };

    //CALCULANDO PRECIO TOTAL
    const calculateTotalPrice = () => {
        // Plan seleccionado
        const selectedPlan = Object.values(formData.selectedPlan).find((plan) => plan.selected);

        // Sumando el precio del plan y los addons seleccionados
        let totalPrice = selectedPlan ? (formData.subscriptionType === "Monthly" ? selectedPlan.monthlyPrice : selectedPlan.annualPrice) : 0;

        Object.entries(formData.addons).forEach(([addonName, addon]) => {
            if (addon.selected) {
                totalPrice += formData.subscriptionType === "Monthly" ? addon.monthlyPrice : addon.annualPrice;
            }
        });

        return totalPrice;
    };

    //LLAMANDO AL PRECIO TOTAL
    const totalPrice = calculateTotalPrice();

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
                        <div className="w-40 h-full pt-2 pl-4">

                            {/* PLAN AND SUBSCRIPTION */}
                            <p className="text-blue-950 text-sm font-extrabold text-left">{Object.values(formData.selectedPlan).find((plan) => plan.selected)?.name} (
                                {formData.subscriptionType === "Monthly" ? "Monthly" : "Annual"})
                            </p>

                            {/* CHANGE PLAN */}
                            <p onClick={handlePlanChange} className="cursor-pointer text-xs text-gray-700 text-left underline hover:text-purple-700 hover:font-medium">
                                Change
                            </p>
                        </div>
                        <div className="w-20 h-full flex align-middle justify-center pt-4">
                            <p className="text-blue-950 text-sm font-extrabold text-center">
                                ${formData.subscriptionType === "Monthly"
                                    ? Object.values(formData.selectedPlan).find((plan) => plan.selected)?.monthlyPrice + "/mo"
                                    :
                                    Object.values(formData.selectedPlan).find((plan) => plan.selected)?.annualPrice + "/yr"
                                }
                            </p>
                        </div>
                    </div>

                    {/* LINE BETWEEN */}
                    <div className={styles.line}></div>


                    <div className={styles.divDown}>
                        {Object.entries(formData.addons).map(([addonName, addon]) => (
                            addon.selected && (
                                <div key={addonName} className="flex justify-between items-center pl-4">

                                    <p className="text-xs text-gray-400">
                                        {addon.name}
                                    </p>
                                    <p className="text-xs font-semibold text-blue-900 pr-5">
                                        +${formData.subscriptionType === "Monthly"
                                            ? addon.monthlyPrice + "/mo"
                                            : addon.annualPrice + "/yr"}
                                    </p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
                <div className={styles.total}>
                    <p className="text-xs text-gray-400">Total ({formData
                    .subscriptionType === "Monthly" ? "per month" : "per year"})</p>
                    <p className="text-sm text-blue-700 font-extrabold">${totalPrice.toFixed(0)}{formData
                    .subscriptionType === "Monthly" ? "/mo" : "/yr"}</p>
                </div>
            </div>

            {/* NEXT AND BACK BUTTONS */}
            <div className={styles.divButtons}>
                <p className={styles.back} onClick={prevStep}>
                    Go Back
                </p>
                <button className={styles.nextButton} onClick={nextStep}>
                    Confirm
                </button>
            </div>
        </div>
    );
}