/*------------------------------------------
        SHOW/HIDE NAV ON SCROLL
-------------------------------------------*/
const sidebar = document.querySelector(".nav-menu");
const menuLinks = document.querySelectorAll(".nav-menu li a");
const openNav = document.getElementById("open");
const closeNav = document.querySelector(".closeNav");

window.onload = () => {
  document.getElementById("site-header").style.display = "none";
};
window.onscroll = () => {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("site-header").style.display = "block";
    document.getElementById("site-header").style.background = "#fff";
    document.getElementById("site-header").style.color = "black";
    document.getElementById("site-header").style.boxShadow =
      "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
  } else {
    document.getElementById("site-header").style.display = "none";
    document.getElementById("site-header").style.background = "none";
    document.getElementById("site-header").style.color = "white";
  }
}

/*------------------------------------------
        = SIDEBAR
-------------------------------------------*/

const main = document.querySelector(".page-wrapper");
openNav.addEventListener("click", () => {
  sidebar.style.left = "-10px";
});

closeNav.addEventListener("click", () => {
  sidebar.style.left = "-450px";
  document.body.style.backgroundColor = "white";
});

sidebar.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    sidebar.style.left = "-450px";
    document.body.style.backgroundColor = "white";
  }
});
/*------------------------------------------
        = MUSIC PLAYER
-------------------------------------------*/
const musicBtn = document.querySelector(".music-box-toggle-btn");
const musicBox = document.querySelector(".player");
const curr_track = document.createElement("audio");
const track_art = document.querySelector(".track-art");
const playpauseBtn = document.querySelector(".playPause-track");
const volumeSlider = document.querySelector(".volume_slider");
let isPlaying = true;
curr_track.src = "../assets/media/Elvis_Presley-Cant_Help_Falling_in_Love.mp3";

musicBtn.addEventListener("click", () => {
  musicBox.classList.toggle("toggle-music-box");
});
playpauseBtn.addEventListener("click", () => {
  isPlaying ? pauseTrack() : playTrack();
});
volumeSlider.addEventListener("change", (evt) => {
  curr_track.volume = volumeSlider.value / 100;
});
function playTrack() {
  curr_track.play();
  isPlaying = true;
  track_art.classList.add("rotate");
  playpauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
}
function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  track_art.classList.remove("rotate");
  playpauseBtn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
}

/*------------------------------------------
       COUNT DOWN TIMER
-------------------------------------------*/
// Set the date we're counting down to
const targetDate = new Date("2023-12-23 11:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (distance < 1) {
    document.getElementById("clock").style.display = "none";
    document.getElementById("endMessage").style.display = "block";
    // do this for 30 seconds
    var duration = 30 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 3,
        angle: 360,
        spread: 100,
        origin: {
          x: 50,
          // since they fall down, start a bit higher than random
          y: 50,
        },
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 3,
        angle: 360,
        spread: 100,
        origin: {
          x: Math.random(),
          // since they fall down, start a bit higher than random
          y: Math.random() - 0.2,
        },
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    setTimeout(() => {
      confetti.reset();
    }, 3000);
    // keep going until we are out of time
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }
}
setInterval(updateTimer, 1000);

/*------------------------------------------
   GROOMSMEN & BRIDESMAID TAB CHANGE
-------------------------------------------*/
const buttonHolder = document.querySelectorAll("#nav-tab li");
const panes = document.querySelectorAll(".tab-content .tab-pane");

function remover(elements, classNames) {
  if (typeof elements === "object") {
    elements.forEach((el) => {
      el.classList.remove(classNames);
    });
  }
}
const hidePanes = () => {
  panes.forEach((ele) => {
    ele.classList.remove("active");
    ele.classList.add("active");
  });
};
buttonHolder.forEach((el, index) => {
  el.addEventListener("click", () => {
    remover(panes, "active");
    remover(buttonHolder, "active");

    panes[index].classList.add("active");
    buttonHolder[index].classList.add("active");
  });
});

/*------------------------------------------
   GROOMSMEN & BRIDESMAID IMAGE POPUP MODAL
-------------------------------------------*/
const previewModalOverlay = document.getElementById("myModal");
const image = document.querySelector(".image");
const modalImage = document.getElementById("modal_Img");
const captionText = document.getElementById("caption");
const modalCloseBtn = document.getElementById("modal-close-btn");
const money = document.getElementById("money");
const cash = document.querySelector(".cashGift");

const weddingFolks = document.querySelectorAll(".popup-image");
for (i = 0; i < weddingFolks.length; i++) {
  weddingFolks[i].addEventListener("click", showPopupImage);
}
function showPopupImage() {
  previewModalOverlay.style.display = "block";
  modalImage.src = this.src;
  captionText.innerHTML = this.alt;
  cash.style.display = "none";
}
modalCloseBtn.addEventListener("click", () => {
  image.style.display = "flex";
  cash.style.display = "block";
  myModal.style.display = "none";
});

/*------------------------------------------
       WEDDING GALLERY 
-------------------------------------------*/
let list = document.querySelectorAll(".gallery-filters .list");
let itemBox = document.querySelectorAll(".itemBox");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");
    for (let k = 0; k < itemBox.length; k++) {
      // itemBox[k].classList.remove('active');
      itemBox[k].classList.add("hide");
      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}

/*------------------------------------------
       SCROLL TO TOP
-------------------------------------------*/
const btnScrollToTop = document.querySelector(".back-to-top");

// scroll to top of page when button clicked
btnScrollToTop.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// toggle 'scroll to top' based on scroll position
window.addEventListener("scroll", (e) => {
  btnScrollToTop.style.display = window.scrollY > 2000 ? "block" : "none";
});

