import Link from "next/link";
import Form from "./Form";

export default function ContactForm() {
  return (
    <>
      <section
        className="contact_form page-width c-mobile-width flex justify-between items-start"
        style={{ paddingTop: "7.5rem" }}
      >
        {/* left */}
        <div className="cform_left ">
          <div className="w-full h-full p-[4rem]">
            <p className="pone1">
              Trying to connect with us? Couldn't find what you are looking for?
              Please select the topic from the below options given and send us
              an email. Our team will get back to you within 24hrs.
            </p>

            {/* topic selector start */}
            <div className="c__topic_selector">
              <label>Topics (Please choose the following)</label>
              <br />
              <select className="contact__left_select">
                <option>B2B</option>
                <option>Wholesale</option>
                <option>Customization</option>
                <option>Business inquiries</option>
                <option>Suppliers</option>
                <option>Other</option>
              </select>
            </div>
            {/* topic selector end */}

            {/* <p className="pone2 mt-[4rem]">
              In our dedicated <Link href="#">Media Contacts page</Link> you
              will find the Group’s primary contacts to be used only for media
              purposes. Any submitted request sent that is unrelated to these
              topics will not be considered. Our teams will evaluate pertinent
              requests before sending a response as soon as possible.  
            </p>
            <p className="pone2 mt-[2.5rem]">
              Any submitted request sent that is unrelated to these topics will
              not be considered. Our teams will evaluate pertinent requests
              before sending a response as soon as possible.  
            </p>
            <p className="pone2 mt-[2.5rem]">
              To discover our latest corporate news and press releases, visit
              our Newsroom section.
            </p> */}
          </div>
        </div>
        {/* right */}
        <div className="cform_right">
          <Form />
        </div>
      </section>
    </>
  );
}
