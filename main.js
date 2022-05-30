	$(document).ready(function() {
 	
    $("input[type='text']").val("");
    
    $("input[class='fahrenheit']").on("keyup", getCel);
    
    $("input[class='celsius']").on("keyup", getFah);
    
    
    function getCel () {
    
    var value = $("input[class='fahrenheit']").val();
    
    var temperature =  (value - 32) * 5 / 9;
    
    $(".celsius").val(temperature);
    
    }
    
    function getFah () {
    
    var value = $("input[class='celsius']").val();
    
    var temperature =  value * (9/5) + 32;
    
    $(".fahrenheit").val(temperature);
    
    }
    
    });
    
    