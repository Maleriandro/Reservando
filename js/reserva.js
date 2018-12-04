const Reserva = function(horario, cantidadDePersonas, precioPorPersona, codigoDeDescuento) {
    this.horario = horario //objeto de tipo Date que va a representa la fecha y la hora de la reserva.
    this.cantidadDePersonas = cantidadDePersonas //un número entero.
    this.precioPorPersona = precioPorPersona //un número entero.
    this.codigoDeDescuento = codigoDeDescuento //un string.
}

Reserva.prototype.calcularPrecioBase = function calcularPrecioBaseFn() {
    const precioBase = this.cantidadDePersonas * this.precioPorPersona;

    return precioBase;
}

Reserva.prototype.calcularPrecioFinal = function calcularPrecioFinalFn() {
    let precioFinal = this.calcularPrecioBase();



    return precioFinal;
}

Reserva.prototype.calcularDescuentos = function calcularDescuentosFn() {
    let descuentos = this.calcularDescuentosPorCodigo() + this.calcularDescuentosPorPersonas();

    return descuentos;
}

Reserva.prototype.calcularDescuentosPorPersonas = function calcularDescuentosPorPersonasFn() { 
    let descuentoPorcentual;
    
    if (this.cantidadDePersonas < 4) {
        descuentoPorcentual = 0; //no hay nada de descuento
    } else if (this.cantidadDePersonas <= 6) {
        descuentoPorcentual = 5; //Descuento del 5%
    } else if (this.cantidadDePersonas <= 8) {
        descuentoPorcentual = 10; //Descuento del 10%
    } else if (this.cantidadDePersonas > 8) {
        descuentoPorcentual = 15; //Descuento del 15%
    }

    let descuento = this.calcularPrecioBase() / 100 * descuentoPorcentual;

    return descuento;
    
}

Reserva.prototype.calcularDescuentosPorCodigo = function calcularDescuentosCodigoFn() {
    let descuento = 0;
    
    switch (this.codigoDeDescuento) {
        case 'DES15': //Calcular 15% de descuento
            descuento = this.calcularPrecioBase() / 100 * 15;
            break;

        case 'DES200': //descuento $200
            descuento = 200;
            break;
            
        case 'DES1': //Descuento del precio por persona
            descuento = this.precioPorPersona;

        default:
            break;
    }

    return descuento;
}

Reserva.prototype.calcularAdicionales = function calcularAdicionalesFn() {

}

Reserva.prototype.calcularAdicionalPorHorario = function calcularAdicionalPorHorarioFn() {
    let horaDeReserva = this.horario.getHours();
    let adicionalPorcentual = 0;

    if ((12 < horaDeReserva < 15) || (19 < horaDeReserva < 22)) {
        adicionalPorcentual = 5;
    }

    const adicional = precioBase() / 100 * adicionalPorcentual;

    return adicional;
}

Reserva.prototype.calcularAdicionalPorDia = function calcularAdicionalPorDiaFn() {
    let diaDeReserva = this.horario.getDay();
    let adicionalPorcentual = 0;

    if (diaDeReserva == 0 || diaDeReserva == 5 || diaDeReserva == 6) {
        //Calcular Porcentualsdfkjhadasdhfdjlsdsljfljhk
    }
}