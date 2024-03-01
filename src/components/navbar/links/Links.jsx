import styles from "./links.module.css"
import Navlink from "./navlink/Navlink"

const links = [
  {
    title: "報價單",
    path: "/quotation",
  },
  {
    title: "訂單",
    path: "/order",
  },{
    title: "客戶",
    path: "/client",
  },{
    title: "材料商",
    path: "/supplier",
  },{
    title: "庫存",
    path: "/inventory",
  },{
    title: "管理",
    path: "/admin",
  },
]
const Links = () => {
  return(
    <div className={styles.container}>
      {links.map((link, i) => {
        return <Navlink item={link} key={i}/>
      })}
    </div>
  )
}

export default Links