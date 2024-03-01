import style from "./footer.module.css"
const Footer = () => {
  return(
    <div className={style.container}>
      Copyright &copy; {new Date().getFullYear()} YiJhang 
    </div>
  )
}

export default Footer