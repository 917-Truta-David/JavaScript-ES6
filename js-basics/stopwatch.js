
function Stopwatch() {
    let startTime, stopTime, duration, counting = false;

    this.start = function (){
        if(counting) throw new Error("stopwatch already started.");
        counting = true;
        startTime = new Date();
    }

    this.stop = function (){
        if(!counting) throw new Error("stopwatch was not started.");
        counting = false;
        stopTime = new Date();
        duration += (stopTime.getTime() - startTime.getTime())/1000;
    }

    this.reset = function (){
        startTime=null, stopTime=null, duration=0, conting = false;
    }

    Object.defineProperty(this, "duration", {
        get: function (){
            if(counting) throw new Error('Stopwatch was not stopped!');
            return duration;
        }
    });
}
