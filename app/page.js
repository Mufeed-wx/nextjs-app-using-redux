"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header";
import sty from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addTodoData, editTodoData } from "./redux/slice";
import Form from "./components/Form";
import Table from "./components/Table";

export default function Home() {
  return (
    <>
      <Header />
      {/* <div className={sty.todo_container}>
        <div className={sty.todo_input_box}>
          <Form />
        </div>
        <div className={sty.todo_display_box}>
          <Table />
        </div>
      </div> */}
    </>
  );
}
