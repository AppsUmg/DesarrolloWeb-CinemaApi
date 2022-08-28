let imageIndex = 1;

setImage(imageIndex);

showImage = (n) => {
	setImage(imageIndex += n);
}

function setImage(n) {
	let i;
	let x = document.getElementsByClassName("slideItems");

	if (n > x.length) {
		imageIndex = 1;
	}

	if (n < 1) {
		imageIndex = x.length;
	}
	
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}

	x[imageIndex-1].style.display = "flex";
	x[imageIndex-1].style.width = "100%";
	x[imageIndex-1].style.flexWrap = "wrap";
	x[imageIndex-1].style.justifyContent = "space-between";
}