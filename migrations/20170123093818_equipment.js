
exports.up = function(knex, Promise) {
  return knex.schema.createTable('equipment', function(table){
    table.increments();
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
    table.string('name').notNullable();
    table.text('description').notNullable();
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('equipment');
};
