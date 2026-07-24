function login(){


const id =
document.getElementById("id").value;


const pw =
document.getElementById("pw").value;



// 임시 관리자 계정

if(id==="admin" && pw==="1234"){


location.href="admin.html";


}

else{


document.getElementById("message").innerHTML =
"❌ 로그인 정보를 확인해주세요";


}


}
