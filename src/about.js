import { content } from './script';
import { createDiv, createP } from './pageLoad';

function createAbout() {
  const container = createDiv();
  const p = createP();

  container.classList.add('about');
  container.appendChild(p);
  p.textContent = ` Founded in 2050 by Gabe Newell, Reservoir is a cozy, modern restaurant built around one simple idea:
    great food should feel unforgettable. Our chefs craft every dish from
    fresh, seasonal ingredients, blending classic flavors with creative
    twists. Whether you're here for a quiet dinner, a quick lunch, or a
    celebration with friends, Reservoir offers a warm atmosphere, attentive
    service, and flavors you'll remember.`;
  content.appendChild(container)  
}

export default createAbout