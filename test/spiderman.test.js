// describe("Test Suite Dummy Description", () => {
//     test('Case 1 Dummy', () => {
//       const resultOfSomething = 1 + 2
//       expect(resultOfSomething).toBe(3);
//     });
//   })
const { text } = require("express");
const Spiderman = require("./../app/spiderman")
describe("Unit tests for spiderman class", () => {
    test('1. Create an spiderman object', () => {
        //Instanciar un objeto spiderman
        const andrewGarfield = new Spiderman("spiderman sony", 31, "Andrew Garfield", 2, "Sony");
        //Validamos que este codigo funcione correctamente
        expect(andrewGarfield.name).toBe("spiderman sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")

    });

    test('2. Use the method getInfo', () => {
        //Instanciar un objeto spiderman
        const tomHolland = new Spiderman("spiderman marvel", 25, "Tom Holland", 5, "Marvel");
        //Validamos que este codigo funcione correctamente
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio")
       

    });

    test('3. Use the method getActor', () => {
        //Instanciar un objeto spiderman
        const tobeyMaguire = new Spiderman("spiderman marvel", 38, "Tobey Maguire", 8, "Marvel");
        //Validamos que este codigo funcione correctamente
        expect(tobeyMaguire.getActor()).toBe("Soy Tobey Maguire, el mejor Spiderman de Marvel")
       

    });
})