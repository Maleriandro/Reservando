var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
    
}

//??DEBERIA SER UNA FUNCION PRIVADA?
Restaurant.prototype.sumatoria = function(numeros) {
    var resultado = 0;

    numeros.forEach(element => {
        resultado += element;
    });

    return resultado;
}

Restaurant.prototype.calcularPromedio = function(numeros) {
    return this.sumatoria(numeros) / numeros.length;
}
//??HASTA ACÁ

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    this.horarios = this.horarios.filter(element => {

        return element !== horarioReservado;
    });
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        var promedio = this.calcularPromedio(this.calificaciones);
        return Math.round(promedio * 10) / 10;
    }

}


