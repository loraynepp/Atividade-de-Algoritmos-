// Função principal para calcular a soma
function calcularSoma() {
    // Obter valores dos inputs
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    // Elementos de erro
    const error1 = document.getElementById('error1');
    const error2 = document.getElementById('error2');
    
    // Validar entradas
    let isValid = true;
    
    if (num1 === '' || isNaN(num1) || !Number.isInteger(parseFloat(num1))) {
        error1.style.display = 'block';
        isValid = false;
    } else {
        error1.style.display = 'none';
    }
    
    if (num2 === '' || isNaN(num2) || !Number.isInteger(parseFloat(num2))) {
        error2.style.display = 'block';
        isValid = false;
    } else {
        error2.style.display = 'none';
    }
    
    if (!isValid) {
        return;
    }
    
    // Calcular soma
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    const soma = n1 + n2;
    
    // Exibir resultado
    exibirResultado(n1, n2, soma);
    
    // Adicionar ao histórico
    adicionarAoHistorico(n1, n2, soma);
}

// Função para exibir o resultado na tela
function exibirResultado(num1, num2, soma) {
    const result = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    
    resultText.textContent = `${num1} + ${num2} = ${soma}`;
    result.style.display = 'block';
}

// Função para adicionar cálculo ao histórico
function adicionarAoHistorico(num1, num2, soma) {
    const historyList = document.getElementById('historyList');
    const listItem = document.createElement('li');
    
    // Formatar data e hora
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    
    listItem.textContent = `${timeString}: ${num1} + ${num2} = ${soma}`;
    
    // Adicionar no início da lista
    if (historyList.firstChild) {
        historyList.insertBefore(listItem, historyList.firstChild);
    } else {
        historyList.appendChild(listItem);
    }
    
    // Limitar histórico a 5 itens
    if (historyList.children.length > 5) {
        historyList.removeChild(historyList.lastChild);
    }
}

// Função para limpar todos os campos
function limparCampos() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('error1').style.display = 'none';
    document.getElementById('error2').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Permitir calcular pressionando Enter
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            calcularSoma();
        }
    });
    
    // Adicionar foco automático no primeiro campo
    document.getElementById('num1').focus();
});

// Função adicional para demonstrar uso de módulos
function validarNumeroInteiro(valor) {
    return valor !== '' && !isNaN(valor) && Number.isInteger(parseFloat(valor));
}