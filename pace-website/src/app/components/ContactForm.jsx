import Link from "next/link";

export default function ContactForm() {
  return (
    <>
      <section className="contact_form page-width">
        {/* left */}
        <div className="cform_left ">
          <div className="w-full h-full pt-[8rem] pl-[8rem] pr-[8rem]">
            <p className="pone1">
              Didn’t find what you were looking for on our website? You can
              begin with our online support resources by selecting the
              applicable topic below.
            </p>

            {/* topic selector start */}
            <div className="c__topic_selector">
              <label>Topics (Please choose the following)</label>
            </div>
            {/* topic selector end */}

            <p className="pone2 mt-[4rem]">
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
            </p>
          </div>
        </div>
        {/* right */}
        <div className="cform_right"></div>
      </section>
    </>
  );
}
