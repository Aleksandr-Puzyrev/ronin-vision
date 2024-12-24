import Breadcrumbers from "@/components/Breadcrumbers/Breadcrumbers";
import styles from "../../../styles.module.css";
import devices from "../../../../static/cards";
import { Suspense } from "react";
import Loading from "@/app/loading";

interface DevicePageProps {
  id: string;
}

export default function DeviceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: DevicePageProps;
}) {
  const device = devices.find((item) => item.id === +params.id);

  const breadcrumbsTitles = ["Главная", "Каталог", `${device?.title}`];
  const breadcrumbsHref = ["/", "/catalog/RN-65HD-i5-256G8", `/device/${device?.id}`];

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
