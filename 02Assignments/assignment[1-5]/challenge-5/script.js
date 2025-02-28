/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: "https://images.pexels.com/photos/18681382/pexels-photo-18681382/free-photo-of-coding.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    caption: "Flexing different countries' chai to those who don't know"
  },
  {
    url: "https://images.pexels.com/photos/18264705/pexels-photo-18264705/free-photo-of-smiling-man-in-headphones-with-microphone-using-a-apple-macbook.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    caption: "Padhai likhai kr lete hai"
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },

];

const carouselTrack = document.getElementById("carouselTrack")
const carouselCaption = document.getElementById("caption")
const carouselPrevButton = document.getElementById("prevButton")
const carouselNextButton = document.getElementById("nextButton")
const carouselNavButton = document.getElementById("carouselNav")
const autoPlayButton = document.getElementById("autoPlayButton")

let timerDisplayText = document.getElementById("timerDisplay")
let indexTrack = 0;
let setIntervalReference;
let autoPlayTrack = false;

function createImg(index) {
  const imgElement = document.createElement("img")
  imgElement.src = images[index].url
  imgElement.style.width = "100%"
  imgElement.style.height = "100%"
  imgElement.alt = images[index].caption
  carouselCaption.textContent = images[index].caption
  carouselTrack.innerHTML = ""
  carouselTrack.appendChild(imgElement)

}

function makeIndicator() {
  const carouselIndicator = document.createElement("div")
  carouselIndicator.classList.add("carousel-indicator")
  return carouselIndicator;
}


function loadAllindicator() {
  for (let i = 0; i < images.length; i++) {
    carouselNavButton.appendChild(makeIndicator())
  }
}

function addActiveClass(index) {
  carouselNavButton.children[index].classList.add("active")
}

function removeActiveClass(index) {
  carouselNavButton.children[index].classList.remove("active")
}

function loadNextImage() {
  if (indexTrack < images.length - 1) {
    removeActiveClass(indexTrack)
    indexTrack++;
    addActiveClass(indexTrack)
    createImg(indexTrack)

  } else if (indexTrack === images.length - 1) {
    removeActiveClass(indexTrack)
    indexTrack = 0;
    addActiveClass(indexTrack)
    createImg(indexTrack)
  }
}

function loadPrevImage() {
  if (indexTrack <= images.length - 1 && indexTrack > 0) {
    removeActiveClass(indexTrack)
    indexTrack--
    addActiveClass(indexTrack)
    createImg(indexTrack)
  } else if (indexTrack === 0) {
    removeActiveClass(indexTrack)
    indexTrack = images.length - 1;
    addActiveClass(indexTrack)
    createImg(indexTrack)
  }
}

function startAutoPlay() {
  autoPlayButton.innerText = "Stop Auto Play"
  startAutoPlayCarousel()
  autoPlayTrack = true
}

function stopAutoPlay() {
  autoPlayButton.innerText = "Start Auto Play"
  stopAutoPlayCarousel()
  autoPlayTrack = false
}

function startAutoPlayCarousel() {
  let timer = 5;
  setIntervalReference = setInterval(() => {
    // const date = new Date();
    // const second = date.getSeconds();
    // console.log(second)
    // if (timer === 0) {
    //   console.log(indexTrack)
    //   removeActiveClass(indexTrack)
    //   indexTrack++
    //   addActiveClass(indexTrack)
    //   createImg(indexTrack)
    // }

    if (timer === 0) {
      timer = 5
      loadNextImage()
    }
    timerDisplayText.textContent = `Next slide is in ${timer}`
    timer--;
  }, 1 * 1000);
}

function stopAutoPlayCarousel() {
  clearInterval(setIntervalReference)
  timerDisplayText.textContent = ''
}

window.addEventListener("load", () => {
  createImg(0)
  loadAllindicator()
  carouselNavButton.children[0].classList.add("active")
})

carouselNextButton.addEventListener("click", () => {
  loadNextImage()
})

carouselPrevButton.addEventListener("click", () => {
  loadPrevImage()
})

autoPlayButton.addEventListener("click", () => {
  if (!autoPlayTrack) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }

})
