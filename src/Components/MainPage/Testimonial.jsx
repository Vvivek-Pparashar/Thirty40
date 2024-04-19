import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center mx-auto" style={{maxWidth:"500px"}}>
            <h1 class="display-6 mb-5">What They Say About Our Insurance</h1>
          </div>
          <div class="row g-5">
            <div class="col-lg-3 d-none d-lg-block">
              <div class="testimonial-left h-100">
                <img
                  class="img-fluid animated pulse infinite"
                  src="img/p1.jpg"
                  alt=""
                />
                <img
                  class="img-fluid animated pulse infinite"
                  src="img/p2.jpg"
                  alt=""
                />
                <img
                  class="img-fluid animated pulse infinite"
                  src="img/p3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <OwlCarousel class="owl-carousel testimonial-carousel">
                <div class="testimonial-item text-center">
                  <img
                    class="img-fluid rounded mx-auto mb-4"
                    src="img/p5.jpg"
                    alt=""
                  />
                  <p class="fs-5">
                    "मैं वर्षों से S&V इंश्योरेंस का एक वफादार ग्राहक रहा हूं,
                    और वे कभी भी बंद नहीं होते हैं मुझे उनकी व्यावसायिकता और
                    समर्पण से प्रभावित करने के लिए।"
                  </p>
                  <h5>Sarvesh</h5>
                </div>
                <div class="testimonial-item text-center">
                  <img
                    class="img-fluid rounded mx-auto mb-4"
                    src="img/p2.jpg"
                    alt=""
                  />
                  <p class="fs-5">
                    "Choosing S&V Insurance was one of the best decisions I've
                    made for my family's financial security. "
                  </p>

                  <h5>Uday Bhandari</h5>
                </div>
                <div class="testimonial-item text-center">
                  <img
                    class="img-fluid rounded mx-auto mb-4"
                    src="img/p1.jpg"
                    alt=""
                  />
                  <p class="fs-5">
                    "S&V इंश्योरेंस ने अपने व्यक्तिगत दृष्टिकोण के साथ मेरी
                    अपेक्षाओं को पार कर लिया मेरी ज़रूरतों के लिए सही कवरेज
                    ढूंढ़ना।""
                  </p>
                  <h5>Shubham</h5>
                </div>
                <div class="testimonial-item text-center">
                  <img
                    class="img-fluid rounded mx-auto mb-4"
                    src="img/p3.jpg"
                    alt=""
                  />
                  <p class="fs-5">
                    "I've been a loyal customer of S&V Insurance for years, and
                    they never cease to impress me with their professionalism
                    and dedication."
                  </p>
                  <h5>Nilesh</h5>
                </div>
              </OwlCarousel>
            </div>
            <div class="col-lg-3 d-none d-lg-block">
              <div class="testimonial-right h-100">
                <img
                  class="img-fluid animated pulse infinite"
                  src="img/p6.jpg"
                  alt=""
                />
                <img
                  class="img-fluid animated pulse infinite"
                  src="img/p5.jpg"
                  alt=""
                />
                <img
                  class="img-fluid animated pulse infinite"
                  src="img/p4.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