const envelope = document.querySelector(".envelope-wrapper");
const download = document.querySelector(".downloadBtn");
envelope.addEventListener("click", () => {
  envelope.classList.toggle("flap");
  // setTimeout(()=>{
  //     download.classList.toggle("show-download-btn")
  // },2000)
});

// color section
let colorWhite = document.querySelector(".white div");
let colorGold = document.querySelector(".gold div");
let colorLavender = document.querySelector(".lavender div");
let colorPeach = document.querySelector(".peach div");
let colorDisplay = document.querySelector(".colorDisplay div");
let colorDisplayText = document.querySelector(".colorDisplay p span");

colorWhite.addEventListener("click", () => {
  colorDisplay.style.backgroundColor = "#ffffff";
  colorDisplayText.innerHTML = "White";
});

colorGold.addEventListener("click", () => {
  colorDisplay.style.backgroundColor = "#FFD700";
  colorDisplayText.innerHTML = "Gold";
});

colorLavender.addEventListener("click", () => {
  colorDisplay.style.backgroundColor = "#996fd6";
  colorDisplayText.innerHTML = "Lavender";
});

colorPeach.addEventListener("click", () => {
  colorDisplay.style.backgroundColor = "#FFc8a5";
  colorDisplayText.innerHTML = "Peach";
});

/*------------------------------------------
        = POPUP YOUTUBE, VIMEO, GMAPS
-------------------------------------------*/
$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
  innerHeight: 700,
  type: "iframe",
  mainClass: "mfp-fade",
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
});

/*------------------------------------------
        HOTELS DIV SLIDER
-------------------------------------------*/
const hotelContainer = document.querySelector(".hotels");
const hotelBackBtn = document.getElementById("hotelBackBtn");
const hotelNextBtn = document.getElementById("hotelNextBtn");

hotelBackBtn.addEventListener("click", () => {
  hotelContainer.scrollLeft -= 320;
});
hotelNextBtn.addEventListener("click", () => {
  hotelContainer.scrollLeft += 320;
});
/*------------------------------------------
        AIRBNB DIV SLIDER
-------------------------------------------*/
const airbnbConatiner = document.querySelector(".airbnbs");
const airbnbPrevBtn = document.getElementById("airbnbPrevBtn");
const airbnbNextBtn = document.getElementById("airbnbNextBtn");

airbnbPrevBtn.addEventListener("click", () => {
  airbnbConatiner.scrollLeft -= 380;
});
airbnbNextBtn.addEventListener("click", () => {
  airbnbConatiner.scrollLeft += 380;
});

/*------------------------------------------
       MODAL FOR GIFT REGSITRY (CASH GIFT)
-------------------------------------------*/
money.addEventListener("click", () => {
  previewModalOverlay.style.display = "block";
  image.style.display = "none";
  cash.style.display = "block";
});

/*------------------------------------------
       TEXT TO CLIPBOARD JS
-------------------------------------------*/
// first account details
const bank1 = document.getElementById("bankName1");
const firstName = document.getElementById("accountName1");
const firstNumber = document.getElementById("accountNumber1");
const sortCode = document.getElementById("sortCode");
const copyButton1 = document.getElementById("copyButton1");
const para = document.querySelector(".firstParagraph");
const para2 = document.querySelector(".secondParagraph");
copyButton1.addEventListener("click", () => {
  // Create a string to hold the concatenated values
  var concatenatedValues =
    bank1.value +
    " " +
    firstName.value +
    " " +
    firstNumber.value +
    " " +
    sortCode.value;

  navigator.clipboard
    .writeText(concatenatedValues)
    .then(function () {
      console.log("Text copied successfully!");
    })
    .catch(function (error) {
      console.error("Error copying text: ", error);
    });

  copyButton1.innerHTML = '<i class="fa-solid fa-check"></i>';
  para.innerHTML = "copied";
  console.log("copied account");

  setTimeout(function () {
    copyButton1.innerHTML = '<i class="fa-regular fa-clone"></i>';
    para.innerHTML = "click the button to copy";
  }, 3000);
});

// second account details
const bank2 = document.getElementById("bankName2");
const secondName = document.getElementById("accountName2");
const secondNumber = document.getElementById("accountNumber2");
const copyButton2 = document.getElementById("copyButton2");

copyButton2.addEventListener("click", () => {
  // Create a string to hold the concatenated values
  var concatenatedValues =
    bank2.value + " " + secondName.value + " " + secondNumber.value;
  navigator.clipboard
    .writeText(concatenatedValues)
    .then(function () {
      console.log("Text copied successfully!");
    })
    .catch(function (error) {
      console.error("Error copying text: ", error);
    });
  copyButton2.innerHTML = '<i class="fa-solid fa-check"></i>';
  para2.innerHTML = "copied";

  setTimeout(function () {
    copyButton2.innerHTML = '<i class="fa-regular fa-clone"></i>';
    para2.innerHTML = "click the button to copy";
  }, 3000);
});

/*------------------------------------------
       SHOW AND HIDE TEXT
-------------------------------------------*/
var moreSpan = document.querySelectorAll('.more_span');
var showBtn = document.querySelectorAll('.showHideBtn');

for(let i =0; i <moreSpan.length; i++){
  moreSpan[i].style.display = 'none';
}

for(let j =0; j <showBtn.length; j++){
  showBtn[j].addEventListener('click',()=>{
    if(moreSpan[j].style.display =='none'){
      moreSpan[j].style.display = 'block'
      // showBtn[i].innerHTML = "See Less";
    }
    else{
      moreSpan[j].style.display = 'none'
    }
  })
}
// showBtn.addEventListener('click', () =>{
//   // moreSpan.style.display = 'none';
//   // showBtn.innerHTML = 'See more'
// })