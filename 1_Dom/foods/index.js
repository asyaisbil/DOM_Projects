const images = [
    // BU NESNEYİ DEĞİŞTİRMEYİN
    {
      image: 'https://i.ibb.co/3N3KkNS/food-avocadotoast.jpg',
      alt_text: 'food-avocadotoast',
    },
    {
      image: 'https://i.ibb.co/grVFpy9/food-burger.jpg',
      alt_text: 'food-burger',
    },
    {
      image: 'https://i.ibb.co/JvjdLXh/food-chickenfingers.jpg',
      alt_text: 'food-chickenfingers',
    },
    {
      image: 'https://i.ibb.co/cQxmZsF/food-poutine.jpg',
      alt_text: 'food-poutine',
    },
    {
      image: 'https://i.ibb.co/YDYgB6J/food-ribs.jpg',
      alt_text: 'food-ribs',
    },
    {
      image: 'https://i.ibb.co/Lp1sJ2G/food-sandwich.jpg',
      alt_text: 'food-sandwich',
    },
    {
      image: 'https://i.ibb.co/Qn4mLHc/food-sausage.jpg',
      alt_text: 'food-sausage',
    },
    {
      image: 'https://i.ibb.co/mFjbcZV/food-steak.jpg',
      alt_text: 'food-steak',
    },
    {
      image: 'https://i.ibb.co/Bq2ZRWc/food-tacos.jpg',
      alt_text: 'food-tacos',
    },
  ];
  
  /* Kodlar Buradan aşağıya */
  
  // css dosyasının linki index.html'de eklenmemiş.
  
const imgsItem = document.querySelectorAll(".gallery-content img");

for (let i = 0; i < imgsItem.length; i++) {
    imgsItem[i].src = images[i].image;
    imgsItem[i].setAttribute('alt', images[i].alt_text);
    imgsItem[i].classList.add("border-md");
  }

