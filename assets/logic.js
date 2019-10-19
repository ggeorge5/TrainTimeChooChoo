  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB1SvKhQvzWdHi9Xh9bwnGtkFtaYYfo8_4",
    authDomain: "choo-choo-7011e.firebaseapp.com",
    databaseURL: "https://choo-choo-7011e.firebaseio.com",
    projectId: "choo-choo-7011e",
    storageBucket: "choo-choo-7011e.appspot.com",
    messagingSenderId: "455317948618",
    appId: "1:455317948618:web:78a55d70142ad982358c33"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var trainDatabase = firebase.database();

// Add train button, collect and store info
$("#addTrain").on("click", function(event) {
  event.preventDefault();
  var trainName = $("#trainNameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var firstTrain = moment($("#timeInput").val().trim(),"HH:mm").subtract(10, "years").format("X");
  var frequency = $("#frequencyInput").val().trim();

  console.log(firstTrain);

  trainInputs = {
  trainName: trainName,
  destination: destination,
  firstTrain: firstTrain,
  frequency: frequency
}
// Send object to firebase 
  trainDatabase.ref().push(trainInputs)
});

// Moment.js math
trainDatabase.ref().on("child_added", function(snapshot) {
  var name = snapshot.val().trainName;
  var destination = snapshot.val().destination;
  var frequency = snapshot.val().frequency;
  var firstTrain = snapshot.val().firstTrain;
  
  var remainder = moment().diff(moment.unix(firstTrain), "minutes") % frequency
  var minutes = frequency - remainder;
  var arrival = moment().add(minutes, "m").format("hh:mm A");

  console.log(remainder);
  console.log(minutes);
  console.log(arrival);
  
// Append to table from firebase 
  $("#trainTable > tBody").append("<tr><td>" + name +"</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + arrival + "</td><td>" + minutes + "</td></tr>");
});

