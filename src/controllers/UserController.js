import ResponseSuccess from "../helpers/ResponseSuccess.js"
import UserService from "../services/UserService.js"

const register = async (req, res, next) => {
    try {
        const result = await UserService.register(req.body)
        return ResponseSuccess(res, 'Successfully Registered User', result)
    } catch (e) {
        next(e)
    }
}

export default {
    register
}