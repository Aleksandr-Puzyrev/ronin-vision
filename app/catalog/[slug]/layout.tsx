import Breadcrumbers from "@/components/Breadcrumbers/Breadcrumbers";
import styles from "../../styles.module.css";
import Loading from "../../loading";
import { Suspense } from "react";

export default function СatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbsTitles = ["Главная", "Каталог"];
  const breadcrumbsHref = ["/", "/catalog/RN-65HD-i5-256G8"];

  return (
    <div className={styles.main}>
      <div className={styles.catalogBreadcrumbersCont}>
        <Breadcrumbers title={breadcrumbsTitles} href={breadcrumbsHref} />
      </div>
      <section>
        <Suspense fallback={<Loading />}>
          <div>{children}</div>
        </Suspense>
      </section>
    </div>
  );
}
