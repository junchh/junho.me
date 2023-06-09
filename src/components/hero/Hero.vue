<template>
  <section @wheel="handleScroll" class="hero">
    <div class="bubble1 animate__animated animate__rollIn"></div>
    <div class="bubble2 animate__animated animate__zoomInDown"></div>
    <div class="bubble3 animate__animated animate__zoomInDown"></div>
    <div class="information">
      <h1 class="title animate__animated animate__slideInLeft">Junho Choi</h1>
      <div class="animate__animated animate__bounceInDown">
        <vue-typer
          :text="['A Software Engineer']"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="500"
          :type-delay="100"
          :pre-erase-delay="2000"
          :erase-delay="200"
          erase-style="backspace"
          :erase-on-complete="false"
          caret-animation="blink"
        ></vue-typer>
      </div>
      <p class="description animate__animated animate__slideInLeft">
        I build stuff for the web (I also build mobile apps!)
      </p>
      <router-link
        class="btn-cv animate__animated animate__fadeInDown"
        to="/about"
        >About Me</router-link
      >
      <div class="icons">
        <a
          target="_blank"
          class="icon-item animate__animated animate__fadeIn"
          href="https://linkedin.com/in/junhoch"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a
          target="_blank"
          class="icon-item animate__animated animate__fadeIn"
          href="https://github.com/junchh"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </div>
    <div class="personal-design animate__animated animate__slideInRight">
      <v-lazy-image
        :src-placeholder="
          require('../../assets/images/personal-design-placeholder.jpg')
        "
        :src="require('../../assets/images/personal-design.png')"
      />
    </div>
  </section>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  components: {
    VueTyper,
  },
  methods: {
    handleScroll() {
      //console.log(e.deltaY) //e.deltaY > 0 move down, else move up
    },
  },
};
</script>

<style>
/* Hero / Section1 */
section.hero {
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 10;
  position: fixed;
  overflow: hidden;
}

.hero .bubble1 {
  background-color: #f3f3ff;
  height: 900px;
  width: 900px;
  border-radius: 450px;
  left: 45%;
  bottom: -7%;
  z-index: -1;
  position: absolute;
}

.hero .bubble2 {
  background-color: #f3f3ff;
  height: 170px;
  width: 170px;
  border-radius: 100px;
  left: -20px;
  bottom: -20px;
  z-index: -1;
  position: absolute;
}

.hero .bubble3 {
  background-color: #f3f3ff;
  height: 70px;
  width: 70px;
  border-radius: 40px;
  left: -20px;
  bottom: 210px;
  z-index: -1;
  position: absolute;
}

.information {
  margin-right: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
}

.personal-design img {
  display: block;
  height: 800px;
}

h1.title {
  font-family: "Rubik", sans-serif;
  font-size: 4.8rem;
  font-weight: 400;
  color: #353434;

  margin-bottom: 13px;
}

h2.subtitle,
.vue-typer {
  font-family: "Slabo 13px", serif;
  font-size: 2.6rem;
  font-weight: 400;
  color: #373737;

  margin-top: 13px;
  margin-bottom: 15px;
}

p.description {
  font-size: 2rem;
  color: #433d3d;
  line-height: 27px;
  margin-top: 15px;
  margin-bottom: 30px;
  width: 450px;
}

.btn-cv {
  text-align: center;
  width: 250px;
  background-color: transparent;
  border: 3px solid #000000;
  color: #000000;
  padding: 12px;
  font-size: 2.2rem;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-cv:hover {
  color: #ffffff;
  background-color: #d3d3f5;
  border-color: #d3d3f5;
}

.btn-cv:focus {
  outline: none;
}

.icons {
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.icons .fab {
  font-size: 2.5rem;
  color: #2e2a2a;
  margin-left: 10px;
  margin-right: 10px;
}

.icon-item:hover .fab {
  color: #d3d3f5;
}

@media (max-width: 1500px) {
  .hero .bubble1 {
    width: 800px;
    height: 800px;
    left: 40%;
  }

  .hero .bubble2 {
    width: 150px;
    height: 150px;
  }

  .hero .bubble3 {
    width: 50px;
    height: 50px;
    left: -10px;
    bottom: 190px;
  }
  .information {
    margin-right: 100px;
  }

  .personal-design img {
    height: 700px;
  }
}

@media (max-width: 1200px) {
  .hero .bubble1 {
    left: 35%;
  }
  .information {
    margin-right: 0;
  }

  h1.title {
    font-size: 4rem;
  }

  h2.subtitle,
  .vue-typer {
    font-size: 2.2rem;
  }

  p.description {
    font-size: 1.7rem;
    width: 400px;
  }

  button.btn-cv {
    width: 220px;
    height: 50px;
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .hero .bubble1 {
    left: 0;
    right: -400px;
    bottom: -400px;
  }

  .hero .bubble2 {
    display: none;
  }

  .hero .bubble3 {
    display: none;
  }
  .hero .personal-design {
    display: none;
  }

  h1.title {
    font-size: 4.5rem;
  }

  h2.subtitle,
  .vue-typer {
    font-size: 2.5rem;
  }

  p.description {
    font-size: 2rem;
    width: 500px;
  }
}

@media (max-width: 500px) {
  .information {
    width: 100vw;
    margin-bottom: 120px;
  }

  p.description {
    width: 100%;
  }
}

@media (max-width: 360px) {
  .information {
    margin-bottom: 50px;
  }
}

@media (max-height: 700px) {
  .information {
    margin-bottom: 50px;
  }

  .personal-design img {
    height: 600px;
  }
}

@media (max-height: 450px) {
  .information {
    margin-bottom: 0;
  }
  .personal-design {
    display: none;
  }
}
</style>
