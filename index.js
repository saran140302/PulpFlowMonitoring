const firebaseConfig = {
    apiKey: "AIzaSyDQZzCdZMcLkTQqAih_M-Ks-xPREhTFhxo",
    authDomain: "waterflowdetector-bf28f.firebaseapp.com",
    databaseURL: "https://waterflowdetector-bf28f-default-rtdb.firebaseio.com",
    projectId: "waterflowdetector-bf28f",
    storageBucket: "waterflowdetector-bf28f.appspot.com",
    messagingSenderId: "190730341838",
    appId: "1:190730341838:web:e4d0c1561f7545e3dc2f9f"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref('data').on('value',   function(snapshot) {
    var flowRate = snapshot.val();
    var height_percent = (flowRate/50)*100;
    document.getElementById("value").innerText=flowRate+" L/min";
    $("#child").css("height", height_percent+"%");
    
});       