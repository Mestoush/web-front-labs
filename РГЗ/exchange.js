function ExchangeRate() {
    const apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';
    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const KZT = json.Valute.KZT
            currentRate = KZT.Value;
            const date = json.Date.split('T')[0];
            const message = `
                <div class="exchange-rate">
                    <h2>Актуальный курс казахстанского тенге на ${date}</h2>
                    <p>Текущий курс: ${currentRate.toFixed(2)} руб.</p>
                </div>
            `;
        document.getElementById('rate-info').innerHTML = message;
        });

}

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const direction = document.getElementById('direction').value;
    if (isNaN(amount)) {
        alert('Пожалуйста, введите корректную сумму.');
        return;
    }
    let result;
    if (direction === 'toKZT') {
        result = amount / currentRate;
        document.getElementById('result').innerText = `${amount} RUB = ${result.toFixed(2)} KZT`;
    } else if (direction === 'toRUB') {
        result = amount * currentRate;
        document.getElementById('result').innerText = `${amount} KZT = ${result.toFixed(2)} RUB`;
    }
}