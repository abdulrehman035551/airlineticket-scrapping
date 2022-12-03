import "./slider.css"
import $ from 'jquery';
import '../bootstrap/bootstrap.css'
import { Link } from "react-router-dom";
export function Slider()

{
 return<>
  <div
  id="carouselExampleIndicators"
  className="carousel slide carousel-fade"
  data-ride="carousel"
>
  <ol className="carousel-indicators">
    <li
      data-target="#carouselExampleIndicators"
      data-slide-to={0}
      className="active"
    />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img className="d-block w-100" src="111.jpg" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="3.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="2.jpg" alt="Third slide" />
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleIndicators"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
  <Link to="/Booking"><button id="button" type="button" class="btn btn-primary">Find Flight</button></Link>
</div>


<section className="w3l-simple-contact-form1">
  <div className="contact-form section-gap">
    <div className="wrapper">
      <div className="text-center">
        <h1 style={{ fontSize: 40 }}>Contact Us</h1>
      </div>
      <div className="contact-form" style={{ maxWidth: 450, margin: "0 auto" }}>
        <div className="form-mid">
          <form action="javascript:sendmail()" method="post">
            <div className="field">
              <input
                type="text"
                className="form-control"
                name="Name"
                id="Name"
                placeholder="Name"
                required=""
              />
            </div>
            <div className="field">
              <input
                type="email"
                className="form-control"
                name="Sender"
                id="Sender"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="field">
              <input
                type="text"
                className="form-control"
                name="Subject"
                id="Subject"
                placeholder="Subject"
                required=""
              />
            </div>
            <textarea
              name="Message"
              className="form-control"
              id="Message"
              placeholder="Message"
              required=""
              defaultValue={""}
            />
            <button type="submit" className="btn btn-contact">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>



 
<>
  {/* footer */}
  <footer className="bg-dark text-center text-white" id="footer">
    {/* Grid container */}
    <div className="container p-4 pb-0">
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Facebook */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-facebook-f" />
        </a>
        {/* Twitter */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-twitter" />
        </a>
        {/* Google */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-google" />
        </a>
        {/* Instagram */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-instagram" />
        </a>
        {/* Linkedin */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        {/* Github */}
        <a
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          <i className="fab fa-github" />
        </a>
      </section>
      {/* Section: Social media */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2022 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">
       AR Developer
      </a>
    </div>
    {/* Copyright */}
  </footer>
</>



    </>
}