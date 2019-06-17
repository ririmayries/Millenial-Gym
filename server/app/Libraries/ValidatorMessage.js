'use strict'

module.exports = {
    'required': '{{ field }} is required.',
    'alpha': '{{ field }} may only contain alphabetical characters.',
    'unique': 'this {{ field }} already exists.',
    'email': '{{ field }} must contain valid email address.',
    'min': '{{ field }} cannot less than {{ argument.0}} characters in length.',
    'max': '{{ field }} cannot exceed than {{ argument.0}} characters in length.',
    'number': '{{ field }} must contain only number.',
}