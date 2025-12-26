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
  const content = document.querySelector('#content');
  const div1 = createDiv();
  const div2 = createDiv();
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
  div1.textContent = 'Locations:';
  div1.appendChild(p2);
  footer.appendChild(div1);

  p3.textContent = 'Sunday: 8am - 8pm';
  p4.textContent = 'Friday: 6am - 10pm';
  p5.textContent = 'Saturday: 8am - 10pm';
  div2.textContent = 'Hours:';
  div2.appendChild(p3);
  div2.appendChild(p4);
  div2.appendChild(p5);
  footer.appendChild(div2);
}
export {createP,createDiv}
export default createContent