const searchInput =
document.getElementById("searchInput");



if(searchInput){


searchInput.addEventListener("input", function(){


    const keyword =
    this.value.toLowerCase();



    const result =
    equipments.filter(item => {



        return (

            item.name.toLowerCase().includes(keyword)

            ||

            item.category.toLowerCase().includes(keyword)

            ||

            item.manager.toLowerCase().includes(keyword)

            ||

            item.step.toLowerCase().includes(keyword)

            ||

            item.warning.toLowerCase().includes(keyword)

        );


    });



    displayEquipment(result);



});


}
