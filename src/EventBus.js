var EventBus = function () {

    this.callbacks = [];
};

EventBus.prototype.subscribe = function(callback){
    this.callbacks.push(callback)
}

EventBus.prototype.publish = function(event){
    this.callbacks.forEach(function(calback){
        calback(event)
    })
}


module.exports = EventBus;