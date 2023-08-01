// Funciones para cálculos matemáticos
function calcularPotencia() {
    const base = parseFloat(document.getElementById('base').value);
    const exponente = parseFloat(document.getElementById('exponente').value);
    const resultado = Math.pow(base, exponente);
    document.getElementById('resultadoPotencia').innerText = `El resultado es: ${resultado}`;
}

function calcularRaiz() {
    const numero = parseFloat(document.getElementById('numero').value);
    const indice = parseFloat(document.getElementById('indice').value);
    const resultado = Math.pow(numero, 1 / indice);
    document.getElementById('resultadoRaiz').innerText = `La raíz es: ${resultado}`;
}

function calcularAreaTriangulo() {
    const baseTriangulo = parseFloat(document.getElementById('baseTriangulo').value);
    const alturaTriangulo = parseFloat(document.getElementById('alturaTriangulo').value);
    const resultado = (baseTriangulo * alturaTriangulo) / 2;
    document.getElementById('resultadoAreaTriangulo').innerText = `El área del triángulo es: ${resultado}`;
}

function calcularAreaRectangulo() {
    const lado1Rectangulo = parseFloat(document.getElementById('lado1Rectangulo').value);
    const lado2Rectangulo = parseFloat(document.getElementById('lado2Rectangulo').value);
    const resultado = lado1Rectangulo * lado2Rectangulo;
    document.getElementById('resultadoAreaRectangulo').innerText = `El área del rectángulo es: ${resultado}`;
}

function calcularAreaCuadrado() {
    const ladoCuadrado = parseFloat(document.getElementById('ladoCuadrado').value);
    const resultado = Math.pow(ladoCuadrado, 2);
    document.getElementById('resultadoAreaCuadrado').innerText = `El área del cuadrado es: ${resultado}`;
}

function calcularAreaCirculo() {
    const radioCirculo = parseFloat(document.getElementById('radioCirculo').value);
    const resultado = Math.PI * Math.pow(radioCirculo, 2);
    document.getElementById('resultadoAreaCirculo').innerText = `El área del círculo es: ${resultado}`;
}

// Funciones para conversiones
function convertirMasa() {
    const cantidadMasa = parseFloat(document.getElementById('masa').value);
    const unidadOrigenMasa = document.getElementById('unidadOrigenMasa').value;
    const unidadDestinoMasa = document.getElementById('unidadDestinoMasa').value;

    // Fórmulas para conversiones de masa
    const unidades = {
        gramo: 1,
        kilogramo: 1000,
        libra: 453.592,
        onza: 28.3495,
    };

    const resultado = cantidadMasa * unidades[unidadOrigenMasa] / unidades[unidadDestinoMasa];
    document.getElementById('resultadoMasa').innerText = `El resultado de la conversión es: ${resultado.toFixed(2)} ${unidadDestinoMasa}`;
}

function convertirLongitud() {
    const cantidadLongitud = parseFloat(document.getElementById('longitud').value);
    const unidadOrigenLongitud = document.getElementById('unidadOrigenLongitud').value;
    const unidadDestinoLongitud = document.getElementById('unidadDestinoLongitud').value;

    // Fórmulas para conversiones de longitud
    const unidades = {
        metro: 1,
        centimetro: 0.01,
        milimetro: 0.001,
        kilometro: 1000,
        pulgada: 0.0254,
        pie: 0.3048,
    };

    const resultado = cantidadLongitud * unidades[unidadOrigenLongitud] / unidades[unidadDestinoLongitud];
    document.getElementById('resultadoLongitud').innerText = `El resultado de la conversión es: ${resultado.toFixed(2)} ${unidadDestinoLongitud}`;
}

function convertirDensidad() {
    const cantidadDensidad = parseFloat(document.getElementById('densidad').value);
    const unidadOrigenDensidad = document.getElementById('unidadOrigenDensidad').value;
    const unidadDestinoDensidad = document.getElementById('unidadDestinoDensidad').value;

    // Fórmulas para conversiones de densidad
    const unidades = {
        'kg/m3': 1,
        'g/cm3': 1000,
        'lb/ft3': 16.0185,
    };

    const resultado = cantidadDensidad * unidades[unidadOrigenDensidad] / unidades[unidadDestinoDensidad];
    document.getElementById('resultadoDensidad').innerText = `El resultado de la conversión es: ${resultado.toFixed(2)} ${unidadDestinoDensidad}`;
}

function convertirInformatica() {
    const cantidadInformatica = parseFloat(document.getElementById('cantidadInformatica').value);
    const unidadOrigenInformatica = document.getElementById('unidadOrigenInformatica').value;
    const unidadDestinoInformatica = document.getElementById('unidadDestinoInformatica').value;

    // Fórmulas para conversiones de medidas informáticas
    const unidades = {
        byte: 1,
        kilobyte: 1024,
        megabyte: Math.pow(1024, 2),
        gigabyte: Math.pow(1024, 3),
        terabyte: Math.pow(1024, 4),
        petabyte: Math.pow(1024, 5),
        exabyte: Math.pow(1024, 6),
        zettabyte: Math.pow(1024, 7),
    };

    const resultado = cantidadInformatica * unidades[unidadOrigenInformatica] / unidades[unidadDestinoInformatica];
    document.getElementById('resultadoInformatica').innerText = `El resultado de la conversión es: ${resultado.toFixed(2)} ${unidadDestinoInformatica}`;
}
