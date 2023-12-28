"use client";
import React, { useRef, useState } from "react";
import sty from "../page.module.css";
import { GiArchiveRegister } from "react-icons/gi";
import { MdEmail, MdOutlineMail, MdOutlinePassword } from "react-icons/md";
import { FaMobileAlt, FaRegUser } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";
import Header from "../Header";

const page = () => {
  const baseUrl = "http://localhost:8000/user-registration";
  const [emailExist, setEmailExist] = useState(false);
  const formRef = useRef(null);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    axios
      .post(baseUrl, {
        username: form["username"].value,
        email: form["email"].value,
        password: form["password"].value,
        mobile: form["mobile"].value,
      })
      .then((response) => {
        if (!response.data.success) {
          setEmailExist(true);
        } else {
          alert("successfull registered");
          router.push("/signin");
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
                  <FaRegUser className={sty.form_icon} />
                  username
                </label>
                <input className={sty.input} type="text" name="username" />
              </div>
              <div className={sty.form_main}>
                <label className={sty.label} htmlFor="">
                  <MdOutlineMail className={sty.form_icon} />
                  email
                </label>
                <input className={sty.input} type="text" name="email" />
                {emailExist && (
                  <span className={sty.error}>*email already used</span>
                )}
              </div>

              <div className={sty.form_main}>
                <label className={sty.label} htmlFor="">
                  <FaMobileAlt />
                  mobile number
                </label>
                <input className={sty.input} type="number" name="mobile" />
              </div>
              <div className={sty.form_main}>
                <label className={sty.label} htmlFor="">
                  <MdOutlinePassword className={sty.form_icon} />
                  password
                </label>
                <input className={sty.input} type="number" name="password" />
              </div>
              <div className={sty.button}>
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </form>
            <div className={sty.link_text}>
              <p>Do you have already login?</p>
              <a href="/signin">Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
