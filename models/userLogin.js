module.exports = function (sequelize, DataTypes) {
    var userLogin = sequelize.define("userLogin", {
        userName: {
            type: DataTypes.STRING,
            required: true,
            defaultValue: DataTypes.UUID 
        },
        password: {
            type: DataTypes.STRING,
        validate: { min: 10, max: 15 },
        required: true
        }
    });
    return userLogin;
};
