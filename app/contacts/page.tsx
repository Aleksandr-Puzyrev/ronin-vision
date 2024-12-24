import PageTitle from "@/components/PageTitle/PageTitle";
import Contacts from "@/view/Contacts/Contacts";
import YMapProvider from "@/view/YMapProvider/YMapProvider";
import styles from "../styles.module.css";

export default function ContactsPage() {
	return (
		<div className={styles.contactsContainer}>
			<PageTitle>Контакты</PageTitle>
			<Contacts />
			<YMapProvider />
		</div>
	);
}
