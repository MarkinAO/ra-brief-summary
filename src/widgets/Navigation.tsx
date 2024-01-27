import { NavLink } from "react-router-dom";

export default function Navigation() {
    return(        
        <ul className="nav justify-content-center navigation">
            <li>
                <NavLink to={"/"} className={"header-badge link"}>Обо мне</NavLink>
            </li>
            <li>
                <NavLink to={"/skills"} className={"header-badge link"}>Стек технологий</NavLink>
            </li>
            <li>
                <NavLink to={"/portfolio"} className={"header-badge link"}>Портфолио</NavLink>
            </li>
        </ul>
    )
}