'use strict'

const { validateAll } = use('Validator')

module.exports.checking = async (post, rules) => {
    const ValidatorMessage = {
        'required': '{{ field }} is required.',
        'alpha': '{{ field }} may only contain alphabetical characters.',
        'unique': 'this {{ field }} already exists.',
        'email': '{{ field }} must contain valid email address.',
        'min': '{{ field }} cannot less than {{ argument.0}} characters in length.',
        'max': '{{ field }} cannot exceed than {{ argument.0}} characters in length.',
        'number': '{{ field }} must contain only number.',
    }

    return await validateAll(post, rules, ValidatorMessage)
}
