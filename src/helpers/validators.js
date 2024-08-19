import * as yupValidator from 'yup'

/**
 * Checks if the value is in an array
 */
yupValidator.addMethod(yupValidator.mixed, 'in', function (haystack) {
    return this.test('in', 'Opção inválida', function (value) {
        if (!value) return true;
        return haystack.includes(value);
    });
})

export const yup = yupValidator;