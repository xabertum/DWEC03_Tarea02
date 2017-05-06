/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.title = "Tarea03 - Ejercicio 2";

NUMMAXELEMENTOS = 0;


/**
 * Crea una lista con el array ya instanciado con el numero de elementos maximos. 
 * 
 * @param {type} numMaxElementos
 * @returns {Array}
 */
function create(numMaxElementos) {

    NUMMAXELEMENTOS = numMaxElementos;
    var lista = new Array();
    return lista;
}


/**
 * 
 * Devuelve el numero de elementos de la lista. 
 * 
 * @param {type} lista
 * @returns {Boolean}
 */

function  isEmpty(lista) {

    return (lista.length === 0);
}

/**
 * 
 * Devuelve true o false en función de si la lista está llena. 
 * 
 * @param {type} lista
 * @returns {Boolean}
 */

function  isFull(lista) {

    return (lista.length === NUMMAXELEMENTOS);

}


/**
 * 
 * Devuelve el numero de elementos de la lista. 
 * 
 * @param {type} lista
 * @returns {unresolved}
 */
function size(lista) {

    return lista.length;

}

/**
 * 
 * @param {type} arr
 * @param {type} elemento
 * @returns {unresolved}
 */

function insertionSort(arr, elemento) {
    var i, len = arr.length, el, j;

    for (i = 1; i < len; i++) {
        elemento = arr[i];
        j = i;

        while (j > 0 && arr[j - 1]) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = elemento;
    }

    return arr;
}


/**
 * 
 * Añade un nuevo elemento al final de la lista. Devuelve el tamaño de la lista
 * una vez añadido. 
 * 
 * @param {type} lista
 * @param {type} elemento
 * @returns {unresolved}
 */

function add(lista, elemento) {
    elemento = parseInt(elemento);

    if (isNaN(elemento)) {
        throw "El elemento no es number";
    }

    if (!isFull(lista)) {
        insertionSort(lista, elemento);
    } else {
        throw "La lista está llena..";
    }
    return lista.length;

}



/**
 * Devuelve el elelemtno de la lista de la posición indicada. 
 * 
 * @param {type} lista
 * @param {type} index
 * @returns {get.lista}
 */
function get(lista, index) {

    if (index > NUMMAXELEMENTOS) {
        throw "index fuera de los limites de la lista"
    }

    return lista[index];
}

/**
 * 
 * Devuelve la cola en formato cadena. 
 * 
 * @param {type} lista
 * @returns {unresolved}
 */

function toString(lista) {

    return lista;
}

/**
 * Devuelve la posición del elemento indicado. Si el elemento no está en la lista
 * devuelve -1. 
 *  
 * @param {type} lista
 * @param {type} elemento
 * @returns {Number}
 */
function indexOf(lista, elemento) {
    var index;

    if (isNaN(elemento)) {
        throw "El elemento no es un number";

    } else {
        for (var i = 0; i < lista.length; i++) {

            if (lista[i] === elemento)
                index = i;
            else
                index = -1;
        }
    }
    return index;
}


/**
 * Devuelve el numero máximo de elementos que podemos tener en la lista. 
 * 
 * @param {type} lista
 * @returns {Number|NUMMAXELEMENTOS|numMaxElementos}
 */
function capacity(lista) {

    return NUMMAXELEMENTOS;
}

/**
 * Vacia la lista.
 *  
 * @param {type} lista
 * @returns {undefined}
 */

function clear(lista) {

    if (!isEmpty(lista))
        lista.length = 0;
}

/**
 * Devuelve el primer elemento de la lista. 
 * 
 * @param {type} lista
 * @returns {firstElement.lista}
 */
function firstElement(lista) {

    if (isEmpty(lista)) {
        throw "La lista está vacia";
    }

    return lista[0];
}

/**
 * Devuelve el ultimo elemento de la lista. 
 *  
 * @param {type} lista
 * @returns {lastElement.lista}
 */
function lastElement(lista) {

    if (isEmpty(lista)) {
        throw "La lista está vacia";
    }

    return lista[lista.length - 1 ];

}

/**
 * Elimina el elemento de la posición
 * indicada. Devuelve el elemento borrado.
 * 
 * @param {type} lista
 * @param {type} index
 * @returns {unresolved}
 */
function remove(lista, index) {
    var elemento;

    if (index > NUMMAXELEMENTOS) {
        throw "El index esta fuera de los limites de la lilsta";
    } else {
        for (var i = 0; i < lista.length; i++) {

            if (i === index) {
                lista[i] = elemento;
                lista[i] = [];
            }
        }
    }
    return elemento;
}

/**
 * Elimina el elemento indicado de la lista. Devuelve true si se ha podido borarr
 * el elemento, false en caso contrario. 
 * 
 * @param {type} lista
 * @param {type} elemento
 * @returns {Boolean}
 */
function removeElement(lista, elemento) {
    var bol = false;

    if (isNaN(elemento)) {
        throw "El elemento no es un number";
    } else {

        for (var i = 0; i < lista.length; i++) {

            if (lista[i] === elemento) {
                lista[i] = [];
                bol = true;
            }
        }
    }
    return bol;
}


