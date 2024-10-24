import classes from "./HomeSectionCard.module.scss";

const HomeSectionCard: React.FC<{ mwSection: string }> = (props) => {
  return (
    <div className={classes.homeSectionCard}>
      <h2 className={classes.sectionName}>{props.mwSection}</h2>
      <span>→</span>
    </div>
  );
};

export default HomeSectionCard;
