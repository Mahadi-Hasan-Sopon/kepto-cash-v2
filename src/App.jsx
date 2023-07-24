import Button from "./components/Button";
import Navbar from "./components/Navbar";
import ContactUsForm from "./components/ContactUsForm";
import CarouselHeader from "./components/carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./app.css";
import { useEffect, useRef, useState } from "react";
import Benefit from "./components/benefit/Benefit";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  const [isIntersecting, setIsIntersecting] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-120px" }
    );

    // console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!isIntersecting) {
      navbar.classList.add("bg-neutral-950/75");
    } else {
      navbar.classList.remove("bg-neutral-950/75");
    }
  }, [isIntersecting]);

  return (
    <div className="relative font-opensans">
      <div className="sticky top-0 z-20 bg-transparent text-3xl text-sky-500 text-bold text-center">
        <Navbar />
      </div>

      <CarouselHeader scrollRef={ref} />

      {/* Benefits Section Start */}

      <section className="benefits flex flex-col gap-10 lg:gap-6 justify-around py-32 px-10 lg:px-36 items-center">
        <div className="left-content lg:flex-1">
          <p className="text-base font-semibold mb-1">
            Why should you work with us?
          </p>
          <h2 className="text-5xl font-bold text-secColor mb-3">
            Analyze your sales and marketing leads
          </h2>
          <p className="text-base text-normal text-primaryColor">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua invidunt ut labore.
          </p>
        </div>
        <div className="right-content lg:flex-1">
          <Benefit
            className="mb-10"
            icon={"assets/low-charge.svg"}
            h4={"Low Charge"}
            p={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."}
          />
          <Benefit
            className="mb-10"
            icon={"assets/fast-transection.svg"}
            h4={"Fast Transaction"}
            p={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr."}
          />
          <Benefit
            className="mb-10"
            icon={"assets/secure.svg"}
            h4="Secure Payment"
            p="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
          />
          <Benefit
            icon={"assets/support.svg"}
            h4="24/7 Support"
            p="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
          />
        </div>
      </section>

      {/* Benefits Section End */}

      {/* Brand Logo Section Start */}

      <section className="brand-logos py-28 px-10 lg:px-[103px] bg-[#FAFAFA] ">
        <h2 className="text-5xl font-bold text-secColor mb-3 text-center">
          Analyze your sales and marketing leads
        </h2>
        <p className="text-center font-semibold text-base text-[#5B5B5B]">
          10,000+ clients who are getting more replies
        </p>
        <div className="logos flex flex-wrap justify-center lg:justify-between mt-20">
          <img src="assets/brands-logo/logo-8 1.svg" alt="" />
          <img src="assets/brands-logo/logo-6.svg" alt="" />
          <img src="assets/brands-logo/logo-7 1.svg" alt="" />
          <img src="assets/brands-logo/logo-3.svg" alt="" />
          <img src="assets/brands-logo/logo-1 1.svg" alt="" />
        </div>
        <div className="logos flex flex-wrap justify-center lg:justify-between">
          <img src="assets/brands-logo/logo-8 1.svg" alt="" />
          <img src="assets/brands-logo/logo-6.svg" alt="" />
          <img src="assets/brands-logo/logo-7 1.svg" alt="" />
          <img src="assets/brands-logo/logo-3.svg" alt="" />
          <img src="assets/brands-logo/logo-1 1.svg" alt="" />
        </div>
      </section>

      {/* Brand Logo Section End */}

      {/* Customer Testimonial Section Start */}

      <section className="customer-testimonial py-28 px-[103px] bg-[#FAFAFA] ">
        <h2 className="text-5xl font-bold text-secColor mb-3 text-center">
          Customer Testimonials
        </h2>
        <p className="text-center font-semibold text-base text-[#5B5B5B]">
          What our clients say
        </p>
        <div className="testimonials grid grid-cols-auto lg:grid-cols-3 gap-6 lg:gap-9 mt-[75px]">
          <Testimonial
            className="lg:ms-4"
            name="Breanna Parker"
            review={5}
            message="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ornare gravida tempor. Nunc tristique libero eget nulla."
          />
          <Testimonial
            className="ms-4"
            name="Breanna Parker"
            review={5}
            message="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ornare gravida tempor. Nunc tristique libero eget nulla."
          />
          <Testimonial
            className="ms-4"
            name="Breanna Parker"
            review={5}
            message="Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ornare gravida tempor. Nunc tristique libero eget nulla."
          />
        </div>
      </section>

      {/* Customer Testimonial Section End */}

      {/* Download App Section Start */}

      <section className="download-app lg:pt-[150px] lg:pl-[315px] lg:pb-[107px] lg:pr-[339px] grid lg:grid-cols-2 justify-items-center items-center gap-[149px]">
        <div className="content flex flex-col justify-center items-center px-10 lg:items-start my-5">
          <h1 className="text-secColor text-3xl font-bold">
            Download Kepto Cash
          </h1>
          <p className="text-base text-blackColor font-semibold pb-[18px]">
            sample text lorum ipsum sample text
          </p>

          <div className="text-base text-blackColor font-normal">
            <p>
              Download mobile app for ios & android. It helps you rating quickly
              & smoothly
            </p>
          </div>
          <div className="btn-group flex gap-4">
            <Button className="my-3 cursor-pointer">
              <img src="assets/app-store.svg" alt="" />
            </Button>
            <Button className="my-3 cursor-pointer">
              <img src="assets/google-play.svg" alt="" />
            </Button>
          </div>
        </div>
        <div className="img pb-5">
          <img src="assets/bottom.svg" alt="" />
        </div>
      </section>

      {/* Download App Section End */}

      {/* Contact Us Section Start */}

      <section className="contact-us px-10 lg:px-[189px] py-14">
        <h1 className="text-secColor font-bold text-5xl pb-4 text-center">
          Contact Us
        </h1>
        <p className="text-base text-blackColor font-semibold w-3/6 text-center mx-auto pb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <ContactUsForm />
      </section>

      {/* Contact Us Section End */}

      {/* Footer Section Start */}

      <footer className="w-full">
        <div className="footer-container pt-7 pb-10 px-10 lg:px-[239px] text-white text-base font-normal">
          <div className="top grid md:grid-cols-2 md:flex md:flex-wrap md:gap-5 md:justify-between items-center md:items-start md:justify-items-center mb-14">
            <div className="footer-col">
              <img src="assets/footer-logo.svg" alt="" />
              <p>Sample text sample</p>
              <p>sample text sampletext</p>
              <p>textSample text textsample</p>
            </div>

            <div className="company">
              <p className="font-semibold pb-4">Company</p>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            <div className="connect">
              <p className="text-base font-semibold pb-4">Connect</p>
              <p className="text-base font-normal">text@testmail.com</p>
              <p className="text-base font-normal mt-1">+(123) 456 - 7890</p>
            </div>

            <div className="newsletter py-4 md:py-1">
              <p className="text-base font-semibold pb-4">Join Newsletter</p>
              <input
                className="appearance-none block w-[257px]  text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 rounded-full"
                id="grid-last-name"
                type="email"
                placeholder="Select Subject"
              />
              <button
                className="shadow bg-[#F58A07] hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-medium py-2 px-4 rounded-full text-sm mt-3"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="bottom flex justify-between py-5">
            <p>© All rights reserved - Kepto Cash</p>
            <p>Privacy Policy Terms & Conditions</p>
          </div>
        </div>
      </footer>

      {/* Footer Section End */}
    </div>
  );
}

export default App;
