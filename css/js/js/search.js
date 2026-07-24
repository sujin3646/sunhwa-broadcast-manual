const searchInput =
document.getElementById("searchInput");



if(searchInput){



searchInput.addEventListener(
"input",
function(){


let keyword =
this.value.toLowerCase();



let result =
equipments.filter(item=>



item.name
.toLowerCase()
.includes(keyword)



||

item.category
.toLowerCase()
.includes(keyword)



||

item.manager
.toLowerCase()
.includes(keyword)



);



displayEquipment(result);



});


}
