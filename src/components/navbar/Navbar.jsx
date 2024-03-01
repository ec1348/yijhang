import Link from "next/link"
import styles from "./navbar.module.css"
import Links from "./links/Links"

const Navbar = () => {
  return(
    <div className={styles.container}>
      <Link href="./" className={styles.logo}>翊展</Link>
      <Links />
    </div>
  )
}

export default Navbar