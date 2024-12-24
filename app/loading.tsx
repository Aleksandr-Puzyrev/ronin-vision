import { Spinner } from "@nextui-org/react";
import styles from './styles.module.css';

export default function Loading() {
    return <div className={styles.loadingCont}><Spinner size="lg" /></div>
}