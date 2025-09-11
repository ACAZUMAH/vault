import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  clientInfo: {
    fontSize: 10,
    lineHeight: 1.4,
    marginBottom: 20,
  },
  table: {
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 5,
    marginBottom: 10,
  },
  tableHeaderCell: {
    fontSize: 10,
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  tableCell: {
    fontSize: 10,
    lineHeight: 1.3,
  },
  descriptionColumn: {
    width: "50%",
    paddingRight: 10,
  },
  rateColumn: {
    width: "30%",
    paddingRight: 10,
  },
  totalColumn: {
    width: "20%",
    textAlign: "right",
  },
  totalRow: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#000000",
    paddingTop: 10,
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: "bold",
    width: "80%",
  },
  totalAmount: {
    fontSize: 12,
    fontWeight: "bold",
    width: "20%",
    textAlign: "right",
  },
  footer: {
    marginTop: 30,
    fontSize: 9,
    lineHeight: 1.3,
  },
});

interface InvoicePDFProps {
  clientName: string;
  facilityName: string;
  billingPeriod: string;
  invoiceNo: string;
  dateIssued: string;
  dueDate: string;
}

export const InvoicePDF: React.FC<InvoicePDFProps> = ({
  clientName,
  facilityName,
  billingPeriod,
  invoiceNo,
  dateIssued,
  dueDate,
}) => {
  const invoiceData = {
    clientName: clientName,
    facilityName: facilityName,
    billingPeriod: billingPeriod,
    invoiceNo: invoiceNo,
    dateIssued: dateIssued,
    dueDate: dueDate,
    items: [
      {
        description: "Vault Storage Fee",
        rate: "£3,500/month × 12 months",
        total: "£42,000.00",
      },
      {
        description: "Insurance Premium (Full value)",
        rate: "Based on asset value",
        total: "£9,600.00",
      },
      {
        description: "Annual Security Surcharge",
        rate: "CCTV, biometric access, etc.",
        total: "£2,400.00",
      },
      {
        description: "Administrative & Handling Fees",
        rate: "Flat annual charge",
        total: "£1,200.00",
      },
      {
        description: "Audit & Compliance Maintenance",
        rate: "Annual external audit costs",
        total: "£1,200.00",
      },
      {
        description: "Environmental Controls (Vault)",
        rate: "Temperature/humidity control",
        total: "£600.00",
      },
      {
        description: "VAT (0% on pure investment gold)",
        rate: "Exempt",
        total: "£0.00",
      },
    ],
    totalAmount: "£57,600.00",
    reference: "GV-2025-0147",
    sortCode: "40-51-62",
    accountNumber: "12345678",
    accountName: "Regal Vaults Secure Storage Ltd",
    bank: "HSBC UK",
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Gold Storage Facility – Annual Bill</Text>

          <View style={styles.clientInfo}>
            <Text>Client Name: {invoiceData.clientName}</Text>
            <Text>Facility Name: {invoiceData.facilityName}</Text>
            <Text>Billing Period: {invoiceData.billingPeriod}</Text>
            <Text>Invoice No.: {invoiceData.invoiceNo}</Text>
            <Text>Date Issued: {invoiceData.dateIssued}</Text>
            <Text>Due Date: {invoiceData.dueDate}</Text>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderCell, styles.descriptionColumn]}>
              Description
            </Text>
            <Text style={[styles.tableHeaderCell, styles.rateColumn]}>
              Rate
            </Text>
            <Text style={[styles.tableHeaderCell, styles.totalColumn]}>
              Total (£)
            </Text>
          </View>

          {invoiceData.items.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.descriptionColumn]}>
                {item.description}
              </Text>
              <Text style={[styles.tableCell, styles.rateColumn]}>
                {item.rate}
              </Text>
              <Text style={[styles.tableCell, styles.totalColumn]}>
                {item.total}
              </Text>
            </View>
          ))}

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>TOTAL AMOUNT DUE</Text>
            <Text style={styles.totalAmount}>{invoiceData.totalAmount}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text>Reference: {invoiceData.reference}</Text>
          <Text>Sort Code: {invoiceData.sortCode}</Text>
          <Text>Account Number: {invoiceData.accountNumber}</Text>
          <Text>Account Name: {invoiceData.accountName}</Text>
          <Text>Bank: {invoiceData.bank}</Text>
          <Text>Payment Instructions:</Text>
        </View>
      </Page>
    </Document>
  );
};

