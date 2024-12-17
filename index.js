const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce() to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0); // 0 is the initial value for the accumulator
  
  console.log(totalBatteries);
