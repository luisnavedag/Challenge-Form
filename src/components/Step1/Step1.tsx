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
        // Validando los campos antes de pasar al siguiente paso
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

        //Flag para avanzar al siguiente paso
        let valid = true;

        if (!formData.name) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: "This fiel is required",
            }));
            valid = false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: null,
            }));
        }

        if (!formData.email) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: "This field is required",
            }));
            valid = false;
        } else if (!emailRegex.test(formData.email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: "Invalid email address",
            }));
            valid = false;
        }
        else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: null,
            }));
        }

        if (!formData.phone) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: "This field is required",
            }));
            valid = false;
        } 
        else if (!phoneRegex.test(formData.phone)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: "Invalid Phone Number",
            }));
            valid = false;
        }
        else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: null,
            }));
        }

        if (valid) {
            nextStep();
        }
    };

    //HANDLE DE LOS INPUTS
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
                        className={`${errors.name ? styles.error : styles.noError} py-2 px-3`}
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
                        className={`${errors.email ? styles.error : styles.noError} py-2 px-3`}
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
                        className={`${errors.phone ? styles.error : styles.noError} py-2 px-3`}
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            {/* NEXT AND BACK BUTTONS */}
            <div className={styles.divButtons}>
                <p className={styles.back}>Go Back</p>
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