import React from 'react';
import {BsPerson} from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";

const Contact = () => {
    return (
      <div id="contact">
        <div
          style={{ color: "goldenrod" }}
          className="container mx-auto px-2 person-name pb-40"
        >
          <h1 className="text-7xl pt-40 underline text-center">Contact</h1>
          <div className="flex flex-col items-center text-center justify-center">
            <div className=" pt-24 pb-5">
              <h1 className="text-4xl flex align-center">
                <span
                  style={{ height: "65px", marginTop: "5px" }}
                  className="p-2 
                    rounded-lg"
                >
                  <BsPerson sx={{ fontSize: "40px", marginTop: "-10px" }} />
                </span>{" "}
                <span
                  style={{ color: "goldenrod" }}
                  className="text-4xl self-center pl-4 person-name"
                >
                  Yeasin Arafat Abid
                  <br />
                  <span className="text-2xl">
                    Seller of ship's steel plate and goods
                  </span>
                </span>{" "}
              </h1>
            </div>
            <div className=" pb-5">
              <h1 className=" text-4xl flex align-center">
                <span className="p-2  rounded-lg">
                  <BiPhone sx={{ fontSize: "40px" }} />
                </span>{" "}
                <span
                  style={{ color: "goldenrod" }}
                  className="text-4xl self-center pl-4 person-name"
                >
                  (+880)1867707118
                </span>
              </h1>
            </div>
            <div className=" pb-5">
              <h1 className=" text-4xl flex align-center">
                <span className="p-2  rounded-lg">
                  <FiMail sx={{ fontSize: "40px", marginTop: "-10px" }} />
                </span>{" "}
                <span
                  style={{ color: "goldenrod" }}
                  className="text-4xl self-center pl-4"
                >
                  abed7118@icloud.com
                </span>
              </h1>
            </div>
            <div className=" pb-5">
              <h1 className=" text-4xl flex align-center">
                <span className="p-2  rounded-lg">
                  <GoLocation sx={{ fontSize: "40px", marginBottom: "-5px" }} />
                </span>{" "}
                <span
                  style={{ color: "goldenrod" }}
                  className="text-4xl self-center pl-4"
                >
                  Bhatiary, Sitakund, <br /> Chittagong, Bangladesh
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;