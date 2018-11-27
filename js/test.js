var expect = chai.expect;


describe('Funcionamiento de reservarHorario()', function() {
    describe('Funcionamiento con horario existente (13:00)', function() {
        var restaurant;
        beforeEach(function() {
            restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
            restaurant.reservarHorario('13:00');
        }
        )
        
        it('Cuando quiero reservar un horario, horario reservado desaparece del array', function() {
            expect(restaurant.horarios).to.not.include('13:00');
        });
        it("cuando reservo un horario, el largo del array disminuye", function() {
            expect(restaurant.horarios).to.have.lengthOf(2);
        });

    })

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
        })
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
    
});

describe('Funcionamiento de nuevaCalificacion()', function() {
    var restaurant;

    beforeEach(function() {
        restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
    })

    it('Si se pasa un parametro valido, el array concide con las calificaciones dadas', function() {
        restaurant.calificar(5);
        restaurant.calificar(9);

        expect(restaurant.calificaciones).to.eql([5,9]);
    });

    it('Si se pasa un parametro invalido, este no se agrega al array', function() {
        restaurant.calificar('saracatunga');
        restaurant.calificar(10);
        restaurant.calificar(-20);
        restaurant.calificar(true);

        expect(restaurant.calificaciones).to.be.empty;
    })
})