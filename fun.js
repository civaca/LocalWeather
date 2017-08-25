document.addEventListener("DOMContentLoaded", function (event) {
   
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
      console.log(newAjax);
      document.getElementById("name").innerHTML = newAjax.name; /*City*/
        document.getElementById("temp").innerHTML = newAjax.main.temp; /*Tem*/
        document.getElementById("graph").src = "http://openweathermap.org/img/w/"+newAjax.weather[0].icon +".png";/*link*/
       
      var back="";
        /*backgrouns*/
        switch (newAjax.weather[0].icon){
            case "01d":
                back = "https://static.pexels.com/photos/209798/pexels-photo-209798.jpeg";
                break;
            case "02d":
                back = "https://static.pexels.com/photos/539164/pexels-photo-539164.jpeg";
                break;
            case "03d":
            case "04d":
                back = "https://static.pexels.com/photos/412462/pexels-photo-412462.jpeg";
                break;
            case "09d":
            case "10d":
            case "11d":
                back = "https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg";
                break;
            case "13d":
                back = "https://static.pexels.com/photos/309384/pexels-photo-309384.jpeg";
                break;
            case "50d":
                back = "https://static.pexels.com/photos/157304/pexels-photo-157304.jpeg";
                break;
            case "01n":
                back = "https://static.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg";
                break;
            case "02n":
            case "03n":
            case "04n":
                back = "https://static.pexels.com/photos/239107/pexels-photo-239107.jpeg";
                break;
            case "09n":
            case "10n":
            case "11n":
                back = "https://static.pexels.com/photos/119569/pexels-photo-119569.jpeg";
                break;
            case "13n":
                back = "https://static.pexels.com/photos/280204/pexels-photo-280204.jpeg";
                break;
            case "50n":
                back = "https://static.pexels.com/photos/327308/pexels-photo-327308.jpeg";
                
                
                
                                       };
        console.log(back);
        /* closure of switch*/
         document.body.style.backgroundImage = "url("+back+")";
        
        
        
        /*creat link C*/
        
        var linkT= document.createElement("A");
        linkT.setAttribute("id", "change");
        var t = document.createTextNode(" C°");
     linkT.appendChild(t);
    document.getElementById("tempAndSign").appendChild(linkT);
        function tChange(m){
            document.getElementById("change").innerHTML = m;
            
        }
        
        tChange(" C°");
        /*change to farengh*/
        
        document.getElementById("change").addEventListener("click",function changeToFr(){
      if (document.getElementById("temp").innerHTML== newAjax.main.temp_max) { document.getElementById("temp").innerHTML = (newAjax.main.temp_max*(9/5))+32;
        tChange(" F°")} else {document.getElementById("temp").innerHTML = newAjax.main.temp_max; tChange(" C°")
        ;}
    
        }); /* closure of change*/
    } /* closure of if*/
    
 }; /*closure of readstatechange*/
  

  
} /* closure of position*/
}); /*closure of loaded*/

