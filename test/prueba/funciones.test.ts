import {suma, resta} from './funciones';

describe('Pruebas en el archivo funciones', () => {
  test('suma de dos numeros', () => {
    const a = 2;
    const b = 3;

    const resultado = suma(a, b);

    expect(a + b).toBe(resultado);
  });

  test('resta de dos numeros', () => {
    const a = 2;
    const b = 3;

    const resultado = resta(a, b);

    expect(a - b).toBe(resultado);
  });

  test('Test de objetos', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  test('Tests con números', () => {
    const value = suma(1, 1);
    expect(value).toBeGreaterThan(1);
    expect(value).toBeGreaterThanOrEqual(2);
  });

});
