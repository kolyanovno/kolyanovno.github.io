var divBody = document.createElement('div');
divBody.className = 'page-body';
document.body.appendChild(divBody);

var ul = document.createElement('ul');
ul.className = 'character-list';
divBody.appendChild(ul);

var Unit = (function() {
    function Unit() {
        this.li = document.createElement('li');
        this.li.className = 'character-list__item';
        ul.appendChild(this.li);
    }

    Unit.prototype.divFirst = function() {
        this.divFirstLi = document.createElement('div');
        this.divFirstLi.className = 'character-list__item-line';
        this.li.appendChild(this.divFirstLi);
    }

    Unit.prototype.divSecond = function(lineClass) {
        this.divSecondLi = document.createElement('div');
        this.divSecondLi.className = lineClass;
        this.divFirstLi.appendChild(this.divSecondLi);
    }

    Unit.prototype.name = function(name) {
        this.h3 = document.createElement('h3');
        this.h3.className = 'character-list__item-type';
        this.h3.innerHTML = name;
        this.li.appendChild(this.h3);
    }

    Unit.prototype.type = function(type) {
        this.h6 = document.createElement('h6');
        this.h6.className = 'character-list__item-type';
        this.h6.innerHTML = type;
        this.li.appendChild(this.h6);
    }

    Unit.prototype.link = function(link) {
        this.link = document.createElement('a');
        this.link.className = 'character-list__item-link';
        this.link.setAttribute('href', link);
        this.li.appendChild(this.link);
    }

    Unit.prototype.image = function(src, alt) {
        this.image = document.createElement('img');
        this.image.className = 'character-list__item-img';
        this.image.setAttribute('src', src);
        this.image.setAttribute('alt', alt);
        this.link.appendChild(this.image);
    }

    return Unit;
}());

//creating units

var unit1 = new Unit();
unit1.divFirst();
unit1.divSecond('health-line');
unit1.divFirst();
unit1.divSecond('stamina-line');
unit1.name('Mordecai');
unit1.type('Hunter');
unit1.link('https://borderlands.fandom.com/ru/wiki/%D0%9C%D0%BE%D1%80%D0%B4%D0%B5%D0%BA%D0%B0%D0%B9');
unit1.image('files/images/mordecai.jpg', 'Mordecai');

var unit2 = new Unit();
unit2.divFirst();
unit2.divSecond('health-line');
unit2.divFirst();
unit2.divSecond('stamina-line');
unit2.name('Roland');
unit2.type('Soldier');
unit2.link('https://borderlands.fandom.com/ru/wiki/%D0%A0%D0%BE%D0%BB%D0%B0%D0%BD%D0%B4');
unit2.image('files/images/roland.jpg', 'Roland');

var unit3 = new Unit();
unit3.divFirst();
unit3.divSecond('health-line');
unit3.divFirst();
unit3.divSecond('stamina-line');
unit3.name('Lilith');
unit3.type('Siren');
unit3.link('https://borderlands.fandom.com/ru/wiki/%D0%9B%D0%B8%D0%BB%D0%B8%D1%82');
unit3.image('files/images/lilith.png', 'Lilith');

var unit4 = new Unit();
unit4.divFirst();
unit4.divSecond('health-line');
unit4.divFirst();
unit4.divSecond('stamina-line');
unit4.name('Brick');
unit4.type('Berserker');
unit4.link('https://borderlands.fandom.com/ru/wiki/%D0%91%D1%80%D0%B8%D0%BA');
unit4.image('files/images/brick.png', 'Brick');

//tap logic

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
        staminaWidthList[i] -= 10;
        staminaList[i].style.width = staminaWidthList[i] + '%';
        if (staminaList[i].style.width === "0%") {
            listItems[i].style.opacity = ".5";
        }
    }
}