const initializeUserRoles = require('./initializeUserRoles');

const initializeDb = async () => {
  try {

    await initializeUserRoles();
    console.log('Database initialization complete.');
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
};

module.exports = initializeDb;
