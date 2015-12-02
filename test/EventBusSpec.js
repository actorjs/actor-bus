var assert = require('assert');
describe('EventBus', function() {

    var EventBus = require("../src/EventBus");

    // Mock actorRef
    var ActorRef = function(callback){
        this.tell = function(msg){
            callback(msg)
        }
    };

    describe('subscribe to eventbus', function () {

        // Create new mock actor ref
        var actorRef = new ActorRef();

        // New instance of event bus
        var eventBus = new EventBus();

        // Subscribe to event bus
        eventBus.subscribe(actorRef);


        it('should register an actor to the eventbus', function () {
            assert.equal(1, eventBus.actors.length);
            assert.equal(actorRef, eventBus.actors[0]);
        });
    });

    describe('publish to eventbus', function () {

        var message;

        var callback = function(msg){
            message = msg
        };

        // Create new mock actor ref
        var actorRef = new ActorRef(callback);

        // New instance of event bus
        var eventBus = new EventBus();

        // Subscribe to event bus
        eventBus.subscribe(actorRef);


        it('should publish an message to the eventbus', function () {

            eventBus.publish("Hello World!")
            assert.equal("Hello World!", message);

        });
    });
});