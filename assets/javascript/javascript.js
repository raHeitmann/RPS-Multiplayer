$(document).ready(function(){

console.log('ready!');

 var config = {
    apiKey: "AIzaSyCx2kt6qk1xCDmnWgJ7M-GfjKMSDCLGkVM",
    authDomain: "rps-multiplayer-c433d.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-c433d.firebaseio.com",
    projectId: "rps-multiplayer-c433d",
    storageBucket: "rps-multiplayer-c433d.appspot.com",
    messagingSenderId: "246513056808"
  };


  firebase.initializeApp(config);

  $(document).on('click', '.p1', function(){

  	event.preventDefault();
  	console.log("anything?");
  	console.log($(this));
  	var p1pick = $(this).attr('id');
  	console.log(p1pick);

  });


  $(document).on('click', '.p2', function(){

  	event.preventDefault();
  	console.log("anything?");
  	console.log($(this));
  	var p2pick = $(this).attr('id');
  	console.log(p2pick);

  });


})