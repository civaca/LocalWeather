document.addEventListener("DOMContentLoaded", function(event){
    var x;
    var y;
    
    if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {document.getElementById("temp").innerHTML = "No supported"}
    }); /*closure of loaded*/
    function showPosition(position){
        x= position.coords.latitude;
        y= position.coords.longitude;
         console.log(x);
    console.log(y);
        
    var ajax =  new XMLHttpRequest();
    
   ajax.open("GET", "https://fcc-weather-api.glitch.me/api/current?lat="+x+"&lon="+y,true);
    ajax.send(); 
 
  ajax.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var newAjax = JSON.parse(this.responseText);
      console.log(newAjax);
      document.getElementById("temp").innerHTML = newAjax.name
    }; /* closure of if*/
    
 }; /*closure of readstatechange*/
  

  
}; /* closure of position*/