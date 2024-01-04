import { ResponseError } from "../error/ResponseError.js"
import User from "../models/UserModel.js"
import { registerUserValidation } from "../validation/UserValidation.js"
import { validate } from "../validation/validation.js"
import bcrypt from 'bcrypt'

const register = async (request) => {
    const user = validate(registerUserValidation, request)

    const countUser = await User.count({
        where: {
            username: user.username
        }
    })

    if (countUser === 1) {
        throw new ResponseError(400, "Username Aleady Exists")
    }

    user.password = await bcrypt.hash(user.password, 12)

    return User.create(user)
}

export default {
    register
}