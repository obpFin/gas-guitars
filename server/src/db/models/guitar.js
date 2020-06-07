'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guitar = sequelize.define('Guitar', {
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    condition: DataTypes.STRING
  }, {});
  Guitar.associate = function(models) {
    // associations can be defined here
  };
  return Guitar;
};