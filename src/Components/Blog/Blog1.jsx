import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import NavBar from "../MainPage/NavBar";
import Footer from "../Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Blog1 = () => {
  return (
    <div>
        <NavBar/>
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-8">
            <div class="mb-5">
              <img
                class="img-fluid w-100 rounded mb-5"
                src="img/blog-1.jpg"
                alt=""
              />
              <h1 class="text-uppercase mb-4">
                Diam dolor est labore duo ipsum clita sed et lorem tempor duo
              </h1>
              <p>
                Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus
                rebum et lorem magna kasd, stet amet magna accusam consetetur
                eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et.
                Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                aliquyam ut et vero clita. Diam sea sea no sed dolores diam
                nonumy, gubergren sit stet no diam kasd vero.
              </p>
              <p>
                Voluptua est takimata stet invidunt sed rebum nonumy stet, clita
                aliquyam dolores vero stet consetetur elitr takimata rebum
                sanctus. Sit sed accusam stet sit nonumy kasd diam dolores,
                sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo
                sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo
                et, clita lorem sit vero amet amet est dolor elitr, stet et no
                diam sit. Dolor erat justo dolore sit invidunt.
              </p>
              <p>
                Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
                voluptua tempor invidunt at est sanctus sanctus. Clita dolores
                sit kasd diam takimata justo diam lorem sed. Magna amet sed
                rebum eos. Clita no magna no dolor erat diam tempor rebum
                consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No
                at tempor sea diam kasd, takimata ea nonumy elitr sadipscing
                gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit
                amet ut ut, voluptua diam dolores at sadipscing stet. Clita
                dolor amet dolor ipsum vero ea ea eos.
              </p>
            </div>

            <div class="mb-5">
              <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                3 Comments
              </h3>
              <div class="d-flex mb-4">
                <img
                  src="img/user.jpg"
                  class="img-fluid"
                  style={{ width: 45 + "px", height: 45 + "px" }}
                />
                <div class="ps-3">
                  <h6>
                    <Link to="">John Doe</Link>{" "}
                    <small>
                      <i>01 Jan 2045</i>
                    </small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr invidunt ea clita ipsum
                    voluptua, tempor labore accusam ipsum et no at. Kasd diam
                    tempor rebum magna dolores sed eirmod
                  </p>
                  <button class="btn btn-sm btn-light">Reply</button>
                </div>
              </div>
              <div class="d-flex mb-4">
                <img
                  src="img/user.jpg"
                  class="img-fluid"
                  style={{ width: 45 + "px", height: 45 + "px" }}
                />
                <div class="ps-3">
                  <h6>
                    <Link to="">John Doe</Link>{" "}
                    <small>
                      <i>01 Jan 2045</i>
                    </small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr invidunt ea clita ipsum
                    voluptua, tempor labore accusam ipsum et no at. Kasd diam
                    tempor rebum magna dolores sed eirmod
                  </p>
                  <button class="btn btn-sm btn-light">Reply</button>
                </div>
              </div>
              <div class="d-flex ms-5 mb-4">
                <img
                  src="img/user.jpg"
                  class="img-fluid"
                  style={{ width: 45 + "px", height: 45 + "px" }}
                />
                <div class="ps-3">
                  <h6>
                    <Link to="">John Doe</Link>{" "}
                    <small>
                      <i>01 Jan 2045</i>
                    </small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr invidunt ea clita ipsum
                    voluptua, tempor labore accusam ipsum et no at. Kasd diam
                    tempor rebum magna dolores sed eirmod
                  </p>
                  <button class="btn btn-sm btn-light">Reply</button>
                </div>
              </div>
            </div>

            <div class="bg-light rounded p-5">
              <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Leave a comment
              </h3>
              <form>
                <div class="row g-3">
                  <div class="col-12 col-sm-6">
                    <input
                      type="text"
                      class="form-control bg-white border-0"
                      placeholder="Your Name"
                      style={{ height: 55 + "px" }}
                    />
                  </div>
                  <div class="col-12 col-sm-6">
                    <input
                      type="email"
                      class="form-control bg-white border-0"
                      placeholder="Your Email"
                      style={{ height: 55 + "px" }}
                    />
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      class="form-control bg-white border-0"
                      placeholder="Website"
                      style={{ height: 55 + "px" }}
                    />
                  </div>
                  <div class="col-12">
                    <textarea
                      class="form-control bg-white border-0"
                      rows="5"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit">
                      Leave Your Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="mb-5">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control p-3"
                  placeholder="Keyword"
                />
                <button class="btn btn-primary px-4">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </div>

            <div class="mb-5">
              <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Categories
              </h3>
              <div class="d-flex flex-column justify-content-start">
                <Link class="h5 bg-light py-2 px-3 mb-2" to="#">
                  <i class="bi bi-arrow-right me-2"></i>Web Design
                </Link>
                <Link class="h5 bg-light py-2 px-3 mb-2" to="#">
                  <i class="bi bi-arrow-right me-2"></i>Web Development
                </Link>
                <Link class="h5 bg-light py-2 px-3 mb-2" to="#">
                  <i class="bi bi-arrow-right me-2"></i>Web Development
                </Link>
                <Link class="h5 bg-light py-2 px-3 mb-2" to="#">
                  <i class="bi bi-arrow-right me-2"></i>Keyword Research
                </Link>
                <Link class="h5 bg-light py-2 px-3 mb-2" to="#">
                  <i class="bi bi-arrow-right me-2"></i>Email Marketing
                </Link>
              </div>
            </div>

            <div class="mb-5">
              <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Recent Post
              </h3>
              <div class="d-flex overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="img/blog-1.jpg"
                  style={{
                    width: 100 + "px",
                    height: 100 + "px",
                    objectFit: "cover",
                  }}
                  alt=""
                />
                <Link
                  to=""
                  class="h5 d-flex align-items-center bg-light px-3 mb-0"
                >
                  Lorem ipsum dolor sit amet adipis elit
                </Link>
              </div>
              <div class="d-flex overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="img/blog-2.jpg"
                  style={{
                    width: 100 + "px",
                    height: 100 + "px",
                    objectFit: "cover",
                  }}
                  alt=""
                />
                <Link
                  to=""
                  class="h5 d-flex align-items-center bg-light px-3 mb-0"
                >
                  Lorem ipsum dolor sit amet adipis elit
                </Link>
              </div>
              <div class="d-flex overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="img/blog-3.jpg"
                  style={{
                    width: 100 + "px",
                    height: 100 + "px",
                    objectFit: "cover",
                  }}
                  alt=""
                />
                <Link
                  to=""
                  class="h5 d-flex align-items-center bg-light px-3 mb-0"
                >
                  Lorem ipsum dolor sit amet adipis elit
                </Link>
              </div>
              <div class="d-flex overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="img/blog-1.jpg"
                  style={{
                    width: 100 + "px",
                    height: 100 + "px",
                    objectFit: "cover",
                  }}
                  alt=""
                />
                <Link
                  to=""
                  class="h5 d-flex align-items-center bg-light px-3 mb-0"
                >
                  Lorem ipsum dolor sit amet adipis elit
                </Link>
              </div>
              <div class="d-flex overflow-hidden mb-3">
                <img
                  class="img-fluid"
                  src="img/blog-2.jpg"
                  style={{
                    width: 100 + "px",
                    height: 100 + "px",
                    objectFit: "cover",
                  }}
                  alt=""
                />
                <Link
                  to=""
                  class="h5 d-flex align-items-center bg-light px-3 mb-0"
                >
                  Lorem ipsum dolor sit amet adipis elit
                </Link>
              </div>
            </div>

            <div class="mb-5">
              <img src="img/blog-1.jpg" alt="" class="img-fluid rounded" />
            </div>

            <div class="mb-5">
              <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Tag Cloud
              </h3>
              <div class="d-flex flex-wrap m-n1">
                <Link to="" class="btn btn-primary m-1">
                  Design
                </Link>
                <Link to="" class="btn btn-primary m-1">
                  Development
                </Link>
                <Link to="" class="btn btn-primary m-1">
                  Marketing
                </Link>
                <Link to="" class="btn btn-primary m-1">
                  SEO
                </Link>
                <Link to="" class="btn btn-primary m-1">
                  Writing
                </Link>
                <Link to="" class="btn btn-primary m-1">
                  Consulting
                </Link>
                <Link to="" class="btn btn-primary m-1">
                  Design
                </Link>
                <Link to="" class="btn btn-primary m-1">
                  Development
                </Link>
                <Link to="" class="btn btn-primary m-1">
                  Marketing
                </Link>
                <Link to="" class="btn btn-primary m-1">
                  SEO
                </Link>
                <Link to="" class="btn btn-primary m-1">
                  Writing
                </Link>
                <Link to="" class="btn btn-primary m-1">
                  Consulting
                </Link>
              </div>
            </div>

            <div>
              <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Plain Text
              </h3>
              <div class="bg-light text-center" style={{ padding: 30 + "px" }}>
                <p>
                  Vero sea et accusam justo dolor accusam lorem consetetur,
                  dolores sit amet sit dolor clita kasd justo, diam accusam no
                  sea ut tempor magna takimata, amet sit et diam dolor ipsum
                  amet diam
                </p>
                <Link to="" class="btn btn-primary py-2 px-4">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
      <FloatingWhatsApp/>
      <ScrollRestoration/>
    </div>
  );
};

export default Blog1;
