<script src="./spin.js"></script>
<template>

    <div class="prize-list">
      <div v-for="(item,index) in initialItem" :key="index">
        <p class="prize-name">{{ item.name }}</p>
      </div>
    </div>
    <div class="wheel-wrapper">
      <div class="whell-point" @click="onRotate">
        Start
      </div>
      <div
      class="wheel-bg"
      :class="{freeze: freeze}"
      :style="`transform: rotate(${wheelDeg}deg)`"
    >
    <div class="prize-list">

      <div class="prize-item-wrapper" v-for="(item, index) in initialItem" :key="index">
        <div class="prize-item" :style="`transform : rotate(${(360/initialItem.length) * index}deg); text-align:center`">
          <p class="prize-name">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>

    </div>
 
</template>
<style lang="scss">
@import "./index.scss";

</style>