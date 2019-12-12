const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    // add,
    // update,
    // remove
};

function find() {
    return db('schemes');
};

function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}

function findSteps(id) {
    return db('steps')
        .select('scheme_name', 'steps.id', 'steps.step_number', 'steps.instructions')
        .join('schemes', 'steps.scheme_id', "schemes.id")
        .where('scheme_id', id)
}