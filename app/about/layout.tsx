import Breadcrumbers from "@/components/Breadcrumbers/Breadcrumbers";
import styles from "../styles.module.css";
import { Suspense } from "react";
import Loading from "../loading";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbsTitles = ["Главная", "О компании"];
  const breadcrumbsHref = ["/", "/about"];

  return (
    <div className={styles.main}>
      <div>
        <Breadcrumbers title={breadcrumbsTitles} href={breadcrumbsHref} />
      </div>
      <section>
        <Suspense fallback={<Loading />}>
          <div className={styles.containerPages}>{children}</div>
        </Suspense>
      </section>
    </div>
  );
}
