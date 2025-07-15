"use client";

import { Button } from "@/components";
import { useEffect, useState } from "react";
import { countriesCode } from "@/json/country";
import Link from "next/link";
import uniqid from "uniqid";

export default function Form() {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => setCountries([]));
  }, []);

  // when form input change
  const onFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit form
  const submitForm = (e) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z]{2,50}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex =
      /^\+?(\d{1,3})?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const messageRegex = /.+/;

    const { firstName, lastName, email, phone, message } = formData;

    if (window) {
      if (!nameRegex.test(firstName)) {
        window.alert("Invalid First Name");
        return;
      }
      if (!nameRegex.test(lastName)) {
        window.alert("Invalid Last Name");
        return;
      }
      if (!emailRegex.test(email)) {
        window.alert("Invalid Email");
        return;
      }
      if (!phoneRegex.test(phone)) {
        window.alert("Invalid Phone");
        return;
      }
      if (!messageRegex.test(message)) {
        window.alert("Message cannot be empty");
        return;
      }
      window.alert(
        "Thank you! Your message has been successfully sent. We will get back to you shortly."
      );
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <>
      <section className="pure-contact-form p-[4rem]">
        <h1>
          We would to <span className="red-text">love to</span> connect.
        </h1>
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
                name="firstName"
                onChange={(e) => {
                  onFormChange(e);
                }}
                value={formData.firstName}
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
                name="lastName"
                onChange={(e) => {
                  onFormChange(e);
                }}
                value={formData.lastName}
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
                name="email"
                onChange={(e) => {
                  onFormChange(e);
                }}
                value={formData.email}
              />
            </div>
          </div>
          {/* row 3 */}
          <div className="row flex mt-[2.5rem] c_row3">
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
                      <option className="phone-code-opt" key={uniqid()}>
                        {cd?.dialing_code}
                      </option>
                    );
                  })}
                </select>
                <input
                  className="pl-[1.5rem] mt-[0.5rem] ml-[0.5rem] w-[23.4rem] h-[3.4rem] cinput"
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="Phone Number"
                  onChange={(e) => {
                    onFormChange(e);
                  }}
                  value={formData.phone}
                />
              </div>
            </div>
            {/* location */}
            <div className="contactInputContainer locationInputContainer flex flex-col ml-[2.5rem]">
              <label htmlFor="location">
                Location <span style={{ color: "var(--red)" }}>*</span>
              </label>
              <div className=" w-[30.2rem] mt-[0.5rem] h-[3.4rem] cinput pl-0 flex items-center">
                <select
                  className="h-[3.4rem] cursor-pointer phone-code location-code outline-none"
                  style={{ borderRadius: "0.4rem" }}
                >
                  {/* {countries &&
                    countries?.map((cd, ind) => {
                      return (
                        <option
                          className="phone-code-opt" 
                          key={uniqid("pcode")}
                        >
                          {cd?.flag} &nbsp;&nbsp;
                          {cd?.name?.common}
                        </option>
                      );
                    })} */}
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
                name="message"
                onChange={(e) => {
                  onFormChange(e);
                }}
                className="pl-[1.5rem] w-[63rem] h-[8rem] cinput mt-[0.5rem]"
                id="message"
                placeholder="Leave us a message"
                value={formData.message}
              />
              {/* <div className="mt-[0.7rem] check_contact_text flex items-center">
                <div class="checkbox-wrapper-40">
                  <label>
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                  </label>
                </div>
                <p className="ml-[0.7rem]">
                  You agree to our friendly <Link href="#">Privacy Policy</Link>
                </p>
              </div> */}
            </div>
          </div>
          <Button
            text={"Send Message"}
            classNames={"contact_btn"}
            onClick={(e) => {
              submitForm(e);
            }}
          />
        </form>
      </section>
    </>
  );
}
