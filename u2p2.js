// Crear una aplicación web cree un array de libros que almacene el código, título, ISBN, autor, tema, páginas y 
// precio. Inicializar el array con los siguientes valores:
// Código Título Autor Editorial Tema ISBN Páginas Precio
// 1 Access para Windows Charles Siegel Anaya Informática 84-7614-759-7 450 45,67
// 2 Salud Eduardo Almansa Deusto Medicina 24-3547-590-1 153 23,18
// 3 Redes de Computadores Luis Cárcel Paraninfo Informática 47-8829-435-7 215 32,86
// Introducir el código del libro que queremos consultar y mostrar sus datos en una tabla HTML como, por ejemplo 
// si la variable almacenara el código 1 mostraría los datos del siguiente modo:
// Código 1
// Título Access para Windows
// Autor Charles Siegel
// Editorial Anaya
// Tema Informática
// ISBN 84-7614-759-7
// Páginas 450
// Precio 45,67 €
// Si el libro no existe mostrar el texto "El libro solicitado no existe!!".

let libros = [
    {
        codigo: 1,
        titulo: "Access para Windows",
        autor: "Charles Siegel",
        editorial: "Anaya",
        tema: "Informática",
        IBSN: "84-7614-759-7",
        paginas: 450,
        precio: 45.67,
    },
    {
        codigo: 2,
        titulo: "Salud",
        autor: "Eduardo Almansa",
        editorial: "Deusto",
        tema: "Medicina",
        IBSN: "24-3547-590-1",
        paginas: 153,
        precio: 23.28,
    },
    {
        codigo: 3,
        titulo: "Redes de Computadores",
        autor: "Luis Cárcel",
        editorial: "Paraninfo",
        tema: "Informática",
        IBSN: "47-8829-435-7",
        paginas: 215,
        precio: 32.86,
    },
];

function mostrarLibros() {
    let tablaHtml = `<thead><tr>`;
    // Encabezado de la tabla
    for (let propiedad in libros[0]) {
        tablaHtml += `<th>${propiedad}</th>`;
    }
    tablaHtml += `</tr></thead><tbody>`;
    // Datos de los libros
    libros.forEach(libro => {
        tablaHtml += `<tr>`;
        tablaHtml += `<th class="codigo-libro">${libro.codigo}</th>`; 
        for (let propiedad in libro) {
            if (propiedad !== "codigo") {  // <-- Ignora la propiedad 'codigo'
                tablaHtml += `<td>${libro[propiedad]}</td>`;
            }
        }
        tablaHtml += `</tr>`;
    });

    tablaHtml += `</tbody>`;

    document.getElementById("libros-el").innerHTML = tablaHtml;
}

function buscarLibro() {
    let cod = parseInt(prompt("Introduce el código del libro a buscar: "));

    if (isNaN(cod) || cod < 1 || cod > 3) {
        document.getElementById("libro-el").innerHTML = "El libro solicitado no existe!!";
        return;
    }

    let libroBuscado = libros.find((libro) => libro.codigo === cod);

    if (libroBuscado) {
        let tablaHtml2 = `<table><tbody>`;
        for (let propiedad2 in libroBuscado) {
            let valor = libroBuscado[propiedad2];
            if (propiedad2 === "precio") {
                valor += "€";
            }
            tablaHtml2 += `
            <tr>
                <th>${propiedad2}</th>
                <td>${libroBuscado[propiedad2]}</td>
            `;
        }
        tablaHtml2 += `</tbody></table>`;
        document.getElementById("libro-el").innerHTML = tablaHtml2;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    mostrarLibros();
    setTimeout(buscarLibro, 1000);
})
