import { Link } from "react-router-dom";
import logo from "../assets/images/logo_nobg.png";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg py-2 px-2 mx-2">
            <div className="navbar_everything container-fluid mx-5">
                <img
                    src={logo}
                    alt=""
                    id="navbar_logo"
                    className=" rounded-full pt-1"
                />
                <h2 className="name_nav pt-1 mx-3">LegalConnect</h2>
                {/* left side of navbar */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto mx-2">
                        <li className="nav-item px-2">
                            <a
                                className="nav-link"
                                aria-current="page"
                                href="homepage.html"
                                id="current"
                            >
                                HOME
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#vision">
                                VISION
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#services">
                                SERVICES
                            </a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="#" id="#">
                                ONBOARD
                            </a>
                        </li>
                        <div className="nav-item mx-2">
                            <Link to={'login'}>
                                <button
                                    type="button"
                                    className="btn mainButton btn-outline-info text-xs"
                                    id="login_button"
                                >
                                    LOGIN
                                </button>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}