<template>
    <section class="about">
        <div class="about-content animate__animated animate__slideInRight">
            <div class="about-description">
                <p class="about-desc-text animate__animated animate__slideInDown">
                    I’m an Informatics student from Bandung Institute of Technology.
                </p>
                <p class="about-desc-text animate__animated animate__slideInDown">
                    I love writing, coding, and enjoys developing in either backend or frontend. I also solve coding problems occasionally.
                </p>
                <button class="btn-cv animate__animated animate__fadeInDown">Contact Me</button>
            </div>
            <div class="about-links">
                <ul>
                    <li class="about-link-items animate__animated animate__bounceInDown duration-4"><a href="#"><i class="fa fa-envelope"></i></a></li>
                    <li class="about-link-items animate__animated animate__bounceInDown duration-3"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                    <li class="about-link-items animate__animated animate__bounceInDown duration-2"><a href="#"><i class="fab fa-github"></i></a></li>
                    <li class="about-link-items animate__animated animate__bounceInDown duration-1"><a href="#"><i class="fab fa-dribbble"></i></a></li>
                </ul>
            </div>
            <div class="about-box1 animate__animated animate__slideInLeft"></div>
            <div class="about-box2 animate__animated animate__slideInLeft"></div>
            <div class="coding-illustration">
                <v-lazy-image :src="require('../../assets/images/coding-illustration.png')" />
            </div>
        </div>
    </section>
</template>

<script>
    export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');
section.about {
    height: 100vh;
    width: 100vw;
    z-index: 5;
    background-image: url(~@/assets/images/test-background-new.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #646496;
    background-blend-mode: lighten;
    position: absolute;
    overflow: hidden;
}

.about-content {
    width: 1050px;
    height: 100vh;
    background-color: #FFF;
    position: absolute;
    right: 0;
}

.about-description {
    width: 850px;
    margin: auto;
    margin-top: 90px;
}

.about-desc-text {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 3.2rem;
    line-height: 55px;
    margin-bottom: 60px;
}

.about-links {
    position: absolute;
    left: 0;
    bottom: 0;

    margin-left: 10px;
    margin-bottom: 40px;
}

.duration-1 {
    --animate-duration: 0.9s;
}

.duration-2 {
    --animate-duration: 1.2s;
}

.duration-3 {
    --animate-duration: 1.5s;
}

.duration-4 {
    --animate-duration: 1.8s;
}

.about-link-items {
    font-size: 2.3rem;
    padding: 12.5px;
}

.about-link-items a {
    color: #2E2A2A;
    transition: color 0.1s;
}

.about-link-items a:hover {
    color: #D3D3F5;
}

.coding-illustration {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 80px;
}

.coding-illustration > img {
    width: 350px;
}

.about-box2 {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #D3D3F5;
    bottom: 0;
    right: 520px;
}

.about-box1 {
    position: absolute;
    width: 220px;
    height: 220px;
    background-color: #DEDEFF;
    bottom: 130px;
    right: 520px;
}
</style>