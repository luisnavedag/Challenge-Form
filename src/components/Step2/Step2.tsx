import styles from "./Step2.module.css";
import arcade from "../../assets/icon-arcade.jpg";
import advanced from "../../assets/icon-advanced.jpg";
import pro from "../../assets/icon-pro.jpg";

interface Step2Props {
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
}


export const Step2 = ({ formData, setFormData, nextStep, prevStep }: Step2Props) => {
    const handleNextStep = () => {
        nextStep();
    };

    const handleToggleSubscription = () => {
        // Cambiar entre suscripción mensual y anual
        const newSubscriptionType =
            formData.subscriptionType === "Monthly" ? "Annual" : "Monthly";
        setFormData({ ...formData, subscriptionType: newSubscriptionType });
    };

    const handlePlanSelect = (selectedPlan: "arcade" | "advanced" | "pro") => {
        // Desseleccionar todos los planes
        const updatedSelectedPlan = {
            arcade: { ...formData.selectedPlan.arcade, selected: false },
            advanced: { ...formData.selectedPlan.advanced, selected: false },
            pro: { ...formData.selectedPlan.pro, selected: false },
        };

        // Seleccionar el plan especificado
        updatedSelectedPlan[selectedPlan].selected = true;

        // Actualizar el estado
        setFormData((prevFormData) => ({
            ...prevFormData,
            selectedPlan: updatedSelectedPlan,
        }));
    };

    return (
        <div className={styles.container}>

            {/* TITLE AND SUBTITLE */}
            <div className={styles.info}>
                <h2 className={styles.title}>Select your plan</h2>
                <p className={styles.titleDesc}>You have the option of monthly or yearly billing.</p>
            </div>

            {/* //PLANS */}
            <div className={styles.divPlans}>

                {/* ARCADE PLAN */}
                <div
                    className={`${styles.plan} ${formData.selectedPlan.arcade.selected ? styles.selectedPlan : ""
                        }`}
                    onClick={() => handlePlanSelect("arcade")}
                >
                    <img src={arcade} alt="arcade" width={30} height={30} />
                    <div className={styles.planInfo}>
                        <h3>Arcade</h3>
                        <p>
                            {formData.subscriptionType === "Monthly"
                                ? `$${formData.selectedPlan.arcade.monthlyPrice}/mo`
                                : `$${formData.selectedPlan.arcade.annualPrice}/yr`}
                        </p>
                        {formData.subscriptionType === "Annual" ? (
                            <p style={{ color: "#03295a", fontWeight: "bolder" }}>
                                2 months free
                            </p>
                        ) : null}
                    </div>
                </div>

                {/* ADVANCED PLAN */}
                <div
                    className={`${styles.plan} ${formData.selectedPlan.advanced.selected ? styles.selectedPlan : ""
                        }`}
                    onClick={() => handlePlanSelect("advanced")}
                >
                    <img src={advanced} alt="advanced" width={30} height={30} />
                    <div className={styles.planInfo}>
                        <h3>Advanced</h3>
                        <p>
                            {formData.subscriptionType === "Monthly"
                                ? `$${formData.selectedPlan.advanced.monthlyPrice}/mo`
                                : `$${formData.selectedPlan.advanced.annualPrice}/yr`}
                        </p>
                        {formData.subscriptionType === "Annual" ? (
                            <p style={{ color: "#03295a", fontWeight: "bolder" }}>
                                2 months free
                            </p>
                        ) : null}
                    </div>
                </div>

                {/* PRO PLAN */}
                <div
                    className={`${styles.plan} ${formData.selectedPlan.pro.selected ? styles.selectedPlan : ""
                        }`}
                    onClick={() => handlePlanSelect("pro")}
                >
                    <img src={pro} alt="pro" width={30} height={30} />
                    <div className={styles.planInfo}>
                        <h3>Pro</h3>
                        <p>
                            {formData.subscriptionType === "Monthly"
                                ? `$${formData.selectedPlan.pro.monthlyPrice}/mo`
                                : `$${formData.selectedPlan.pro.annualPrice}/yr`}
                        </p>
                        {formData.subscriptionType === "Annual" ? (
                            <p style={{ color: "#03295a", fontWeight: "bolder" }}>
                                2 months free
                            </p>
                        ) : null}
                    </div>
                </div>

            </div>

            {/* SWITCH TOGGLE */}
            <div className={styles.divToggle}>
                <div className={`${styles.togglebg}`}>
                    <label className="flex items-center space-x-2">
                        <span className={formData.subscriptionType === "Monthly" ? "text-blue-900 font-bold text-xs" : "text-slate-400 font-bold text-xs"}>Monthly</span>
                        <div className="relative">
                            <input
                                type="checkbox"
                                className="sr-only"
                                checked={formData.subscriptionType === "Annual"}
                                onChange={handleToggleSubscription}
                            />
                            <div className="w-14 h-8 bg-blue-950 rounded-full cursor-pointer relative py-1 px-1 pb-1 flex justify-start">
                                <div
                                    className={`absolute w-6 h-6 bg-white rounded-full transition-transform z-50 transform ${formData.subscriptionType === "Annual" ? "translate-x-6" : ""
                                        }`}
                                ></div>
                            </div>
                        </div>
                        <span className={formData.subscriptionType === "Annual" ? "text-blue-900 font-bold text-xs" : "text-slate-400 font-bold text-xs"}>Yearly</span>
                    </label>

                </div>
            </div>

            {/* NEXT AND BACK BUTTONS */}
            <div className={styles.divButtons}>
                <p className={styles.back} onClick={prevStep}>Go Back</p>
                <button
                    className={styles.nextButton}
                    onClick={handleNextStep}
                >
                    Next Step
                </button>
            </div>
        </div>
    )
}