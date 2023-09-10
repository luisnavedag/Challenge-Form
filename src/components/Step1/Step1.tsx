import styles from "./Step1.module.css"

interface Step1Props {
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
}

export const Step1: React.FC<Step1Props> = ({ formData, setFormData, nextStep }) => {

    const handleNextStep = () => {
        nextStep(); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.title}>Personal info</h2>
                <p className={styles.titleDesc}>Please provide your name, email address and phone number.</p>
            </div>
            <div className={styles.divInputs}>
                <div className={styles.input}>
                    <label className="block text-gray-600 text-sm font-bold mb-2">Name</label>
                    <input
                        type="text"
                        placeholder="e.g. Stephen King"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        value={formData.name}
                    />
                </div>
                <div className={styles.input}>
                    <label className="block text-gray-600 text-sm font-bold mb-2">Email Address</label>
                    <input
                        type="text"
                        placeholder="e.g. stephenking@lorem.com"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        value={formData.email}
                    />
                </div>
                <div className={styles.input}>
                    <label className="block text-gray-600 text-sm font-bold mb-2">Phone Number</label>
                    <input
                        type="text"
                        placeholder="e.g. +1 234 567 890"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        value={formData.phone}
                    />
                </div>
            </div>
            <div className={styles.divButtons}>
                <button 
                className={styles.nextButton}
                onClick={handleNextStep}>
                    Next Step
                </button>
            </div>
        </div>
    )
}