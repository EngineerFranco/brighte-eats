// src/resolvers/index.js
import db from '../config/db.js';

const resolvers = {
  Query: {
    leads: async () => {
      const result = await db.query('SELECT * FROM leads');
      return result.rows;
    },
    lead: async (_, { id }) => {
      const result = await db.query('SELECT * FROM leads WHERE id = $1', [id]);
      return result.rows[0];
    },
  },
  Mutation: {
    register: async (
      _,
      { name, email, mobile, postcode, services }
    ) => {
      const result = await db.query(
        'INSERT INTO leads (name, email, mobile, postcode, services) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name, email, mobile, postcode, JSON.stringify(services)]
      );
      return result.rows[0];
    },
  },
};

export default resolvers;
