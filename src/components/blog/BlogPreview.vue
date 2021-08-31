<template>
    <section v-lazy:background-image="require('../../assets/images/test-background-new.jpg')" class="publication">
        <div class="publication-content animate__animated animate__slideInLeft">
            <div class="publication-description">
                <p class="publication-desc-text animate__animated animate__slideInDown">
                    Here are some of my publications, below are some of the papers that I worked on.
                </p>
                <div v-if="this.loading" class="lds-dual-ring"></div>
                <ol class="publication-desc-ol" v-else>
                    <li><a href="https://informatika.stei.itb.ac.id/~rinaldi.munir/Matdis/2019-2020/Makalah2019/13518044.pdf">Application of Number Theory in Random Number Generation to Strengthen Plaintext Encryption</a></li>
                    <li><a href="https://informatika.stei.itb.ac.id/~rinaldi.munir/Stmik/2019-2020/Makalah/stima2020k2-041.pdf">Application of Decrease and Conquer in Monotonic Function Analysis (Indonesian)</a></li>
                    <li><a href="https://bit.ly/2Y8f725">{{this.troll.topik}}</a></li>
                </ol>
                <p class="publication-desc-text animate__animated animate__slideInDown">
                    Other than that I also likes to write on a blog. my blog can be found <a href="https://blog.junho.me">here</a>.
                </p>
                
            </div>
            <div class="publication-links">
                <ul>
                    <li class="publication-link-items animate__animated animate__bounceInDown duration-4"><a href="mailto:cjunho9868@gmail.com"><i class="fa fa-envelope"></i></a></li>
                    <li class="publication-link-items animate__animated animate__bounceInDown duration-3"><a target="_blank" href="https://linkedin.com/in/junhoch"><i class="fab fa-linkedin"></i></a></li>
                    <li class="publication-link-items animate__animated animate__bounceInDown duration-2"><a target="_blank" href="https://github.com/junchh"><i class="fab fa-github"></i></a></li>
                    <li class="publication-link-items animate__animated animate__bounceInDown duration-1"><a target="_blank" href="https://dribbble.com/junchh"><i class="fab fa-dribbble"></i></a></li>
                </ul>
            </div>
            <div class="coding-illustration">
                <v-lazy-image :src="require('../../assets/images/file.png')" />
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                loading: true,
                troll: "",
            }
        },

        created() {
            this.fetchData();
        },

        methods: {
            async fetchData() {
                let response = await fetch("https://genta-api.mchfang.com/topik");

                let jsonResp = await response.json();

                this.troll = jsonResp;
                this.loading = false;

            }
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');
section.publication {
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #646496;
    background-blend-mode: lighten;
    position: absolute;
    overflow: hidden;

    animation: fadein 0.15s;
    -moz-animation: fadein 0.15s; /* Firefox */
    -webkit-animation: fadein 0.15s; /* Safari and Chrome */
    -o-animation: fadein 0.15s; /* Opera */
}

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin-bottom: 100px;
  margin-top: 70px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #D3D3F5;
  border-color: #D3D3F5 transparent #D3D3F5 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.publication-content {
    width: 900px;
    height: 100vh;
    background-color: #FFF;
    position: absolute;
    left: 0;
}

.publication-description {
    width: 800px;
    margin: auto;
    margin-top: 90px;
}

.publication-desc-text {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 2.2rem;
    line-height: 55px;
    margin-bottom: 30px;
}

.publication-desc-ol {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1.8rem;
    line-height: 55px;
    margin-bottom: 20px;
    margin-left: 40px;
}

.publication-desc-ol > li > a {
    color:#73739e;
}

.publication-desc-ol > li > a:hover {
    color: #8585b1;
}


.publication-links {
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

.publication-link-items {
    font-size: 2.3rem;
    padding: 12.5px;
}

.publication-link-items a {
    color: #2E2A2A;
    transition: color 0.1s;
}

.publication-link-items a:hover {
    color: #D3D3F5;
}

.coding-illustration {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 80px;
    z-index: -1;
}

.coding-illustration > img {
    width: 350px;
}

.publication-box2 {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #D3D3F5;
    bottom: 0;
    right: 520px;
}

.publication-box1 {
    position: absolute;
    width: 220px;
    height: 220px;
    background-color: #DEDEFF;
    bottom: 130px;
    right: 520px;
}

.anchor-btn {
    padding: 15px 50px 15px 50px;
    text-align: center;
    cursor: pointer;
}

img[lazy='loaded'] {
    opacity: 0;
    animation-name: fadein;
    animation-duration: 0.7s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-direction: normal;
    animation-timing-function: ease-out;
    @keyframes fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
}

@media screen and (max-width: 1100px) {
    .publication-content {
        width: 100%;
    }

    .publication-description {
        width: calc(100% - 100px);
    }

    .publication-desc-text {
        font-size: 1.8rem;
        margin-bottom: 30px;
    }

    .publication-desc-ol {
        font-size: 1.6rem;
    }

    .publication-links {
        margin-left: 0;
    }
}

@media screen and (max-width: 700px) {
    .publication-desc-text {
        font-size: 1.5rem;
        line-height: 35px;
    }

    .publication-desc-ol {
        font-size: 1.4rem;
    }

    .coding-illustration { 
        display: none;
    }
}

@media screen and (max-height: 450px) {
    .coding-illustration { 
        display: none;
    }

    .publication-description {
        margin-left: 70px;
    }
}
</style>