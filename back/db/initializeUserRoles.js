const UserRole = require('../models/userRoleSchema');
const { initialUserRoles } = require("../demoData/demoData");

const initializeUserRoles = async () => {
  const existingRoles = await UserRole.find();
  const existingRoleNames = existingRoles.map(role => role.name);
  const newRoles = initialUserRoles.filter(role => !existingRoleNames.includes(role.name));

  if (await UserRole.countDocuments() === 0) {
    await UserRole.insertMany(initialUserRoles);
    console.log(`Success: ${initialUserRoles.length} user roles were inserted`);
  } else if (newRoles.length > 0) {
    await UserRole.insertMany(newRoles);
    console.log(`Success: New user roles inserted: ${newRoles.length}`);
  } else {
    console.log('Success: No new user roles to add.');
  }
};

module.exports = initializeUserRoles;
