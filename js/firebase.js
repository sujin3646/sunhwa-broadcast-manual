import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const firebaseConfig = {


여기에 Firebase 코드 붙여넣기


};



const app =
initializeApp(firebaseConfig);



const db =
getFirestore(app);



export { db };
