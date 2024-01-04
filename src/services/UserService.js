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

    try {
        const savedUser = await User.create(user)
        return {
            status: true,
            message: 'Successfully Registered',
            data: savedUser
        }
    } catch (err) {
        console.log("ERROR", err);
        throw new ResponseError(500, 'Internal Server Error')
    }
}

export default {
    register
}