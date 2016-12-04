
var $images = document.querySelectorAll("ul img");
var $featured = document.querySelector("#featured");


$images.forEach(function printImage(img){
	//console.log(img);
	img.addEventListener("click", function clickHandler(e) {
		
		//var imageLink = e.target.parentNode.href;
		//console.log(imageLink);


		
		var $newImage = document.createElement("img");
		$newImage.src = img.parentNode.href;
		console.log($newImage);

		$featured.innerHTML = "";
		$featured.appendChild($newImage);
		
		e.preventDefault();
	});
});


