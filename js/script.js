const scrollImages = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const items = document.querySelector(".scroll-images");
console.log(items);
const thumbsContainer = document.querySelector(".thumbs");

scrollImages.forEach((elem) => {
  const slide = createSlide(elem);
  items.append(slide);
  const thumb = crateThumb(elem.image);
  thumbsContainer.append(thumb);
});

/**
 * Description
 * @param {object} imgObj
 * @returns {object}
 */
function createSlide(imgObj) {
  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = `
  <img src="${imgObj.image}" alt="" />
  <div class="item-text">
    <h3>${imgObj.title}</h3>
    <p>${imgObj.text}</p>
  </div>`;
  return item;
}

/**
 * Description
 * @param {string} img
 * @returns {object}
 */
function crateThumb(img) {
  const thumb = document.createElement("div");
  thumb.classList.add("thumb");
  thumb.innerHTML = `<img src="${img}" alt="" />`;
  return thumb;
}
