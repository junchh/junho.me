<template>
<ul class="nav-list">
    <div v-on:click="triggerMenu" class="close-btn">
        <i class="fas fa-times"></i>
    </div>
    <li class="nav-item">
        <router-link class="nav-link" to="/">
            Home
            <div class="slider"></div>
        </router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" to="/about">
            About
            <div class="slider"></div>
        </router-link>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">
            Experience
            <div class="slider"></div>
        </a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">
            Blog
            <div class="slider"></div>
        </a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">
            Contact Me
            <div class="slider"></div>    
        </a>
    </li>
</ul>
</template>

<script>
export default {
    props: {
        menuShown: Boolean
    },
    methods: {
        triggerMenu(){
            console.log("HEHEHE")
            this.$emit('menuShownUpdated', !this.menuShown)
        }
    }
}
</script>

<style>
ul {
    list-style: none;
}

.nav-list {
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    position: fixed;
    top: 0;
    right: 0;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 20;
}

.nav-item {
    margin: 1.5rem;
}

.nav-link {
    display: inline-block;
    font-size: 3rem;
    padding: 0.5rem;
    color: #FFFFFF;
}

.slider {
    margin-top: 5px;
    width: 0;
    background-color: #FFFFFF;
    height: 3px;
    transition: all 200ms;
}

.nav-link:hover .slider {
    width: 100%;
}

.fas {
    color: #FFFFFF;
    font-size: 50px;
}
</style>