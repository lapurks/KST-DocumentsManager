import Sequelize from "sequelize";

export default {
    name: 'doc_types',
    params: {
        id: {
            autoIncrement: true,
            type: Sequelize.TINYINT,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(256),
            allowNull: false,
            defaultValue: ""
        }
    }, params2: {
        timestamps: false,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    }
}