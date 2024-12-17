console.log('Hello!');
// Program 1: Select a color
const selectColor = document.getElementById('selectColor');
const showColor = document.getElementById('showColor');

selectColor.addEventListener('change', () => {
  const selectedColorValue = selectColor.value;
  showColor.textContent = `You selected: ${selectedColorValue}`;
});

// Program 2 Question 2 - select a day and show its weekend or weekday
const selectDay = document.getElementById('selectDay');
const showDay = document.getElementById('showDay');
selectDay.addEventListener('change', () => {
  const selectedDayValue = selectDay.value;
  if (selectedDayValue === 'Sunday') {
    showDay.textContent = `Today is weekend`;
  } else {
    showDay.textContent = `Today is weekday`;
  }
});

// Question 3- Select a country and show its captital
const country = document.getElementById('country');
const showCapital = document.getElementById('showCapital');

country.addEventListener('change', () => {
  const selectedCountry = country.value;
  const capital = {
    Usa: 'Washington DC',
    Canada: 'Ottawa',
    Mexico: 'Mexico City',
  };
  showCapital.textContent = `Capital is: ${capital[selectedCountry]}`;
  console.log(selectedCountry);
});
