import mongooseConnect from "@/lib/mongoose";
import ZakaPayment from "@/models/ZakaPayment";
import { Zaka } from "@/models/Zaka";

export default async function handler(req, res) {
  const { method } = req;

  try {
    await mongooseConnect();

    if (method === 'GET') {
      const { zakaNumber } = req.query;

      if (!zakaNumber) {
        return res.status(400).json({ error: 'Zaka number is required' });
      }

      // Get zaka member details
      const zaka = await Zaka.findOne({ zakaNumber });
      if (!zaka) {
        return res.status(404).json({ error: 'Zaka member not found' });
      }

      // Get all payments for this zaka member
      let payments;
      try {
        payments = await ZakaPayment.find({ zakaNumber })
          .sort({ year: -1, month: -1, paymentDate: -1 });
      } catch (dbError) {
        console.error('Error fetching payments:', dbError);
        payments = [];
      }

      // Ensure payments is an array and filter out null/undefined
      const paymentsArray = (Array.isArray(payments) ? payments : []).filter(p => p != null);

      // Calculate summary statistics
      const totalPayments = paymentsArray.length;
      const totalAmount = paymentsArray.reduce((sum, p) => sum + (p.amount || 0), 0);
      
      // Group payments by year
      const paymentsByYear = {};
      paymentsArray.forEach(payment => {
        if (!payment) return;
        
        const year = payment.year;
        if (!paymentsByYear[year]) {
          paymentsByYear[year] = {
            count: 0,
            amount: 0,
            months: {}
          };
        }
        paymentsByYear[year].count += 1;
        paymentsByYear[year].amount += payment.amount || 0;
        
        if (!paymentsByYear[year].months[payment.month]) {
          paymentsByYear[year].months[payment.month] = {
            amount: payment.amount || 0,
            paymentMethod: payment.paymentMethod,
            paymentDate: payment.paymentDate
          };
        }
      });

      // Get current year and month
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

      // Check if current month payment exists
      const currentMonthPayment = paymentsArray.find(
        p => p.year === currentYear && p.month === currentMonth
      );

      return res.json({
        success: true,
        zaka: {
          zakaNumber: zaka.zakaNumber,
          fullName: zaka.fullName,
          group: zaka.group,
          mobileNumber: zaka.mobileNumber
        },
        payments: paymentsArray,
        summary: {
          totalPayments,
          totalAmount,
          paymentsByYear,
          currentMonthPayment: currentMonthPayment || null,
          isCurrentMonthPaid: !!currentMonthPayment
        }
      });
    }

    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${method} not allowed` });
  } catch (error) {
    console.error('Zaka payments API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
