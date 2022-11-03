const QNeo4j = require('@qualitech/qneo4j');

const dataBaseNeo4j = new QNeo4j({
    url: process.env.NEO4J_BOLT,
    username: process.env.NEO4J_USER,
    password: process.env.NEO4J_PASS
});

exports.neo4j = {
    execute: async (queryOpt, opts) => {
        return await dataBaseNeo4j.execute(queryOpt, opts);
    }
}

