import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async processPayment(leadId: string, amount: number, reference: string) {
    const lead = await this.prisma.admissionLead.findUnique({ where: { id: leadId } });
    if (!lead) throw new NotFoundException('Admission Lead not found');

    const payment = await this.prisma.payment.create({
      data: {
        leadId,
        amount,
        reference,
        status: 'COMPLETED',
      },
    });

    // Automatically update the lead status to PAYMENT_VERIFIED
    await this.prisma.admissionLead.update({
      where: { id: leadId },
      data: { status: 'PAYMENT_VERIFIED' },
    });

    return payment;
  }

  async getPaymentsByLead(leadId: string) {
    return this.prisma.payment.findMany({
      where: { leadId },
    });
  }
}
