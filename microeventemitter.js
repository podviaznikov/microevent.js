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
            for(var i=0;i<this.events[event].length;i++){
                this.events[event][i].apply(this,Array.prototype.slice.call(arguments,1));
            }
	    }
    }
});