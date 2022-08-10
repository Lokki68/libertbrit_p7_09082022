module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define(
    'comment',
    {
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      timestamp: false,
    },
  );
  return Comment;
};
