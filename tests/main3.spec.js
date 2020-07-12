/*
Desafio FizzBuzz

Escreva uma lib que receba um numero e:

Se o numero for divisivel por 3, no lugar do número escreva 'Fizz'
Se o numero for divisivel por 5, no lugar do número escreva 'Buzz'
Se o numero for divisivel por 3 e por 5, no lugar do número escreva 'FizzBuzz'
se não for multiplo de nada retorna o numero.
 */

import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('Main', () => {
  it('should return `Fizz` when multiple 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return the number when non-multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });
});
