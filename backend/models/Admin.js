module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define(
    'Admin',
    {
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamp: false,
    },
  );
  return Admin;
};
