"use client";

import { useRouter } from "next/navigation";
import styles from "@/styles/nav.module.css";

export default function Nav({ children }: { children?: React.ReactNode }) {
  const router = useRouter();

  return <nav className={styles.nav}>{children}</nav>;
}
