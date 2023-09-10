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
                    <img src={arcade} alt="arcade" width={40} height={40}/>
                    <h3>Arcade</h3>
                    <p>Price: {formData.subscriptionType === "Monthly" ? "$10/month" : "$100/year"}</p>
                </div>
                <div className={styles.plan}>
                    <img src={advanced} alt="advanced" width={40} height={40}/>
                    <h3>Advanced</h3>
                    <p>Price: {formData.subscriptionType === "Monthly" ? "$20/month" : "$200/year"}</p>
                </div>
                <div className={styles.plan}>
                    <img src={pro} alt="pro" width={40} height={40}/>
                    <h3>Pro</h3>
                    <p>Price: {formData.subscriptionType === "Monthly" ? "$30/month" : "$300/year"}</p>
                </div>
            </div>
            <div className={styles.divToggle}>

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