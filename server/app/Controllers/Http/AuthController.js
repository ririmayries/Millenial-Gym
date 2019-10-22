'use strict'

const User = use('App/Models/User')
const ValidatorHelper = use('App/Libraries/ValidatorHelper')


class AuthController {
    async register ({request, response}) {
        try {
            // get request data
            const post = request.post()

            // validate request data
            const validation = await ValidatorHelper.checking(post, {
                name: 'required|alpha',
                email: 'required|unique:users|email',
                password: 'required|min:8',
                phone_number: 'required|number|min:5|max:15'
            })

            // return validation results
            if(validation.fails()) {
                return response.ValidationFailed(validation.messages());
            }

            // save user
            await User.create(post)

            // auto login user
            return this.login(...arguments)
        } catch (error) {
            return response.Error(error);
        }
    }

    async login ({request, response, auth}) {
        // get request data
        const {email, password} = request.post()

        // validate request data
        const validation = await ValidatorHelper.checking(request.post(), {
            email: 'required|email',
            password: 'required|min:8'
        })

        // return validation results
        if(validation.fails()) {
            return response.ValidationFailed(validation.messages());
        }

        // get token if login success 
        const token = await auth.attempt(email, password)

        return response.Success(token)
    }
}

module.exports = AuthController
