var expect = chai.expect;



describe('Funcionamiento de "reservarHorario(horario)"', function() {
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
    })
})