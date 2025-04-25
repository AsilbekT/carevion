<template>
  <header>
    <div class="header-top-bar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <ul class="top-bar-info list-inline-item pl-0 mb-0">
              <li class="list-inline-item">
                <a href="mailto: contact@carevionglobal.com"
                  ><i class="icofont-support-faq mr-2"></i>
                  contact@carevionglobal.com
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <div class="text-lg-right top-right-bar mt-2 mt-lg-0">
              <a href="tel:+23-345-67890">
                <span>Call Now : </span>
                <span class="h4">412-627-0403</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navigation" id="navbar">
      <div class="container">
        <a class="navbar-brand" style="display: flex" href="index.html">
          <img
            src="@/assets/images/logo.svg"
            style="width: 180px; aspect-ratio: 4/2; object-fit: cover"
            alt=""
          />
        </a>

        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarmain"
          aria-controls="navbarmain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="icofont-navigation-menu"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarmain">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#top">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#nurses">For Nurses</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#employers">For Employers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#blog">Resources</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <router-view />
  <footer class="footer section gray-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mr-auto col-sm-6">
          <div class="widget mb-5 mb-lg-0">
            <div class="logo mb-4" style="display: flex">
              <img
                src="@/assets/images/logo.svg"
                style="width: 180px; aspect-ratio: 4/2; object-fit: cover"
                alt=""
              />
            </div>
            <p>
              Carevion Global Inc provides comprehensive healthcare solutions
              with dedication and excellence.
            </p>

            <ul class="list-inline footer-socials mt-4">
              <li class="list-inline-item">
                <a href="https://www.carevionglobal.com" target="_blank">
                  <i class="icofont-web"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="widget mb-5 mb-lg-0">
            <h4 class="text-capitalize mb-3">Quick Links</h4>
            <div class="divider mb-4"></div>

            <ul class="list-unstyled footer-menu lh-35">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#nurses">For Nurses</a></li>
              <li><a href="#employers">For Employers</a></li>
              <li><a href="#blog">Resources</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="widget widget-contact mb-5 mb-lg-0">
            <h4 class="text-capitalize mb-3">Get in Touch</h4>
            <div class="divider mb-4"></div>

            <div class="footer-contact-block mb-4">
              <div class="icon d-flex align-items-center">
                <i class="icofont-email mr-3"></i>
                <span class="h6 mb-0">Contact Us</span>
              </div>
              <h4 class="mt-2">
                <a href="mailto:contact@carevionglobal.com"
                  >contact@carevionglobal.com</a
                >
              </h4>
            </div>

            <div class="footer-contact-block">
              <div class="icon d-flex align-items-center">
                <i class="icofont-support mr-3"></i>
                <span class="h6 mb-0">Call Us</span>
              </div>
              <h4 class="mt-2">
                <a href="tel:412-627-0403">412-627-0403</a>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-btm py-4 mt-5">
        <div class="row align-items-center justify-content-between">
          <div class="col-lg-6">
            <div class="copyright">
              &copy; Copyright Reserved to
              <span class="text-color">Carevion Global Inc</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <a class="backtop" href="#top">
              <i class="icofont-long-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
