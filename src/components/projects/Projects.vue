<template>
    <section class="projects">
        <section class="project-view" v-show="projectView">
            <div class="container">
                <a class="return-link" v-on:click="projectView = !projectView">← return</a>
                <h1 class="projectview-title">{{projects[curId].title}}</h1>
                <div class="projectview-description">
                    <div class="projectview-image">
                        <img :src="require('../../assets/images/projects/' + projects[curId].image)" />
                    </div>
                    <div class="projectview-desc">
                        <h1>Overview</h1>
                        <p>{{projects[curId].description}}</p>
                        <div class="projectview-links">
                            <a v-for="item in projects[curId].links" :key="item[0]" :href="item[1]">
                                {{item[0]}}
                            </a>
                        </div>
                        <h1>Technologies used</h1>
                        <ul>
                            <li v-for="item in projects[curId].technologies" :key="item">
                                {{item}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div class="project-big">

        </div>
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
                <div v-for="item in projects" :key="item.id" :id="item.id" v-on:click="getProject" class="project-item animate__animated animate__fadeInDown">
                    <v-lazy-image class="project-image" :src="require('../../assets/images/projects/' + item.image)" />
                    <div class="project-title">
                        <span><i class="fa fa-search-plus" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import projectData from '../../assets/projectData.json'
    export default {
        data: function(){
            return {
                projects: projectData,
                curId: 0,
                projectView: false
            }
        },
        methods: {
            getProject(e) {
                const id = e.currentTarget.id
                this.curId = id
                this.projectView = true
            }
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@300&display=swap');
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
    transition: all 0.3s !important;
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

.project-view {
    min-height: 100vh;
    width: 100vw;
    z-index: 5;
    background-color:#FFFFFF;
    position: absolute;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

.project-view .container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}

.return-link {
    cursor: pointer;
    color: #5FB4E4;
    font-size: 1.6rem;
    margin-bottom: 20px;
}

.return-link:hover {
    color:#71c3f3;
}

.projectview-title {
    font-family: 'Rokkitt', serif;
    font-size: 6rem;
    font-weight: 300;
    margin-bottom: 80px;

    text-align: center;
}


.projectview-description {
    display: flex;
    width: 1200px;
}

.projectview-image {
    margin-right: 80px;
}

.projectview-image img {
    width: 700px;
}

.projectview-desc h1 {
    font-size: 2.6rem;
    font-weight: 400;
    margin-bottom: 20px;
}

.projectview-desc p, .projectview-desc ul {
    font-size: 1.7rem;
    line-height: 2.7rem;
    margin-bottom: 40px;
    margin-left: 20px;
    text-align: justify;
}

.projectview-desc ul {
    list-style-type: circle;
    margin-left: 40px;
}

.projectview-links {
    margin-bottom: 40px;
    margin-left: 20px;
}

.projectview-links a {
    margin-right: 20px;
    font-size: 1.6rem;
    color: #5FB4E4;
}

.projectview-links a:hover {
    color: #71c3f3;
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