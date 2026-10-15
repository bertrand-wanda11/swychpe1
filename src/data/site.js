// Shared site content. Account rules are transcribed from SwychPeApp
// lib/features/accounts/data/product_details.dart (itself from "SwychPe Account Info.xlsx"),
// so update both together if a product changes.

export const company = {
  brand: 'SwychPe',
  legalName: 'Swychr Cooperative Society with Board of Directors',
  shortLegal: 'SWYCO COOP-BOD',
  email: 'reachswyco@swychr.com',
  address: 'Mayor Street, Molyko, Buea, South-West Region, Cameroon',
  office: 'SWYCO COOP-BOD Regional Office',
  playStore: 'https://play.google.com/store/apps/details?id=com.swychr.swychpe',
  // Direct APK while the store listings await approval. apkDownload starts the
  // download; apkDrive is the Drive preview page as a fallback.
  apkDownload: 'https://drive.google.com/uc?export=download&id=14pzTr2Q2VRGgeTPkwD02omH3rkBfUBMP',
  apkDrive: 'https://drive.google.com/file/d/14pzTr2Q2VRGgeTPkwD02omH3rkBfUBMP/view?usp=sharing',
  appStore: 'https://apps.apple.com/',
}

// status: 'live' = shipped in the current SwychPe app; 'soon' = on the roadmap.
export const features = {
  onboarding: { title: 'Digital account opening', status: 'live' },
  kyc: { title: 'ID capture and liveness selfie', status: 'live' },
  mpin: { title: 'MPIN and biometric login', status: 'live' },
  deposit: { title: 'Deposit from MTN MoMo, Orange Money or bank transfer', status: 'live' },
  withdraw: { title: 'OTP-confirmed withdrawals', status: 'live' },
  transfer: { title: 'Free member-to-member transfers', status: 'live' },
  receiveQr: { title: 'Receive with your QR code', status: 'live' },
  paymentLink: { title: 'Payment links', status: 'live' },
  statements: { title: 'Authenticated e-statements', status: 'live' },
  receipts: { title: 'Shareable transaction receipts', status: 'live' },
  tracking: { title: 'Pending and failed transaction tracking', status: 'live' },
  upgrades: { title: 'In-app account upgrades', status: 'live' },
  alerts: { title: 'Real-time push alerts', status: 'live' },
  scanPay: { title: 'Scan & Pay merchants', status: 'soon' },
  cards: { title: 'Cards', status: 'soon' },
  bills: { title: 'Bills, airtime and TV', status: 'soon' },
  loans: { title: 'Loans and advances', status: 'soon' },
  njangi: { title: 'Digital Njangi groups', status: 'soon' },
  goals: { title: 'Target savings', status: 'soon' },
  business: { title: 'Merchant and payroll tools', status: 'soon' },
}

export const accounts = [
  {
    code: 'basic',
    name: 'Basic Account',
    tagline: 'Start banking with just your phone number.',
    audience: 'Individuals',
    setupFee: 'Free',
    minBalance: 'None',
    interest: 'No',
    shares: 'None',
    subAccounts: 'Single account',
    eligibility: 'Verify your mobile number and provide basic information.',
    highlights: [
      'No account setup fee',
      'No withdrawal fee on remittance inflows',
      'Upgrade to any other tier from the app',
    ],
  },
  {
    code: 'student',
    name: 'Student Account',
    tagline: 'Built for pupils and university students.',
    audience: 'Students',
    setupFee: '1,000 XAF one-time',
    minBalance: 'None',
    interest: 'No',
    shares: 'None',
    subAccounts: 'Single account',
    eligibility: 'Valid student ID or latest school-fee payment receipt.',
    highlights: ['Free deposits', 'Free e-statement requests', 'No other running fees'],
  },
  {
    code: 'mini',
    name: 'Mini Account',
    tagline: 'A verified everyday account with zero setup cost.',
    audience: 'KYC-verified adults',
    setupFee: 'Free',
    minBalance: '5,000 XAF',
    interest: 'No',
    shares: 'None',
    subAccounts: 'Single account',
    eligibility: 'Any adult who has completed KYC.',
    highlights: [
      'Free deposits',
      'Minimum balance released when the account is closed',
      'Authenticated e-statements on request',
    ],
  },
  {
    code: 'daily_savings',
    name: 'Daily Savings Account',
    tagline: 'For traders and earners who save a little every day.',
    audience: 'KYC-verified adults',
    setupFee: '2,500 XAF one-time',
    minBalance: '3,000 XAF',
    interest: 'No',
    shares: 'None',
    subAccounts: 'Single account',
    eligibility: 'Any adult who has completed KYC.',
    highlights: ['Free deposits', 'Payroll processing at a fixed price per employee', 'Minimum balance released on closure'],
  },
  {
    code: 'full_shares',
    name: 'Full Account with Shares',
    tagline: 'Full cooperative membership for individuals and organisations.',
    audience: 'Individuals & organisations',
    setupFee: 'Free registration',
    minBalance: '10,000 XAF (Savings)',
    interest: 'Yes — Savings & Investment',
    shares: '1–10 shares at 10,000 XAF',
    subAccounts: 'Deposit, Savings, Shares, Loan, Investment',
    eligibility: 'KYC-verified adults and registered organisations meeting Full Account conditions.',
    highlights: [
      'Five sub-accounts in one membership',
      'Interest on Savings and Investment balances',
      'Corporate accounts with up to 3 authorised signatories',
    ],
    featured: true,
  },
]

export const withdrawalFee = '1.9% (minimum 500 XAF)'

export const faqs = [
  {
    q: 'Do I need to visit a branch to open an account?',
    a: 'No. Registration, identity verification (ID document plus a liveness selfie), MPIN setup and account upgrades all happen inside the SwychPe app.',
  },
  {
    q: 'How do I add money to my account?',
    a: 'Open Deposit in the app and pay from MTN Mobile Money, Orange Money or another mobile wallet, or submit a bank transfer deposit and track its status in the app.',
  },
  {
    q: 'What does it cost?',
    a: 'Member-to-member transfers are free. Deposits are free on every account. Withdrawals carry a standard fee of 1.9% (minimum 500 XAF), shown before you confirm. Setup fees depend on the account tier — see the Accounts page.',
  },
  {
    q: 'Which account should I choose?',
    a: 'Everyone starts on a Basic Account. You can upgrade to Student, Mini, Daily Savings or Full Account with Shares from the app once you meet the eligibility rules; the app shows the exact quote before you confirm.',
  },
  {
    q: 'Who regulates SwychPe?',
    a: 'SwychPe is operated by Swychr Cooperative Society with Board of Directors (SWYCO COOP-BOD), a cooperative financial institution affiliated with the Cameroon Cooperative Credit Union League (CamCCUL) and operating under COBAC microfinance regulation.',
  },
  {
    q: 'How is my account protected?',
    a: 'Every login needs your MPIN or device biometrics, withdrawals are confirmed with a one-time code, every sign-in is recorded, and all traffic is encrypted in transit.',
  },
  {
    q: 'Can I get a statement for my visa or loan application?',
    a: 'Yes. Generate an authenticated PDF statement for any date range in the app and it is emailed to your verified address.',
  },
  {
    q: 'How do I close my account or delete my data?',
    a: 'Visit swychpe.com/delete-account (or swychpe.com/delete-data to remove specific data) to submit a request. We confirm your identity, settle any balance, and delete or anonymise your data except records the law requires us to keep.',
  },
]
