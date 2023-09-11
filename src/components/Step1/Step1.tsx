import styles from "./Step1.module.css"

interface Step1Props {
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
        subscriptionType: "Monthly" | "Annual",
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
            },
        },
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
                },
            };
        }>
    >;
    nextStep: () => void;
}

export const Step1: React.FC<Step1Props> = ({ formData, setFormData, nextStep }) => {

    const handleNextStep = () => {
        nextStep();
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;

        // Actualizar el estado de formData con los nuevos valores
        setFormData({
            ...formData,
            [name]: value,
        });
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
                        className="shadow appearance-none border border-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles.input}>
                    <label className="block text-gray-600 text-sm font-bold mb-2">Email Address</label>
                    <input
                        type="text"
                        placeholder="e.g. stephenking@lorem.com"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}

                    />
                </div>
                <div className={styles.input}>
                    <label className="block text-gray-600 text-sm font-bold mb-2">Phone Number</label>
                    <input
                        type="text"
                        placeholder="e.g. +1 234 567 890"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
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