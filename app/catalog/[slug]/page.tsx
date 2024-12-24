import PageTitle from "@/components/PageTitle/PageTitle";
import CatalogTabs from "@/view/CatalogTabs/CatalogTabs";
import styles from '../../styles.module.css'


export default function СatalogPage({ params }: { params: { slug: 'electro' | 'camera'| 'videoreg' | 'accessories' } }) {

  return (
    <div className={styles.containerPages}>
      <PageTitle>Каталог</PageTitle>
      <CatalogTabs slug={params.slug} />
    </div>
  );
}