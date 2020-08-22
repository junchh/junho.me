<template>
    <header>
        <nav>
            <transition name="menuView">
                <div v-show="!status" v-on:click="triggerMenu" id="menu-button" class="hamburger">
                    <div class="hamburger-line animate__animated animate__rollIn"></div>
                    <div class="hamburger-line animate__animated animate__rollIn animate__fast"></div>
                    <div class="hamburger-line animate__animated animate__rollIn animate__faster"></div>
                </div>
            </transition>
        </nav>
        <div class="side-indicator">
            <ul>
                <li><router-link class="side-link" to="/"></router-link></li>
                <li><router-link class="side-link" to="/about"></router-link></li>
                <li><router-link class="side-link" to="/projects"></router-link></li>
                <li><router-link class="side-link" to="/blogs"></router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    props: ['status'],
    methods: {
        triggerMenu(){
            this.$emit('menuShownUpdated')
        }
    }
}
</script>

<style scoped>
header {
    z-index: 15;
    height: 100%;
    width: 100%;
}
/* Hamburger Menu */
.hamburger {
    cursor: pointer;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 9px;
    padding-right: 9px;
}

.hamburger-line {
    width: 40px;
    border-top: 3px solid #2E2A2A;
    margin-bottom: 9px;
    margin-top: 9px;
}

/* Navbar */
nav {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row-reverse;
    padding: 20px;
}

.side-indicator {
    position: absolute;
    height: 100%;
    right: 0;
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.side-link {
    display: block;
    height: 15px;
    width: 15px;
    border: 2.2px solid #2E2A2A;
    border-radius: 7.5px;
    margin: 10px;
    transition: background-color 0.2s;
}

.side-link:hover, .router-link-exact-active {
    background-color: #2E2A2A;
}

@media (max-width: 500px){

    .hamburger {
        padding: 0;
        padding-right: 5px;
    }
}
</style>