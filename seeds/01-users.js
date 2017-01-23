

exports.seed = function(knex, Promise) {
    return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 3')
        .then(function() {
            const users = [
            {
                id: 1,
                email: 'moratorio.guillermo@gmail.com',
                password: 'Edison',
            }, {
                id: 2,
                email: 'kkrave76@gmail.com',
                password: 'Edison!',
            }];
          return knex('user').insert(users);
        });

};
