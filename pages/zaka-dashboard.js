import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function ZakaDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [payments, setPayments] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('zakaUser');
    if (!storedUser) {
      router.push('/zaka-login');
      return;
    }

    const userData = JSON.parse(storedUser);
    setUser(userData);
    fetchPayments(userData.zakaNumber);
  }, []);

  const fetchPayments = async (zakaNumber) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/zaka/payments?zakaNumber=${zakaNumber}`);
      const data = await response.json();

      if (data.success) {
        setPayments(data.payments);
        setSummary(data.summary);
      } else {
        setError(data.error || 'Failed to fetch payments');
      }
    } catch (err) {
      setError('Failed to fetch payment data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('zakaUser');
    router.push('/zaka-login');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your data...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>My Zaka Dashboard - St. Joseph Catholic Church</title>
        <meta name="description" content="View your zaka contributions and payment status" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-blue-900 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Link href="/" className="text-blue-200 hover:text-white flex items-center text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Home
                </Link>
                <div>
                  <h1 className="text-xl font-bold">St. Joseph Catholic Church</h1>
                  <p className="text-blue-200 text-xs">Kahawa Sukari</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* User Info Card */}
          {user && user.zakaDetails && (
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{user.zakaDetails.fullName}</h2>
                  <p className="text-gray-600">Zaka Number: {user.zakaDetails.zakaNumber}</p>
                  <p className="text-gray-600">Group: {user.zakaDetails.group || 'N/A'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Summary Cards */}
          {summary && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Contributions</p>
                    <p className="text-3xl font-bold text-blue-600">{summary.totalPayments}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Total Amount</p>
                    <p className="text-3xl font-bold text-green-600">{formatCurrency(summary.totalAmount)}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Current Month</p>
                    <p className={`text-3xl font-bold ${summary.isCurrentMonthPaid ? 'text-green-600' : 'text-red-600'}`}>
                      {summary.isCurrentMonthPaid ? 'Paid' : 'Pending'}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${summary.isCurrentMonthPaid ? 'bg-green-100' : 'bg-red-100'}`}>
                    <svg className={`w-6 h-6 ${summary.isCurrentMonthPaid ? 'text-green-600' : 'text-red-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {summary.isCurrentMonthPaid ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Payment History */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Payment History</h3>
            
            {payments.length === 0 ? (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-500">No payment records found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-gray-600 font-semibold">Month</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-semibold">Year</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-semibold">Amount</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-semibold">Method</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-800">{payment.month}</td>
                        <td className="py-3 px-4 text-gray-800">{payment.year}</td>
                        <td className="py-3 px-4 text-gray-800 font-semibold">{formatCurrency(payment.amount)}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            payment.paymentMethod === 'cash' ? 'bg-green-100 text-green-800' :
                            payment.paymentMethod === 'mpesa' ? 'bg-blue-100 text-blue-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {payment.paymentMethod.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{formatDate(payment.paymentDate)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Yearly Summary */}
          {summary && summary.paymentsByYear && Object.keys(summary.paymentsByYear).length > 0 && (
            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Yearly Summary</h3>
              <div className="space-y-4">
                {Object.entries(summary.paymentsByYear)
                  .sort(([a], [b]) => b - a)
                  .map(([year, data]) => (
                    <div key={year} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-gray-800">{year}</h4>
                        <span className="text-green-600 font-bold">{formatCurrency(data.amount)}</span>
                      </div>
                      <p className="text-sm text-gray-600">{data.count} payments made</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">© 2024 St. Joseph Catholic Church Kahawa Sukari</p>
          </div>
        </footer>
      </div>
    </>
  );
}
