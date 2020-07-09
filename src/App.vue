<template>
    <div>
        <transition name="fade">
            <Menu :menuShown="menuShown" v-if="menuShown" v-on:menuShownUpdated="updateMenuShown"></Menu>
        </transition>
        <Header :menuShown="menuShown" v-on:menuShownUpdated="updateMenuShown"></Header>
        <transition :name="transitionName">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    import Header from './components/navbar/Header.vue'
    import Menu from './components/navbar/Menu.vue'

    export default {
        data: function(){
            return {
                menuShown: false,
                show: false,
                transitionName: ''
            }
        },
        components: {
            Header,
            Menu
        },
        methods: {
            updateMenuShown(value){
                this.menuShown = value
            }
        },
        watch: {
            '$route' (to, from){
                const fromPath = (from.path === '/') ? '/home' : from.path
                const toPath = (to.path === '/') ? '/home' : to.path
                const hierarchy = ["/home", "/about"]
                if(fromPath !== toPath){
                    this.transitionName = (hierarchy.indexOf(fromPath) < hierarchy.indexOf(toPath)) ? 'slide-down' : 'slide-up'
                }
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


.slide-down-leave {
    transform: translateY(0);
}
.slide-down-leave-active {
  transition: transform 2s;
}
.slide-down-leave-to {
  transform: translateY(-100%);
}

.slide-up-enter {
    transform: translateY(-100%);
}
.slide-up-enter-active {
  transition: transform 2s;
}
.slide-up-enter-to {
  transform: translateY(0);
}

header {
    position: fixed;
    top: 0;
    right: 0;
}

@media (max-height: 450px){
    html, body {
        font-size: 8px;
        position: absolute;
        overflow: hidden;
    }
}
</style>