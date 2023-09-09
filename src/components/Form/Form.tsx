import styles from "./Form.module.css";
import { Step1 } from "../Step1/Step1";

export const Form = () =>{


    return(
        <div className={styles.container}>
            <div className={styles.sideBar}>

            </div>
            <div className={styles.divForm}>
                <Step1 />
            </div>
        </div>
    )
}