document.addEventListener("DOMContentLoaded", function () {
    
   
    countSystem.setCssPreset(1);
    
    countSystem.maxPoints(90);
  
    countSystem.addStep(10);
    countSystem.substractStep(2);
    countSystem.tSeconds(5);
    
    countSystem.start();
    countSystem.startTimer();
   
    setInterval(function () {
        countSystem.changePoints("+");
    }, 1500);

});