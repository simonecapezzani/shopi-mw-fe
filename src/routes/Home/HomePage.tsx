import HomeSectionSelector from "../../components/Home/HomeSectionSelector";
import classes from "./Home.module.scss";

const HomePage: React.FC = () => {
  return (
    <div className={classes.homePage}>
      <HomeSectionSelector />
    </div>
  );
};

export default HomePage;
