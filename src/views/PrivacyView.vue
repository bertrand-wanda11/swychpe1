<template>
  <div class="page-wrapper">

  
    <PageHero
      crumb="Privacy policy"
      eyebrow="Legal"
      title="Privacy Policy"
      lead="How Swychr Cooperative (SWYCO COOP-BOD) collects, uses, stores and protects your personal and financial data when you use SwychPe. Effective October 2026."
    />

  
    <div class="policy-content-section bg-white">
      <div class="container policy-container">
        <!-- Commitment Section -->
        <div class="commitment-card">
          <h2>Our Commitment to Your Data</h2>
          <p>
            At Swychr Cooperative Society with Board of Directors (SWYCO COOP-BOD), we respect your personal privacy and are committed to protecting your personal and financial data. This Privacy Policy explains how we collect, use, store, and safeguard your information when you use SwychPe.
          </p>
        </div>

        <article class="policy-block">
          <h3>1. Information We Collect</h3>
          <p>To provide our digital microfinance banking and payment services, we collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Identification Data:</strong> Full name, date of birth, residential address, email address, national identity card (CNI) or passport number, and photograph/selfie for biometric verification.
            </li>
            <li>
              <strong>Financial & Transaction Data:</strong> Account balances, transaction history, loan repayment history, connected Mobile Money account details, and utility payment records.
            </li>
            <li>
              <strong>Device & Technical Data:</strong> IP address, unique device identifiers (IMEI/UUID), operating system version, mobile network operator, and app performance logs.
            </li>
            <li>
              <strong>Permissions (With User Consent):</strong>
              <ul class="nested-list">
                <li><strong>SMS Permissions:</strong> For OTP verification and automated transaction parsing.</li>
                <li><strong>Contact Access:</strong> For quick P2P transfers and airtime gifting.</li>
                <li><strong>Camera Access:</strong> For QR code scanning and document upload.</li>
              </ul>
            </li>
          </ul>
        </article>

        <article class="policy-block">
          <h3>2. How We Use Your Information</h3>
          <p>SWYCO COOP-BOD uses your personal data for the following essential business purposes:</p>
          <ul>
            <li>To open, maintain, and secure your digital microfinance account.</li>
            <li>To process transfers, bill payments, airtime top-ups, and merchant QR payments.</li>
            <li>To perform credit risk evaluations and underwriting for SwychCredit loan applications.</li>
            <li>To fulfill statutory KYC, AML/CFT compliance, and regulatory reporting obligations under Cameroonian and COBAC law.</li>
            <li>To send transaction alerts, security notices, customer support messages, and promotional offers.</li>
          </ul>
        </article>

     
        <article class="policy-block">
          <h3>3. Data Sharing and Disclosure</h3>
          <p>We do not sell your personal data. We only share your information with third parties under strict confidentiality agreements in the following circumstances:</p>
          <ul>
            <li>
              <strong>Regulatory & Legal Authorities:</strong> When mandated by Cameroonian law enforcement, judicial courts, COBAC, or financial regulatory authorities.
            </li>
            <li>
              <strong>Service Providers & Partners:</strong> With trusted technical partners (telecom operators for Mobile Money integration, SMS gateway providers, billers like ENEO/CamWater/Canal+, and card issuing networks) required to fulfill your requested transactions.
            </li>
            <li>
              <strong>Credit Assessment Bureaus:</strong> For loan reporting, credit scoring, and default tracking as allowed by financial regulations.
            </li>
          </ul>
        </article>

      
        <article class="policy-block">
          <h3>4. Data Storage and Security Measures</h3>
          <ul>
            <li>We implement enterprise-grade technical and organizational security measures, including 256-bit SSL encryption, secure socket layers, firewalls, and restricted data access protocols.</li>
            <li>Your financial records and identity documentation are stored securely in encrypted cloud infrastructure conforming to international data security standards.</li>
          </ul>
        </article>

        <article class="policy-block">
          <h3>5. Your Rights as a Data Subject</h3>
          <p>Subject to applicable regulatory record-keeping laws (which mandate financial institutions to retain financial transaction records for statutory audit periods), you have the right to:</p>
          <ul>
            <li>Access and review the personal data held about you by SWYCO COOP-BOD.</li>
            <li>Request the correction or update of inaccurate personal details.</li>
            <li>Withdraw consent for marketing communications at any time.</li>
            <li>Request account deactivation and data deletion, subject to clearing outstanding debt and fulfilling statutory legal retention mandates.</li>
          </ul>
          <p>
            To exercise these rights, follow the steps on our <router-link to="/delete-account">account deletion page</router-link>
            or, to remove specific data while keeping your account, our <router-link to="/delete-data">data deletion page</router-link>.
            Identity, KYC and transaction records are retained for 10 years after account closure as required by CEMAC
            AML/CFT regulation and COBAC rules; all other personal data is deleted within 30 days of a verified request.
          </p>
        </article>

      
        <article class="policy-block">
          <h3>6. Updates to This Privacy Policy</h3>
          <p>
            SWYCO COOP-BOD may update this Privacy Policy periodically to reflect technological, operational, or legal changes. We will notify you of material changes via app notifications or email.
          </p>
        </article>

    
        <article class="policy-block contact-card">
          <h3>7. Contact Information and Support</h3>
          <p>If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact our Data Protection and Legal Compliance Officer:</p>
          <div class="contact-details">
            <p><strong>Legal Entity:</strong> Swychr Cooperative Society with Board of Directors (SWYCO COOP-BOD)</p>
            <p><strong>Email:</strong> <a href="mailto:reachswyco@swychr.com">reachswyco@swychr.com</a></p>
            <p><strong>Headquarters:</strong> SWYCO COOP-BOD Regional Office, Mayor Street, Molyko, Buea, Cameroon</p>
            <p><strong>Official Website:</strong> <a href="https://www.swychpe.com" target="_blank" rel="noopener">swychpe.com</a> | <a href="https://www.swychr.com" target="_blank" rel="noopener">swychr.com</a></p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
