export default {
  data() {
    return {
      whellDeg: 0,
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
  computed() {
    prizeList = () => {

      this.initialItem.push({name:"prize"})
    }
  }
}