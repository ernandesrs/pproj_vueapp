/**
 * 
 * 
 * Importing 'yup' and adding new validator methods
 * 
 * 
 */

import * as yupValidator from 'yup'

/**
 * Checks if the value is in an array
 */
yupValidator.addMethod(yupValidator.mixed, 'inArray', function (haystack) {
    return this.test('in', 'Opção inválida', function (value) {
        if (!value) return true;
        return haystack.includes(value);
    });
})

/**
 * Check the file type
 */
yupValidator.addMethod(yupValidator.mixed, 'allowedTypes', function (types) {
    return this.test('allowedTypes', 'São aceitos apenas ' + types.join(', '), function (value) {
        if (!value) return true;

        const fileType = value.type.split('/')[1]

        return types.includes(fileType)
    })
})

/**
 * Check minimun file size
 */
yupValidator.addMethod(yupValidator.mixed, 'minFileSize', function (sizeInMegabytes) {
    const sizeToBytes = sizeInMegabytes * Math.pow(1024, 2)

    return this.test('minFileSize', 'Tamanho mínimo aceito: ' + sizeInMegabytes + 'MB', function (value) {
        if (!value) {
            return true
        }

        return value.size > sizeToBytes;
    })
})

/**
 * Check maxium file size
 */
yupValidator.addMethod(yupValidator.mixed, 'maxFileSize', function (sizeInMegabytes) {
    const sizeToBytes = sizeInMegabytes * Math.pow(1024, 2)

    return this.test('maxFileSize', 'Tamanho máximo aceito: ' + sizeInMegabytes + 'MB', function (value) {
        if (!value) {
            return true
        }

        return value.size < sizeToBytes;
    })
})

export const yup = yupValidator;