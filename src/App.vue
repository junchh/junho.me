<template>
    <div>
        <transition name="fade">
            <Menu v-if="menuShown" v-on:menuShownUpdated="updateMenuShown"></Menu>
        </transition>
        <Header v-on:menuShownUpdated="updateMenuShown"></Header>
        <transition :name="transitionName" mode="in-out">
                <router-view/>
        </transition>
    </div>
</template>

<script>
    import Header from './components/navbar/Header.vue'
    import Menu from './components/navbar/Menu.vue'
    import router from './router/index.js'

    export default {
        data: function(){
            return {
                menuShown: false,
                show: false,
                stillScrolling: false,
                hierarchy: ["/", "/about", "/projects"],
                transitionName: ''
            }
        },
        components: {
            Header,
            Menu
        },
        methods: {
            updateMenuShown(){
                this.menuShown = !this.menuShown
            },
            handleScroll(e){
                if(!this.stillScrolling){
                    const path = router.currentRoute.path
                    let nextIndex = this.hierarchy.indexOf(path)
                    console.log(path)
                    console.log(nextIndex)
                    if(e.deltaY > 0){
                        console.log('bawah')
                        nextIndex++
                        if(nextIndex === 3){
                            nextIndex = 2
                        }
                    } else {
                        console.log('atas')
                        nextIndex--
                        if(nextIndex === -1){
                            nextIndex = 0
                        }
                    }
                    if(this.hierarchy[nextIndex] != path){
                        router.push(this.hierarchy[nextIndex])
                        this.stillScrolling = true
                        setTimeout(function(){
                            this.stillScrolling = false
                        }.bind(this), 1000)
                    }
                }
            }
        },
        watch: {
            '$route' (to, from){
                const fromPath = from.path
                const toPath = to.path
                if(fromPath !== toPath){
                    this.transitionName = (this.hierarchy.indexOf(fromPath) < this.hierarchy.indexOf(toPath)) ? 'slide-down' : 'slide-up'
                }
            }
        },
        mounted(){
            document.addEventListener('wheel', this.handleScroll)
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
  transition: transform 0.8s;
}
.slide-down-leave-to {
  transform: translateY(-100%);
}

.slide-up-enter {
    transform: translateY(-100%);
}
.slide-up-enter-active {
  transition: transform 0.8s;
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