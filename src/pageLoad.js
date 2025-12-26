import imgPath from '../imgs/food.jpg';
function createP() {
  const p = document.createElement('p');
  return p;
}

function createDiv() {
  const div = document.createElement('div');
  return div;
}

function createContent() {
  const homeBtn = document.querySelector('#home-btn');
  homeBtn.classList.add('active');

  const content = document.querySelector('#content');
  const locationContainer = createDiv();
  const hoursContainer = createDiv();
  const img = document.createElement('img');
  const footer = document.createElement('footer');
  const p1 = createP();
  const p2 = createP();
  const p3 = createP();
  const p4 = createP();
  const p5 = createP();

  img.src = imgPath;
  p1.textContent = 'Where Taste Meets Elegance';
  content.appendChild(p1);
  content.appendChild(img);

  content.appendChild(footer);

  p2.textContent = '1153 NA Grand Hotel';
  locationContainer.textContent = 'Locations:';
  locationContainer.appendChild(p2);
  footer.appendChild(locationContainer);

  p3.textContent = 'Sunday: 8am - 8pm';
  p4.textContent = 'Friday: 6am - 10pm';
  p5.textContent = 'Saturday: 8am - 10pm';
  hoursContainer.textContent = 'Hours:';
  hoursContainer.appendChild(p3);
  hoursContainer.appendChild(p4);
  hoursContainer.appendChild(p5);
  footer.appendChild(hoursContainer);
}
export { createP, createDiv };
export default createContent;
