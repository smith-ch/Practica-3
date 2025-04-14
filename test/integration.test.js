const { sumar, restar } = require('../src/utils');

test('suma y luego resta el resultado', () => {
  const resultado = restar(sumar(10, 5), 3); // (10 + 5) - 3 = 12
  expect(resultado).toBe(12);
});
