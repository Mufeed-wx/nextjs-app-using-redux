"use client";
import Header from "../Header";
import sty from "../page.module.css";
import { GiArchiveRegister } from "react-icons/gi";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { MdOutlineMail, MdOutlinePassword } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/slice";

export default function Page() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const baseUrl = "http://localhost:8000/user-login";
  const formRef = useRef(null);
  const router = useRouter();

  function handleUserLogin(e) {
    e.preventDefault();
    const form = formRef.current;
    axios
      .post(baseUrl, {
        email: form["email"].value,
        password: form["password"].value,
      })
      .then((response) => {
        if (!response.data.success) {
          setError(true);
        } else {
          dispatch(userLogin(true));
          router.push("/");
        }
      });
  }
  return (
    <>
      <Header />
      <div className={sty.section}>
        <div className={sty.box}>
          <div className={sty.icon_container}>
            <GiArchiveRegister className={sty.icon} />
          </div>
          <div className={sty.form_container}>
            <form ref={formRef} className={sty.form} action="">
              <div className={sty.form_main}>
                <label className={sty.label} htmlFor="">
                  <MdOutlineMail className={sty.form_icon} />
                  email
                </label>
                <input className={sty.input} type="text" name="email" />
              </div>
              <div className={sty.form_main}>
                <label className={sty.label} htmlFor="">
                  <MdOutlinePassword className={sty.form_icon} />
                  password
                </label>
                <input className={sty.input} type="text" name="password" />
                {error && (
                  <span className={sty.error}>
                    *email or password is incorrect
                  </span>
                )}
              </div>
              <div className={sty.button}>
                <button onClick={handleUserLogin}>Submit</button>
              </div>
            </form>
            <div className={sty.link_text}>
              <p>You dont have register?</p>
              <a href="/signup">SignUp</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
