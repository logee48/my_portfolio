const firebaseConfig = {
    apiKey: "AIzaSyCL8pUOlAL8i-gyWFW6jhjd2wYqyiQUKZA",
    authDomain: "twoo-77302.firebaseapp.com",
    databaseURL: "https://twoo-77302-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "twoo-77302",
    storageBucket: "twoo-77302.appspot.com",
    messagingSenderId: "135447477359",
    appId: "1:135447477359:web:8acc4c56ab1e7714c4e19a",
    measurementId: "G-WKRKWCHRWH"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  document.getElementById("message11").addEventListener("submit", sendMessage);
//   document.getElementById("ll1").addEventListener("submit", like_fun);
  
  function sendMessage(e){
  
    e.preventDefault();
    const timestamp = Date.now();
    const messageInput = document.getElementById("commend");
    const message = messageInput.value;
    messageInput.value = "";
    db.ref("mess/" + timestamp).set({
      message
    });
  }
//   function like_fun(e)
//   {
//       document.getElementById("replay1").style.display = "none";
//       e.preventDefault();
//       const timestamp = Date.now();
//       db.ref("likecount/"+timestamp).set({
//           timestamp
//       });
//   }
  
  const fetchChat = db.ref("mess/");
  fetchChat.on("child_added", function (snapshot) {
        const me = snapshot.val();
        var messs = `<ul>${me.message}</ul>`;
        document.getElementById("messag").innerHTML += messs;
      });
    // const fetch = db.ref("likecount/");
    // fetch.on("child_added", function (snapshot){
    //     const mee = snapshot.val();
    //     var like_coun = `${me.timestamp}`;
    //     document.getElementById("l1").innerHTML += like_coun;
    // })
  

// const l1_count = 0;
// function count1()
// {
//     document.getElementById("l1").innerHTML = l1_count;
// }
// document.getElementById("l1").addEventListener("click", count1);


// document.getElementById("comment1").style.display = "none";
// document.getElementById("comment2").style.display = "none";
// document.getElementById("replay1").addEventListener("click", replay_clip);
// function replay_clip()
// {
//     if(document.getElementById("comment1").style.display === "none")
//     {
//         document.getElementById("comment1").style.display = "block";
//     }
//     else{
//         document.getElementById("comment1").style.display = "none";
//     }
// }

var coll = document.getElementsByClassName("replay_slide");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}