ActorJs Bus
===========

See [ActorJs Core](https://github.com/actorjs/actor-core)

Description
-----------

ActorJs Bus is a module wich implements a EventBus. The bus can be used to broadcast messages over the actor system. Actors can subscribe to the bus and listen on a particular message.

Installation
------------
Install it
```
npm i actorjs-bus
```

Use it nodejs
```
var actorBus = require('actor-bus');
```

Use it web
```
var actorBus =  actorjs.bus
```

Subscribe to the bus
```
actorBus.EventBus.subscribe(function(message){
    //Use message
})
```

Publish to the bus
```
actorBus.EventBus.publish(message)
```


Use in combination with TypeMatchers and TypeMessage
```
var typeMatcher = actorBus.core.ActorMatchers.TypeMatcher;
var typeMessage = actorBus.core.ActorMatchers.TypeMessage;

actorBus.EventBus.subscribe(typeMatcher({
    <typeName>: function (<Object>) {
        //Do something
    }
})

actorBus.EventBus.publish(typeMessage(<typeName>, <Object>))
```