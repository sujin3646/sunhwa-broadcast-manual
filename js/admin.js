function saveNotice(){


const notice =
document.getElementById("notice").value;



if(notice==""){


alert("공지 내용을 입력하세요");

return;


}



alert(
"공지 저장 완료\n\n"+notice
);



}




function addEquipment(){


alert(
"장비 추가 기능 준비중입니다."
);


}




function editEquipment(){


alert(
"장비 수정 기능 준비중입니다."
);


}




function logout(){


location.href="index.html";


}
