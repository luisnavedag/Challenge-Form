import styles from "./Step2.module.css";
import arcade from "../../assets/icon-arcade.jpg";
import advanced from "../../assets/icon-advanced.jpg";
import pro from "../../assets/icon-pro.jpg";

interface Step2Props {
    formData: {
        name: string;
        email: string;
        phone: string;
        selectedPlan: "Arcade" | "Advanced" | "Pro";
        subscriptionType: "Monthly" | "Annual";
    };
    setFormData: React.Dispatch<React.SetStateAction<{
        name: string;
        email: string;
        phone: string;
        selectedPlan: "Arcade" | "Advanced" | "Pro"; // 
        subscriptionType: "Monthly" | "Annual";
    }>>;
    nextStep: () => void;
    prevStep: () => void;
}


export const Step2: React.FC<Step2Props> = ({ formData, setFormData, nextStep, prevStep }) => {
    const handleNextStep = () => {
        nextStep();
    };

    const handleToggleSubscription = () => {
        // Cambiar entre suscripción mensual y anual
        const newSubscriptionType =
            formData.subscriptionType === "Monthly" ? "Annual" : "Monthly";
        setFormData({ ...formData, subscriptionType: newSubscriptionType });
    };

    const handlePlanSelect = (selectedPlan: "Arcade" | "Advanced" | "Pro") => {
        // Establecer el plan seleccionado
        setFormData({ ...formData, selectedPlan });
    };

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.title}>Select your plan</h2>
                <p className={styles.titleDesc}>You have the option of monthly or yearly billing.</p>
            </div>
            <div className={styles.divPlans}>
                <div className={styles.plan} onClick={() => handlePlanSelect("Arcade")}>
                    <img src={arcade} alt="arcade" width={30} height={30} />
                    <div className={styles.planInfo}>
                        <h3>Arcade</h3>
                        <p>{formData.subscriptionType === "Monthly" ? "$9/mo" : "$90/yr"}</p>
                    </div>
                </div>
                <div className={styles.plan}>
                    <img src={advanced} alt="advanced" width={30} height={30} />
                    <div className={styles.planInfo}>
                        <h3>Advanced</h3>
                        <p>{formData.subscriptionType === "Monthly" ? "$12/mo" : "$120/yr"}</p>
                    </div>
                </div>
                <div className={styles.plan}>
                    <img src={pro} alt="pro" width={30} height={30} />
                    <div className={styles.planInfo}>
                        <h3>Pro</h3>
                        <p>{formData.subscriptionType === "Monthly" ? "$15/mo" : "$150/yr"}</p>
                    </div>
                </div>
            </div>
            <div className={styles.divToggle}>
            <label className="flex items-center space-x-2">
          <span className={formData.subscriptionType === "Monthly" ? "text-blue-900" : "text-slate-400"}>Monthly</span>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={formData.subscriptionType === "Annual"}
              onChange={handleToggleSubscription}
            />
            <div className="w-14 h-8 bg-blue-950 rounded-full shadow-inner cursor-pointer"></div>
            <div
              className={`absolute w-6 h-6 bg-white rounded-full transition-transform transform ${
                formData.subscriptionType === "Annual" ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
          <span className={formData.subscriptionType === "Annual" ? "text-blue-900" : "text-slate-400"}>Yearly</span>
        </label>
            </div>
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