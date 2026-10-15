<template>
  <PageHero
    crumb="Delete data"
    eyebrow="Account & data deletion"
    title="Delete some of your data"
    lead="You can ask us to delete certain personal data while keeping your SwychPe account open. To close your account entirely, use the account deletion page instead."
  >
    <a href="#request" class="btn btn-gold">Request data deletion</a>
    <router-link to="/delete-account" class="btn btn-ghost-light">Delete my whole account</router-link>
  </PageHero>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Your options</p>
        <h2 class="h-section">What you can delete without closing your account</h2>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr><th scope="col">Data</th><th scope="col">Can it be deleted?</th><th scope="col">What happens</th></tr>
          </thead>
          <tbody>
            <tr v-for="r in rows" :key="r.data">
              <th scope="row">{{ r.data }}</th>
              <td>
                <span class="badge" :class="r.ok ? 'badge-live' : 'badge-soon'">{{ r.ok ? 'Yes' : 'Retained' }}</span>
              </td>
              <td>{{ r.effect }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="notice before">
        <AppIcon name="info" :size="20" />
        <p>
          Identity, KYC and transaction records cannot be deleted while your account is open, and are kept for 10 years
          after closure as required by CEMAC AML/CFT regulation and COBAC rules. See
          <router-link to="/delete-account">account deletion</router-link> and our
          <router-link to="/privacy">privacy policy</router-link> for details.
        </p>
      </div>
    </div>
  </section>

  <section id="request" class="section bg-tint">
    <div class="container req-grid">
      <div>
        <p class="eyebrow">Submit a request</p>
        <h2 class="h-section">Request data deletion</h2>
        <p class="lead">
          Choose what you'd like removed and send the email the form prepares. We verify your identity, then complete the
          request within 30 days and confirm by email.
        </p>
        <ul class="check-list">
          <li><AppIcon name="clock" :size="18" />Acknowledged within 2 business days</li>
          <li><AppIcon name="shield-check" :size="18" />Identity verified before any change</li>
          <li><AppIcon name="check" :size="18" />Completed within 30 days of verification</li>
        </ul>
      </div>
      <DeletionRequestForm mode="data" :data-options="options" />
    </div>
  </section>
</template>

<script setup>
import AppIcon from '../components/AppIcon.vue'
import DeletionRequestForm from '../components/DeletionRequestForm.vue'
import PageHero from '../components/PageHero.vue'

const rows = [
  { data: 'Email address', ok: true, effect: 'Removed from your profile. You will stop receiving e-statements and email alerts until you add one again.' },
  { data: 'Next-of-kin details', ok: true, effect: 'Removed. Full Account members must provide them again to keep the account compliant.' },
  { data: 'Marketing & promotional preferences', ok: true, effect: 'You are unsubscribed from all promotional messages.' },
  { data: 'Push notification tokens', ok: true, effect: 'Removed from our servers; you will stop receiving push alerts on those devices.' },
  { data: 'Rejected or abandoned KYC uploads', ok: true, effect: 'Document images and selfies that did not lead to a verified account are deleted.' },
  { data: 'Verified identity & KYC records', ok: false, effect: 'Retained for the life of the account plus 10 years.' },
  { data: 'Transactions, balances & statements', ok: false, effect: 'Retained for 10 years after each transaction.' },
  { data: 'Security & login logs', ok: false, effect: 'Retained for fraud prevention and audit, up to 10 years.' },
]

const options = rows.filter((r) => r.ok).map((r) => r.data)
</script>

<style scoped>
.data-table tbody th {
  color: var(--ink);
  white-space: normal;
}
.data-table td:last-child {
  color: var(--muted);
}
.before {
  margin-top: 24px;
}
.before p {
  margin: 0;
}
.req-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 56px;
  align-items: start;
}
.req-grid .lead {
  margin-bottom: 24px;
}
@media (max-width: 1000px) {
  .req-grid {
    grid-template-columns: 1fr;
  }
}
</style>
