<template>
  <div>
    <!-- Hero Section -->

    <section class="banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-xl-7">
            <div class="block">
              <div class="divider mb-3"></div>
              <span class="text-uppercase text-sm letter-spacing"
                >Healthcare Staffing Solutions</span
              >
              <h1 class="mb-3 mt-3">
                Your Trusted Healthcare Staffing Partner
              </h1>

              <p class="mb-4 pr-5" style="color: #223a66">
                Connecting qualified healthcare professionals with leading
                facilities nationwide. Find your next opportunity or staff your
                facility with confidence.
              </p>
              <div class="btn-container d-flex align-items-center">
                <router-link
                  to="/"
                  style="white-space: nowrap"
                  class="btn btn-main-2 btn-icon btn-round-full d-flex"
                  >Find Your Next Nursing Opportunity
                  <i class="icofont-simple-right ml-2"></i
                ></router-link>
                <router-link
                  to="/"
                  style="white-space: nowrap"
                  class="btn btn-main-2 btn-icon btn-round-full d-flex ml-2"
                  >Request Staffing <i class="icofont-simple-right ml-2"></i
                ></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="features" id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="feature-block d-lg-flex">
              <div class="feature-item mb-5 mb-lg-0">
                <div class="feature-icon mb-4">
                  <i class="icofont-nurse"></i>
                </div>
                <span>Short-term & Long-term</span>
                <h4 class="mb-3">Staffing Solutions</h4>
                <p class="mb-4">
                  Customized staffing services tailored to your facility's
                  unique needs with quick-response placements.
                </p>
                <!-- <a
                  href="/staffing-solutions"
                  class="btn btn-main btn-round-full"
                  >Learn More</a
                > -->
              </div>

              <div class="feature-item mb-5 mb-lg-0">
                <div class="feature-icon mb-4">
                  <i class="icofont-travelling"></i>
                </div>
                <span>Travel Nursing</span>
                <h4 class="mb-3">Nationwide Opportunities</h4>
                <p class="mb-4">
                  Exciting travel positions with competitive pay, benefits, and
                  full logistical support.
                </p>
                <!-- <a href="/travel-nursing" class="btn btn-main btn-round-full"
                  >Explore Positions</a
                > -->
              </div>

              <div class="feature-item mb-5 mb-lg-0">
                <div class="feature-icon mb-4">
                  <i class="icofont-calendar"></i>
                </div>
                <span>Flexible Scheduling</span>
                <h4 class="mb-3">Per Diem & Contract</h4>
                <p class="mb-4">
                  Take control of your schedule with our easy-to-use platform
                  for per diem and contract positions.
                </p>
                <!-- <a href="/per-diem" class="btn btn-main btn-round-full"
                  >View Options</a
                > -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about" id="about">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about-content pl-4">
              <h2 class="title-color">Our Mission & Vision</h2>
              <p class="mt-4 mb-5">
                Dedicated to delivering exceptional healthcare staffing
                solutions while maintaining the highest standards of patient
                care and professional satisfaction. We envision a future where
                healthcare facilities and professionals thrive through
                innovative staffing approaches and sustainable career growth
                opportunities.
              </p>
              <!-- <a
                href="/about-us"
                class="btn btn-main-2 btn-round-full btn-icon"
              >
                Learn More About Us<i class="icofont-simple-right ml-3"></i>
              </a> -->
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-img">
              <img
                src="@/assets/images/service/medical-team-examining-x-ray-report.jpg"
                alt="Our Team"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- For Nurses Section -->
    <section class="section nurses" id="nurses">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img
              src="@/assets/images/about/ani-kolleshi-7jjnJ-QA9fY-unsplash.jpg"
              alt="Nurses"
              class="w-100"
            />
          </div>
          <div class="col-lg-6">
            <h2 class="title-color">Support for Nurses</h2>
            <p class="mt-4">
              Find the perfect job with our comprehensive search by location,
              specialty, and shift. Apply easily online and get help from a
              dedicated advisor.
            </p>
            <ul class="list-unstyled mt-3">
              <li>✔️ Location, specialty & shift filters</li>
              <li>✔️ Career advisor support</li>
              <li>✔️ Continuing education & resources</li>
            </ul>
            <!-- <a href="/nurses" class="btn btn-main btn-round-full mt-4"
              >Explore Nurse Portal</a
            > -->
          </div>
        </div>
      </div>
    </section>

    <!-- For Employers Section -->
    <section class="section employers gray-bg" id="employers">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="title-color">Solutions for Employers</h2>
            <p class="mt-4">
              We provide tailored staffing services with quick placement and a
              streamlined portal for communication and candidate review.
            </p>
            <ul class="list-unstyled mt-3">
              <li>✔️ Hospital, clinic & long-term care support</li>
              <li>✔️ Dedicated client portal</li>
              <li>✔️ Proven staffing case studies</li>
            </ul>
            <!-- <a href="/employers" class="btn btn-main btn-round-full mt-4"
              >Partner With Us</a
            > -->
          </div>
          <div class="col-lg-6">
            <img
              src="@/assets/images/service/doctors-discussing-laptop-meeting.jpg"
              alt="Employers"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Blog & Resources Section -->
    <section class="section blog" id="blog">
      <div class="container">
        <div class="section-title text-center">
          <h2>Insights & Resources</h2>
          <div class="divider mx-auto my-4"></div>
          <p>
            Continued Growth of Telehealth Helps Bridge Nursing Staff & Patient
            Care Gaps
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="blog-item">
              <img
                src="@/assets/images/service/Telehealth-Nurse2-Resized-scaled-e1732553914724.jpg"
                alt="Blog"
                class="img-fluid mb-3"
                style="aspect-ratio: 4/2.5; object-fit: cover"
              />
              <h4><a href="#">Top Nursing Trends in 2025</a></h4>
              <p>
                Explore the future of nursing, what’s changing, and how to stay
                ahead in your career.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="blog-item">
              <img
                src="@/assets/images/service/closeup-female-doctor-signing-medical-reports.jpg"
                alt="Blog"
                class="img-fluid mb-3"
                style="aspect-ratio: 4/2.5; object-fit: cover"
              />
              <h4><a href="#">Licensing Made Easy</a></h4>
              <p>
                Everything you need to know to keep your certifications current
                and travel-ready.
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="blog-item">
              <img
                src="@/assets/images/service/top-view-notepad-with-contact-lenses-case.jpg"
                alt="Blog"
                class="img-fluid mb-3"
                style="aspect-ratio: 4/2.5; object-fit: cover"
              />
              <h4><a href="#">Downloadable Guides</a></h4>
              <p>
                Free resources for time management, resume writing, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section testimonial-2 gray-bg">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-7">
            <div class="section-title text-center">
              <h2>What Our Partners Say</h2>
              <div class="divider mx-auto my-4"></div>
              <p>
                Hear from healthcare professionals and facilities who have
                experienced the difference of working with our dedicated team.
              </p>
            </div>
          </div>
        </div>

        <!-- Existing testimonial slider structure remains -->
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12 testimonial-wrap-2">
              <div class="testimonial-block style-2 gray-bg">
                <i class="icofont-quote-right"></i>

                <div class="testimonial-thumb">
                  <img
                    src="@/assets/images/team/test-thumb1.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>

                <div class="client-info">
                  <h4>Amazing service!</h4>
                  <span>John Partho</span>
                  <p>
                    They provide great service facilty consectetur adipisicing
                    elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a
                    vel eos adipisci suscipit fugit placeat.
                  </p>
                </div>
              </div>

              <div class="testimonial-block style-2 gray-bg">
                <div class="testimonial-thumb">
                  <img
                    src="@/assets/images/team/test-thumb2.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>

                <div class="client-info">
                  <h4>Expert doctors!</h4>
                  <span>Mullar Sarth</span>
                  <p>
                    They provide great service facilty consectetur adipisicing
                    elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a
                    vel eos adipisci suscipit fugit placeat.
                  </p>
                </div>

                <i class="icofont-quote-right"></i>
              </div>

              <div class="testimonial-block style-2 gray-bg">
                <div class="testimonial-thumb">
                  <img
                    src="@/assets/images/team/test-thumb3.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>

                <div class="client-info">
                  <h4>Good Support!</h4>
                  <span>Kolis Mullar</span>
                  <p>
                    They provide great service facilty consectetur adipisicing
                    elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a
                    vel eos adipisci suscipit fugit placeat.
                  </p>
                </div>

                <i class="icofont-quote-right"></i>
              </div>

              <div class="testimonial-block style-2 gray-bg">
                <div class="testimonial-thumb">
                  <img
                    src="@/assets/images/team/test-thumb4.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>

                <div class="client-info">
                  <h4>Nice Environment!</h4>
                  <span>Partho Sarothi</span>
                  <p class="mt-4">
                    They provide great service facilty consectetur adipisicing
                    elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a
                    vel eos adipisci suscipit fugit placeat.
                  </p>
                </div>
                <i class="icofont-quote-right"></i>
              </div>

              <div class="testimonial-block style-2 gray-bg">
                <div class="testimonial-thumb">
                  <img
                    src="@/assets/images/team/test-thumb1.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>

                <div class="client-info">
                  <h4>Modern Service!</h4>
                  <span>Kolis Mullar</span>
                  <p>
                    They provide great service facilty consectetur adipisicing
                    elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a
                    vel eos adipisci suscipit fugit placeat.
                  </p>
                </div>
                <i class="icofont-quote-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact" id="contact">
      <div class="container">
        <div class="section-title text-center" style="margin-bottom: 40px">
          <h2>Contact Us</h2>
          <div class="divider mx-auto my-4"></div>
          <p>
            Have questions? We're here to help with staffing, job applications,
            and more.
          </p>
        </div>
        <div class="row justify-content-center" style="margin-bottom: 40px">
          <div class="col-lg-4 col-sm-6 col-md-6">
            <div class="contact-block border-0 mb-lg-0 p-0">
              <i class="icofont-live-support"></i>
              <h5>Call Us</h5>
              412-627-0403
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 col-md-6">
            <div class="contact-block border-0 mb-lg-0 p-0">
              <i class="icofont-support-faq"></i>
              <h5>Email Us</h5>
              contact@carevionglobal.com
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Full Name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <textarea
                  rows="5"
                  placeholder="Message"
                  class="form-control"
                ></textarea>
              </div>
              <button class="btn btn-main btn-round-full mt-3">
                Send Message
              </button>
            </form>
          </div>
          <div class="col-lg-6">
            <div class="map-responsive">
              <iframe
                src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                style="border: 0; width: 100%; height: 350px"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useSlickSliders } from "@/composables/useSlickSliders";

const {
  initScrollToTop,
  initPortfolioSlider,
  initClientsLogoSlider,
  initTestimonialSlider,
  initTestimonialSlider2,
} = useSlickSliders();

onMounted(() => {
  initScrollToTop();
  initPortfolioSlider();
  initClientsLogoSlider();
  initTestimonialSlider();
  initTestimonialSlider2();
});
</script>

<style scoped></style>
