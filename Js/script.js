$(document).ready(function){
    function orderNow(){
        var type = $("#type").val();
        var size = $("#pick").val();
        var crust = $("#crust").val();
        var toppings = $("#topping").val();
        var number = $("#quantity").val();

     function givenQuantity(){
         if(isNaN(number) || number<=0){
             number=1
         }
     }
     givenQuantity();

    //  setting prices
    var typePrice;
    if(size === "BBQ chicken"){
        typePrice = 150
    }else if (size === "BBQ steak"){
        typePrice = 200
    }else if(size === "Hawaiian"){
        typePrice = 100
    }else if (size === "Veggie"){
        typePrice = 200
    }else if(size === "Boerewors"){
        typePrice = 100
    }else if (size === "Periperi"){
        typePrice = 200
    }
    

     var crustPrice;
     if(crust === "crispy"){
         crustPrice = 150
     }else if (crust === "Glutten-free"){
         crustPrice = 200
     }else if(crust === "stuffed"){
         crustPrice = 100
     }
     var topPrice;
     if(toppings === "pineapple"){
        topPrice = 50
    }else if (toppings === "bacon"){
        topPrice = 100
    }else if(toppings === "Green-olives"){
        topPrice = 80
    }


















    }
}