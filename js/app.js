let equipments = [];



fetch("data/sample.json")

.then(response => response.json())

.then(data => {

    equipments = data;

    displayEquipment(equipments);

});





function displayEquipment(list){


    const box =
    document.getElementById("equipmentList");



    if(!box){
        return;
    }



    box.innerHTML="";




    list.forEach(item=>{



        box.innerHTML += `


        <div class="card">


            <h3>
            🎤 ${item.name}
            </h3>



            <p>
            📂 ${item.category}
            </p>



            <p>
            👤 담당학생 :
            ${item.manager}
            </p>



            <a href="equipment.html?id=${item.id}">
            자세히 보기 →
            </a>



        </div>


        `;


    });


}
