<template>
    <section class="blogpreview">
        <div class="bubble1 animate__animated animate__slideInRight"></div>
        <div class="bubble2 animate__animated animate__zoomInDown"></div>
        <div class="bubble3 animate__animated animate__zoomInDown"></div>
        <div class="blogpreview-title">
            <div class="blogpreview-title-text">
                <h1>My Blogs</h1>
                <div class="blogpreview-line"></div>
            </div>
        </div>
        <div class="posts-container">
            <h1>Coming Soon!</h1>
            <div class="posts-grid"> 
        <!--
                <div class="post-item animate__animated animate__fadeInDown animate__faster">
                    <div class="post">
                        <v-lazy-image class="post-image" :src-placeholder="require('../../assets/images/stock1-placeholder.jpg')" :src="require('../../assets/images/stock1.jpg')" />
                        <h1>Creating Cascading Pages like pagePiling.js from scratch with Vue</h1> 
                        <h2>May 6, 2015</h2>
                        <p>
    We circled for some time without doing much damage on either side; the long, straight, needle-like swords flashing in the sunlight, and ringing ...
                        </p>
                    </div>
                </div>
                <div class="post-item animate__animated animate__fadeInDown animate__fast">
                    <div class="post">
                        <v-lazy-image class="post-image" :src-placeholder="require('../../assets/images/stock2-placeholder.jpg')" :src="require('../../assets/images/stock2.jpg')" />
                        <h1>All in Our Head</h1> 
                        <h2>May 5, 2015</h2>
                        <p>
    It's just like the story of the grasshopper and the octopus. All year long, the grasshopper kept burying acorns for winter, while the octopus ...
                        </p>
                    </div>
                </div>
                -->
                <!--
                <div class="post-item animate__animated animate__fadeInDown">
                    <div class="post">
                        <v-lazy-image class="post-image" :src-placeholder="require('../../assets/images/stock1-placeholder.jpg')" :src="require('../../assets/images/image-1.jpg')" />
                        <h1><a class="post-title" href="/blog/first-post/">First Post!</a></h1> 
                        <h2>July 25, 2020</h2>
                        <p>
    Welcome to my blog! this is actually my first post ever on this blog. I used to write on other blog platform, but this is the first time I’m actually writing a blog post on my own website...
                        </p>
                    </div>
                </div>
                -->
            </div>
        </div>
        <!--
        <div class="view-blogs">
            <a class="view-more-button animate__animated animate__fadeInDown" href="/blog">
                View More <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
        </div>
        -->
        <div class="footer animate__animated animate__fadeIn">
            <p>
                &copy; 2020 <a class="footer-link" href="#">Junho</a>. All rights reserved.
            </p>
        </div>
    </section>
</template>

<script>
    export default {
    }
</script>

<style>
.blogpreview {
    min-height: 100vh;
    width: 100vw;
    z-index: 1;
    background-color:#FFFFFF;
    position: absolute;
    overflow: hidden;
}

.blogpreview .bubble1 {
    background-color: #F3F3FF;
    height: 200px;
    width: 200px;
    border-radius: 450px;
    top: -80px;
    right: -80px;
    z-index: -1;
    position: absolute;
}

.blogpreview .bubble2 {
    background-color: #F3F3FF;
    height: 170px;
    width: 170px;
    border-radius: 100px;
    left: -20px;
    bottom: -20px;
    z-index: -1;
    position: absolute;
}

.blogpreview .bubble3 {
    background-color: #F3F3FF;
    height: 70px;
    width: 70px;
    border-radius: 40px;
    left: -20px;
    bottom: 210px;
    z-index: -1;
    position: absolute;
}

.blogpreview-title {
    margin-top: 50px;
}

.blogpreview-title-text {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.blogpreview-title-text h1:hover ~ .blogpreview-line {
    width: 200px;
}

.blogpreview-title-text h1 {
    font-family: 'Rubik', sans-serif;
    font-size: 4.2rem;
    font-weight: 300;
}

.blogpreview-line {
    margin-top: 20px;
    width: 70px;
    height: 3px;
    background-color: #000000;
    transition: width 0.2s;
}

.posts-container {
    margin-top: 120px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
}

.posts-grid {
    display: grid;
    width: 1080px;
    grid-template-columns: repeat(3, 360px);
}

.post-item {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}

.post {
    width: 300px;
}

.post h1 {
    margin-top: 16px;
    line-height: 20px;
    font-size: 14px;
    text-transform: uppercase;
    color: #3d3d61;
}

.post-title {
    color: #3d3d61;
}

.post h2 {
    margin-top: 10px;
    color: #b8b8d3;
    font-size: 12px;
    text-transform: uppercase;
}

.post p {
    margin-top: 20px;
    font-family: 'Droid Serif', Georgia, serif;
    font-size: 15px;
    line-height: 24px;
    color: #56566b;
}

.post-image {
    width: 300px;
}

.view-blogs {
    width: 100%;
    display: flex;
    justify-content: center;
}

.view-more-button {
    text-align: center;
    width: 200px;
    background-color: transparent;
    border: 3px solid #000000;
    color: #000000;
    padding: 12px;
    font-size: 1.8rem;
    font-weight: 600;
    transition: all 0.2s;
}

.view-more-button:hover {
    color: #FFFFFF;
    background-color: #D3D3F5;
    border-color: #D3D3F5;
}

.view-more-button:focus {
    outline: none;
}

.footer {
    margin-top: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
}

.footer-link {
    color: #a0a0c9;
}

.footer-link:hover {
    color: #D3D3F5;
}


@media (max-width: 1100px){
    .posts-grid {
        width: 100%;
        grid-template-columns: repeat(2, 50%);
    }

    .post {
        width: 90%;
    }

    .post-image {
        width: 100%;
    }
}

@media (max-width: 600px){
    .posts-grid {
        grid-template-columns: 100%;
    }

    .post-item {
        margin-bottom: 80px;
    }

    .post {
        width: 80%;
    }
}

@media (max-width: 500px){
    .blogpreview-title-text h1:hover ~ .blogpreview-line {
        width: 160px;
    }

    .blogpreview-title-text h1 {
        font-family: 'Rubik', sans-serif;
        font-size: 3.2rem;
        font-weight: 300;
    }
}
</style>