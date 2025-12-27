import { createDiv, createP } from './pageLoad';

function createContact() {
  const content = document.querySelector('#content');
  const container = createDiv();
  container.classList.add('contact');

  content.appendChild(container);

  const p1 = createP();
  const p2 = createP();
  const p3 = createP();

  const head1 = document.createElement('h1');
  const head2 = document.createElement('h1');

  head1.textContent = 'To Order/Inquiry';
  head2.textContent = 'For Support';

  p1.textContent = '+45612095493785';
  p2.textContent = '+45698230964434';
  p3.textContent = 'Reservoir@legit.com';
 


  container.append(head1, p1, head2, p2, p3);
}

export default createContact