<template>
  <section class="projects">
        <div class="bubble1 animate__animated animate__slideInRight"></div>
        <div class="bubble2 animate__animated animate__zoomInDown"></div>
        <div class="bubble3 animate__animated animate__zoomInDown"></div>
        <div class="projects-title animate__animated animate__fadeIn">
            <div class="projects-title-text">
                <h1>Portfolio</h1>
                <div class="projects-line"></div>
            </div>
        </div>
        <div class="projects-content">
            <div class="projects-grid">
                <div class="project-item animate__animated animate__fadeInDown">
                    <v-lazy-image class="project-image" :src="require('../../assets/images/stock-image.jpg')" />
                    <div class="project-title">
                        <span><i class="fa fa-search-plus" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div class="project-item animate__animated animate__fadeInDown">
                    <v-lazy-image class="project-image" :src="require('../../assets/images/about-profile.jpg')" />
                </div>
                 <div class="project-item animate__animated animate__fadeInDown">
                    <v-lazy-image class="project-image" :src="require('../../assets/images/stock-image.jpg')" />
                </div>
                <div class="project-item animate__animated animate__fadeInDown">
                    <v-lazy-image class="project-image" :src="require('../../assets/images/about-profile.jpg')" />
                </div>
                <div class="project-item animate__animated animate__fadeInDown">
                    heya
                </div>
                <div class="project-item animate__animated animate__fadeInDown">
                    heya
                </div>
                <div class="project-item animate__animated animate__fadeInDown">
                    heya
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
    }
</script>

<style>
.projects {
    min-height: 100vh;
    width: 100vw;
    z-index: 2;
    background-color:#FFFFFF;
    position: absolute;
    overflow: hidden;
}

.projects .bubble1 {
    background-color: #F3F3FF;
    height: 200px;
    width: 200px;
    border-radius: 450px;
    top: -80px;
    right: -80px;
    z-index: -1;
    position: absolute;
}

.projects .bubble2 {
    background-color: #F3F3FF;
    height: 170px;
    width: 170px;
    border-radius: 100px;
    left: -20px;
    bottom: -20px;
    z-index: -1;
    position: absolute;
}

.projects .bubble3 {
    background-color: #F3F3FF;
    height: 70px;
    width: 70px;
    border-radius: 40px;
    left: -20px;
    bottom: 210px;
    z-index: -1;
    position: absolute;
}

.projects-title {
    margin-top: 50px;
}

.projects-title-text {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.projects-title-text h1:hover ~ .projects-line {
    width: 200px;
}

.projects-title-text h1 {
    font-family: 'Rubik', sans-serif;
    font-size: 4.2rem;
    font-weight: 300;
}

.projects-line {
    margin-top: 20px;
    width: 70px;
    height: 3px;
    background-color: #000000;
    transition: width 0.2s;
}

.projects-content {
    width: 100vw;
    margin-top: 80px;
    display: flex;
    justify-content: center;
}

.projects-grid {
    width: 900px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-gap: 20px 10px;
}

.project-item {
    cursor: pointer;
    width: 280px;
    height: 200px;
    position: relative;
    overflow: hidden;
    text-align: center;
    color:purple;
}

.project-image {

    filter: brightness(60%);
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;
    transition: all 0.3s;
    transform: scale(1);
}


.project-title {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.project-title span {
    font-size: 50px;
    color: #FFFFFF;
    opacity: 0%;
    transition: all 0.3s;
}

.project-item:hover .project-image {
    transform: scale(1.2);
}

.project-item:hover .project-title span {
    display: inline;
    opacity: 70%;
}
@media (max-width: 1000px){

    .projects-content {
        margin-top: 100px;
    }
    .projects-grid {
        width: 100%;
        grid-template-columns: repeat(2, 50%);
    }

    .project-item {
        width: 100%;
        height: 300px;
    }
}

@media (max-width: 768px){
    .projects-grid {
        grid-template-columns: 100%;
    }

    .project-item {
        width: 100%;
        height: 280px;
    }
}

@media (max-width: 500px){
    .projects-title-text h1:hover ~ .projects-line {
        width: 160px;
    }

    .projects-title-text h1 {
        font-family: 'Rubik', sans-serif;
        font-size: 3.2rem;
        font-weight: 300;
    }
}
</style>