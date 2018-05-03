window.onload = function () {
	$('select').material_select();

	document.getElementById('form')
		.addEventListener('submit', calcImc);

	anime();

	document.getElementById('altura').focus();
}

var config = {
	classes: {
		bom: 'teal-text text-lighten-1',
		cuidado: 'yellow-text text-darken-3',
		ruim: 'red-text text-darken-4'
	},
	description: {
		muitoAbaixo: "Muito abaixo do peso!",
		abaixo: "Abaixo do peso!",
		normal: "Peso normal!",
		acima: "Acima do peso!",
		obesidade1: "Obesidade Grau I!",
		obesidade2: "Obesidade Grau II!",
		obesidade3: "Obesidade Grau III!"
	}
}

function calculaIMC(){
  var pesoInput = document.getElementById('peso')
  var peso = pesoInput.value;
  var alturaInput = document.getElementById('altura');
  var altura = alturaInput.value;
  var imc = peso/(altura*altura);

  var className = '', description = '';
	if (imc < 16) {}
	else if (imc < 17) {
		className = config.classes.ruim;
		description = config.description.muitoAbaixo;
	}
	else if (imc < 18.5) {
		className = config.classes.cuidado;
		description = config.description.abaixo;
	}
	else if (imc < 25) {
		className = config.classes.bom;
		description = config.description.normal;
	}
	else if (imc < 30) {
		className = config.classes.cuidado;
		description = config.description.acima;
	}
	else if (imc < 35) {
		className = config.classes.ruim;
		description = config.description.obesidade1;
	}
	else if (imc <= 40) {
		className = config.classes.ruim;
		description = config.description.obesidade2;
	}
	else if (imc > 40) {
		className = config.classes.ruim;
		description = config.description.obesidade3;
	}

	var resultado = document.getElementById('resultado');

	resultado.innerText = imc.toFixed(2);
	resultado.className = className;
	document.getElementById('descricao').innerText = description;
	document.getElementById('openReveal').click();
}

function anime() {
	document.getElementById('background').className += ' active';
	document.getElementById('card').className += ' active';
}
