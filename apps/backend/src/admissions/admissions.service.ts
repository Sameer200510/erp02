import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@college-erp/database';

@Injectable()
export class AdmissionsService {
  constructor(private readonly prisma: PrismaService) {}

  async createLead(data: Prisma.AdmissionLeadCreateInput) {
    return this.prisma.admissionLead.create({
      data,
    });
  }

  async getLeads() {
    return this.prisma.admissionLead.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async getLeadById(id: string) {
    return this.prisma.admissionLead.findUnique({
      where: { id },
      include: {
        documents: true,
        payments: true,
      },
    });
  }

  async updateLeadStatus(id: string, status: any) {
    return this.prisma.admissionLead.update({
      where: { id },
      data: { status },
    });
  }

  async approveAdmission(leadId: string) {
    const lead = await this.getLeadById(leadId);
    if (!lead) throw new Error('Lead not found');
    
    // Simulate ERP Account Generation
    const erpId = `ERP${new Date().getFullYear()}${Math.floor(1000 + Math.random() * 9000)}`;
    const tempPassword = Math.random().toString(36).slice(-8);

    const user = await this.prisma.user.create({
      data: {
        email: lead.email,
        password: tempPassword, // Should be hashed in production
        firstName: lead.firstName,
        lastName: lead.lastName,
        role: 'STUDENT',
      },
    });

    await this.prisma.studentProfile.create({
      data: {
        erpId,
        userId: user.id,
        leadId: lead.id,
        courseId: lead.courseId || '',
        batchId: '', // To be filled by actual logic
      },
    });

    return this.updateLeadStatus(leadId, 'APPROVED');
  }
}
