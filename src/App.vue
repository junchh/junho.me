<template>
    <div>
        <transition name="fade" mode="in-out">
            <Menu :menuShown="menuShown" v-if="menuShown" v-on:menuShownUpdated="updateMenuShown"></Menu>
        </transition>
        <Header :menuShown="menuShown" v-on:menuShownUpdated="updateMenuShown"></Header>
        <Hero></Hero>
    </div>
</template>

<script>
    import Header from './components/navbar/Header.vue'
    import Menu from './components/navbar/Menu.vue'
    import Hero from './components/hero/Hero.vue'

    export default {
        data: function(){
            return {
                menuShown: false,
                show: false
            }
        },
        components: {
            Header,
            Hero,
            Menu
        },
        methods: {
            updateMenuShown(value){
                this.menuShown = value
            }
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Slabo+13px&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
}

a {
    text-decoration: none;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s;
}
.fade-enter-to {
  opacity: 0.9;
}
.fade-leave {
  opacity: 0.9;
}
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-leave-to {
  opacity: 0;
}

header {
    position: fixed;
    top: 0;
    right: 0;
}

@media (max-height: 450px){
    html, body {
        font-size: 8px;
    }
}
</style>