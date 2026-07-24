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
            📂 카테고리<br>
            ${item.category}
            </p>


            <p>
            👤 담당학생<br>
            ${item.manager}
            </p>



            <a href="equipment.html?id=${item.id}">
            
            📖 매뉴얼 보기
            
            </a>



        </div>


        `;


    });


}




function filterCategory(category){


    if(category=="전체"){

        displayEquipment(equipments);

        return;

    }



    const result =
    equipments.filter(item =>
        item.category == category
    );


    displayEquipment(result);


}
