import assert from 'assert'
import { pool } from '../config/pool.mjs'

describe('MySQL Connection test', () => {
    it('should be able to establish a connection', async (done) => {
        pool.getConnection((err, connection) => {
            if (err) {
                done(err); // Pass the error to Mocha
                return;
            }
            try {
                assert(connection, 'Connection should be created successfully');
                done(); // Indicate that the test is done
            } catch (error) {
                done(error); // Pass any assertion error to Mocha
            } finally {
                if (connection) {
                    connection.release();
                }
            }
        })

    });
});