import fastifyAutoload from 'fastify-autoload';
import fastify from 'fastify';

import { join } from "path";

const server = fastify();

server.register(fastifyAutoload, {
    dir: join(__dirname, 'routes'),
    options: { prefix: '/' },
});

server.listen(process.env.PORT ?? 3000, "0.0.0.0", async (err, address) => {
    if (err) {
        throw err;
    }

    console.log(`Listening on ${address}`);
    console.log(`Go to http://127.0.0.1:${process.env.PORT ?? 3000} to view it.`)
})