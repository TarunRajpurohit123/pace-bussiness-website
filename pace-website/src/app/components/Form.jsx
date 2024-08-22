"use client";

import { Button } from "@/components";
import { useEffect, useState } from "react";
import { countriesCode } from "@/json/country";

export default function Form() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <section className="pure-contact-form p-[8rem]">
        <h1>We’d love to help</h1>
        <p>Reach out and we’ll get in touch within 24 hours</p>
        <form className="mt-[4rem]">
          {/* row 1 */}
          <div className="row flex">
            {/* first name */}
            <div className="contactInputContainer flex flex-col">
              <label htmlFor="fname">
                First Name <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <input
                className="pl-[1.5rem] mt-[0.5rem] w-[30.2rem] h-[3.4rem] cinput"
                id="fname"
                type="text"
                placeholder="First Name"
              />
            </div>
            {/* last name */}
            <div className="contactInputContainer flex flex-col ml-[2.5rem]">
              <label htmlFor="lname">
                Last Name <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <input
                className="pl-[1.5rem] w-[30.2rem] mt-[0.5rem] h-[3.4rem] cinput"
                id="lname"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          {/* row 2 */}
          <div className="row flex mt-[2.5rem]">
            {/* email */}
            <div className="contactInputContainer flex flex-col">
              <label htmlFor="email">
                Email Address <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <input
                className="pl-[1.5rem] w-[63rem] h-[3.4rem] cinput mt-[0.5rem]"
                id="email"
                type="text"
                placeholder="Email Address"
              />
            </div>
          </div>
          {/* row 3 */}
          <div className="row flex mt-[2.5rem]">
            {/* phone */}
            <div className="contactInputContainer flex flex-col">
              <label htmlFor="phone">
                Phone Number <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <div className="flex items-center">
                <select
                  className="w-[6.3rem] h-[3.4rem] cursor-pointer mt-[0.5rem] phone-code outline-none"
                  style={{ borderRadius: "0.4rem" }}
                  defaultValue={"+91"}
                >
                  {countriesCode?.map((cd, ind) => {
                    return (
                      <option
                        className="phone-code-opt"
                        key={Date.now() * ind + 1}
                      >
                        {cd?.dialing_code}
                      </option>
                    );
                  })}
                </select>
                <input
                  className="pl-[1.5rem] mt-[0.5rem] ml-[0.5rem] w-[23.4rem] h-[3.4rem] cinput"
                  id="phone"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            {/* location */}
            <div className="contactInputContainer flex flex-col ml-[2.5rem]">
              <label htmlFor="location">
                Location <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <div className=" w-[30.2rem] mt-[0.5rem] h-[3.4rem] cinput pl-0 flex items-center">
                <select
                  className="h-[3.4rem] cursor-pointer phone-code location-code outline-none"
                  style={{ borderRadius: "0.4rem" }}
                >
                  {countries?.map((cd, ind) => {
                    return (
                      <option
                        className="phone-code-opt"
                        key={Date.now() * ind + 1}
                      >
                        {cd?.flag} &nbsp;&nbsp;
                        {cd?.name?.common}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          {/* row 4 */}
          <div className="row flex mt-[2.5rem]">
            {/* message */}
            <div className="contactInputContainer flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                className="pl-[1.5rem] w-[63rem] h-[8rem] cinput mt-[0.5rem]"
                id="message"
                placeholder="Leave us a message"
              />
            </div>
          </div>
          <Button text={"Send Message"} classNames={"contact_btn"} />
        </form>
      </section>
    </>
  );
}
