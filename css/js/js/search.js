document
.getElementById("searchInput")
.addEventListener("input", function(){

    let keyword = this.value.toLowerCase();

    let result = equipments.filter(function(item){

        return (
            item.name.toLowerCase().includes(keyword) ||
            item.category.toLowerCase().includes(keyword) ||
            item.manager.toLowerCase().includes(keyword)
        );

    });

    displayEquipment(result);

});
