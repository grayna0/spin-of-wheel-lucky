<template>

  <div class="prize-lists">

    <div class="input-prize">
      <label for="input">Text</label>
      <input v-model="text" placeholder="Input text here">
      <button @click="addPrize(text)" class="btn-add">Add</button>
    </div>
    <div class="prize-name-wrapper" v-for="(item, index) in prizeArray" :key="index">
      <label for="name"> Name</label>
      <input class="prize-name" id="name" v-model="item.name" :disabled="item.active" />
      <label for="pobability"> Pobability</label>
      <input id="pobability"  v-model.number="item.pobability" class="prize-pobability" />
      <div class="delete">
        <img src="../../public/delete.png" alt="img" @click="deleteItem(item)">
      </div>

    </div>

  </div>
  <div class="wheel-wrapper">
    <div class="whell-point" @click="onRotate">
      Start
    </div>
    <div class="wheel-bg" :class="{ freeze: freeze }" :style="`transform: rotate(${wheelDeg}deg)`">
      <div class="prize-list">

        <div class="prize-item-wrapper" v-for="(item, index) in prizeArray" :key="index">
          <div class="prize-item"
            :style="`transform : rotate(${(360 / initialItem.length) * index}deg); text-align:center`">
            <p class="prize-name">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import { ref } from 'vue'
const text = ref('')
export default {
  data() {
    return {
      wheelDeg: 0,
      newItem: text,
      rolling: false,
      freeze: false,
      initialItem: [
        { name: "prize 1", pobability: 0.125, active: false },
        { name: "prize 2", pobability: 0.125, active: false },
        { name: "prize 3", pobability: 0.125, active: false },
        { name: "prize 4", pobability: 0.125, active: false },
        { name: "prize 5", pobability: 0.125, active: false },
        { name: "prize 6", pobability: 0.125, active: false },
        { name: "prize 7", pobability: 0.125, active: false },
        { name: "prize 8", pobability: 0.125, active: false },
      ]
    }
  },
  computed: {
    prizeArray() {
      const legth = this.initialItem.length
      return this.initialItem.map((item, index) => { return { ...item, pobability: 100 / legth } })
    }
  },
  methods: {
    addPrize(text) {
      if (text !== undefined) {

        this.initialItem.push({ name: text, pobability: 100 / (this.prizeArray.length + 1) })
      }
    },
    deleteItem(item) {
      this.initialItem = this.initialItem.filter((i) => i.name !== item.name)
    },
    updatedItem(index) {
      this.initialItem[index].active = !this.initialItem[index].active
    },
    onRotate() {
      console.log(this.prizeArray);
      if (this.rolling) {
        return
      }
      const totalPobability = this.prizeArray.reduce((total, num) => total + num.pobability, 0)
      const randomValue = Math.random() * (totalPobability/100)
      console.log(randomValue);
      let itemSelected = null
      let cumulativeProbability = 0;
      for (const i of this.prizeArray) {
        cumulativeProbability += i.pobability;
        console.log(i);
        if (randomValue <= cumulativeProbability) {
          itemSelected = i
          break
        }
      }
      const result = this.prizeArray.indexOf(itemSelected)
      this.roll(result);
    }
    ,
    roll(result) {
      this.rolling = true;
      const { wheelDeg, prizeArray } = this;
      this.wheelDeg =
        wheelDeg -
        wheelDeg % 360 +
        6 * 360 +
        (360 - 360 / prizeArray.length * result);
      setTimeout(() => {
        this.rolling = false;
        alert("Result：" + prizeArray[result].name);
      }, 4500);
    }
  }

}

</script>

<style lang="scss">
@import "./index.scss";
</style>