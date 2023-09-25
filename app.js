console.log(new Date().getDate())

function setTime () {
  const week_array = ['일', '월', '화', '수', '목', '금', '토']

  const time = new Date();
  const hours = time.getHours().toString().padStart(2,"0");
  const minutes = time.getMinutes().toString().padStart(2,"0");
  const seconds = time.getSeconds().toString().padStart(2,"0");
  const year = time.getFullYear();
  const month = time.getMonth()+1;
  const date = time.getDate();
  const week = week_array[time.getDay()]+"요일"; 
  const timeH1 = document.querySelector(".time");
  const dateH1 = document.querySelector(".date");
  timeH1.innerHTML = `${hours}:${minutes}:${seconds}`
  dateH1.innerHTML = `${year}.${month}.${date}. ${week}`
}

setInterval(setTime,1000)

// 반복
// setInterval(sayHello,1000);

// 1회성
// setTimeout(sayHello, 1000)