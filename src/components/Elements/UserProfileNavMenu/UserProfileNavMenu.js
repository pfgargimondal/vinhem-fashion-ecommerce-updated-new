import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Css/UserProfileNavMenu.css";
import "./Css/UserProfileNavMenuResponsive.css";

export const UserProfileNavMenu = () => {
    const [resUsernavToggle, setResUsernavToggle] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");

        const bodyScrollFixed = () => {
            if (resUsernavToggle) {
                html.classList.add("overflow-hidden");
            } else {
                html.classList.remove("overflow-hidden");
            }
        };

        bodyScrollFixed();
    }, [resUsernavToggle]);

    return (
        <>
            <div className="nmkewjirwerr">
                <div className="user-res-nav-menu-btn d-none my-4" onClick={() => setResUsernavToggle(true)} id="user-prfile-res-btn">
                    <div className="dowerkwerwer d-flex align-items-center">
                        <div className="sdfjhsdfs">
                            <img src="./images/pfle.jpg" alt="" />
                        </div>

                        <h4 className="mb-0 ms-2">R. Jadeja</h4>
                    </div>

                    <i class="fa-solid ms-2 fa-angles-right"></i>
                </div>

                <p className="dokejrlwerwer d-none mb-0">
                    <Link to="/"><i className="fa-solid me-1 fa-arrow-left"></i> Back To Home <i className="fa-solid ms-1 fa-house"></i></Link>
                </p>
            </div>

            <div onClick={() => setResUsernavToggle(false)} className={resUsernavToggle ? "user-dashboard-nav-backdrop d-none position-fixed w-100 h-100" : "user-dashboard-nav-backdrop d-none user-dashboard-nav-backdrop-hide position-fixed w-100 h-100"}></div>

            <div className={resUsernavToggle ? "hdkgdfg sticky-top" : "hdkgdfg user-dashboard-nav-hide sticky-top"} id="user-dashboard-nav">
                <div className="dfbdf position-relative mb-2 p-3">
                    <h4 className="mb-0">User Dashboard</h4>

                    <i class="fa-solid d-none fa-xmark" onClick={() => setResUsernavToggle(false)}></i>
                </div>

                <div className="p-4">
                    <Link to="/profile">
                        <button className="btn akdhjkashriwerwer">
                            <i className="fa-solid fa-user"></i> My Profile
                        </button>
                    </Link>

                    <Link to="/wishlist">
                        <button className="btn akdhjkashriwerwer">
                            <i className="fa-regular fa-heart"></i> Wishlist
                        </button>
                    </Link>                

                    <Link to="/order-history">
                        <button className="btn akdhjkashriwerwer">
                            <i className="fa-solid fa-clock-rotate-left"></i> Order History
                        </button>
                    </Link>                

                    <Link to="/cancelled-order">
                        <button className="btn akdhjkashriwerwer">
                            <i className="fa-solid fa-ban"></i> Cancelled Order
                        </button>
                    </Link>

                    <Link to="/change-password">
                        <button className="btn akdhjkashriwerwer">
                            <i className="fa-solid fa-eye-low-vision"></i> Password Change
                        </button>
                    </Link>

                    <Link to="/chat">
                        <button className="btn akdhjkashriwerwer">
                            <i class="fa-regular fa-comments"></i> Chat
                        </button>
                    </Link>

                    <Link to="/profile">
                        <button className="btn akdhjkashriwerwer">
                            <i className="fa-solid fa-right-from-bracket"></i> Logout
                        </button>
                    </Link>
                </div>

                <div className="njkcfnuwffsdfsf px-4 pb-4">
                    <Link to="/contact-us"><i class="fa-solid me-1 fa-headphones-simple"></i> Get Help</Link>
                </div>
            </div>
        </>
    )
}