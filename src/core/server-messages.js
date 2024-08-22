
/**
 * 
 * Define here all the error names that can be received from the server, and their appropriate messages.
 * 
 */
const serverErrors = {
    // General
    'default': 'Houve um erro não identificado: ',
    'InvalidDataException': 'Os dados enviados são inválidos.',
    'NotFoundException': 'Oops! Isso não foi encontrado.',

    // Auth
    'UnauthenticatedException': 'Você não está autenticado.',
    'LoginFailException': 'Falha no login! E-mail e/ou senha inválidos.',
    'UnauthorizedActionException': 'Você não tem autorização para isso.',
}

export const getServerMessage = (error) => {
    return serverErrors[error] ?? serverErrors['default'] + error + '.'
}