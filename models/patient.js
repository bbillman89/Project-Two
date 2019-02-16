module.exports = function (sequelize, DataTypes) {
    var patient = sequelize.define("patient", {
        patient_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUID
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        address: DataTypes.STRING,
        sex: DataTypes.STRING,
        birth: DataTypes.DATEONLY,
        phone: DataTypes.STRING
    });
    return patient;
};
