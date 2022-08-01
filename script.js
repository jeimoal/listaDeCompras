const ul = document.querySelector('ul');
let ipt = document.querySelector('#item');
const btn = document.querySelector('button');

btn.addEventListener('click', addItem);

function addItem() {
	let iptV = ipt.value;
	ipt.value = "";

	lItem = document.createElement('li');
	spn = document.createElement('span');
	btnR = document.createElement('button');
	btnR.className = "listItem";
	lItem.appendChild(spn);
	lItem.appendChild(btnR);
	spn.textContent = iptV;
	btnR.textContent = "Remover";
	ul.appendChild(lItem);

	btnR.addEventListener('click', rmvItem);
	ipt.focus();
}

function rmvItem() {
	let contItem = document.querySelectorAll('.listItem');
	for (i=0; i < contItem.length; i++){
		contItem[i].onclick = function() {
			let btnRmv = this.parentElement.style.display = "none";
		}
	}
}
