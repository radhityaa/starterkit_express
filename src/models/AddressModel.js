import { Sequelize } from "sequelize"
import sequelize from "../app/database.js"
import Contact from "./ContactModel.js"

const { DataTypes } = Sequelize

const Address = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    street: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    city: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    province: {
        type: DataTypes.STRING(254),
        allowNull: true
    },
    country: {
        type: DataTypes.STRING(20)
    },
    postal_code: {
        type: DataTypes.STRING(10)
    },
    contactId: {
        type: DataTypes.INTEGER,
        references: {
            model: Contact,
            key: 'id'
        }
    }
}, {
    timestamps: true
})

// one-to-one
Contact.hasOne(Address, { foreignKey: 'contactId', as: 'address' })
Address.belongsTo(Contact, { foreignKey: 'contactId', as: 'contact' })

export default Address