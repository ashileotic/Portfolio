

const changeBodyColor = () => {
	let node_body = document.querySelector("body");
	let node_input = document.querySelector("input");
	if (node_input.checked == true) {
		node_body.style.color = "darkcyan";
		console.log('allo');

	} else {
		node_body.style.color = "white";
	}
}