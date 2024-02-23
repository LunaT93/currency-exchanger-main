import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchanger from './currency-exchanger.js';

// Business Logic

async function getExchangeRate(Currency, Currency2) {
  const response = await CurrencyExchanger.getExchangeRate(Currency);
  if (response.result === "success") {
    printElements(response, Currency, Currency2);
  } else {
    printError(response, Currency);
  }
}

// UI Logic

function printElements(response, Currency, Currency2) {
  document.querySelector('#showResponse').innerText = `1 ${Currency} is ${response.conversion_rates[Currency2]} Units`;
}

function printError(error, Currency) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the data for ${Currency}: 
  ${error.message}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const Currency = document.querySelector('#USD').value;
  const Currency2 = document.querySelector('#Currency2').value;
  document.querySelector('#USD').value = null;
  document.querySelector('#Currency2').value = null;
  getExchangeRate(Currency, Currency2);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});