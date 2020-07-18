<template>
  <section class="projects">
        <div class="bubble1"></div>
        <div class="bubble2"></div>
        <div class="bubble3"></div>
        <div class="projects-title">
            <div class="projects-title-text">
                <h1>Portfolio</h1>
                <div class="projects-line"></div>
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
</style>