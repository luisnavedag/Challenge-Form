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
                <h2 className={styles.title}>Pick add-ons</h2>
                <p className={styles.titleDesc}>
                    Add-ons help enhance your gaming experience.
                </p>
            </div>

            <div className={styles.addons}>
                <div className={styles.addon}>
                    <div className="border w-10 flex align-middle justify-center h-full">
                        <input
                            type="checkbox"
                            className=""
                            checked={formData.addons.onlineService}
                            onChange={() => toggleAddon("onlineService")}
                        />
                    </div>
                    <div className="border border-green-500 w-72 flex flex-col align-middle justify-start pt-2 pl-2">
                        <label className="text-blue-900 text-sm font-bold text-start">
                            Online Service
                        </label>
                        <p className="text-gray-400 text-sm text-start">Access to multiplayer games</p>
                    </div>
                    <div className="w-20 h-full border border-black flex align-baseline justify-center">
                        <p className="text-blue-500 text-xs pt-5 font-bold">+1$/mo</p>
                    </div>
                </div>
                <div className={styles.addon}>
                    <div className="border w-10 flex align-middle justify-center h-full">
                        <input
                            type="checkbox"
                            className=""
                            checked={formData.addons.largerStorage}
                            onChange={() => toggleAddon("largerStorage")}
                        />
                    </div>
                    <div className="border border-green-500 w-72 flex flex-col align-middle justify-start pt-2 pl-2">
                        <label className="text-blue-900 text-sm font-bold text-start">
                            Online Service
                        </label>
                        <p className="text-gray-400 text-sm text-start">Access to multiplayer games</p>
                    </div>
                    <div className="w-20 h-full border border-black flex align-baseline justify-center">
                        <p className="text-blue-500 text-xs pt-5 font-bold">+2$/mo</p>
                    </div>
                </div>
                <div className={styles.addon}>
                    <div className="border w-10 flex align-middle justify-center h-full">
                        <input
                            type="checkbox"
                            className=""
                            checked={formData.addons.customizableProfile}
                            onChange={() => toggleAddon("customizableProfile")}
                        />
                    </div>
                    <div className="border border-green-500 w-72 flex flex-col align-middle justify-start pt-2 pl-2">
                        <label className="text-blue-900 text-sm font-bold text-start">
                            Online Service
                        </label>
                        <p className="text-gray-400 text-sm text-start">Access to multiplayer games</p>
                    </div>
                    <div className="w-20 h-full border border-black flex align-baseline justify-center">
                        <p className="text-blue-500 text-xs pt-5 font-bold">+2$/mo</p>
                    </div>
                </div>
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