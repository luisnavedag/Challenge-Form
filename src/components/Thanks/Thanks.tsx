import styles from "./Thanks.module.css";
import icon from "../../assets/icon-thank-you.jpg";

export const Thanks = () =>{

    return(
        <div className={styles.container}>
            <img src={icon} width={60} height={60} alt="Thanks"  />
            <h1 className="text-black font-bold text-3xl">Thank you!</h1>
            <p className="text-sm text-gray-400">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}