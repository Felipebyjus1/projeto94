const firebaseConfig = {
    apiKey: "AIzaSyDvr1q66OS1qwnRfh1zpWoe_TgKqKHdz7E",
    authDomain: "kwitter-9a700.firebaseapp.com",
    databaseURL: "https://kwitter-9a700-default-rtdb.firebaseio.com",
    projectId: "kwitter-9a700",
    storageBucket: "kwitter-9a700.appspot.com",
    messagingSenderId: "511601161157",
    appId: "1:511601161157:web:56fb973b856988ed7451ac"
  };
  
  firebase.initializeApp(firebaseConfig)
  
  function addRoom(){
      var sala = document.getElementById("roomName").value
      firebase.database().ref("/projetoVamosCoversar").child(sala).update({
          purpose: "adicionar sala"
      })
  }