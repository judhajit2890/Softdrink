//================popup=================//
var popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}


//=========active scroll navigation=================//


var section = document.querySelectorAll('section');
var navbar = document.querySelectorAll('section nav a');


window.onscroll = () =>{
    section.forEach(sec =>{
        var top = window.scrollY;
        var offset = sec.offsetTop;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');



        if (top >= offset && top <offset + height){
            navbar.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('section nav a[href*=' + id + ']').classList.add
                ('active');
            });
        };
    });
};

//--------navigation-----------//
$(".menu").click(function(){
    $("#menubar").slideToggle();
});

//===============product=======//
var canimage = document.getElementById("canimage");
var splashimage = document.getElementById("splashimage");
var pname = document.getElementById("pname");
var benifit = document.getElementById("benifit");
var can1 = document.getElementById("can1");
var can2 = document.getElementById("can2");
var can3 = document.getElementById("can3");
var can4 = document.getElementById("can4");
var can5 = document.getElementById("can5");
var can6 = document.getElementById("can6");
var can7 = document.getElementById("can7");
var can8 = document.getElementById("can8");



can1.onclick = function(){
    canimage.style.backgroundImage = "url(img/pcan/pcan1.png)";
    splashimage.style.backgroundImage = "url(img/splash/png/splash1.png)";
    pname.innerHTML="Strawberry";
    benifit.innerHTML="The health benefits of Strawberry Milk include Its property as the best immunity booster."
    
}

can2.onclick = function(){
    canimage.style.backgroundImage = "url(img/pcan/pcan2.png)";
    splashimage.style.backgroundImage = "url(img/splash/png/splash2.png)";
    pname.innerHTML="Mango";
    benifit.innerHTML="A glassful of chilled Mango Milk is not just refreshing but also replenishes your system in this sweltering heat."
    
}
can3.onclick = function(){
    canimage.style.backgroundImage = "url(img/pcan/pcan3.png)";
    splashimage.style.backgroundImage = "url(img/splash/png/splash3.png)";
    pname.innerHTML="Chocolate";
    benifit.innerHTML="Chocolate milk offer some nutritional value thanks to the vitamins and minerals in the milk and ice cream used to make them."

    
}
can4.onclick = function(){
    canimage.style.backgroundImage = "url(img/pcan/pcan4.png)";
    splashimage.style.backgroundImage = "url(img/splash/png/splash4.png)";
    pname.innerHTML="Pista";
    benifit.innerHTML="Pista Milk has a mild but rich, distinctive flavor and a lovely very pale-green color. It's excellent over cereal or in chai tea, coffee."
    
}
can5.onclick = function(){
    canimage.style.backgroundImage = "url(img/pcan/pcan5.png)";
    splashimage.style.backgroundImage = "url(img/splash/png/splash5.png)";
    pname.innerHTML="Coconut";
    benifit.innerHTML="Coconut Milk and cream are sources of healthy fats called medium-chain triglycerides (MCTs). MCTs promotes weight loss by decreasing appetite and increasing energy."
    
}
can6.onclick = function(){
    canimage.style.backgroundImage = "url(img/pcan/pcan6.png)";
    splashimage.style.backgroundImage = "url(img/splash/png/splash6.png)";
    pname.innerHTML="Kesar";
    benifit.innerHTML="Kesar Milk is a very healthy and nutritious drink. Kesar Doodh is an ancient drink that has been consumed in Indian homes for ages on a regular basis."

    
}
can7.onclick = function(){
    canimage.style.backgroundImage = "url(img/pcan/pcan7.png)";
    splashimage.style.backgroundImage = "url(img/splash/png/splash7.png)";
    pname.innerHTML="Coffee";
    benifit.innerHTML="Coffee Milk provides all the macro nutrients in good amounts; It provides 1.5g of carbohydrates, 1g of protein and 1gram of fat."

    
}
can8.onclick = function(){
    canimage.style.backgroundImage = "url(img/pcan/pcan8.png)";
    splashimage.style.backgroundImage = "url(img/splash/png/splash8.png)";
    pname.innerHTML="Honey";
    benifit.innerHTML="The healthy Honey Milk is a good source of antioxidant vitamin C. It added calories without nutrients."

    
}
//===============product end=======//

//=======from validation=============//
function validation(){
    var use = document.getElementById("user").value;
    var em = document.getElementById("email").value;
    var mas = document.getElementById("massage").value;
    
    
    
    if (use ==""){
        document.getElementById("uname").innerHTML="user name required";
        return false;
    }
    if (em ==""){
        document.getElementById("mail").innerHTML="email required";
        return false;
    }
    if (mas ==""){
        document.getElementById("mass").innerHTML="Type your massage";
        return false;
    }
    else{
        document.write("<h5>Thankyou</h5>")
    }
}


