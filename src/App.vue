<template>
  <div>
    <transition name="fade">
      <Menu v-if="menuShown" v-on:menuShownUpdated="updateMenuShown"></Menu>
    </transition>
    <Header
      :status="menuShown"
      v-on:menuShownUpdated="updateMenuShown"
    ></Header>
    <transition :name="transitionName" mode="in-out">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Header from "./components/navbar/Header.vue";
import Menu from "./components/navbar/Menu.vue";
import router from "./router/index.js";

export default {
  data: function() {
    return {
      menuShown: false,
      stillScrolling: false,
      hierarchy: ["/", "/about", "/projects"],
      touchY: 0,
      transitionName: "",
    };
  },
  components: {
    Header,
    Menu,
  },
  methods: {
    updateMenuShown() {
      this.menuShown = !this.menuShown;
    },
    handleScroll(delta) {
      let bottomOfWindow =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight;
      let topOfWindow = window.scrollY === 0;
      if (!this.stillScrolling) {
        const path = router.currentRoute.path;
        let nextIndex = this.hierarchy.indexOf(path);
        if (delta > 0) {
          nextIndex++;
          if (nextIndex === 4) {
            nextIndex = 3;
          }
        } else if (delta < 0) {
          nextIndex--;
          if (nextIndex === -1) {
            nextIndex = 0;
          }
        }
        if (delta !== 0) {
          if (this.hierarchy[nextIndex] != path) {
            if ((delta > 0 && bottomOfWindow) || (delta <= 0 && topOfWindow)) {
              router.push(this.hierarchy[nextIndex]);
              window.scrollTo(0, 0);
            }
            this.stillScrolling = true;
            setTimeout(
              function() {
                this.stillScrolling = false;
              }.bind(this),
              500
            );
          }
        }
      }
    },
  },
  watch: {
    $route(to, from) {
      const fromPath = from.path;
      const toPath = to.path;
      document.title = to.meta.title;
      if (fromPath !== toPath) {
        this.transitionName =
          this.hierarchy.indexOf(fromPath) < this.hierarchy.indexOf(toPath)
            ? "slide-down"
            : "slide-up";
      }
    },
  },
  created() {
    document.title = this.$router.currentRoute.meta.title;
  },
  mounted() {
    document.addEventListener(
      "wheel",
      function(e) {
        this.handleScroll(e.deltaY);
      }.bind(this)
    );
    document.addEventListener(
      "keydown",
      function(e) {
        if (e.keyCode == 38) {
          this.handleScroll(-100);
        } else if (e.keyCode == 40) {
          this.handleScroll(100);
        }
      }.bind(this)
    );
    document.addEventListener(
      "touchstart",
      function(e) {
        this.touchY = e.touches[0].clientY;
      }.bind(this)
    );
    document.addEventListener(
      "touchend",
      function(e) {
        const deltaY = e.changedTouches[0].clientY - this.touchY;
        if (Math.abs(deltaY) > 50) {
          this.handleScroll(-1 * deltaY);
        }
      }.bind(this)
    );
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Slabo+13px&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  font-family: "Open Sans", sans-serif;
  font-size: 10px;
  overflow-x: hidden;
}

a {
  text-decoration: none;
}

.v-lazy-image {
  opacity: 0;
  transition: opacity 2s;
}
.v-lazy-image-loaded {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-enter-to {
  opacity: 0.9;
}
.fade-leave {
  opacity: 0.9;
}
.fade-leave-active {
  transition: opacity 0.2s ease-in;
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

@media (max-height: 450px) {
  html,
  body {
    font-size: 8px;
  }
}
</style>
