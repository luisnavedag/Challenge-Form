import styles from "./Step1.module.css";

export const Step1 = () => {


    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <h2 className={styles.title}>Personal info</h2>
                <p className={styles.titleDesc}>Please provide your name, email address and phone number.</p>
            </div>
            <div className={styles.divInputs}>
                <div className={styles.input}>
                    <label>Name</label>
                    <input 
                    type="text"
                    placeholder="e.g. Stephen King" 
                    />
                </div>
            </div>
        </div>
    )
}