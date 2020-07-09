<template>
    <header>
        <nav>
            <div v-on:click="triggerMenu" id="menu-button" class="hamburger">
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    props: {
        menuShown: Boolean
    },
    methods: {
        triggerMenu(){
            this.$emit('menuShownUpdated', !this.menuShown)
        }
    }
}
</script>

<style scoped>
header {
    z-index: 15;
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
    display: flex;
    flex-direction: row-reverse;
    padding: 20px;
}

@media (max-width: 500px){

    .hamburger {
        padding: 0;
        padding-right: 5px;
    }
}
</style>