import { Sequelize } from "sequelize"
import sequelize from "../app/database.js"

const { DataTypes } = Sequelize

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(32),
        unique: true
    },
    password: {
        type: DataTypes.STRING(100)
    },
    name: {
        type: DataTypes.STRING(100)
    },
    token: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
}, {
    timestamps: true
})

export default User