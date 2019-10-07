const knex = require("knex");

const config = require("../knexfile.js");

module.exports = knex(config.development);

// api knows how to talk to the database
