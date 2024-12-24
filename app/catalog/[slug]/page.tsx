import PageTitle from "@/components/PageTitle/PageTitle";
import CatalogTabs from "@/view/CatalogTabs/CatalogTabs";
import styles from '../../styles.module.css'


export default function СatalogPage({ params }: { params: { slug: 'RN-65HD-i5-256G8' | 'RN-65HD-i7-512G16'| 'RN-75HD-i5-256G' | 'RN-75HD-i7-512G' | 'RN-86HD-i5-256G' | 'RN-86HD-i7-512G' } }) {

  return (
    <div className={styles.containerPages}>
      <PageTitle>Каталог</PageTitle>
      <CatalogTabs slug={params.slug} />
    </div>
  );
}