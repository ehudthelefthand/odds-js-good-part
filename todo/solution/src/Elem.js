function elem(tag, ...classes) {
  const el = document.createElement(tag);
  el.classList.add(...classes);
  return el;
}