import UserService from "../services/UserService.js"

const register = async (req, res, next) => {
    try {
        const result = await UserService.register(req.body)
        return res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
}

export default {
    register
}