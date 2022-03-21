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
    if(type === "BBQ chicken"){
        typePrice = 400
    }else if (type === "BBQ steak"){
        typePrice = 300
    }else if(type === "Hawaiian"){
        typePrice = 200
    }else if (type === "Veggie"){
        typePrice = 200
    }else if(type === "Boerewors"){
        typePrice = 300
    }else if (type === "Periperi"){
        typePrice = 200
    }

    var sizePrice;
     if(size === "large"){
         sizePrice = 800
     }else if (size === "medium"){
         sizePrice = 600
     }else if(size === "small"){
         sizePrice = 400
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

    var totalPrice = number * (topPrice + crustPrice + sizePrice + typePrice)


















    }
}