import { createDiv, createP } from './pageLoad';
import { content } from './script';
import caviarImgPath from '../imgs/caviar.jpg';
import shrimpImgPath from '../imgs/shrimp.jpg';
import wagyuImgPath from '../imgs/wagyu.jpg';
import burgerImgPath from '../imgs/burger.jpg';

function createMenu() {
  const menuBtn = document.querySelector('#menu-btn');
  menuBtn.classList.add('active');

  const item1 = createMenuCard();
  const item2 = createMenuCard();
  const item3 = createMenuCard();
  const item4 = createMenuCard();

  item1.fillData('Caviar', '25.99$', caviarImgPath);
  item2.fillData('A5 Wagyu', '79.99$', wagyuImgPath);
  item3.fillData('Fancy Shrimp', '34.99$', shrimpImgPath);
  item4.fillData('Caramelized Onions Burger', '19.99$', burgerImgPath);

  const menuContainer = createDiv();
  menuContainer.classList.add('menus');
  content.appendChild(menuContainer);
  menuContainer.appendChild(item1.container);
  menuContainer.appendChild(item2.container);
  menuContainer.appendChild(item3.container);
  menuContainer.appendChild(item4.container);
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
