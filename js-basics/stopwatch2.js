
// We move the functions from instance member to prototype member( member of the baseStopwatch2 ) 
// so we don't waste memory when we have multiple Stopwatch objects. 
// ATTENTION !!!!
/*  This is not a good implementation for the following resons:
 - It goes agains Abstractization principle of OOP, by letting you see members you don't need.
 - You can now modify properties that souldn't be modifiable from an instance (breaks encapsulation principle), 
  this is not good because the user might break the functionallity of the object.
 - Even though we wanted to optimize memory use, the previous implementation was better because, we would only use one stopwatch object at a time,
  so no memory would be wasted. The prev. implementation also respected abstraction and encapsulation.
 */
function Stopwatch2() {
    let startTime, stopTime, duration=0, counting = false;

    Object.defineProperty(this, 'startTime', {
        get: function () {
            return startTime;
        },
        set: function(value){
            startTime = value;
        }
    });

    Object.defineProperty(this, 'stopTime', {
        get: function () {
            return stopTime;
        },
        set: function(value){
            stopTime = value;
        }
    });

    Object.defineProperty(this, "duration", {
        get: function (){
            if(counting) throw new Error('Stopwatch was not stopped!');
            return duration;
        },
        set: function(value){
            duration = value;
        }
    });

    Object.defineProperty(this, 'counting', {
        get: function () {
            return counting;
        },
        set: function(value){
            counting = value;
        }
    });

}

Stopwatch2.prototype.start = function (){
    if(this.counting) throw new Error("stopwatch already started.");
        this.counting = true;
    this.startTime = new Date();
};

Stopwatch2.prototype.stop = function (){
    if(!this.counting) throw new Error("stopwatch was not started.");
    this.counting = false;
    this.stopTime = new Date();
    this.duration += (this.stopTime.getTime() - this.startTime.getTime())/1000;
};

Stopwatch2.prototype.reset = function (){
    this.startTime=null, this.stopTime=null, this.duration=0, this.conting = false;
};
