<template>
    <section class="about">
        <div class="bubble1 animate__animated animate__slideInRight"></div>
        <div class="bubble2 animate__animated animate__zoomInDown"></div>
        <div class="bubble3 animate__animated animate__zoomInDown"></div>
        <div class="about-title animate__animated animate__fadeIn">
            <div class="about-title-text">
                <h1>About Me</h1>
                <div class="about-line"></div>
            </div>
        </div>
        <div class="about-content">
            <div class="about-picture animate__animated animate__fadeInDown">
                <v-lazy-image :src="require('../../assets/images/about-profile.jpg')"/>
            </div>
            <div class="about-information">
                <h2 v-on:mouseover="hoverGreeting" v-on:mouseout="hoverGreeting" class="greeting animate__animated animate__slideInRight">Hi I'm Junho
                    <transition name="fade">
                        <span v-if="greetingHover">Choi Hedyatmo</span>
                    </transition>
                    </h2>
                <p class="animate__animated animate__slideInRight animate__fast">
                    I’m an Informatics student at Bandung Institute of Technology (ITB). I love to write, code, and listen to music.
                
                </p>
                <br>
                <p class="animate__animated animate__slideInRight animate__faster">
                    I’m mainly interested in backend development although I also love playing around with javascript in frontend and creating interactive UI / UX. 
                </p>
                <div class="contact-links">
                    <a class="rounded-icon animate__animated animate__fadeInBottomRight" href="#"><i class="fab fa-linkedin"></i></a>
                    <a class="rounded-icon animate__animated animate__fadeInBottomRight" href="#"><i class="fab fa-linkedin"></i></a>
                    <a class="rounded-icon animate__animated animate__fadeInBottomRight" href="#"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data: function(){
            return {
                greetingHover: false
            }
        },
        methods: {
            hoverGreeting(){
                this.greetingHover = !this.greetingHover
            }
        }
    }
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.4s ease-in;
}
.fade-enter-to {
  opacity: 0.9;
}
.fade-leave {
  opacity: 0.9;
}
.fade-leave-active {
  transition: opacity 0.4s ease-in;
}
.fade-leave-to {
  opacity: 0;
}
section.about {
    min-height: 100vh;
    width: 100vw;
    z-index: 5;
    background-color: #FFFFFF;
    position: absolute;
    overflow: hidden;
}

.about .bubble1 {
    background-color: #F3F3FF;
    height: 200px;
    width: 200px;
    border-radius: 450px;
    top: -80px;
    right: -80px;
    z-index: -1;
    position: absolute;
}

.about .bubble2 {
    background-color: #F3F3FF;
    height: 170px;
    width: 170px;
    border-radius: 100px;
    left: -20px;
    bottom: -20px;
    z-index: -1;
    position: absolute;
}

.about .bubble3 {
    background-color: #F3F3FF;
    height: 70px;
    width: 70px;
    border-radius: 40px;
    left: -20px;
    bottom: 210px;
    z-index: -1;
    position: absolute;
}

.about-title {
    margin-top: 50px;
}

.about-title-text {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about-title-text h1:hover ~ .about-line {
    width: 200px;
}

.about-title-text h1 {
    font-family: 'Rubik', sans-serif;
    font-size: 4.2rem;
    font-weight: 300;
}

.about-line {
    margin-top: 20px;
    width: 70px;
    height: 3px;
    background-color: #000000;
    transition: width 0.2s;
}

.about-content {
    display: flex;
    justify-content: center;
    width: 100%;
}

.about-picture {
    margin-top: 60px;
    margin-right: 100px;
}
.about-picture img {
    width: 400px;
}

.about-information {
    margin-top: 60px;
    max-width: 500px;
}

.about-information .greeting {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 20px;
}   

.about-information p {
    font-size: 2rem;
}

.contact-links {
    margin-top: 50px;
    margin-bottom: 20px;
    display: flex;
}

.rounded-icon {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #F3F3FF;
    text-align: center;
    margin-right: 25px;
    padding: 13px;
    font-size: 20px;
    color: #C6C6EF;
    transition: all 0.3s;
}

.rounded-icon:hover {
    background-color: #C6C6EF;
    color: #F3F3FF;
}

@media (max-width: 1000px){
    .about-content {
        flex-direction: column;
        align-items: center;
    }

    .about-picture {
        margin-right: 0;
    }

    .about-information {
        max-width: 400px;
    }
}

@media (max-width: 768px){
    .about .bubble2 {
        left: auto;
        right: -10px;
    }

    .about .bubble3 {
        left: auto;
        right: -10px;
    }
}

@media (max-width: 500px){
    .about-picture img {
        width: 100vw;
    }

    .about-information {
        max-width: 100%;
        padding-left: 10px;
        padding-right: 10px;
    }

    .about-title-text h1:hover ~ .about-line {
        width: 160px;
    }

    .about-title-text h1 {
        font-family: 'Rubik', sans-serif;
        font-size: 3.2rem;
        font-weight: 300;
    }

    .about-information .greeting {
        font-size: 2.2rem;
    }   

    .about-information p {
        font-size: 1.7rem;
    }
}
</style>