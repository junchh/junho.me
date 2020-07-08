<template>
    <ul class="nav-list">
        <li class="nav-item">
            <a href="#" class="nav-link">
                Home
                <div class="slider"></div>
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">
                About
                <div class="slider"></div>
            </a>
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

}
</script>

<style scoped>
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
    opacity: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
    transition: all 650ms ease-in-out;
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
</style>