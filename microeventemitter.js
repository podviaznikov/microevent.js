var MicroEventEmitter=Object.create({},{
    //object with all event's listeners
    events:{
        value:{}
    },
    //listener for event
    on:{
        value:function(event,fn){
            this.events[event]=this.events[event]||[];
            this.events[event].push(fn);
        }
    },
    //fire event
    fire:{
        value:function(event /* , args... */){
            if(event in this.events===false){
            	return;
            }
            var listeners=this.events[event],
                i=0;
            for(;i<listeners.length;i++){
                listeners[i].apply(this,Array.prototype.slice.call(arguments,1));
            }
        }
    }
});