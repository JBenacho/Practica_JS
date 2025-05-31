
function esPalindromo(str) {
    let limpia = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverso = limpia.split('').reverse().join('');
    return limpia === reverso ? `"${str}" ES un palíndromo.` : `"${str}" NO es un palíndromo.`;
}

function mayorNumero(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (num1 > num2) {
        return `${num1} ES mayor que ${num2}.`;
    } else if (num2 > num1) {
        return `${num2} ES mayor que ${num1}.`;
    } else {
        return `${num1} y ${num2} son iguales.`;
    }
}

function extraerVocales(str) {
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let resultado = [];
    str = str.toLowerCase();
    for (let char of str) {
        if (vocales.includes(char) && !resultado.includes(char)) {
            resultado.push(char);
        }
    }
    return resultado.length > 0 ? `Vocales: ${resultado.join(', ')}` : 'No se encontraron vocales.';
}

function contarVocales(str) {
    let conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    str = str.toLowerCase();
    for (let char of str) {
        if (char in conteo) {
            conteo[char]++;
        }
    }
    let resultado = '';
    for (let vocal in conteo) {
        if (conteo[vocal] > 0) {
            resultado += `${vocal}: ${conteo[vocal]}\n`;
        }
    }
    return resultado || 'No se encontraron vocales.';
}

function mostrarEjercicio(ejercicio) {
    // Ocultar todos los formularios
    document.querySelectorAll('.ejercicio-form').forEach(form => {
        form.style.display = 'none';
    });
    // Mostrar el formulario seleccionado
    document.getElementById(`${ejercicio}Form`).style.display = 'block';
}

// Configurar eventos de los formularios
document.getElementById('palindromoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let cadena = document.getElementById('cadena').value;
    alert(esPalindromo(cadena));
});

document.getElementById('mayorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    alert(mayorNumero(num1, num2));
});

document.getElementById('vocalesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let frase = document.getElementById('fraseVocales').value;
    alert(extraerVocales(frase));
});

document.getElementById('contarVocalesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let frase = document.getElementById('fraseContar').value;
    alert(contarVocales(frase));
});

// Mostrar el formulario del palíndromo por defecto
mostrarEjercicio('palindromo');
