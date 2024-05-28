function showDate() {
    let out = document.getElementById('current-date')
    let today = new Date();
    
    let locales = [
        {locale: 'ru-RU', name: 'Россия'},
        {locale: 'en-US', name: 'США'},
        {locale: 'fr-FR', name: 'Франция'},
        {locale: 'de-DE', name: 'Германия'},
        {locale: 'zh-CN', name: 'Китай'},
        {locale: 'ja-JP', name: 'Япония'}
    ];

    locales.forEach(({locale, name}) => {
        let dateString = today.toLocaleString(locale);
        out.innerHTML += `<p>Дата и время для страны ${name}: ${dateString}</p>`;
    });

    let year = today.getFullYear();
    let month = today.toLocaleString('default', { month: 'long' }); 
    let date = today.getDate();
    let day = today.toLocaleString('default', { weekday: 'long' }); 

    out.innerHTML += `
        <p>Текущий год: ${year}</p>
        <p>Текущий месяц: ${month}</p>
        <p>Текущая дата: ${date}</p>
        <p>День недели: ${day}</p>
        `
}

function calculateDayOfWeek() {
    let day = document.getElementById('input-day').value;
    let month = document.getElementById('input-month').value;
    let year = document.getElementById('input-year').value;

    let inputDate = new Date(year, month - 1, day); 
    let dayOfWeek = inputDate.toLocaleString('default', { weekday: 'long' });
    document.getElementById('result').innerText = `День недели: ${dayOfWeek}`;
}