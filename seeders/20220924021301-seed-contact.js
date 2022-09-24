'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Contacts', [
      {
        firstname: 'Adrian',
        lastname: 'Hernandez',
        email: 'adrian@gamil.com',
        phone: '123-456-7899',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstname: 'Kawaki',
        lastname: 'Hatake',
        email: 'hatake@gamil.com',
        phone: '744-456-7899',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
