const go = (direction, speed) => {
    if (speed >= 75) {
      return "SLOW DOWN!"
    } else {
      return `The car is moving ${direction} at ${speed} mph.`
    }
  }
  




  console.log(go("backwards", 10))