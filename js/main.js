// Meridian Property Management — site behavior

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initBackToTop();
  initPropertyFilter();
  initFaq();
  initContactForm();
  initYear();
  initPortfolioScroll();
});

function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 480);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initPropertyFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('[data-property-status]');
  const emptyState = document.querySelector('.empty-state');
  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;
      let visibleCount = 0;

      cards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.propertyStatus === filter;
        card.style.display = matches ? '' : 'none';
        if (matches) visibleCount += 1;
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });
}

function initFaq() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach((item) => {
    const question = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');
    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      items.forEach((other) => {
        other.classList.remove('open');
        const otherAnswer = other.querySelector('.faq-a');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
}

function initContactForm() {
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('.form-status');
  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    status.textContent = "Thanks — your message has been received. Our team will reach out within one business day.";
    status.classList.add('visible');
    form.reset();
    status.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

function initYear() {
  const el = document.querySelector('#current-year');
  if (el) el.textContent = new Date().getFullYear();
}

// "Growing portfolio" scrollytelling section on the home page: as the visitor
// scrolls through the tall .portfolio-scroll track, a neighborhood grid of
// homes fills in and the headline/counter advance to tell an owner's
// one-home-to-a-portfolio growth story.
function initPortfolioScroll() {
  const section = document.querySelector('.portfolio-scroll');
  const grid = document.querySelector('#portfolio-grid');
  if (!section || !grid) return;

  const headline = section.querySelector('.portfolio-headline');
  const countEl = section.querySelector('#portfolio-count');
  const totalCells = 48;
  const targetCount = 1200;

  const cells = buildPortfolioGrid(grid, totalCells);
  const revealOrder = shuffledIndexes(totalCells);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    cells.forEach((cell) => cell.classList.add('visible'));
    if (headline) headline.textContent = 'A growing portfolio.';
    if (countEl) countEl.textContent = `${targetCount.toLocaleString()}+`;
    return;
  }

  const stages = [
    { at: 0, text: 'It starts with one home.' },
    { at: 0.16, text: 'Then a block.' },
    { at: 0.5, text: 'Then a whole neighborhood.' },
    { at: 0.85, text: 'Now, a growing portfolio.' },
  ];

  let ticking = false;

  function render() {
    ticking = false;

    const scrollable = section.offsetHeight - window.innerHeight;
    const scrolled = -section.getBoundingClientRect().top;
    let progress = scrollable > 0 ? scrolled / scrollable : 0;
    progress = Math.min(Math.max(progress, 0), 1);

    const visibleCount = Math.round(progress * totalCells);
    revealOrder.forEach((cellIndex, orderIndex) => {
      cells[cellIndex].classList.toggle('visible', orderIndex < visibleCount);
    });

    if (countEl) {
      countEl.textContent = progress >= 0.995
        ? `${targetCount.toLocaleString()}+`
        : Math.max(1, Math.round(progress * targetCount)).toLocaleString();
    }

    if (headline) {
      let text = stages[0].text;
      stages.forEach((stage) => { if (progress >= stage.at) text = stage.text; });
      if (headline.textContent !== text) headline.textContent = text;
    }
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(render);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  render();
}

function buildPortfolioGrid(grid, total) {
  const icons = ['icon-house', 'icon-house', 'icon-house', 'icon-apartment', 'icon-house', 'icon-commercial'];
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < total; i += 1) {
    const cell = document.createElement('div');
    cell.className = `house-cell pm-${(i % 6) + 1}`;
    cell.innerHTML = `<svg viewBox="0 0 24 24"><use href="#${icons[i % icons.length]}"/></svg>`;
    fragment.appendChild(cell);
  }

  grid.appendChild(fragment);
  return Array.from(grid.children);
}

// Deterministic pseudo-random reveal order so the grid fills in an organic
// scatter (not row-by-row) without relying on Math.random.
function shuffledIndexes(total) {
  return Array.from({ length: total }, (_, i) => i)
    .sort((a, b) => ((a * 2654435761) % 104729) - ((b * 2654435761) % 104729));
}
