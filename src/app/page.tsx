import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Haloo<div className={styles.greetings}>
        <span>O</span>
        <span>n</span>
        <span>y</span>
        <span>s</span>
        <span>h</span>
        <span>a</span>
    </div></h1>
      <div className={styles.description}>
        <span>Shada ada hadiah buat kamu!</span>
      </div>
      <div className={styles.button}>
        <button className="flex items-center justify-center">
          <Link href="/onysha">Klik disini</Link>
        </button>
      </div>
    </div>
  );
}
