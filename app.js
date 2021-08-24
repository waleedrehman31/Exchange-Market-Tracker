const CURRENCY_API_KEY = config.CURRENCY_ACCESS_KEY;
const CURRENCY_API_URI = `http://api.marketstack.com/v1/currencies?access_key=${CURRENCY_API_KEY}`;
const STOCK_MARKET_API_KEY = config.STOCK_MARKET_API_KEY;
const STOCK_MARKET_API_URI = `https://www.alphavantage.co/query?function=REAL_GDP&interval=annual&apikey=${STOCK_MARKET_API_KEY}`;
const currencyTable = document.getElementById("currency-table");

async function getCurrency() {
  const data = await fetch(CURRENCY_API_URI);
  const JSON_DATA = await data.json();
  JSON_DATA.data.forEach((currency, sNO = 1) => {
    // console.log(currency);
    currencyTable.innerHTML += `
    <tr class="hover">
              <th>${++sNO}</th>
              <td>${currency.name}</td>
              <td>${currency.code}</td>
              <td>${currency.symbol}</td>
            </tr>
    `;
  });
}

async function getMarket() {
  const data = await fetch(STOCK_MARKET_API_URI);
  const JSON_DATA = await data.json();
  console.log(JSON_DATA);
}

getCurrency();
getMarket();
