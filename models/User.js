const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    // Columns and data types for the columns
    {
        // TABLE DEFINITIONS GO HERE

        // id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // make sure pw is 4 characters min
                len: [4]
            }
        }
    },
    // Influence the way sequelize handles column names
    {
        // TABLE CONFIG OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration)
        // pass in imported sequelize connection
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of db table
        freezeTableName: true,
        // use underscores instead of camel-casing (comment_text vs commentText)
        underscored: true,
        // make it so model stays lowercase
        modelName: 'user'
    }
)

module.exports = User;