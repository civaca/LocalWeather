document.addEventListener("DOMContentLoaded", function (event) {
    function tChange(m){
            document.getElementById("change").innerHTML = m;
            change.setAttribute("class", "alert-info");
            
            
        }
    /*get positions*/
    var x, y;
    
    
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showP);
      } else {document.getElementById("temp").innerHTML = "No supported";}
    

    function showP(pos){
        x= pos.coords.latitude;
        y= pos.coords.longitude;
        
    /*ajax conection*/             
    var ajax =  new XMLHttpRequest();
    
   ajax.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat="+x+"&lon="+y+"&units=metric&APPID=62574c2209eb237396a85b02230c5411",true);
    ajax.send(); 
 
  ajax.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var newAjax = JSON.parse(this.responseText);
      
      document.getElementById("name").innerHTML = newAjax.name + ", "+ newAjax.sys.country;/*City*/
         document.getElementById("description").innerHTML = newAjax.weather[0].description;
        document.getElementById("temp").innerHTML = newAjax.main.temp; /*Tem*/
        document.getElementById("graph").src = "http://openweathermap.org/img/w/"+newAjax.weather[0].icon +".png";/*link*/
       
      var back="";
        /*backgrouns*/
       switch (newAjax.weather[0].icon){
           case "01d":
               back = "skyclearr-min.jpeg";
               break;
           case "02d":
               back = "fewclouds-min.jpeg";
               break;
           case "03d":
           case "04d":
               back = "skyclear-min.jpeg";
               break;
           case "09d":
           case "10d":
           case "11d":
               back = "rain-min.jpeg";
               break;
           case "13d":
               back = "snow-min.jpeg";
               break;
           case "50d":
               back = "mist-min.jpeg";
               break;
           case "01n":
               back = "night-min.jpg";
               break;
           case "02n":
           case "03n":
           case "04n":
               back = "cloudsnight-min.jpeg";
               break;
           case "09n":
           case "10n":
           case "11n":
               back = "nightrain-min.jpeg";
               break;
           case "13n":
               back = "snown-min.jpeg";
               break;
           case "50n":
               back = "mistnight-min.jpeg";
               
               
               
                                      }
        
        /* closure of switch*/
         document.body.style.backgroundImage = "url("+back+")";
        
        
        
        /*creat link C*/
        
        var linkT= document.createElement("BUTTON");
        linkT.setAttribute("id", "change");
        var t = document.createTextNode(" C°");
        
        
     linkT.appendChild(t);
    document.getElementById("tempAndSign").appendChild(linkT);
       
        
        tChange(" °C");
        /*change to farengh*/
        
        document.getElementById("change").addEventListener("click",function changeToFr(){
      if (document.getElementById("temp").innerHTML== newAjax.main.temp_max) {
         var c = (newAjax.main.temp_max*(9/5));
          document.getElementById("temp").innerHTML = c.toPrecision(4);
        tChange(" °F");} else {document.getElementById("temp").innerHTML = newAjax.main.temp; 
                              tChange(" °C") ; }
    
        }); /* closure of change*/
    } /* closure of if*/
    
 }; /*closure of readstatechange*/
  

  
} /* closure of position*/
}); /*closure of loaded*/



