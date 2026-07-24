let equipments = [];



fetch("./data/sample.json")

.then(response => response.json())

.then(data => {

    equipments = data;

    displayEquipment(equipments);

});





function getIcon(name){


    if(name.includes("전광판"))
        return "📺";


    if(name.includes("조명"))
        return "💡";


    if(name.includes("캠"))
        return "📷";


    if(name.includes("마이크"))
        return "🎤";


    if(name.includes("종"))
        return "🔔";


    if(name.includes("영어"))
        return "🎧";


    if(name.includes("줌"))
        return "💻";


    if(name.includes("시보기"))
        return "⏰";


    return "🔧";


}







function displayEquipment(list){


    const box =
    document.getElementById("equipmentList");


    box.innerHTML = "";



    list.forEach(item => {


        box.innerHTML += `


        <div class="card">


        <h3>

        ${getIcon(item.name)}
        ${item.name}

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



    if(category==="전체"){

        displayEquipment(equipments);

        return;

    }



    displayEquipment(

        equipments.filter(item =>
        item.category === category)

    );


}







function searchEquipment(){


    const keyword =
    document
    .getElementById("search")
    .value
    .toLowerCase();



    if(keyword===""){

        displayEquipment(equipments);

        return;

    }



    const result =
    equipments.filter(item=>{


        return (

        item.name
        .toLowerCase()
        .includes(keyword)


        ||

        item.category
        .toLowerCase()
        .includes(keyword)


        ||

        (item.manager || "")
        .toLowerCase()
        .includes(keyword)


        );


    });



    displayEquipment(result);


}
