var expect = chai.expect;


describe('Funcionamiento de reservarHorario()', function() {
    describe('Funcionamiento con horario existente (13:00)', function() {
        var restaurant;
        beforeEach(function() {
            restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
            restaurant.reservarHorario('13:00');
        });
        
        it('Cuando quiero reservar un horario, horario reservado desaparece del array', function() {
            expect(restaurant.horarios).to.not.include('13:00');
        });
        it("cuando reservo un horario, el largo del array disminuye", function() {
            expect(restaurant.horarios).to.have.lengthOf(2);
        });

    });

    describe('Funcionamiento con horario inexistente (14:00)', function() {
        var restaurant;
        beforeEach(function() {
            restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
            
            restaurant.reservarHorario('14:00');
        });

        it('Cuando reservo un horario inexistente, largo de array no cambia', function() {
            expect(restaurant.horarios).to.have.lengthOf(3);
        });

        it('Cuendo reservo un horario inexistente, éste no se agrega al array', function() {
            expect(restaurant.horarios).to.not.include('14:00');
        });
    });

    describe('Funcionamiento cuando no se pasa ningun parametro', function() {
        var restaurant;
        beforeEach(function() {
            restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
            restaurant.reservarHorario();
        });

        it('Cuando no se le pasa ningun parametro a la funcion, el arreglo se mantiene igual', function() {
            expect(restaurant.horarios).to.have.lengthOf(3);
            expect(restaurant.horarios).to.be.eql(["13:00", "15:30", "18:00"]);
        });

    });
});

describe('Funcionamiento de obtenerPuntuacion()', function() {
    var restaurant;
    
    it('Cuando tiene calificaciones, calcula correctamente el promedio de calificaciones', function() {
        restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        var puntaje = restaurant.obtenerPuntuacion();
        expect(puntaje).to.eql(7.4);
    });

    it('Cuando no tiene calificaciones, la puntuacion es 0', function() {
        restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
        var puntaje = restaurant.obtenerPuntuacion();
        expect(puntaje).to.eql(0);
    });
    
});

describe('Funcionamiento de calificar()', function() {
    var restaurant;

    beforeEach(function() {
        restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
    });

    it('Si se pasa un parametro valido, el array concide con las calificaciones dadas', function() {
        restaurant.calificar(5);
        restaurant.calificar(9);

        expect(restaurant.calificaciones).to.be.eql([5,9]);
    });

    it('Si se pasa un parametro invalido, este no se agrega al array', function() {
        restaurant.calificar('saracatunga');
        restaurant.calificar(10);
        restaurant.calificar(-20);
        restaurant.calificar(true);

        expect(restaurant.calificaciones).to.be.empty;
    });
});

describe('Funcionamiento de buscarRestaurante(id)', function() {
    var listadoRestaurantes = [
        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
    ];

    var listado = new Listado(listadoRestaurantes)

    it('Si la id solicitada se encuentra en la lista, se devuelve el restaurante correspondiente', function() {
        var restaurant = listado.buscarRestaurante(2);

        expect(restaurant.id).to.be.eql(2);
    });

    it('Si se solicita una id inexistente, o un parametro invalido, se devuelve "No se ha encontrado ningún restaurant"', function() {
        var restaurant = listado.buscarRestaurante(5);
        var restaurant2 = listado.buscarRestaurante(true);
        var restaurant3 = listado.buscarRestaurante('hola');

        expect(restaurant).to.be.a('string');
        expect(restaurant2).to.be.a('string');
        expect(restaurant3).to.be.a('string');
    });

});

describe('Funcionamiento de obtenerRestaurantes()', function() {
    var listadoRestaurantes = [
        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
        new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
        new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
    ];

    var listado = new Listado(listadoRestaurantes)

    it('Si se envía uno o más parametros y existe el restaurant, se devuelve un array con estos.', function() {
        var filtrados = listado.obtenerRestaurantes("Asiática", null, null);
        var filtrados2 = listado.obtenerRestaurantes("Hamburguesa", null, "11:30");

        expect(filtrados).to.have.lengthOf(2);
        expect(filtrados2).to.have.lengthOf(1);
    })

    it('Si se envian parametros y no se encuentra restaurant coincidente, se devuelve array vacío', function() {
        var filtrados = listado.obtenerRestaurantes("Asiática", "Berlín", null);

        expect(filtrados).to.be.empty;
    });

    it('Si se envian los 3 parametros como null, devolverá un array con el total de restaurants', function() {
        var filtrados = listado.obtenerRestaurantes(null, null, null);

        expect(filtrados).to.be.eql(listado.restaurantes);
    });
});

describe('Funcionamiento de reservas', function() {
    var reserva1 = new Reserva (new Date(2018, 7, 25, 11, 0), 8, 350, "DES1");
    var reserva2 = new Reserva (new Date(2018, 7, 27, 13, 30), 2, 150, "DES200");
    
    it('Buen funcionamiento de calcularPrecioBase()', function() {
        expect(reserva1.calcularPrecioBase()).to.be.eql(2800);
        expect(reserva2.calcularPrecioBase()).to.be.eql(300);
    });

    it('Buen funcionamiento de calcularDescuentos()', function() {
        expect(reserva1.calcularDescuentos()).to.be.eql(630);
        expect(reserva2.calcularDescuentos()).to.be.eql(200);
    });

    it('Buen funcionamiento de calcularAdicionales()', function() {
        expect(reserva1.calcularAdicionales()).to.be.eql(280); //280 expected
        expect(reserva2.calcularAdicionales()).to.be.eql(15);
    })

    it('Buen funcionamiento de calcularPrecioFinal()', function() {
        expect(reserva1.calcularPrecioFinal()).to.be.eql(2450);
        expect(reserva2.calcularPrecioFinal()).to.be.eql(115);
    });
});