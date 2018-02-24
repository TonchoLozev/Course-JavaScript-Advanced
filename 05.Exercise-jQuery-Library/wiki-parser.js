function wikiParser(seletor) {
    let text = $(seletor).text();
    let formated = text.replace(/'''([^'=\[]+?)'''/g, (m, g) => `<b>${g}</b>`)
        .replace(/''([^'=\[]+?)''/g, (m, g) => `<i>${g}</i>`)
        .replace(/===([^'=\[]+?)===/g, (m, g) => `<h3>${g}</h3>`)
        .replace(/==([^'=\[]+?)==/g, (m, g) => `<h2>${g}</h2>`)
        .replace(/=([^'=\[]+?)=/g, (m, g) => `<h1>${g}</h1>`)
        .replace(/\[\[([^'=\|[]+?)\]\]/g, (m, g) => `<a href="/wiki/${g}">${g}</a>`)
        .replace(/\[\[([^'=\[]+?)\|([^'=\[]+?)\]\]/g, (m, g, g2) => `<a href="/wiki/${g}">${g2}</a>`);

    $(seletor).html(formated);
}