import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    enemyStats: {
      hp: 100,
      name: 'Great Grey Wolf Sif'
    },
    level: 1
  },
  
  mutations: {
    hit(state, amount) {
      state.enemyStats.hp -= amount;
      if (state.enemyStats.hp <= 0) state.enemyStats.hp = 100;
    }
  },

  getters: {
    enemyHP(state) {
      return state.enemyStats.hp;
    },
    
    currentLevel(state) {
      return state.level;
    }
  }
})
