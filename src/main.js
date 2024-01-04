import sequelize from "./app/database.js"
import { logger } from "./app/logging.js"
import { web } from "./app/web.js"
import 'dotenv/config.js'

const PORT = process.env.PORT
const BaseUrl = process.env.BASE_URL

await sequelize.sync({ force: true })
    .then(() => logger.info('Database synchronized'))
    .catch(logger.error)

web.listen(PORT, () => {
    logger.info(`Server Running On ${BaseUrl}`)
})