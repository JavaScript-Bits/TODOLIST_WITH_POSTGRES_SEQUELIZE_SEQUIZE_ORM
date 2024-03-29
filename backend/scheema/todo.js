const { Sequelize , DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres', // Explicitly specify the dialect
    }
);

const Todo = sequelize.define('Todolists', {  
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending', // You can set default value if needed
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

    // Sync your model with the database
sequelize.sync()
.then(() => {
  console.log('Database & tables created!');
});

module.exports = Todo;
