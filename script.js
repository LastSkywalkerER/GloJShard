document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    class MoneyExchange {
        constructor(
            eur,
            usd,
            rub
        ) {
            this.exchangeValues = {
                RUB: {
                    RUB: 1,
                    EUR: +eur / +rub,
                    USD: +usd / +rub,
                },
                USD: {
                    RUB: +rub / +usd,
                    EUR: +eur / +usd,
                    USD: 1,
                },
                EUR: {
                    RUB: +rub / +eur,
                    EUR: 1,
                    USD: +usd / +eur,
                }
            };

            this.selectInputCurrency = document.querySelector('#currency-input');
            this.inputInputCurrency = document.querySelector('.input');
            this.selectOutputCurrency = document.querySelector('#currency-output');
            this.inputOutputCurrency = document.querySelector('.output');

            this.fromCurrency = this.selectInputCurrency.value;
            this.toCurrency = this.selectOutputCurrency.value;

            this.listeners();
        }

        outputData() {
            this.inputOutputCurrency.value = this.inputInputCurrency.value * this.exchangeValues[this.fromCurrency][this.toCurrency];
            if (this.inputOutputCurrency.value === 'NaN') {
                this.inputOutputCurrency.value = 'Введите число!';
            }
        }

        listeners() {
            this.selectInputCurrency.addEventListener('change', () => {
                this.fromCurrency = this.selectInputCurrency.value;
                this.outputData();
            });
            this.selectOutputCurrency.addEventListener('change', () => {
                this.toCurrency = this.selectOutputCurrency.value;
                this.outputData();
            });

            this.inputInputCurrency.addEventListener('input', () => {
                this.inputInputCurrency.value = this.inputInputCurrency.value.replace(/[^\d\.]/, '');
                this.outputData();
            });
        }
    }

    const getExchengerApi = () => fetch('https://api.exchangeratesapi.io/latest');

    getExchengerApi()
        .then(request => request.json())
        .then(request => {
            const exchenger = new MoneyExchange(1, request.rates.USD, request.rates.RUB);
        });

});