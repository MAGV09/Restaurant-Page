import { createDiv, createP } from './pageLoad';
import { content } from './script';
import caviarImgPath from '../imgs/caviar.jpg';
import shrimpImgPath from '../imgs/shrimp.jpg';
import wagyuImgPath from '../imgs/wagyu.jpg';
import burgerImgPath from '../imgs/burger.jpg';

const menu = [
  {
    title: 'Caviar',
    price: '25.99$',
    imgPath: caviarImgPath,
  },
  {
    title: 'A5 Wagyu',
    price: '79.99$',
    imgPath: wagyuImgPath,
  },
  {
    title: 'Fancy Shrimp',
    price: '34.99$',
    imgPath: shrimpImgPath,
  },
  {
    title: 'Caramelized Onions Burger',
    price: '19.99$',
    imgPath: burgerImgPath,
  },
];
function createMenu() {
  const menuBtn = document.querySelector('#menu-btn');
  menuBtn.classList.add('active');
  renderMenu();

}
function renderMenu() {
  const menuContainer = createDiv();
  menuContainer.classList.add('menus');
  content.appendChild(menuContainer);
  menu.forEach((item) => {
    let {
      itemPrice: price,
      itemTitle: title,
      container,
      img,
    } = createMenuCard();
    price.textContent = item.price;
    title.textContent = item.title;
    img.src = item.imgPath;
    menuContainer.appendChild(container);
  });
}
function createMenuCard() {
  const container = createDiv();
  container.classList.add('menu-item');

  const img = document.createElement('img');
  const itemTitle = createP();
  const itemPrice = createP();

  container.appendChild(img);
  container.appendChild(itemTitle);
  container.appendChild(itemPrice);

  const fillData = (title, price, imgPath) => {
    itemTitle.textContent = title;
    itemPrice.textContent = price;
    img.src = imgPath;
  };

  return { container, img, itemPrice, itemTitle, fillData };
}

export default createMenu;
