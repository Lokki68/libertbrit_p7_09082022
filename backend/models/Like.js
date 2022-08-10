module.exports = (sequelize, Sequelize) => {
  const Like = sequelize.define(
    'like',
    {
      date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      timestamp: false,
    },
  );
  return Like;
};
