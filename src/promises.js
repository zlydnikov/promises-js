function rentCar(choosenCar) {
    console.log('Проверка машины');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('В аренде отказано: машина занята');
        }, 1000);
    });
    return promise;
}

function getCar(car) {
    console.info('Машина выбрана');
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(car), 1000);
    });
}

function applyDocuments(documents) {
    console.log('Получаем документы...');
    return Promise.resolve(documents);
}

function makePayment(card) {
    console.log('Проводим оплату...');
}

function bookCar(car) {
    console.log('Поздравляем! Машина аредована!');
}

rentCar({})
    .then(getCar)
    .then(applyDocuments)
    .then(makePayment)
    .then(bookCar)
    .catch(error => console.error(error));