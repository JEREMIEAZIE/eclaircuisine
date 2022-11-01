const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const btn1 = document.getElementById("hide1");
const btn2 = document.getElementById("hide2");
const t = document.getElementById("switch");
const c = document.getElementById("navbar");
const b = document.getElementById("res");
const a = document.getElementById("Smenu");
const body = document.getElementById("body");
const p1 = " url(../images/background.png)";
const p2 = "url(../images/output-onlinepngtools.png)";
const rid = document.getElementById("resid");
const fn = document.getElementById("fn");
const ln = document.getElementById("ln");
const am = document.getElementById("Am");
const da = document.getElementById("da");
const order = document.getElementById("order");
const pn = document.getElementById("pn");
const em = document.getElementById("em");
const send = document.getElementById("send");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

btn1.addEventListener("click", () => {
  if (a.style.display === "block") {
    a.style.display = "none";
  } else {
    a.style.display = "block";
  }
});
btn2.addEventListener("click", () => {
  if (b.style.display === "block") {
    b.style.display = "none";
  } else {
    b.style.display = "block";
  }
});

let today = new Date();

let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "/" + mm + "/" + dd;
let today2 = yyyy + mm + dd;

da.setAttribute("min", today);

let generateId = (idLength) => {
  let rString = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < idLength; i++) {
    rString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  let nid = today2 + rString;
  // console.log(nid);
  rid.value = nid;
};
generateId(16);

let rese = [];
const addRes = (e) => {
  e.preventDefault();
  let reserv = {
    id: rid.value,
    firstName: fn.value,
    lastName: ln.value,
    Email: em.value,
    PhoneNumber: pn.value,
    AmountOfPeople: am.value,
    ReservationDate: da.value,
    Order: order.value,
  };
  rese.push(reserv);
  console.log({ rese });
};

document.addEventListener("DOMContentLoaded", () => {
  send.addEventListener("click", addRes);
});
