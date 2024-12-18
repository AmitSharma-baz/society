/* eslint-disable prettier/prettier */

export class Society {
  id: number;
  name: string;
  address: string;
  registrationNo?: string; // Optional field
  registrationDate?: Date;
  billingPeriod: 'monthly' | 'quarterly' | 'yearly'; // Enum-like values
  createdAt: Date;
  updatedAt: Date;
}