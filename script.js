
	// function Jukebox(){

	// 	this.songs = ["9th", "beethoven", "flying"];

	// 	this.loadsong = function(){
	// 		if (this.songs) {};
	// 	}
	// 	this.play = function(){
	// 		var new_play = document.getElementById(this.songs.).play();
	// 		return console.log('new_play');
	// 	}

	// 	this.stop = function(){

	// 	}

function setAttributes(elem, attrs){
	for (var key in attrs){
		elem.setAttribute(key, attrs[key]);
	}
}


var songs = ["9th", "beethoven", "flying"];
var i = 3;
var jukebox = {
	songs: songs,
	load: function(song){
		if (document.getElementById("juke").lastElementChild.tagName == "AUDIO"){
			var audiotag = document.getElementById(song).cloneNode();
			var latestsong = document.getElementById("juke").lastChild;
			var remove = document.getElementById("juke").removeChild(latestsong);
			var addsong = document.getElementById("juke").appendChild(audiotag);}
		else {
			var audiotag = document.getElementById(song).cloneNode();
			var addsong = document.getElementById("juke").appendChild(audiotag);};
	},
	play: function(){
		document.getElementById("juke").lastChild.play();
	},

	stop: function(){
		document.getElementById("juke").lastChild.pause();
	},

	addmoresongs: function(){
		var newsong = document.getElementById("audiosrc").value;
		var portrait = document.getElementById("thumb").value;
		var custom = document.getElementById("unique").value;
		var header = document.getElementById("title").value;
		var newdiv = document.createElement("div");
		var newload = document.createElement("button");
		var newaudio = document.createElement("audio");
		var newavi = document.createElement("img");
		var newhead = document.createElement("h3");
		var spanchildren = document.createElement("span");
		newdiv.setAttribute("class", "sec_1")
		var div_cont = (document.getElementsByClassName("row_1")[0]).appendChild(newdiv);
		songs.push(header);
		div_cont.appendChild(newhead);
		newhead.innerText = header;
		newavi.setAttribute("src", (portrait !== " ")? portrait : custom);
		div_cont.appendChild(newavi);
		setAttributes(newaudio, {"src": newsong, "id":header, "controls":false, "style":"display:none"});
		div_cont.appendChild(newaudio);
		var newclick = "jukebox.load(songs[$"
		setAttributes(newload, {"id":"load", "onclick":`jukebox.load(songs[${i}])`, "style":"width: 185px; height:25px"});
		spanchildren.setAttribute("class", "glyphicon glyphicon-download-alt");
		spanchildren.innerText = "Load"
		newload.appendChild(spanchildren);
		div_cont.appendChild(newload);
		i++
	},
}

// document.getElementById('play').addEventListener( 'click', function() {
// 	var song = document.getElementById("")
// 	Jukebox.play(document.getElementbyId(""))
//     // oImg.src = //another image

// });

// document.getElementbyId('stop').addEventListener('click', function(){
// 	var song = document.getElementById("")
// })

// myjukebox.play() 
// myjukebox.loadsong()
// myJukebox.stop()
// myjukebox.songs