import { productData } from '../data';
import { trackWhatsApp } from '../utils';
import styles from './SecretConsultancy.module.css';

export default function SecretConsultancy() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>আমাদের expert এর সঙ্গে কথা বলুন।</h2>
      <div className={styles.buttonGroup}>
        <a
          href={`tel:${productData.phone}`}
          className={`${styles.btn} ${styles.call}`}
        >
          📞 Call Now
        </a>
        <a
          href={`https://wa.me/${productData.whatsapp}`}
          className={`${styles.btn} ${styles.wa}`}
          target="_blank"
          rel="noreferrer"
          onClick={trackWhatsApp}
        >
          💬 WhatsApp
        </a>
      </div>
      <p className={styles.description}>
        এনার্জি কম / তাড়াতাড়ি হয়ে যাওয়া / অল্প বয়সে করা বাজে অভ্যাস / দুর্বলতা।
        <br />
        <br />
        এই সকল সমস্যার সমাধান হবে গোপনে, সম্পূর্ণ আয়ুর্বেদিক ও নিরাপদ উপায়।
      </p>
    </section>
  );
}