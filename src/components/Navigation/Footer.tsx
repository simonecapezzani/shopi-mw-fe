import classes from "./Footer.module.scss";
import logo from "../../assets/logos/pil_bianco.png"


const Footer: React.FC = () => {
  return (
    <>
      <div className={classes.footer}>
        <span>Made by Simone Capezzani</span>
      </div>
    </>
  );
};

export default Footer;
