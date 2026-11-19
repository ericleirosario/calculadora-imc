const calcularImc = (event) => {
    event.preventDefault();

    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);

    const resultadoHidden = document.getElementById('resultado')
    const resultadoImc = document.getElementById('imc-valor');
    const classificacaoImc = document.getElementById('imc-classificacao')


    const imc = peso / (altura * altura);


    if (imc >= 40) {
        classificacaoImc.textContent = `Você está com Obesidade grau III`;
    } else if (imc >= 35 && imc < 40) {
        classificacaoImc.textContent = `Você está com Obesidade grau II`;
    } else if (imc >= 30 && imc < 35) {
        classificacaoImc.textContent = `Você está com Obesidade grau I`;
    } else if (imc >= 25 && imc < 30) {
        classificacaoImc.textContent = `Você está com Sobrepeso`;
    } else if (imc >= 18.5 && imc < 25) {
        classificacaoImc.textContent = `Você está com Peso normal`;
    } else {
        classificacaoImc.textContent = `Você está Abaixo do peso`;
    }


    resultadoImc.textContent = `${imc.toFixed(2)}`;
    resultadoHidden.classList.remove('hidden');

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';

}