module.exports = function (sequelize, DataTypes) {
    var patient = sequelize.define("patient", {
        // id: {
        //     type: DataTypes.AUTO_INCREMENT,
        //     primaryKey: true,
        //     defaultValue: DataTypes.UUID
        // },
        patient_id: {
            type: DataTypes.STRING,
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        address: DataTypes.STRING,
        sex: DataTypes.STRING,
        birth: DataTypes.DATEONLY,
        phone: DataTypes.STRING,
        date: DataTypes.DATEONLY
    });
    return patient;
};
