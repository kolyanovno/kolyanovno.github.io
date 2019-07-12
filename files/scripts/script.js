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
for (var m = 0; m <= 3; m++) {
    ul.children[m].children[0].children[0].className = 'health-line';
}

//stamina
for (var g = 0; g <= 3; g++) {
    ul.children[g].children[1].children[0].className = 'stamina-line';
}


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

var listItems = [];
listItems = document.getElementsByClassName('character-list__item');

var healthList = [];
healthList = document.getElementsByClassName('health-line');

var healthWidthList = new Array(healthList.length);

for (var i = 0; i < healthWidthList.length; i++) {
    healthWidthList[i] = 100;
    healthList[i].style.width = 100 + '%';
    healthList[i].addEventListener('click', onClickHealts(i));
}

function onClickHealts(i) {
    return function () {
        healthWidthList[i] -= 10;
        healthList[i].style.width = healthWidthList[i] + '%';
        console.log(healthList[i].style.width);
        if (healthList[i].style.width === "0%") {
            listItems[i].style.display = "none";
        }
    }
}

var staminaList = [];
staminaList = document.getElementsByClassName('stamina-line');

var staminaWidthList = new Array(staminaList.length)

for (var i = 0; i < staminaWidthList.length; i++) {
    staminaWidthList[i] = 100;
    staminaList[i].style.width = 100 + '%';
    staminaList[i].addEventListener('click', onClickStamina(i));
}

function onClickStamina(i) {
    return function () {
        console.log(staminaList[i].style.width);
        staminaWidthList[i] -= 10;
        staminaList[i].style.width = staminaWidthList[i] + '%';
        if (staminaList[i].style.width === "0%") {
            listItems[i].style.opacity = ".5";
        }
    }
}