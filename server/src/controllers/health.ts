import { FastifyRequest, FastifyReply } from "fastify"

export async function getHealthStatus(_request: FastifyRequest, reply: FastifyReply) {
    try {
        const healthData = {
            status: "ok",
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            environment: process.env.NODE_ENV || "development",
            memory: process.memoryUsage(),
            version: process.version
        }
        
        return reply.status(200).send(healthData)
    } catch (error) {
        return reply.status(500).send({
            status: "error",
            timestamp: new Date().toISOString(),
            message: "Health check failed"
        })
    }
}