<template>
  <header>
    <nav>
      <div v-on:click="triggerMenu" id="menu-button" class="hamburger">
        <div :class="{ cross1: status }" class="hamburger-line"></div>
        <div :class="{ cross3: status }" class="hamburger-line"></div>
        <div :class="{ cross2: status }" class="hamburger-line"></div>
      </div>
    </nav>
    <div class="side-indicator">
      <ul>
        <li>
          <router-link
            :class="{ 'invert-side-link': status }"
            class="side-link"
            to="/"
          ></router-link>
        </li>
        <li>
          <router-link
            :class="{ 'invert-side-link': status }"
            class="side-link"
            to="/about"
          ></router-link>
        </li>
        <li>
          <router-link
            :class="{ 'invert-side-link': status }"
            class="side-link"
            to="/projects"
          ></router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  props: ["status"],
  methods: {
    triggerMenu() {
      this.$emit("menuShownUpdated");
    },
  },
};
</script>

<style scoped>
header {
  z-index: 15;
  height: 100%;
  background-color: cadetblue;
}
/* Hamburger Menu */
.hamburger {
  cursor: pointer;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 9px;
  padding-right: 9px;
  z-index: 1;
}

.hamburger-line {
  width: 40px;
  height: 3px;
  background-color: #2e2a2a;
  margin-bottom: 9px;
  margin-top: 9px;
  transition: all 0.3s;
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
  border: 2.2px solid #2e2a2a;
  border-radius: 7.5px;
  margin: 10px;
  transition: all 0.2s;
}

.side-link:hover,
.router-link-exact-active {
  background-color: #2e2a2a;
}

.invert-side-link {
  border: 2.2px solid #fff;
}

.side-link:hover.invert-side-link,
.router-link-exact-active.invert-side-link {
  background-color: #fff;
}

.cross1 {
  transform-origin: bottom left;
  transform: rotate(45deg);
  width: 38px;
  background-color: #fff;
  margin-bottom: 25px;
}

.cross3 {
  display: none;
}

.cross2 {
  transform-origin: top left;
  transform: rotate(-45deg);
  width: 38px;
  background-color: #fff;
}

@media (max-width: 500px) {
  .hamburger {
    padding: 0;
    padding-right: 5px;
  }

  .side-indicator {
    margin: 0;
  }
}
</style>
