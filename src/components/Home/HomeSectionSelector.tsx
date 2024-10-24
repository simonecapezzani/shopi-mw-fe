import HomeSectionCard from "./HomeSectionCard";
import { NavLink } from "react-router-dom";
import classes from "./HomeSectionSelector.module.scss";

const HomeSectionSelector: React.FC = () => {
  const mwSections = ["products", "customers", "orders", "settings"];

  return (
    <>
      <div className={classes.homeSelectorContainer}>
        {mwSections.map((sect) => {
          return (
            <NavLink to={`/${sect}`} className={classes.navCard}>
              <HomeSectionCard mwSection={sect} />
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default HomeSectionSelector;