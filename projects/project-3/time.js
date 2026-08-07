const clock = document.getElementById("clock");
// const clock = document.querySelector("#clock");

// setIntervel method take two parameter first parameter takes a function 2nd parameter takes the time to after how many seconds or minute the function will run it takes time as mili seconds

setInterval(function () {
  const date = new Date();
  clock.innerText = date.toLocaleTimeString();
}, 1000);
