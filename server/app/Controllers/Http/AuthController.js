'use strict'

const User = use('App/Models/User')

const { validateAll } = use('Validator')
const ValidatorMessage = use('App/Libraries/ValidatorMessage')

class AuthController {
    async register ({request}) {
        // get request data
        const post = request.post()

        // define rules for validation
        const rules = {
            name: 'required|alpha',
            email: 'required|unique:users|email',
            password: 'required|min:8',
            phone_number: 'required|number|min:5|max:15'
        }

        // validate request data
        const validation = await validateAll(post, rules, ValidatorMessage)
        if(validation.fails()) {
            return validation.messages()
        }

        // save user
        await User.create(post)

        // auto login user
        return this.login(...arguments)
    }

    async login ({request, auth}) {
        // get request data
        const {email, password} = request.post()

        // define rules for validation
        const rules = {
            email: 'required|email',
            password: 'required|min:8'
        }

        // validate request data
        const validation = await validateAll(request.post(), rules, ValidatorMessage)
        if(validation.fails()) {
            return validation.messages()
        }

        // get token if login success 
        const token = await auth.attempt(email, password)

        return token
    }
}

module.exports = AuthController
