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
}
