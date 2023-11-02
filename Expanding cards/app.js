//document.querySelector me deja selecciona un elemento
//pero con querySelectorAll me genera un NodeList con todos los elementos de
//la clase panel en este caso
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};
