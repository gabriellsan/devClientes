import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../services/ListCustomerService";


class ListCustomerController {
    async handle(request:FastifyRequest,reply:FastifyReply) {
        const listCustumerService = new ListCustomerService();

        const customers = await listCustumerService.execute();

        reply.send(customers)
    }
}

export {ListCustomerController}