</script>

<style scoped>
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  color: var(--ink);
  box-sizing: border-box;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
}

.bg-white {
  background-color: #ffffff;
}


.policy-header-section {
  padding: 60px 0 40px 0;
  background-color: #f5f3f8;
  border-bottom: 1px solid #eae5f2;
}

.policy-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #1a0826;
  letter-spacing: -0.8px;
  margin-bottom: 16px;
}

.meta-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.badge {
  background-color: #f0e6f7;
  color: var(--brand);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 999px;
}

.badge.date {
  background-color: var(--brand);
  color: #ffffff;
}


.policy-content-section {
  padding: 50px 0 80px 0;
}

.commitment-card {
  background-color: #fbf9fc;
  border-left: 4px solid var(--brand);
  border-radius: 0 16px 16px 0;
  padding: 24px 28px;
  margin-bottom: 40px;
}

.commitment-card h2 {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--brand);
  margin-bottom: 8px;
}

.commitment-card p {
  font-size: 0.98rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin: 0;
}

.policy-block {
  margin-bottom: 36px;
}

.policy-block h3 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #1a0826;
  margin-bottom: 12px;
  border-bottom: 2px solid #f5f3f8;
  padding-bottom: 8px;
}

.policy-block p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin-bottom: 12px;
}

.policy-block ul {
  padding-left: 20px;
  margin: 0;
}

.policy-block li {
  font-size: 0.92rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin-bottom: 10px;
}

.nested-list {
  margin-top: 8px !important;
  padding-left: 18px !important;
}

.contact-card {
  background-color: #f8f6fc;
  border: 1px solid #eae5f2;
  border-radius: 20px;
  padding: 28px;
}

.contact-details p {
  margin: 6px 0;
  font-size: 0.92rem;
}

.contact-details a {
  color: var(--brand);
  text-decoration: none;
  font-weight: 700;
}

.contact-details a:hover {
  text-decoration: underline;
}


@media (max-width: 768px) {
  .policy-title {
    font-size: 2rem;
  }

  .commitment-card {
    padding: 18px 20px;
  }

  .policy-block h3 {
    font-size: 1.15rem;
  }

  .contact-card {
    padding: 20px;
  }
}
</style>