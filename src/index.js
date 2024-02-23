import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchanger from './currency-exchanger.js';

// Business Logic

async function getExchangeRate(Currency) {
  const response = await CurrencyExchanger.getExchangeRate(Currency);
  if (response.main) {
    printElements(response, Currency);
  } else {
    printError(response, Currency);
  }
}

// UI Logic

function printElements(response, Currency) {
  document.querySelector('#showResponse').innerText = `1 ${Currency} is ${response.main.CZK} Units`;
}

function printError(error, Currency) {
  document.querySelector('#showResponse').innerText = `There was an error accessing the data for ${Currency}: 
  ${error}.`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const Currency = document.querySelector('#USD').value;
  document.querySelector('#USD').value = null;
  getExchangeRate(Currency);
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});