import React, { useState } from "react";
import styles from "./Step1.module.css";


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


    const [errors, setErrors] = useState<{
        name: string | null;
        email: string | null;
        phone: string | null;
    }>({
        name: null,
        email: null,
        phone: null,
    });

    const handleNextStep = () => {
        // Validar campos antes de pasar al siguiente paso
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

        let valid = true;

        if (!formData.name) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: "Name is required",
            }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: null,
            }));
        }

        if (!formData.email || !emailRegex.test(formData.email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: "Invalid email address",
            }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: null,
            }));
        }

        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: "This field is required",
            }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: null,
            }));
        }

        if (valid) {
            nextStep();
        }
    };

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;


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

                {/* NAME */}
                <div className={styles.input}>
                    <div className={styles.label}>
                        <label className="block text-gray-600 text-sm font-bold mb-2">Name</label>
                        {errors.name && (
                            <p className="text-red-500 text-xs italic font-extrabold">{errors.name}</p>
                        )}
                    </div>
                    <input
                        type="text"
                        placeholder="e.g. Stephen King"
                        className={`shadow appearance-none ${errors.name ? styles.errors : null
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline`}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>

                {/* EMAIL */}
                <div className={styles.input}>
                    <div className={styles.label}>
                        <label className="block text-gray-600 text-sm font-bold mb-2">Email</label>
                        {errors.email && (
                            <p className="text-red-500 text-xs italic font-extrabold">{errors.email}</p>
                        )}
                    </div>
                    <input
                        type="text"
                        placeholder="e.g. stephenking@lorem.com"
                        className={`shadow appearance-none border ${errors.email ? "border-red-500" : "border-slate-300"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline`}
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}

                    />
                </div>

                {/* PHONE NUMBER */}
                <div className={styles.input}>
                    <div className={styles.label}>
                        <label className="block text-gray-600 text-sm font-bold mb-2">Phone number</label>
                        {errors.phone && (
                            <p className="text-red-500 text-xs italic font-extrabold">{errors.phone}</p>
                        )}
                    </div>
                    <input
                        type="text"
                        placeholder="e.g. +1 234 567 890"
                        className={`shadow appearance-none border ${errors.phone ? "border-red-500" : "border-slate-300"
                            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline`}
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