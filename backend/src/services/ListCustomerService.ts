import prismaClient from "../prisma";

class ListCustomerService {
    async execute() {
        const customers = await prismaClient.customer.findMany()

        return customers;
    }
}

export {ListCustomerService}