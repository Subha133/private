import styles from './HighlightText.module.css';

export default function HighlightText() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        যে সমস্যাটা আপনি কাউকে বলতে পারেন না... সেটারই সমাধান হয়তো এখানেই আছে।
      </p>
      <p className={styles.subtext}>
        ১০০% গোপনীয়ভাবে পরামর্শ ও অর্ডারের সুবিধা।
      </p>
    </div>
  );
}