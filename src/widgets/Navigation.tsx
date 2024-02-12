import { NavLink } from "react-router-dom";
import autoScroll from "../shared/hooks/autoScroll";

export default function Navigation() {
    return(        
        <ul className="nav justify-content-center navigation">
            <li>
                <NavLink 
                    to={"/"} 
                    className={"header-badge link"} 
                    onClick={() => autoScroll()}>
                        Обо мне
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to={"/skills"} 
                    className={"header-badge link"} 
                    onClick={() => autoScroll()}>
                        Стек технологий
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to={"/soft-skills"} 
                    className={"header-badge link"} 
                    onClick={() => autoScroll()}>
                        Soft skills
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to={"/portfolio"} 
                    className={"header-badge link"} 
                    onClick={() => autoScroll()}>
                        Портфолио
                </NavLink>
            </li>
        </ul>
    )
}