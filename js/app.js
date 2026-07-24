let equipments = [];


fetch("./data/sample.json")

.then(response => response.json())

.then(data => {

    equipments = data;

    displayEquipment(equipments);

})

.catch(error => {

    console.log(error);

    document.getElementById("equipmentList").innerHTML =
    "<p>⚠ 장비 데이터를 불러오지 못했습니다.</p>";

});





function displayEquipment(list){


    const box =
    document.getElementById("equipmentList");


    if(!box){
        return;
    }


    box.innerHTML = "";



    list.forEach(item => {



        box.innerHTML += `


        <div class="card">


            <h3>
            🎤 ${item.name}
            </h3>

<a href="equipment.html?id=${item.id}">
📖 매뉴얼 보기
</a>

            <p>
            📂 <b>카테고리</b><br>
            ${item.category}
            </p>



            <p>
            👤 <b>담당학생</b><br>
            ${item.manager}
            </p>



            <p>
            ⚙ <b>사용 방법</b><br>
            ${item.step.replaceAll("\n","<br>")}
            </p>



            <p>
            ⚠ <b>주의사항</b><br>
            ${item.warning.replaceAll("\n","<br>")}
            </p>



        </div>


        `;


    });


}

function filterCategory(category){


    if(category=="전체"){

        displayEquipment(equipments);

        return;

    }



    let result =
    equipments.filter(item =>

        item.category == category

    );



    displayEquipment(result);


}
