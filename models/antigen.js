module.exports = function(sequelize, DataTypes) {
    var antigen = sequelize.define("antigen", {
        patient_id: {type:DataTypes.STRING, defaultValue: DataTypes.UUID},
        asp: DataTypes.INTEGER,
        rhodo:DataTypes.INTEGER,
        helm:DataTypes.INTEGER,
        penic:DataTypes.INTEGER,
        mucor:DataTypes.INTEGER,
        rhizo:DataTypes.INTEGER,
        pull:DataTypes.INTEGER,
        alt:DataTypes.INTEGER,
        horm:DataTypes.INTEGER,
        cat:DataTypes.INTEGER,
        dog:DataTypes.INTEGER,
        dPter:DataTypes.INTEGER,
        stFar:DataTypes.INTEGER,
        bermSmut:DataTypes.INTEGER,
        johnsSmut:DataTypes.INTEGER,
        epic:DataTypes.INTEGER,
        grass:DataTypes.INTEGER,
        pig:DataTypes.INTEGER,
        plant:DataTypes.INTEGER,
        rag:DataTypes.INTEGER,
        tree:DataTypes.INTEGER,
        oak:DataTypes.INTEGER
  
    });
    return antigen;
  };
  