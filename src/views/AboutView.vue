<template>
  <div class="page-wrapper">
   
    <Navbar />

   
    <section class="story-section">
      <div class="content-container">
        <h1 class="page-title">Our Story</h1>
        <p class="story-text">
          SwychPe was founded with a simple idea: that sending money should be as easy as sending a message. We saw families and businesses struggling with high fees, slow transfers and limited options, so we built a modern, secure and affordable way to move money across borders.
        </p>

         
        <div class="mission-card">
          <h3 class="mission-title">Our Mission</h3>
          <p class="mission-text">
            To create financial freedom by giving people and businesses access to fast, secure and affordable global payments.
          </p>
        </div>
      </div>
    </section>

 
    <section class="everyone-section">
      <div class="content-container">
        <div class="feature-card-wrapper">
          <div class="feature-content-col">
            <h2 class="section-title">Built for everyone</h2>
            <p class="feature-desc">
              Whether you are a student, a parent or a business owner, our app keeps sending money simple and friendly.
            </p>
            <div class="pill-tags">
              <span class="pill">Easy to use</span>
              <span class="pill">Mobile first</span>
              <span class="pill">Open to all</span>
            </div>
          </div>

          <div class="feature-image-col">
            <img 
              src="@/assets/images/download (3).jpeg" 
              alt="People using SwychPe mobile app" 
              class="feature-img"
            />
          </div>
        </div>
      </div>
    </section>

 
    <section class="values-section">
      <div class="content-container">
        <div class="section-header">
          <h2 class="section-title">Our Values</h2>
          <p class="section-subtitle">What guides every decision we make.</p>
        </div>

        <div class="values-grid">
          <div v-for="val in values" :key="val.title" class="value-card">
            <h3 class="value-title">{{ val.title }}</h3>
            <p class="value-desc">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>
 
    <section class="leadership-section">
      <div class="content-container">
        <div class="section-header">
          <h2 class="section-title">Our Leadership</h2>
          <p class="section-subtitle">The people guiding SwychPe.</p>
        </div>

        <div class="leaders-grid">
          <div v-for="leader in leaders" :key="leader.name" class="leader-card">
            <div class="leader-img-wrapper">
              <img :src="leader.image" :alt="leader.name" class="leader-img" />
            </div>
            <div class="leader-info">
              <h3 class="leader-name">{{ leader.name }}</h3>
              <p class="leader-role">{{ leader.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

     
    <section class="cta-banner-section">
      <div class="cta-container">
        <h2 class="cta-title">Join millions who trust SwychPe</h2>
        <p class="cta-subtitle">We offer better rates, lower fees and a smoother experience.</p>
        <router-link to="/Started" class="btn-cta-white">Get Started</router-link>
      </div>
    </section>
 
    <Footer />
  </div>
</template>


<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

 
import leader1 from '@/assets/images/tete.png'
import leader2 from '@/assets/images/download (4).jpeg'
import leader3 from '@/assets/images/download (5).jpeg'

const values = ref([
  { title: 'Trust', desc: "We do what's right." },
  { title: 'Innovation', desc: 'We build for the future.' },
  { title: 'Inclusion', desc: 'Everyone matters.' },
  { title: 'Customer First', desc: 'Your goals are our goals.' }
])

const leaders = ref([
  {
    name: 'Mr. Aaron Munga',
    role: 'CEO',
    image: leader1
  },
  {
    name: 'Mr. Manager Name',
    role: 'Manager',
    image: leader2
  },
  {
    name: 'Ms. Manager Name',
    role: 'Manager',
    image: leader3
  }
])
</script>

<style scoped>
 
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #5c1180;  
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  box-sizing: border-box;
}

.page-wrapper > * {
  width: 100%;
}

.content-container {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}

 
.story-section {
  background-color: #ffffff;
  padding: 60px 24px 40px 24px;
  box-sizing: border-box;
}

.page-title {
  color: #1e1b4b;
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 16px 0;
  letter-spacing: -0.5px;
}

.story-text {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0 0 32px 0;
}

.mission-card {
  background-color: #f8fafc;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  padding: 24px 28px;
  max-width: 760px;
}

.mission-title {
  color: #5c1180;
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 8px 0;
}

.mission-text {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

 
.everyone-section {
  background-color: #ffffff;
  padding: 40px 24px;
  box-sizing: border-box;
}

.feature-card-wrapper {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;
  overflow: hidden;
  padding: 32px;
  gap: 40px;
}

.feature-content-col {
  flex: 1;
}

.section-title {
  color: #1e1b4b;
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0 0 12px 0;
  letter-spacing: -0.4px;
}

.feature-desc {
  color: #64748b;
  font-size: 0.92rem;
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.pill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pill {
  background-color: #f3e8ff;
  color: #5c1180;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 999px;
}

.feature-image-col {
  flex: 0 0 45%;
  border-radius: 16px;
  overflow: hidden;
}

.feature-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 16px;
  display: block;
}

 
.values-section {
  background-color: #ffffff;
  padding: 50px 24px;
  box-sizing: border-box;
}

.section-header {
  margin-bottom: 28px;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 0.88rem;
  margin: 4px 0 0 0;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.value-card {
  background-color: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  padding: 24px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
}

.value-title {
  color: #5c1180;
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0 0 6px 0;
}

.value-desc {
  color: #64748b;
  font-size: 0.82rem;
  margin: 0;
}

 
.leadership-section {
  background-color: #ffffff;
  padding: 30px 24px 70px 24px;
  box-sizing: border-box;
}

.leaders-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.leader-card {
  background-color: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  text-align: center;
}

.leader-img-wrapper {
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.leader-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.leader-info {
  padding: 16px;
}

.leader-name {
  color: #5c1180;
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0 0 4px 0;
}

.leader-role {
  color: #94a3b8;
  font-size: 0.8rem;
  margin: 0;
}

 
.cta-banner-section {
  background-color: #5c1180;
  padding: 70px 24px;
  text-align: center;
  box-sizing: border-box;
}

.cta-container {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 12px 0;
  letter-spacing: -0.4px;
}

.cta-subtitle {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.92rem;
  margin: 0 0 28px 0;
}

.btn-cta-white {
  display: inline-block;
  background-color: #ffffff;
  color: #180327;
  font-weight: 700;
  font-size: 0.92rem;
  padding: 12px 28px;
  border-radius: 999px;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn-cta-white:hover {
  transform: translateY(-2px);
  background-color: #f8fafc;
}

 
@media (min-width: 1440px) {
  .story-section {
    padding: 80px 32px 50px 32px;
  }

  .page-title {
    font-size: 3rem;
  }
}

 
@media (max-width: 1023px) and (min-width: 768px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .feature-card-wrapper {
    gap: 24px;
    padding: 24px;
  }

  .feature-img {
    height: 240px;
  }
}

 
@media (max-width: 767px) {
  .story-section {
    padding: 40px 18px;
  }

  .page-title {
    font-size: 2rem;
  }

  .feature-card-wrapper {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }

  .feature-image-col {
    width: 100%;
    flex: none;
  }

  .feature-img {
    height: 220px;
  }

  .values-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .leaders-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .cta-banner-section {
    padding: 50px 18px;
  }

  .cta-title {
    font-size: 1.6rem;
  }
}

 
@media (max-width: 480px) {
  .page-title {
    font-size: 1.7rem;
  }

  .mission-card {
    padding: 18px 20px;
  }

  .leader-img-wrapper {
    height: 200px;
  }
}
</style>