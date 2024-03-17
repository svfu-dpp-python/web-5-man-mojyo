var elem = document.getElementsByTagName("img");
var a;
elem[1].addEventListener("mouseover", function(){
    elem[1].setAttribute("height","120%;");
})
elem[1].addEventListener("mouseout", function(){
    elem[1].setAttribute("height","100%;");
})
elem[1].addEventListener("click", function(){
    for(let i=0; i<elem.length; i++){
        if(elem[i].getAttribute("tr") == "1"){
            elem[i].setAttribute("tr","6");
        }
        a = parseInt(elem[i].getAttribute("tr")) - 1;
        elem[i].setAttribute("tr",a)
        elem[i].setAttribute("src", "images/parr"+a+".jpg");
        
    }
})
