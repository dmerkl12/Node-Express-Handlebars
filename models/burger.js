module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultvalue: false,
      }
    });
  
    // Burger.associate = function(models) {
    //   // We're saying that a Burger should belong to an Author
    //   // A Burger can't be created without an Author due to the foreign key constraint
    //   Burger.belongsTo(models.Author, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Burger;
  };
  