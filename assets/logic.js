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
  firebase.initializeApp(firebaseConfig);

  var trainDatabase = firebase.database();

  //adding train button to collect then store info
  $(document).on("click", '#addTrain', function(event) {
      event.preventDefault();
      var trainName = $("#train-name-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var firstTrain = moment($("#time-input").val().trim(), "HH:mm").format("military time");
      var frequency = $("#frequency-input").val().trim();

      console.log(firstTrain);

      trainInputs = {
          trainName: trainName,
          destination: destination,
          firstTrain: firstTrain,
          frequency: frequency
      }

      trainDatabase.ref().push(trainInputs)
  });

