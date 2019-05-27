# Handy Count system for games and other applications 
A tiny library that makes counting points for games and other applications easy.

## Install

The library makes use of jQuery. Make sure you include jQuery in your `<head></head>` tags. Do this by downloading the [`jQuery library`](https://jquery.com/) or make use of one of the following CDN links.

### Google CDN 

```
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
</head>
```

### Microsoft CDN

```
<head>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.0.min.js"></script>
</head>
```


Download or clone the repository to you project folder. Include the following line before the last `</body>` tag. 

```
<script src="spaarpunten.js"></script>
</body>
```

Last step and you're ready to go! Add the following line to your HTML code. If you want to make use of the CSS presets, copy everything. If you don't, just copy the span tags with the id's. 

```
<div class="count-system">
        <span id="minutes"></span> <p>minute(s)</p>
        <span id="seconds"></span> <p>seconds</p> 
        <span id="points"></span> <p>points</p> 
    </div>
```



## Usage 

There are several option available to customize spaarpunten.js to your likings.  

```
countSystem.setCssPreset();        //0:Dark CSS preset 1:Light CSS preset                   Default = No preset 
    
countSystem.maxPoints();            //Set the cap for the amount of points possible ot get. Default = 100
  
countSystem.addStep();              //Amount of points to add when asked.                   Default = 10

countSystem.substractStep();        //Amount of points to substract when asked.             Default = 5 
        
countSystem.tSeconds();            //Timer that will count down to zero.                    Default = 60
```

Set the options like below. If you don't set them, they will use default values.  
```
countSystem.tSeconds(120);  
```
After this just call the following lines to activate the library and start the timer.
```
countSystem.start(); //Enables to add points to the total 

countSystem.startTimer(); //Starts the timer 
```

Call this function everytime you want to add or substract points from the total.

```
countSystem.changePoints("+");      //Use "-" if you want to substract. 
```

When you want to stop or freeze the timer and points. Call the following function. 
```
countSystem.stop(); 
```
