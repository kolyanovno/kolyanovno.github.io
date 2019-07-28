var divBody = document.createElement('div');
divBody.className = 'page-body';
document.body.appendChild(divBody);

var ul = document.createElement('ul');
ul.className = 'character-list';
divBody.appendChild(ul);

var pag = document.createElement('div');
pag.className = 'pagination';
divBody.appendChild(pag);

function requestData(e, page) {
    request('get', 'https://rickandmortyapi.com/api/character/?page=' + page)
        .then(function (data) {
            var results = data.results;
            for (var i = 0; i < results.length; i++) {
                var li = document.createElement('li');
                li.className = 'character-list__item';

                var image = document.createElement('img');
                image.setAttribute('src', results[i].image);
                image.className = 'character-list__item-img';

                var name = document.createElement('p');
                name.textContent = 'Name: ' + results[i].name;

                var status = document.createElement('p');
                status.textContent = 'Status: ' + results[i].status;

                var species = document.createElement('p');
                species.textContent = 'Species: ' + results[i].species;

                var gender = document.createElement('p');
                gender.textContent = 'Gender: ' + results[i].gender;

                var origin = document.createElement('p');
                origin.textContent = 'Origin: ' + results[i].origin.name;

                var lastLocation = document.createElement('p');
                lastLocation.textContent = 'Last location: ' + results[i].location.name;

                ul.appendChild(li);
                li.appendChild(image);
                li.appendChild(name);
                li.appendChild(status);
                li.appendChild(species);
                li.appendChild(gender);
                li.appendChild(origin);
                li.appendChild(lastLocation);
            }
            pag.innerHTML = drawPagination(data.info.count, 20, page);
        })
    e && e.preventDefault();
}

requestData(null, 1);