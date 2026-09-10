var close = document.getElementById("close");
var offerbar= document.getElementById("offerbar")

close.addEventListener("click",function() {
    offerbar.style.display="none"
    
})

var sidenav=document.getElementById("sidenav");
var menuicon=document.getElementById("menuicon");
var closenav=document.getElementById("closenav");

menuicon.addEventListener("click",function(){

    sidenav.style.left=0

})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})

var product = document.getElementById("product")
var search = document.getElementById("search")
var productlist = product.querySelectorAll("section")

search.addEventListener("keyup", function(){
    var enteredValue=event.target.value.toUpperCase()

    for(count=0; count<productlist.length; count=count+1)
    {
        var productname=productlist[count].querySelector("h2").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        
        else{
            productlist[count].style.display="block"
        }
    }
})

var check = document.getElementsByName("check")

var product = document.querySelector(".right")

var s1 = product.querySelector(".s1")
var s2 = product.querySelector(".s2")
var s3 = product.querySelector(".s3")
var s4 = product.querySelector(".s4")
var s5 = product.querySelector(".s5")
var s6 = product.querySelector(".s6")
var s7 = product.querySelector(".s7")
var s8 = product.querySelector(".s8")
var s9 = product.querySelector(".s9")


// Product details
var products = [
    { product: s1, occasion: "summer", color: "blue", arrival: "new" },
    { product: s2, occasion: "summer", color: "green", arrival: "new" },
    { product: s3, occasion: "party", color: "red", arrival: "new" },
    { product: s4, occasion: "summer", color: "white", arrival: "old" },
    { product: s5, occasion: "beach", color: "blue", arrival: "new" },
    { product: s6, occasion: "party", color: "red", arrival: "old" },
    { product: s7, occasion: "party", color: "green", arrival: "old" },
    { product: s8, occasion: "beach", color: "red", arrival: "new" },
    { product: s9, occasion: "summer", color: "blue", arrival: "old" }
]


function filterProduct() {

    for (var i = 0; i < products.length; i++) {

        var details = products[i]

        var show = true


        // Occasion checkbox
        if (check[0].checked && details.occasion != "summer") {
            show = false
        }

        if (check[1].checked && details.occasion != "party") {
            show = false
        }

        if (check[2].checked && details.occasion != "beach") {
            show = false
        }


        // Colour checkbox
        if (check[3].checked && details.color != "red") {
            show = false
        }

        if (check[4].checked && details.color != "blue") {
            show = false
        }

        if (check[5].checked && details.color != "white") {
            show = false
        }

        if (check[6].checked && details.color != "green") {
            show = false
        }


        // Arrival checkbox
        if (check[7].checked && details.arrival != "new") {
            show = false
        }

        if (check[8].checked && details.arrival != "old") {
            show = false
        }


        // Show / Hide
        if (show) {
            details.product.style.display = ""
        }
        else {
            details.product.style.display = "none"
        }
    }
}


// Checkbox click
for (var i = 0; i < check.length; i++) {

    check[i].addEventListener("click", function(event) {

        if (event.target.checked) {
            console.log("Checked")
        }
        else {
            console.log("Unchecked")
        }

        filterProduct()

    })

}