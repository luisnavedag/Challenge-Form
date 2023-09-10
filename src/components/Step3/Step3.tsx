import styles from "./Step3.module.css"

interface Step3Props {
    formData: {
        name: string;
        email: string;
        phone: string;
        selectedPlan: "Arcade" | "Advanced" | "Pro";
        subscriptionType: "Monthly" | "Annual";
        addons: {
            onlineService: boolean;
            largerStorage: boolean;
            customizableProfile: boolean;
        };
    };
    setFormData: React.Dispatch<
        React.SetStateAction<{
            name: string;
            email: string;
            phone: string;
            selectedPlan: "Arcade" | "Advanced" | "Pro"; // 
            subscriptionType: "Monthly" | "Annual";
            addons: {
                onlineService: boolean;
                largerStorage: boolean;
                customizableProfile: boolean;
            };
        }>
    >;
    prevStep: () => void;
    nextStep: () => void;
}


export const Step3: React.FC<Step3Props> = ({ formData, setFormData, prevStep, nextStep }) => {
    const toggleAddon = (addonName: string) => {
        setFormData((prevData) => ({
            ...prevData,
            addons: {
                ...prevData.addons,
                [addonName]: !prevData.addons[addonName],
            },
        }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.title}>Add-ons</h2>
                <p className={styles.titleDesc}>
                    Customize your plan with these additional services.
                </p>
            </div>
            <div className={styles.addon}>
                <label className="block text-gray-600 text-sm font-bold mb-2">
                    Online Service
                </label>
                <input
                    type="checkbox"
                    className="mr-2"
                    checked={formData.addons.onlineService}
                    onChange={() => toggleAddon("onlineService")}
                />
                Include Online Service
            </div>
            <div className={styles.addon}>
                <label className="block text-gray-600 text-sm font-bold mb-2">
                    Larger Storage
                </label>
                <input
                    type="checkbox"
                    className="mr-2"
                    checked={formData.addons.largerStorage}
                    onChange={() => toggleAddon("largerStorage")}
                />
                Include Larger Storage
            </div>
            <div className={styles.addon}>
                <label className="block text-gray-600 text-sm font-bold mb-2">
                    Customizable Profile
                </label>
                <input
                    type="checkbox"
                    className="mr-2"
                    checked={formData.addons.customizableProfile}
                    onChange={() => toggleAddon("customizableProfile")}
                />
                Include Customizable Profile
            </div>
            {/* Agrega más Add-ons aquí según sea necesario */}
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