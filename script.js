const radios = document.querySelectorAll('.unit-radio');
const offerBoxes = document.querySelectorAll('.offer-box');
const totalAmount = document.getElementById('totalAmount');

const prices = {
  1: 10.00,
  2: 18.00,
  3: 24.00
};

function updateOptionsDisplay() {
  offerBoxes.forEach(box => box.classList.remove('active'));
  radios.forEach(radio => {
    if (radio.checked) {
      const box = radio.closest('.offer-box');
      box.classList.add('active');

      const units = radio.value;
      const total = prices[units] || 0;
      totalAmount.textContent = total.toFixed(2);
    }
  });
}

radios.forEach(radio => {
  radio.addEventListener('change', updateOptionsDisplay);
});

updateOptionsDisplay(); 
