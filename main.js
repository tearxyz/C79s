menu_list_array = ["Veg Margherita Pizza","Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"//add more items
                    ];


function getmenu(){
var htmldata;

        htmldata="<ol class='menulist'>" //creating an ordered list
        menu_list_array.sort();// sorting menu
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'// displaying in format 1. pizza name
        }
         htmldata=htmldata+"</ol>"// close ordered list
         document.getElementById("display_menu").innerHTML = htmldata;
//Complete the code
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;

//Complete the code
menu_list_array.sort();
htmldata="<section class='cards'>"// ew pizza in extto show nra card format
for(var i=0;i<menu_list_array.length;i++){

    htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>'//show item pic and mane side by sid ein a card
}
  htmldata=htmldata+"</section>"// close section
 document.getElementById("display_addedmenu").innerHTML = htmldata;


}

function add_top(){
    var item=document.getElementById("add_item").value;// add tem in main page as well. 
    menu_list_array.push(item);
	add_item();
//Complete the code
}