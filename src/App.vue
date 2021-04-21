<template>
  <div id="app" :style="appStyle">
    <div class="verticalContainer center">
      <img class="enemy" src="./assets/enems/monster.png" @click="hit" draggable="false">
    </div>
    <div class="horContainer center bottom">
      <health-bar class="hpBar" :value="enemyHP" :title="enemyName" />
      <div class="menu">
        <button @click="inventoryOpen = false" :style="{backgroundImage: `url('${icons.inventoryIcon}')`}"></button>
      </div>
    </div>
    <inventory v-if="inventoryOpen" />
    <div>
      <hit-text v-for="ht in hitTexts" :key="ht.key" :amount="ht.amount" :x="ht.x" :y="ht.y" />
    </div>
  </div>
</template>

<script>
import bgs from './assets/bg/bgs';
import HealthBar from './components/HealthBar.vue';
import Inventory from './components/Inventory.vue';
import icons from './assets/icons';
import {mapGetters} from 'vuex';
import HitText from './components/HitText.vue';
import enemies from './assets/enems/enemies';

export default {
  name: 'App',

  data() {
    return {
      enemyName: 'MONSTER Energy ULTRA™',

      inventoryOpen: false,
      hitTexts: []
    }
  },

  components: {
    HealthBar,
    Inventory,
    HitText
  },

  computed: {
    appStyle() {
      return {
        background: `url(${bgs.night_woods})`
      }
    },

    icons() {
      return icons
    },
    ...mapGetters(['enemyHP'])
  },

  methods: {
    hit() {
      this.$store.commit('hit', 10);
    }
  },

  mounted() {
    document.querySelector(".enemy").addEventListener("click", e => {
      var x = e.clientX;
      var y = e.clientY;

      var key = Math.floor(Math.random() * 1000000);

      var hitText = {
        x,
        y,
        key,
        amount: 10
      };

      this.hitTexts.push(hitText);

      setTimeout(() => {
        var index = this.hitTexts.indexOf(hitText);
        this.hitTexts.splice(index, 1);
      }, 1000)
    })
  }
}
</script>

<style>
body {
  margin: 0;
  /* overflow: hidden; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  background-size: cover !important;
  background-position: center !important;
}

div.vertContainer {
  display: flex;
  flex-direction: column;
}

div.horContainer {
  display: flex;
  flex-direction: row;
}

div.hpBar {
  bottom: 0;
  margin-bottom: 20px;
}

.center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.bottom {
  position: absolute;
  bottom: 0;
}

.enemy {
  height: calc(100vh - 80px);
  transition-duration: .1s;
}

.enemy:active {
  transform: scale(0.9);
  filter: sepia() hue-rotate(-60deg) brightness(0.6) contrast(5);
}

div.screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

/* div.menu {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 15px;
} */

div.menu {
  transform: translateY(-5px);
}

div.menu button {
  background: transparent;
  border: none;
  background-size: cover;
  width: 70px;
  height: 70px;
  filter: hue-rotate(285deg) saturate(1.1) brightness(0.6) contrast(1.2);
  transition-duration: .1s;
  outline: none;
}

div.menu button:active {
  transform: scale(0.7);
  filter: hue-rotate(280deg) saturate(1) brightness(1) contrast(1);
}
</style>
