  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB7XtWA6PQXqUuaBE6zFiRt75nBXAPy7Zw",
    authDomain: "traintime-ea8e5.firebaseapp.com",
    databaseURL: "https://traintime-ea8e5.firebaseio.com",
    projectId: "traintime-ea8e5",
    storageBucket: "traintime-ea8e5.appspot.com",
    messagingSenderId: "491082082642",
    appId: "1:491082082642:web:930f45efc7f9bee9af728b"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  var trainDatabase = firebase.database();

  //adding train button to collect then store info
  $("addTrain").on("click", function(event) {
      event.preventDefault();
      var trainName = $("#train-name-input").val().trim();
      var trainDestination = $("#destination-input").val().trim();
      var firstTrain = moment($("#time-input").val().trim(), "HH:mm").format("military time");
      var frequency = $("#frequency-input").val().trim();


      var trainInputs = {
          Name: trainName,
          destination: trainDestination,
          start: firstTrain,
          time: frequency
      };

      trainDatabase.ref().push(trainInputs)

      alert("Train has been scheduled");

      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#time-input").val("");
      $("#frequency-input").val("");
  });

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var trnName = childSnapshot.val().name;
    var trnDestination = childSnapshot.val().role;
    var trnTime = childSnapshot.val().start;
    var trnFrequency = childSnapshot.val().rate;

    console.log(trnName);
    console.log(trnDestination);
    console.log(trnTime);
    console.log(trnFrequency);

    var trainStartPretty = moment.unix(trnTime).format("HH:mm");

    var trnMinutes = moment().diff(moment(trnTime).format)
  })

