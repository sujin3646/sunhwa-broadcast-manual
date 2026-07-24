let equipments = [];



fetch("./data/sample.json")

.then(response => response.json())

.then(data => {

    equipments = data;

    displayEquipment(equipments);

});





function displayEquipment(list){


    const box =
    document.getElementById("equipmentList");


    box.innerHTML = "";



    list.forEach(item => {


        box.innerHTML += `


        <div class="card">


        <h3>
        🎤 ${item.name}
        </h3>


        <p>
        📂 ${item.category}
        </p>


        <p>
        👤 ${item.manager || "미정"}
        </p>


        <a href="equipment.html?id=${item.id}">

        📖 매뉴얼 보기

        </a>


        </div>


        `;


    });


}





function filterCategory(category){


    if(category === "전체"){


        displayEquipment(equipments);

        return;

    }



    const result =
    equipments.filter(item =>
    item.category === category
    );


    displayEquipment(result);


}







function searchEquipment(){


    const keyword =
    document
    .getElementById("search")
    .value
    .toLowerCase()
    .trim();



    if(keyword === ""){


        displayEquipment(equipments);

        return;

    }



    const result =
    equipments.filter(item => {


        const name =
        item.name || "";


        const category =
        item.category || "";


        const manager =
        item.manager || "";



        return (

        name.toLowerCase().includes(keyword)

        ||

        category.toLowerCase().includes(keyword)

        ||

        manager.toLowerCase().includes(keyword)

        );


    });



    displayEquipment(result);


}
