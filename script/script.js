let clock = document.querySelector(".clock");
let days = document.querySelector(".day");
let date = document.querySelector(".date");
let year = document.querySelector(".year");
let months = document.querySelector(".month");
let milisecond = document.querySelector(".milisecond");

function dateShows() {
  let now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let day = now.getDay();
  let dates = now.getDate();
  let month = now.getMonth();
  let years = now.getFullYear();
  let millsec = now.getMilliseconds();

  let daies = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthes = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  days.innerHTML = daies[day];
  months.innerHTML = monthes[month];
  date.innerHTML = dates;
  year.innerHTML = years;
  milisecond.innerHTML = millsec;

  let session =
    h >= 12
      ? `<span style = "font-size:50px ; color: #FFFF33;
text-shadow: 0 0 10px #FFFF33, 0 0 20px #FFFF33; "> PM</span>`
      : `<span style = "font-size:50px ;color: #FFFF33;
text-shadow: 0 0 10px #FFFF33, 0 0 20px #FFFF33;"> AM</span>`;

  h = h % 12;
  h = h === 0 ? 12 : h;

  h = h.toString().padStart(2, "0");
  m = m.toString().padStart(2, "0");
  s = s.toString().padStart(2, "0");

  clock.innerHTML = `${h} : ${m} : ${s} ${session} `;
}

setInterval(() => {
  dateShows();
}, 10);
