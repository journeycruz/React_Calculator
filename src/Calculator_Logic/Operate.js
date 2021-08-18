import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
    const one = Big(numberOne || '0');
    const two = Big(numberTwo || (operation === '÷' || operation === 'x' ? '1' : '0'));
}