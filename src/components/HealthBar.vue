<template>
  <div class="hpBar">
    <div class="inner" :style="{width: value + '%'}"></div>
    <img src="../assets/gui/hpbar.png" draggable="false">
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'HealthBar',
  props: {
    value: Number,
    title: String
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap');

div.hpBar {
  width: 500px;
  height: 50px !important;
  background: #422323;
  border: 5px solid #120404;
  border-radius: 15px;
  display: flex;
}

div.hpBar > .inner {
  width: 100%;
  background: linear-gradient(rgb(255, 98, 59), rgb(162, 0, 0));
  border-radius: 7.5px;
  margin: 5px;
  display: flex;
  transition: all .15s ease-in-out;
}

div.hpBar > .inner::after {
  width: 100%;
  content: '';
  background: linear-gradient(transparent, rgb(255, 68, 0));
  border-radius: 7.5px;
  margin: 5px;
}

div.hpBar > img {
  position: absolute;
  height: 50px;
  transform: translateX(-50%) scale(2);
  filter: hue-rotate(50deg) saturate(1.8) brightness(0.93) contrast(1.3);
}

p {
  content: 'XYU';
  position: absolute;
  left: 50px;
  z-index: 10;
  font-size: 33px;
  line-height: 50px;
  width: 450px;
  margin: 0;
  color: white;
  text-shadow: black 0px 0px 5px;
  font-family: 'Cinzel', serif;
  user-select: none;
}
</style>