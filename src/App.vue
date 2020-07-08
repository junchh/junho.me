<template>
    <div>
        <Menu></Menu>
        <Header></Header>
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
                name: 'Max'
            }
        },
        components: {
            Header,
            Hero,
            Menu
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