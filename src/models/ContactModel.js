import { Sequelize } from "sequelize"
import sequelize from "../app/database.js"
import User from "./UserModel.js"

const { DataTypes } = Sequelize

const Contact = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING(100)
    },
    last_name: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(254),
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING(20)
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    timestamps: true
})

// one-to-many
Contact.belongsTo(User, { foreignKey: 'userId', as: 'user' })
User.hasMany(Contact, { foreignKey: 'userId', as: 'contacts' })

export default Contact