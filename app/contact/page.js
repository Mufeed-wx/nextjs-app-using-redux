import Header from "../Header";
import sty from "../page.module.css";
import { GiArchiveRegister } from "react-icons/gi";
export default function Page() {
  return (
    <>
      <Header />
      <div className={sty.section}>
        <div className={sty.main_container}>
          <div className={sty.icon_container}>
            <GiArchiveRegister className={sty.icon} />
          </div>
          <div className={sty.form_container}>
            <form className={sty.form} action="">
              <div className={sty.form_main}>
                <label className={sty.label} htmlFor="">
                  username
                </label>
                <input className={sty.input} type="text" />
              </div>
              <div className={sty.form_main}>
                <label className={sty.label} htmlFor="">
                  email
                </label>
                <input className={sty.input} type="text" />
              </div>

              <div className={sty.form_main}>
                <label className={sty.label} htmlFor="">
                  mobile number
                </label>
                <input className={sty.input} type="text" />
              </div>
              <div className={sty.form_main}>
                <label className={sty.label} htmlFor="">
                  username
                </label>
                <input className={sty.input} type="text" />
              </div>
              <div className={sty.button}>
                <button>Submit</button>
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
}
