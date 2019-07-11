var divBody = document.createElement('div');
divBody.className = 'page-body';
document.body.appendChild(divBody);

var ul = document.createElement('ul');
ul.className = 'character-list';
divBody.appendChild(ul);

for (var i = 0; i < 4; i++) {
    var li = document.createElement('li');
    li.className = 'character-list__item';
    ul.appendChild(li);

    for (var n = 0; n < 2; n++) {
        var divFirstLi = document.createElement('div');
        divFirstLi.className = 'character-list__item-line';
        li.appendChild(divFirstLi);

        var divSecondLi = document.createElement('div');
        divFirstLi.appendChild(divSecondLi);
    }

    var h3 = document.createElement('h3');
    h3.className = 'character-list__item-type';

    var h6 = document.createElement('h6');
    h6.className = 'character-list__item-type';

    var link = document.createElement('a');
    link.className = 'character-list__item-link';

    var image = document.createElement('img');
    image.className = 'character-list__item-img';

    li.appendChild(h3);
    li.appendChild(h6);
    li.appendChild(link);
    link.appendChild(image); 
}

//health
ul.children[0].children[0].children[0].className = 'character-list__item-health__mordecai health-line';
ul.children[1].children[0].children[0].className = 'character-list__item-health__roland health-line';
ul.children[2].children[0].children[0].className = 'character-list__item-health__lilith health-line';
ul.children[3].children[0].children[0].className = 'character-list__item-health__brick health-line';

//stamina
ul.children[0].children[1].children[0].className = 'character-list__item-stamina__mordecai stamina-line';
ul.children[1].children[1].children[0].className = 'character-list__item-stamina__roland stamina-line';
ul.children[2].children[1].children[0].className = 'character-list__item-stamina__lilith stamina-line';
ul.children[3].children[1].children[0].className = 'character-list__item-stamina__brick stamina-line';

//h3
ul.children[0].children[2].innerText = 'Mordecai';
ul.children[1].children[2].innerText = 'Roland';
ul.children[2].children[2].innerText = 'Lilith';
ul.children[3].children[2].innerText = 'Brick';

//h6
ul.children[0].children[3].innerText = 'Hunter';
ul.children[1].children[3].innerText = 'Soldier';
ul.children[2].children[3].innerText = 'Siren';
ul.children[3].children[3].innerText = 'Berserker';

//links
ul.children[0].children[4].setAttribute('href', 'https://borderlands.fandom.com/ru/wiki/%D0%9C%D0%BE%D1%80%D0%B4%D0%B5%D0%BA%D0%B0%D0%B9');
ul.children[1].children[4].setAttribute('href', 'https://borderlands.fandom.com/ru/wiki/%D0%A0%D0%BE%D0%BB%D0%B0%D0%BD%D0%B4');
ul.children[2].children[4].setAttribute('href', 'https://borderlands.fandom.com/ru/wiki/%D0%9B%D0%B8%D0%BB%D0%B8%D1%82');
ul.children[3].children[4].setAttribute('href', 'https://borderlands.fandom.com/ru/wiki/%D0%91%D1%80%D0%B8%D0%BA');

//images
ul.children[0].children[4].children[0].setAttribute('src', 'files/images/mordecai.jpg');
ul.children[0].children[4].children[0].setAttribute('alt', 'Mordecai');

ul.children[1].children[4].children[0].setAttribute('src', 'files/images/roland.jpg');
ul.children[1].children[4].children[0].setAttribute('alt', 'Roland');

ul.children[2].children[4].children[0].setAttribute('src', 'files/images/lilith.png');
ul.children[2].children[4].children[0].setAttribute('alt', 'Lilith');

ul.children[3].children[4].children[0].setAttribute('src', 'files/images/brick.png');
ul.children[3].children[4].children[0].setAttribute('alt', 'Brick');