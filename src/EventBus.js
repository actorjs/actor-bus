var EventBus = function () {

    this.actors = [];
};

EventBus.prototype.subscribe = function(actor){
    this.actors.push(actor)
}

EventBus.prototype.publish = function(message){
    this.actors.forEach(function(actor){
        actor.tell(message)
    })
}


module.exports = EventBus;