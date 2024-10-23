const {sum, resta, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js')

test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);
    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {

    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("5,35 dollars should be 782.4999999999999 yens", () => {
    expect(fromDollarToYen(5.35)).toBe(782.4999999999999);
})

test("10000 yens shloud be 55.59105431309904 pounds", () => {
    expect(fromYenToPound(10000)).toBe(55.59105431309904);
})