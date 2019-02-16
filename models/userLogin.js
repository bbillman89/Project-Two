module.exports = function (sequelize, DataTypes) {
    var userLogin = sequelize.define("userLogin", {
        userName: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUID 
        },
        password: {
            type: DataTypes.STRING,
        validate: { min: 10, max: 15 },
        notNull: true
        }
    });
    return userLogin;
};
