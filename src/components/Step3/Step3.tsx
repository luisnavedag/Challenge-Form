import styles from "./Step3.module.css"

interface Step3Props {
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
}


export const Step3: React.FC<Step3Props> = ({ formData, setFormData, prevStep, nextStep }) => {
    const toggleAddon = (addonName: "onlineService" | "largerStorage" | "customizableProfile") => {
        setFormData((prevData) => {
            if (!prevData.addons || !prevData.addons[addonName]) {
                return prevData; // No hacemos cambios si los datos no están definidos o el addon no existe.
            }

            // Copia del objeto addons actual
            const updatedAddons = { ...prevData.addons };

            // Copia del addon específico y actualizamos su propiedad selected
            const updatedAddon = { ...updatedAddons[addonName] };
            updatedAddon.selected = !updatedAddon.selected;

            // Actualizamos el valor del addon en el objeto updatedAddons
            updatedAddons[addonName] = updatedAddon;

            // Retornar el estado actualizado con los addons modificados
            return {
                ...prevData,
                addons: updatedAddons,
            };
        });
    };

    // OBTENER EL PRECIO SEGUN MEMBRESIA
    const getAddonPrice = (addonName: "onlineService" | "largerStorage" | "customizableProfile") => {
        const addon = formData.addons[addonName];
        return formData.subscriptionType === "Monthly"
            ? `+$${addon.monthlyPrice}/mo`
            : `+$${addon.annualPrice}/yr`;
    };

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.title}>Pick add-ons</h2>
                <p className={styles.titleDesc}>
                    Add-ons help enhance your gaming experience.
                </p>
            </div>


            {/* ADD-ONS */}
            <div className={styles.addons}>

                {/* ONLINE SERVICE */}
                <div className={styles.addon}>
                    <div className="w-10 flex align-middle justify-center h-full">
                        <input
                            type="checkbox"
                            className={`${formData.addons.onlineService.selected ? "bg-slate-50" : "bg-" }`}
                            checked={formData.addons.onlineService.selected}
                            onChange={() => toggleAddon("onlineService")}
                        />
                    </div>
                    <div className="w-72 flex flex-col align-middle justify-start pt-2 pl-2">
                        <label className="text-blue-900 text-sm font-bold text-start">
                            Online Service
                        </label>
                        <p className="text-gray-400 text-sm text-start">Access to multiplayer games</p>
                    </div>
                    <div className="w-20 h-full flex align-baseline justify-center">
                        <p className="text-blue-500 text-xs pt-5 font-bold">
                            {getAddonPrice("onlineService")}
                        </p>
                    </div>
                </div>

                {/* LARGER STORAGE */}
                <div className={styles.addon}>
                    <div className="w-10 flex align-middle justify-center h-full">
                        <input
                            type="checkbox"
                            className=""
                            checked={formData.addons.largerStorage.selected}
                            onChange={() => toggleAddon("largerStorage")}
                        />
                    </div>
                    <div className="w-72 flex flex-col align-middle justify-start pt-2 pl-2">
                        <label className="text-blue-900 text-sm font-bold text-start">
                            Larger Storage
                        </label>
                        <p className="text-gray-400 text-sm text-start">Extra 1TB of cloud save</p>
                    </div>
                    <div className="w-20 h-full flex align-baseline justify-center">
                        <p className="text-blue-500 text-xs pt-5 font-bold">
                            {getAddonPrice("largerStorage")}
                        </p>
                    </div>
                </div>

                {/* CUSTOMIZABLE PROFILE */}
                <div className={styles.addon}>
                    <div className="w-10 flex align-middle justify-center h-full">
                        <input
                            type="checkbox"
                            className=""
                            checked={formData.addons.customizableProfile.selected}
                            onChange={() => toggleAddon("customizableProfile")}
                        />
                    </div>
                    <div className="w-72 flex flex-col align-middle justify-start pt-2 pl-2">
                        <label className="text-blue-900 text-sm font-bold text-start">
                            Customizable Profile
                        </label>
                        <p className="text-gray-400 text-sm text-start">Custom theme on your profile</p>
                    </div>
                    <div className="w-20 h-full flex align-baseline justify-center">
                        <p className="text-blue-500 text-xs pt-5 font-bold">
                            {getAddonPrice("customizableProfile")}
                        </p>
                    </div>
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