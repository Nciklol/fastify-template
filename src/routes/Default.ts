import type { FastifyInstance } from "fastify";

// Every route must export an autoPrefix variable

export const autoPrefix = "/";

export default async (fastify: FastifyInstance) => {
    fastify.get("/", async (req, res) => {
        res.status(200).send("Welcome to fastify!");
    })
}