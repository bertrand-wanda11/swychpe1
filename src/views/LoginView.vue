<template>
  <div class="page-wrapper">

    <Navbar />


    <main class="login-section">
      <div class="login-card">
        <div class="card-header">
          <h1 class="title">Welcome Back</h1>
          <p class="subtitle">Sign in to manage your money.</p>
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" class="btn-submit" :disabled="loading">
            <span v-if="loading">Signing in...</span>
            <span v-else>Login</span>
          </button>
        </form>

        <div class="card-footer">
          <span>Don't have an account? </span>
          <router-link to="/Started" class="signup-link">Sign up</router-link>
        </div>
      </div>
    </main>

    
    <div class="separator-gap"></div>

 
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
  email: '',
  password: ''
})

const handleLogin = async () => {
  loading.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push('/')
  } catch (error) {
    console.error('Login failed:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #7B1FA2;
  box-sizing: border-box;
}

 
.page-wrapper > * {
  width: 100%;
}

.login-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  width: 100%;
  box-sizing: border-box;
}

.login-card {
  background-color: #ffffff;
  border-radius: 20px;
  padding: 44px 40px;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}

.card-header {
  margin-bottom: 28px;
  text-align: left;
}

.title {
  color: #5c1180;
  font-size: 1.85rem;
  font-weight: 800;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
}

.subtitle {
  color: #9ca3af;
  font-size: 0.9rem;
  margin: 0;
  font-weight: 500;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 0.82rem;
  font-weight: 700;
  color: #374151;
}

.form-group input {
  width: 100%;
  padding: 12px 14px;
  font-size: 0.9rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
}

.form-group input:focus {
  border-color: #5c1180;
  box-shadow: 0 0 0 3px rgba(92, 17, 128, 0.1);
}

.btn-submit {
  margin-top: 10px;
  width: 100%;
  background-color: #5c1180;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  padding: 13px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.btn-submit:hover:not(:disabled) {
  background-color: #4a0d68;
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.card-footer {
  margin-top: 22px;
  text-align: center;
  font-size: 0.85rem;
  color: #6b7280;
}

.signup-link {
  color: #5c1180;
  font-weight: 700;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}

.separator-gap {
  height: 24px;
  background-color: #ffffff;
  width: 100%;
}

 
@media (max-width: 767px) {
  .login-section {
    padding: 40px 16px;
  }

  .login-card {
    padding: 32px 24px;
    border-radius: 16px;
  }

  .title {
    font-size: 1.5rem;
  }
}
</style>