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
    var sizePrice;
    if(size === "crispy"){
        sizePrice = 150
    }else if (size === "Glutten-free"){
        sizePrice = 200
    }else if(size === "stuffed"){
        sizePrice = 100
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