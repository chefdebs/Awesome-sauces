// Année footer
document.getElementById('year').textContent = new Date().getFullYear();

// Révélation au scroll
const onScrollReveal = () => {
  const els = document.querySelectorAll('.reveal');
  const trigger = window.innerHeight * 0.88;
  els.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) el.classList.add('visible');
  });
};
document.addEventListener('scroll', onScrollReveal);
document.addEventListener('DOMContentLoaded', onScrollReveal);

// Smooth form submit (placeholder)
function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  console.log('Form submitted:', data);
  form.reset();
  alert('Merci ! Ton message a bien été envoyé (démo).');
}