document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    const getData = () =>
        new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', './cars.json');
            request.setRequestHeader('Content-type', 'application/json');
            request.send();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    resolve(request);
                } else {
                    reject();
                }
            });
        });

    const resolve = (request) => {
        const data = JSON.parse(request.responseText);
        data.cars.forEach(item => {
            if (item.brand === select.value) {
                const {
                    brand,
                    model,
                    price
                } = item;
                output.innerHTML = `Тачка ${brand} ${model} <br>
                        Цена: ${price}$`;
            }
        });
    };

    const reject = () => {
        output.innerHTML = 'Произошла ошибка';
    };

    select.addEventListener('change', () => {
        getData().then(resolve).catch(reject);
    });

});