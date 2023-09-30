import React from "react";
import logo from "../assets/images/logo.webp";
const Footer = () => {
 return (
  <div>
   <footer class="lg d-lg-block d-none">
    <section class="contact">
     <div class="container">
      <div class="row">
       <div class="col-12 col-lg-7 d-flex flex-column justify-content-center">
        <h3>
         We are looking at your valuable opinions... they are our guider.
        </h3>
        <p>
         Dear visitors, we eager to develop useful services that meet your needs
         ... Therefore, we hope we get a little of your valuable time to give us
         your precious opinion with transparency, or any ideas that shine
         through your thoughts are valuable information that helps us provide
         the best ... Thank you
        </p>
       </div>
       <div class="col-12 col-lg-5 pt-sm-0 pt-2">
        <form class="row align-items-center">
         <div class="col-12 inp-group p-0 d-flex justify-content-between">
          <input class="col-12" type="text" name="name" placeholder="Name" />
          <input
           class="col-12"
           type="email"
           name="email"
           placeholder="E-mail"
          />
         </div>
         <textarea
          class="col-12"
          name="message"
          placeholder="Message"
          rows="2"
         ></textarea>
         <div class="btn d-flex justify-content-between align-items-center gap-2">
          <i class="fas fa-paper-plane"></i>
          SEND
         </div>
         <input
          class="code col-2 text-center"
          type="text"
          placeholder="code"
          name=""
          max="4"
         />
        </form>
       </div>
      </div>
     </div>
    </section>
    <section class="footer-lg">
     <div class="container">
      <div class="row">
       <div class="col-4">
        <a href="#">
         <div class="image">
          <img className="logo-footer" src={logo} alt="logo" />
         </div>
        </a>
        <p>
         Educational, entertainment, fun website, we believe that the have
         useful and enjoyable time with us.
        </p>
        <span>
         <a class="hover" href="mailto:info@poll2know.com">
          info@poll2know.com
         </a>
        </span>
       </div>
       <div class="col-2">
        <h3>Sections</h3>
        <ul class="list-unstyled">
         <li>
          <a href="#"> Exams </a>
         </li>
         <li>
          <a href="#"> Polls </a>
         </li>
         <li>
          <a href="#"> Catagories </a>
         </li>
        </ul>
       </div>
       <div class="col-2">
        <h3>Pages</h3>
        <ul class="list-unstyled">
         <li>
          <a href="#"> About us</a>
         </li>
         <li>
          <a href="#"> Privacy policy</a>
         </li>
         <li>
          <a href="#"> Term Of Use</a>
         </li>
        </ul>
       </div>
       <div class="col-2">
        <h3>Categories</h3>
        <ul class="list-unstyled">
         <li>
          <a href="#"> Stickers </a>
         </li>
         <li>
          <a href="#"> Figures </a>
         </li>
         <li>
          <a href="#"> Posters </a>
         </li>
         <li>
          <a href="#"> Games </a>
         </li>
        </ul>
       </div>
       <div class="col-2">
        <h3>Contact us</h3>
        <ul class="list-unstyled">
         <li>
          <a href="#" target="_blank">
           <i class="fab fa-whatsapp"></i> Whatsapp
          </a>
         </li>
         <li>
          <a
           href="https://www.facebook.com/profile.php?id=100087175977512"
           target="_blank"
          >
           <i class="fab fa-facebook"></i>Facebook
          </a>
         </li>
         <li>
          <a href="#">
           <i class="fab fa-instagram"></i>Instagram
          </a>
         </li>
         <li>
          <a href="#">
           <i class="fab fa-twitter"></i>Twitter
          </a>
         </li>
        </ul>
       </div>
      </div>
     </div>
    </section>

    <div class="copyrights">2019-2023 POLL2KNOW © All copyrights reserved</div>
   </footer>
   <footer class="sm d-lg-none">
    <div class="footer accordion accordion-flush" id="accordionFlushExample">
     <div class="container">
      <div class="accordion-item border-0">
       <h2 class="accordion-header" id="flush-headingOne">
        <button
         class="accordion-button bg-transparent"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#flush-collapseOne"
         aria-expanded="false"
         aria-controls="flush-collapseOne"
        >
         who us
        </button>
       </h2>
       <div
        id="flush-collapseOne"
        class="accordion-collapse"
        aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample"
       >
        <div class="accordion-body">
         <div class="image">
          {/* <img src="./images/logo_negative2.svg" alt="" /> */}
          <img className="logo-footer" src={logo} alt="logo" />
         </div>
         <p>
          Educational, entertainment, fun website, we believe that the best way
          to learn are entertainment and fun ... We wish you have useful and
          enjoyable time with us.
         </p>
         <span>
          <a href="mailto:info@poll2know.com">info@poll2know.com</a>
         </span>
        </div>
       </div>
      </div>
      <div class="accordion-item border-0">
       <h2 class="accordion-header" id="flush-headingTwo">
        <button
         class="accordion-button collapsed bg-transparent"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#flush-collapseTwo"
         aria-expanded="false"
         aria-controls="flush-collapseTwo"
        >
         Sections
        </button>
       </h2>
       <div
        id="flush-collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample"
       >
        <div class="accordion-body">
         <ul class="list-unstyled">
          <li>
           <a href="#"> Exams </a>
          </li>
          <li>
           <a href="#"> Polls </a>
          </li>
          <li>
           <a href="#"> Catagories </a>
          </li>
         </ul>
        </div>
       </div>
      </div>
      <div class="accordion-item border-0">
       <h2 class="accordion-header" id="flush-headingThree">
        <button
         class="accordion-button collapsed bg-transparent"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#flush-collapseThree"
         aria-expanded="false"
         aria-controls="flush-collapseThree"
        >
         Pages
        </button>
       </h2>
       <div
        id="flush-collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample"
       >
        <div class="accordion-body">
         <ul class="list-unstyled">
          <li>
           <a href="#"> About us</a>
          </li>
          <li>
           <a href="#"> Privacy policy</a>
          </li>
          <li>
           <a href="#"> Term Of Use</a>
          </li>
         </ul>
        </div>
       </div>
      </div>
      <div class="accordion-item border-0">
       <h2 class="accordion-header" id="flush-headingThree">
        <button
         class="accordion-button collapsed bg-transparent"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#flush-collapseThree"
         aria-expanded="false"
         aria-controls="flush-collapseThree"
        >
         Categories
        </button>
       </h2>
       <div
        id="flush-collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="flush-headingThree"
        data-bs-parent="#accordionFlushExample"
       >
        <div class="accordion-body">
         <ul class="list-unstyled">
          <li>
           <a href="#"> Stickers </a>
          </li>
          <li>
           <a href="#"> Figures </a>
          </li>
          <li>
           <a href="#"> Posters </a>
          </li>
          <li>
           <a href="#"> Industry </a>
          </li>
         </ul>
        </div>
       </div>
      </div>
     </div>
    </div>
    <section class="contact">
     <div class="container">
      <h3 class="m-0">E-mail us</h3>
      <div class="row">
       <div class="col-12 col-lg-5 pt-sm-0">
        <form class="row align-items-center">
         <div class="col-12 inp-group p-0 d-sm-flex justify-content-sm-between">
          <input class="col-12" type="text" name="name" placeholder="Name" />
          <input
           class="col-12"
           type="email"
           name="email"
           placeholder="E-mail"
          />
         </div>
         <textarea
          class="col-12"
          name="message"
          placeholder="Message"
          rows="2"
         ></textarea>
         <div class="btn d-flex justify-content-between align-items-center gap-2">
          <i class="fas fa-paper-plane"></i>
          SEND
         </div>
         <input
          class="code col-2 text-center"
          type="text"
          placeholder="code"
          name=""
          max="4"
         />
        </form>
       </div>
      </div>
     </div>
    </section>

    <div class="social-sm">
     <div class="container">
      <div class="row align-items-center">
       <div class="col-sm-8 col-7">
        <h3>Contact us</h3>
       </div>
       <div class="col-sm-4 col-5 d-flex justify-content-between">
        <a href="#" target="_blank">
         <i class="fab fa-whatsapp"></i>
        </a>
        <a
         href="https://www.facebook.com/profile.php?id=100087175977512"
         target="_blank"
        >
         <i class="fab fa-facebook"></i>
        </a>
        <a href="#">
         <i class="fab fa-instagram"></i>
        </a>
        <a href="#">
         <i class="fab fa-twitter"></i>
        </a>
       </div>
      </div>
     </div>
    </div>
    <div class="copyrights">
     2022-2023 Printy Store © All copyrights reserved
    </div>
   </footer>
  </div>
 );
};

export default Footer;
