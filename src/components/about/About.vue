<template>
    <section class="about">
        <div class="about-title">
            <div class="about-title-text">
                <h1>About Me</h1>
                <div class="about-line"></div>
            </div>
        </div>
        <div class="about-content">
            <div class="about-picture">
                <img src="@/assets/images/about-profile.jpg"/>
            </div>
            <div class="about-information">
                <h2 class="greeting">Hi I'm Junho</h2>
                <p>
                    I’m an Informatics student at Bandung Institute of Technology (ITB). I love to write, code, and listen to music.
                
                </p>
                <br>
                <p>
                    I’m mainly interested in backend development although I also love playing around with javascript in frontend and creating interactive UI / UX. 
                </p>

                <div class="contact-links">
                    <a class="rounded-icon" href="#"><i class="fab fa-linkedin"></i></a>
                    <a class="rounded-icon" href="#"><i class="fab fa-linkedin"></i></a>
                    <a class="rounded-icon" href="#"><i class="fab fa-linkedin"></i></a>
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
section.about {
    min-height: 100vh;
    width: 100vw;
    z-index: 5;
    background-color: #FFFFFF;
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
</style>