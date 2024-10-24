import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/Navigation/MainNavigation";
import Footer from "../../components/Navigation/Footer";
import classes from "./Root.module.scss";

const RootLayout: React.FC = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.page_content}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
