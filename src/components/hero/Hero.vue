<template>
  <section class="hero">
        <div class="information">
            <h1 class="title">Junho Choi</h1>
            <vue-typer
            :text='["A Student.", "A Web Developer.","A Writer."]'
            :repeat='Infinity'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='100'
            :type-delay='100'
            :pre-erase-delay='2000'
            :erase-delay='200'
            erase-style='backspace'
            :erase-on-complete='false'
            caret-animation='blink'
            ></vue-typer>
            <p class="description">I’m a computer science student who occasionally listen to music while turning melody into fully functional and reusable component.</p>
            <a href="#" class="btn-cv">Download CV</a>
            <div class="icons">
                <a class="icon-item" href="#"><i class="fab fa-linkedin"></i></a>
                <a class="icon-item" href="#"><i class="fab fa-github"></i></a>
            </div>
        </div>
        <div class="personal-design">
            <img src="@/assets/images/personal-design.png">
        </div>
    </section>
</template>

<script>
    import {VueTyper} from 'vue-typer'

    export default {
        components: {
            VueTyper
        }
    }
</script>

<style>
/* Hero / Section1 */
section.hero {
    background-image: url(~@/assets/images/bg-huge.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
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
    font-family: 'Rubik', sans-serif;
    font-size: 4.8rem;
    font-weight: 400;
    color: #353434;

    margin-bottom: 13px;
}

h2.subtitle, .vue-typer {
    font-family: 'Slabo 13px', serif;
    font-size: 2.6rem;
    font-weight: 400;
    color: #373737;

    margin-top: 13px;
    margin-bottom: 15px;
}

p.description {
    font-size: 2rem;
    color: #433D3D;

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
    color: #FFFFFF;
    background-color: #D3D3F5;
    border-color: #D3D3F5;
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
    color: #2E2A2A;
    margin-left: 10px;
    margin-right: 10px;
}

.icon-item:hover .fab {
    color: #D3D3F5;
}

@media (max-width: 1500px) {
    section.hero {
        background-image: url(~@/assets/images/bg-medium.png);
    }

    .information {
        margin-right: 100px;
    }

    .personal-design img {
        height: 700px;
    }
}

@media (max-width: 1200px) {
    .information {
        margin-right: 0;
    }

    h1.title {
        font-size: 4rem;
    }
    
    h2.subtitle {
        font-size: 2.2rem;
    }
    
    p.description {
        font-size: 1.7rem;
        width: 400px;
    }
    
    button.btn-cv {
        width: 220px;
        height:50px;
        font-size: 2rem;
    }
}

@media (max-width: 768px) {
    section.hero {
        background-image: url(~@/assets/images/bg-small.png);
    }

    .personal-design {
        display: none;
    }

    h1.title {
        font-size: 4.5rem;
    }
    
    h2.subtitle {
        font-size: 2.5rem;
    }
    
    p.description {
        font-size: 2rem;
        width: 500px;
    }
}

@media (max-width: 500px){
    .information {
        width: 100vw;
        margin-bottom: 120px;
    }

    p.description {
        width: 100%;
    }
}

@media (max-width: 360px){
    .information {
        margin-bottom: 50px;
    }
}

@media (max-height: 450px){
    .information {
        margin-bottom: 0;
    }
    .personal-design {
        display: none;
    }
}
</style>