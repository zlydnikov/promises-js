function Promise() {
    this.callbacks = [];
}

Promise.prototype.then = function (func, context) {
    var p;
    if (this.isdone) {
        p.func.apply(context, this.result);
    } else {
        p = new Promise();
        this.callbacks.push(function () {
            var res = func.apply(context, arguments);
            if (res && typeof res.then === 'function') {
                res.then(p.done, p);
            }
        });
    }
    return p;
};

Promise.prototype.done = function () {
    this.result = arguments;
    this.isdone = true;
    for (var i = 0; i < this.callbacks.length; i++) {
        this.callbacks[i].apply(null, arguments);
    }
    this.callbacks = [];
};



function promiseTest() {
    var p = new Promise();
    setTimeout(function() {
        p.done(null, 'Первый!');
    }, 1000);
    return p;
}
var promiseVar = promiseTest();
promiseVar.then(function(error, data){
    console.log(data);
});
promiseVar.then(function(error, data){
    console.log('Второй!');
});