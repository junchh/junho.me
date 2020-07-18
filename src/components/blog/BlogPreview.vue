<template>
  <section class="blogpreview">
        <div class="bubble1"></div>
        <div class="bubble2"></div>
        <div class="bubble3"></div>
        <div class="blogpreview-title">
            <div class="blogpreview-title-text">
                <h1>My Blogs</h1>
                <div class="blogpreview-line"></div>
            </div>
        </div>
        <div class="posts-container">
            <div class="posts-grid"> 
                <div class="post-item">
                    <div class="post">
                        <img class="post-image" src="@/assets/images/stock1.jpg" />
                        <h1>Runaway a Road Adventure</h1> 
                        <h2>May 6, 2015</h2>
                        <p>
    We circled for some time without doing much damage on either side; the long, straight, needle-like swords flashing in the sunlight, and ringing ...
                        </p>
                    </div>
                </div>
                <div class="post-item">
                    <div class="post">
                        <img class="post-image" src="@/assets/images/stock2.jpg" />
                        <h1>All in Our Head</h1> 
                        <h2>May 5, 2015</h2>
                        <p>
    It's just like the story of the grasshopper and the octopus. All year long, the grasshopper kept burying acorns for winter, while the octopus ...
                        </p>
                    </div>
                </div>
                <div class="post-item">
                    <div class="post">
                        <img class="post-image" src="@/assets/images/stock3.jpg" />
                        <h1>Runaway a Road Adventure</h1> 
                        <h2>May 3, 2015</h2>
                        <p>
    It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years.
                        </p>
                    </div>
                </div>
                <div class="post-item">
                    <div class="post">
                        <img class="post-image" src="@/assets/images/stock3.jpg" />
                        <h1>Runaway a Road Adventure</h1> 
                        <h2>May 3, 2015</h2>
                        <p>
    It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years.
                        </p>
                    </div>
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
    font-size: 14px;
    text-transform: uppercase;
    color: #585858;
}

.post h2 {
    margin-top: 10px;
    color: #DAD8D1;
    font-size: 12px;
    text-transform: uppercase;
}

.post p {
    margin-top: 20px;
    font-family: 'Droid Serif', Georgia, serif;
    font-size: 15px;
    line-height: 24px;
    color: #585858;
}

.post-image {
    width: 300px;
}

@media (max-width: 1100px){

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