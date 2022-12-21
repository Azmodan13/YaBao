export const emailValidationRules = {
    required: 'Введіть email.',
    pattern: {
        value: /^[^@]+@[^.]+.[a-z]{2,4}$/i,
        message: 'Введіть валідний email.',
    },
}

export const passwordValidationRules = {
    required: 'Введіть пароль.',
    minLength: {
        value: 6,
        message: 'Мінімум 6 символів.',
    },
}

export const nameValidationRules = {
    required: 'Поле обовязкове для заповнення',
    pattern: {
        value: /^([^0-9]*)$/,
        message: 'Тільки літери',
    },
    minLength: {
        value: 2,
        message: 'Мінімум 2 символa.',
    },
    maxLength: {
        value: 25,
        message: 'Максимальна кількість 25 символів',
    },
}

export const phoneValidationRules = {
    required: 'Поле обовязкове для заповнення',
    pattern: {
        value: /^[0-9]{12}$/i,
        message: 'Введіть валідний номер телефона з кодом країни.',
    },
}

export const validationRules = {
    required: 'Поле обовязкове для заповнення',
}

export const payValidationRules = {
    required: 'Виберіть спосіб оплати',
}

export const cviValidationRules = {
    required: 'Поле обовязкове для заповнення',
    pattern: {
        value: /^[0-9]{3}$/i,
        message: 'Введіть 3 цифри',
    }
}

export const cartValidationRules = {
    required: 'Поле обовязкове для заповнення',
    pattern: {
        value: /^[0-9]{16}$/i,
        message: 'Введіть 16 цифи',
    },
}

// export const dataValidationRules = {
//     required: 'Поле обовязкове для заповнення',
//     pattern: {
//         value: /^[0-9]{4}$/i,
//         message: 'Введіть 4 цифи',
//     },
// }
