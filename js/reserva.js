const Reserva = function(horario, cantidadDePersonas, precioPorPersona, codigoDeDescuento) {
    this.horario = horario //objeto de tipo Date que va a representa la fecha y la hora de la reserva.
    this.cantidadDePersonas = cantidadDePersonas //un número entero.
    this.precioPorPersona = precioPorPersona //un número entero.
    this.codigoDeDescuento = codigoDeDescuento //un string.
}