"use client";
import sty from "./page.module.css";
import Image from "next/image";
import logo from "./images/logo.jpg";
import { FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "./redux/slice";
export default function Header() {
  const isLoggedin = useSelector((state) => state.user.isLogged);
  const dispatch = useDispatch();

  function handleLogout() {
    console.log(isLoggedin, "done");
    dispatch(userLogout(false));
    console.log(isLoggedin);
  }
  return (
    <>
      <div className={sty.nav}>
        <div className={sty.logo}>
          <p>TODO-APP</p>
        </div>
        <ul className={sty.navitem}>
          <li className={sty.navitems}>
            <a href="/">Home</a>
          </li>
          <li className={sty.navitems}>
            <a href="/contact">Contact</a>
          </li>
          <li className={sty.navitems}>
            {isLoggedin == true ? (
              <a className={sty.logout} onClick={handleLogout}>
                logout
              </a>
            ) : (
              <a href="/signin">
                <FaRegUser />
              </a>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
