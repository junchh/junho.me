<template>
<ul class="nav-list">
    <div v-on:click="triggerMenu" class="close-btn">
        &times;
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
        <router-link class="nav-link" to="/projects">
            Portfolio
            <div class="slider"></div>
        </router-link>
    </li>
    <li class="nav-item">
        <router-link class="nav-link" to="/publication">
            Blog
            <div class="slider"></div>
        </router-link>
    </li>
</ul>
</template>

<script>
export default {
    methods: {
        triggerMenu(){
            this.$emit('menuShownUpdated')
        }
    }
}
</script>

<style>
ul {
    list-style: none;
}

.close-btn {
    display: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 25px;
    right: 25px;
    font-size: 70px;
    text-align: center;
    line-height: 35px;
    z-index: 25;
    color: #FFFFFF;
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
    z-index: 12;
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

.nav-link:hover .slider, .router-link-exact-active .slider {
    width: 100%;
}

.fas {
    color: #FFFFFF;
    font-size: 50px;
}
</style>