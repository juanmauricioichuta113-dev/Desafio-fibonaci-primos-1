/**
 * Lógica del Desafío Web: Fibonacci y Números Primos Combinados.
 */

function procesarSecuencia() {
    // 1. Obtención de datos del formulario mediante getElementById
    let inputCantidad = document.getElementById("cantidadTerminos");
    let areaResultado = document.getElementById("resultado");
    
    let n = parseInt(inputCantidad.value);
    
    // Validación interna de control
    if (isNaN(n) || n < 1) {
        areaResultado.innerHTML = "<p style='color: red;'>Por favor, ingrese un número entero positivo válido.</p>";
        return;
    }

    // Variables básicas para la Sucesión de Fibonacci sin vectores
    let a = 0;
    let b = 1;
    let c;

    // Variable acumuladora para construir el HTML resultante
    let htmlContenido = "<h3>Secuencia Generada:</h3>";

    // 2. Ciclo para evaluar los N términos solicitados de la serie
    for (let i = 1; i <= n; i++) {
        let numeroActual;

        // Definición de los primeros términos estándar
        if (i === 1) {
            numeroActual = a;
        } else if (i === 2) {
            numeroActual = b;
        } else {
            c = a + b;
            numeroActual = c;
            // Desplazamiento de variables numéricas simples
            a = b;
            b = c;
        }

        // 3. Evaluar si el número actual de Fibonacci es Primo
        let esPrimo = verificarPrimalidad(numeroActual);

        // 4. Construcción del componente visual dinámico
        if (esPrimo) {
            htmlContenido += "<div class='resultado-item primo'>";
            htmlContenido += "Término " + i + ": <strong>" + numeroActual + "</strong>";
            htmlContenido += "<span class='badge-primo'>Es Primo</span>";
            htmlContenido += "</div>";
        } else {
            htmlContenido += "<div class='resultado-item'>";
            htmlContenido += "Término " + i + ": <strong>" + numeroActual + "</strong>";
            htmlContenido += "</div>";
        }
    }

    // 5. Inyección del resultado final directamente en la página web
    areaResultado.innerHTML = htmlContenido;
}

/**
 * Función auxiliar para verificar si un número es primo.
 * Retorna true si es primo, de lo contrario false.
 */
function verificarPrimalidad(numero) {
    // Casos base menores o iguales a 1 no son primos
    if (numero <= 1) {
        return false;
    }

    let contadorDivisores = 0;

    // Estructura de control iterativa para conteo exacto de divisores
    for (let j = 1; j <= numero; j++) {
        if (numero % j === 0) {
            contadorDivisores++;
        }
    }

    // Un número es primo si y solo si posee exactamente 2 divisores (1 y él mismo)
    if (contadorDivisores === 2) {
        return true;
    } else {
        return false;
    }
}