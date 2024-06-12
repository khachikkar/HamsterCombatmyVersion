let chpes = [
    "Morse", "web3", "redkomb", "kargin", "Andorafo", "Vardanmamikonyan", "hecanivemuzum", "haykakan", "sketch", "haxordum"];
    
  if(!localStorage.getItem("coin")){
  localStorage.setItem("coin",JSON.stringify([]))
  }else{
  let str = JSON.parse(localStorage.getItem("coin"))
  if(str.length >0){
  let last = str[str.length - 1]
  document.getElementById("po").textContent = last
  }
  }
    
  
  let idx = Math.floor(Math.random() * chpes.length);
  let dayCode = chpes[idx];
  console.log(dayCode);
  
  let i = 3;
  
  const coin = document.getElementById("c");
  const po = document.getElementById("po");
  const redButton = document.getElementById("red");
  const butButton = document.getElementById("but");
  const dayCodeInput = document.getElementById("dayCodeInput");
  const text = document.getElementById("text");
  const tt = document.getElementById("tt");
  
  // Function to generate a random number between min and max (inclusive)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to increment coin value automatically
  function autoIncrementCoin() {
    let randomIncrement = getRandomInt(7000, 9000);
    let a = parseInt(po.textContent);
    a += randomIncrement;
    po.textContent = a;
  
   
    return a
  }
  
  // Set interval to run the autoIncrementCoin function every 1 second (1000 milliseconds)
  setInterval(autoIncrementCoin, 2000);
  
  
  function addIntem(){
  let current = parseInt(po.textContent)
  let data = JSON.parse(localStorage.getItem("coin"))
  data.push(current)
    localStorage.setItem("coin", JSON.stringify(data))
   }
   
  setInterval(addIntem, 3600000)
  
  
  // Event listener for the red button
  redButton.addEventListener("click", () => {
    let a = parseInt(po.textContent);
    a += 100;
    po.textContent = a;
  });
  
  // Event listener for the but button
  butButton.addEventListener("click", () => {
    let a = dayCodeInput.value;
    if (a === dayCode) {
      let b = parseInt(po.textContent);
      b += 100000;
      po.textContent = b;
    dayCodeInput.value = "";
      dayCode = 0;
    } else {
      dayCodeInput.value = "";
    }
  
    if (parseInt(po.textContent) >= parseInt(c.textContent)) {
      let m = parseInt(coin.textContent) + 1000000;
      coin.textContent = m;
      text.textContent = `for LVL ${i + 1}`;
      i++;
      tt.textContent = `LVL ${i - 1}`;
    }
  });
  
  
  
