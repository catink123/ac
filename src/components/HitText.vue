<template>
  <p :style="{left: x + 'px', top: y + 'px'}">-{{ amount }} HP</p>
</template>

<script>
export default {
  name: 'HitText',
  props: {
    amount: Number,
    x: Number,
    y: Number
  }
}
</script>

<style scoped>
@keyframes movingUp {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-50px);
    opacity: 0;
  }
}

p {
  color: rgb(255, 0, 0);
  text-shadow: black 0 0 5px;
  font-size: 25px;
  animation: movingUp .35s forwards linear;
  position: fixed;
  font-weight: bold;
  user-select: none;
  pointer-events: none;
  transform: translateX(-50%) translateY(-50%);
}
</style>