export function getInvoiceHtml({
  clientName,
  facilityName,
  billingPeriod,
  invoiceNo,
  dateIssued,
  dueDate,
}: InvoicePDFProps): string {
  return `
<!DOCTYPE html>
<html>
  <head>
    <title>Gold Storage Facility – Annual Bill</title>
    <style>
      body { font-family: Helvetica, Arial, sans-serif; background: #fff; padding: 30px; }
      .com { text-align: left; color: #FFD700; font-size: 30px; font-weight: bold; margin-bottom: 20px; }
      .title { font-size: 18px; font-weight: bold; margin-bottom: 15px; }
      .client-info { font-size: 12px; margin-bottom: 20px; }
      .table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
      .table th, .table td { font-size: 12px; border-bottom: 1px solid #000; padding: 6px 4px; text-align: left; }
      .table th { font-weight: bold; background: #f5f5f5; }
      .table td:last-child, .table th:last-child { text-align: right; }
      .total-row { font-weight: bold; border-top: 2px solid #000; }
      .footer { margin-top: 30px; font-size: 11px; }
    </style>
  </head>
  <body>
    <h1 class="com" >Imperium Vault Guard</h1>
    <div class="title">Gold Storage Facility – Annual Bill</div>
    <div class="client-info">
      <div>Client Name: ${clientName}</div>
      <div>Facility Name: ${facilityName}</div>
      <div>Billing Period: ${billingPeriod}</div>
      <div>Invoice No.: ${invoiceNo}</div>
      <div>Date Issued: ${dateIssued}</div>
      <div>Due Date: ${dueDate}</div>
    </div>
    <table class="table">
      <tr>
        <th>Description</th>
        <th>Rate</th>
        <th>Total (£)</th>
      </tr>
      <tr>
        <td>Vault Storage Fee</td>
        <td>£3,500/month × 12 months</td>
        <td>£42,000.00</td>
      </tr>
      <tr>
        <td>Insurance Premium (Full value)</td>
        <td>Based on asset value</td>
        <td>£9,600.00</td>
      </tr>
      <tr>
        <td>Annual Security Surcharge</td>
        <td>CCTV, biometric access, etc.</td>
        <td>£2,400.00</td>
      </tr>
      <tr>
        <td>Administrative & Handling Fees</td>
        <td>Flat annual charge</td>
        <td>£1,200.00</td>
      </tr>
      <tr>
        <td>Audit & Compliance Maintenance</td>
        <td>Annual external audit costs</td>
        <td>£1,200.00</td>
      </tr>
      <tr>
        <td>Environmental Controls (Vault)</td>
        <td>Temperature/humidity control</td>
        <td>£600.00</td>
      </tr>
      <tr>
        <td>VAT (0% on pure investment gold)</td>
        <td>Exempt</td>
        <td>£0.00</td>
      </tr>
      <tr class="total-row">
        <td colspan="2">TOTAL AMOUNT DUE</td>
        <td>£57,600.00</td>
      </tr>
    </table>
    <div class="footer">
      <div>Reference: GV-2025-0147</div>
      <div>Sort Code: 40-51-62</div>
      <div>Account Number: 12345678</div>
      <div>Account Name: Regal Vaults Secure Storage Ltd</div>
      <div>Bank: HSBC UK</div>
      <div>Payment Instructions:</div>
    </div>
  </body>
</html>
  `;
}

interface PaymentData {
  name: string;
  email: string;
  phone: string;
  amount: string;
}

export const PaymentPDf = (data: PaymentData) => {
  return `       
  <!DOCTYPE html>
        <html>
          <head>
            <title>Payment Invoice</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 40px; }
              .com { text-align: left; color: #FFD700; font-size: 30px; font-weight: bold; margin-bottom: 20px; }
              .header { text-align: center; margin-bottom: 30px; }
              .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px; }
              .section { margin-bottom: 20px; }
              .section h4 { margin-bottom: 10px; font-weight: bold; }
              .instructions { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
              .notes { background: #d1ecf1; border: 1px solid #bee5eb; padding: 15px; border-radius: 5px; }
              .amount { font-size: 18px; font-weight: bold; color: #2c3e50; }
            </style>
          </head>
          <body>
            <h1 class="com" >Imperium Vault Guard</h1>
            <div class="header">
              <h1>Payment Invoice</h1>
              <p>Invoice #INV-${Date.now().toString().slice(-8)}</p>
              <p>Date: ${new Date().toLocaleDateString()}</p>
            </div>
            
            <div class="info-grid">
              <div class="section">
                <h4>Customer Information</h4>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
              </div>
              <div class="section">
                <h4>Payment Details</h4>
                <p><strong>Amount:</strong> <span class="amount">${
                  data.amount
                }</span></p>
                <p><strong>Method:</strong> Credit Card</p>
                <p><strong>Status:</strong> Pending</p>
              </div>
            </div>
            
            <div class="instructions">
              <h4>Payment Instructions</h4>
              <ol>
                <li>Call our secure payment line at <strong>1-800-SECURE-PAY</strong></li>
                <li>Provide this invoice number: <strong>INV-${Date.now()
                  .toString()
                  .slice(-8)}</strong></li>
                <li>Have your credit card ready for processing</li>
                <li>Confirm the payment amount of <strong>${
                  data.amount
                }</strong></li>
              </ol>
            </div>
            
            <div class="notes">
              <h4>Important Notes</h4>
              <ul>
                <li>Payment must be completed within 7 business days</li>
                <li>Keep this invoice for your records</li>
                <li>You will receive a confirmation email once payment is processed</li>
                <li>For questions, contact support at support@company.com</li>
              </ul>
            </div>
            
            <div style="margin-top: 40px; text-align: center; color: #666;">
              <p>Thank you for your business!</p>
              <p>Imperium Vault Guard | 7th floor, 3 Shortlands | London W6 8DA | (555) 123-4567</p>
            </div>
          </body>
        </html>
      `;
};
