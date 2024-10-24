import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";

const MainNavigation: React.FC = () => {
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li><NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined} end>Home</NavLink></li>
                <li><NavLink to="/products" className={({ isActive }) => isActive ? classes.active : undefined} >Products</NavLink></li>
                <li><NavLink to="/customers" className={({ isActive }) => isActive ? classes.active : undefined} >Customers</NavLink></li>
                <li><NavLink to="/orders" className={({ isActive }) => isActive ? classes.active : undefined} >Orders</NavLink></li>
                <li><NavLink to="/settings" className={({ isActive }) => isActive ? classes.active : undefined} >Settings</NavLink></li>
            </ul>
        </nav>
        <div className={classes.header_logo}>
        <span></span>
        </div>
    </header>
};

export default MainNavigation;