exports.seed = function(knex, Promise) {
    return knex.raw('DELETE FROM "equipment"; ALTER SEQUENCE equipment_id_seq RESTART WITH 6')
        .then(function() {
            const equipmentList = [{
                id: 1,
                user_id: 1,
                name: "Burton Snowboard",
                description: "Guillermo's old board... got quite a few scratches!"
            },
            {
                id: 2,
                user_id: 1,
                name: "Burton Gloves",
                description: "Leather gloves with screen-touch technology. Awesome!"
            },
            {
                id: 3,
                user_id: 1,
                name: "Burton Boots",
                description: "Guillermo's old boots. Time for a new pair for sure."
            },
            {
                id: 4,
                user_id: 2,
                name: "Saloman Snowboard",
                description: "Kendall's new board! Nice and smooth."
            },
            {
                id: 5,
                user_id: 2,
                name: "Tie-dye neck warmer",
                description: "Kendall likes color..."
            }
            ];
          return knex('equipment').insert(equipmentList);
        });

};
