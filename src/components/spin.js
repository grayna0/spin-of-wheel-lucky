import { ref } from 'vue'
export const text=ref('')
export default {
  data() {
    return {
      whellDeg: 0,
      newItem:text.value,
      rolling: false,
      freeze: false,
      initialItem: [
        { name: "prize 1" },
        { name: "prize 2" },
        { name: "prize 3" },
        { name: "prize 4" },
        { name: "prize 5" },
        { name: "prize 6" },
        { name: "prize 7" },
        { name: "prize 8" },
      ]
    }
  },
  compute: {
    prizeArray () {
      // return this.initialItem.push({name:newItem})
    }
  },
  methods :{ 
    addPrize () {
      this.initialItem.push({name:this.newItem})
      console.log(text.value)
    }
  }
  
}