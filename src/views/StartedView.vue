<template>
  <div class="page-wrapper">
    <!-- Reusable Navbar -->
    <Navbar />

    <!-- Main Content Area -->
    <main class="signup-container">
      <div class="signup-card">
        <div class="card-header">
          <h1 class="title">Join SwychPe</h1>
          <p class="subtitle">
            Create your account and start sending money across borders today.
          </p>
        </div>

        <form @submit.prevent="handleSignup" class="signup-form">
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input
              id="fullName"
              v-model="form.fullName"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              placeholder="+1 234 567 8900"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Create a strong password"
              required
            />
          </div>

          <button type="submit" class="btn-signup" :disabled="loading">
            <span v-if="loading">Creating account...</span>
            <span v-else>Sign Up</span>
          </button>
        </form>

        <div class="card-footer">
          <span>Already have an account? </span>
          <router-link to="/login" class="login-link">Login</router-link>
        </div>
      </div>
    </main>

    <!-- White Separator Line Above Footer -->
    <div class="separator-gap"></div>

    <!-- Reusable Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const router = useRouter()
const loading = ref(false)

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  password: ''
})

const handleSignup = async () => {
  loading.value = true
  try {
    console.log('Registering user:', form)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push('/login')
  } catch (error) {
    console.error('Signup failed:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Page Layout Wrapper */
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color:  #7B1FA2; /* Deep Purple Theme */
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-sizing: border-box;
}

/* Force Navbar, Main Content, and Footer components to span 100% width */
.page-wrapper > * {
  width: 100%;
}

/* Centered Main Form Container */
.signup-container {
  flex: 1;
  display: flex;
  align-items: center;      /* Vertically centers the card */
  justify-content: center;  /* Horizontally centers the card */
  padding: 80px 24px;
  width: 100%;
  box-sizing: border-box;
}

/* White Form Card */
.signup-card {
  background-color: #ffffff;
  border-radius: 24px;
  padding: 48px 40px;
  width: 100%;
  max-width: 460px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
  box-sizing: border-box;
}

.card-header {
  margin-bottom: 28px;
  text-align: left;
}

.title {
  color: #7B1FA2;
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 10px 0;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.subtitle {
  color: #9ca3af;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}

.form-group input {
  width: 100%;
  padding: 13px 16px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
}

.form-group input:focus {
  border-color: #7B1FA2;
  box-shadow: 0 0 0 4px rgba(123, 31, 162, 0.15);
}

.btn-signup {
  margin-top: 8px;
  width: 100%;
  background-color: #7B1FA2;
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  padding: 15px 24px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.btn-signup:hover:not(:disabled) {
  background-color: #6a1b8e;
}

.btn-signup:active:not(:disabled) {
  transform: scale(0.98);
}

.btn-signup:disabled {
  opacity: 0.75;
  cursor: not-allowed;
}

.card-footer {
  margin-top: 24px;
  text-align: center;
  font-size: 13px;
  color: #6b7280;
}

.login-link {
  color: #7B1FA2;
  font-weight: 600;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}

.separator-gap {
  height: 24px;
  background-color: #ffffff;
  width: 100%;
}

/* ==========================================================================
   Full Responsive Breakpoints
   ========================================================================== */

/* Large Screens & Wide Monitors (1440px and up) */
@media (min-width: 1440px) {
  .signup-container {
    padding: 100px 32px;
  }

  .signup-card {
    max-width: 500px;
    padding: 56px 48px;
  }

  .title {
    font-size: 34px;
  }

  .subtitle {
    font-size: 15px;
  }
}

/* Standard Laptops & Desktops (1024px to 1439px) */
@media (max-width: 1439px) and (min-width: 1024px) {
  .signup-container {
    padding: 70px 24px;
  }
}

/* Tablets & iPad Screen Sizes (768px to 1023px) */
@media (max-width: 1023px) and (min-width: 768px) {
  .signup-container {
    padding: 60px 24px;
  }

  .signup-card {
    max-width: 440px;
    padding: 40px 32px;
    border-radius: 20px;
  }

  .title {
    font-size: 28px;
  }
}

/* Large Mobile Phones (481px to 767px) */
@media (max-width: 767px) and (min-width: 481px) {
  .signup-container {
    padding: 50px 20px;
  }

  .signup-card {
    padding: 36px 28px;
    border-radius: 18px;
  }

  .title {
    font-size: 26px;
  }
}

/* Small Smartphone Screens (480px and down) */
@media (max-width: 480px) {
  .signup-container {
    padding: 30px 16px;
  }

  .signup-card {
    padding: 28px 20px;
    border-radius: 16px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25);
  }

  .card-header {
    margin-bottom: 22px;
  }

  .title {
    font-size: 22px;
    margin-bottom: 6px;
  }

  .subtitle {
    font-size: 13px;
  }

  .signup-form {
    gap: 16px;
  }

  .form-group input {
    padding: 11px 14px;
    font-size: 14px;
    border-radius: 10px;
  }

  .btn-signup {
    padding: 13px 20px;
    font-size: 14px;
  }
}

/* Mobile Landscape View */
@media (max-height: 600px) and (orientation: landscape) {
  .signup-container {
    padding: 30px 16px;
  }

  .signup-card {
    padding: 24px 20px;
  }

  .card-header {
    margin-bottom: 16px;
  }

  .signup-form {
    gap: 12px;
  }
}
</style>