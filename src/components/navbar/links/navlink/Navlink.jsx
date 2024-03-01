//單獨連結的component-可以根據目前path改變連結的顏色
"use client"
import styles from "./navlink.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navlink = ({item}) => {
  const pathName = usePathname()
  return (
    <Link href={item.path}
          className={`${styles.container} ${pathName === item.path && styles.active}`}
    >{item.title}</Link>
  )
}
export default Navlink