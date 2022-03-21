$(document).ready(function(){
   $(".btn").click(function(){
        var type = $("#type option:selected").val();
        var size = $("#pick option:selected").val();
        var crust = $("#crust option:selected").val();
        var toppings = $("#topping option:selected").val();
        var number = $("#quantity").val();

     function givenQuantity(){
         if(isNaN(number) || number<=0){
             number=1
         }
     }
     givenQuantity();

    //  setting prices
    var typePrice;
    if(type === "chicken"){
        typePrice = 400
    }else if (type === "steak"){
        typePrice = 300
    }else if(type === "hawai"){
        typePrice = 200
    }else if (type === "veggie"){
        typePrice = 200
    }else if(type === "boerewors"){
        typePrice = 300
    }else if (type === "periperi"){
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
     }else if (crust === "glutten-free"){
         crustPrice = 200
     }else if(crust === "stuffed"){
         crustPrice = 100
     }
     var topPrice;
     if(toppings === "pineapple"){
        topPrice = 50
    }else if (toppings === "bacon"){
        topPrice = 100
    }else if(toppings === "green-olives"){
        topPrice = 80
    }
    var deliveryCheck =document.getElementById('check');
    var deliveryPrice = 0;
    if(deliveryCheck.checked == true){
        deliveryPrice = 300
    }else{
        deliveryPrice =0;
    }

    var totalPrice = number * (topPrice + crustPrice + sizePrice + typePrice + deliveryPrice);
    var totalCost = parseInt(totalPrice);

   