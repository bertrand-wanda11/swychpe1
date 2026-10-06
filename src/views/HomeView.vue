<template>
  <div class="home-view-container">

    <section class="hero-wrapper" id="home">
    
      <Navbar />
      <div class="hero-content-grid">
   
        <div class="hero-text-column">
          <div class="badge-pill">
            <span class="badge-icon">✦</span>
            <span>Trusted transfers to 50+ countries</span>
          </div>

          <h1 class="hero-headline">
            Move Money <br />
            <span class="highlight-text">Across Borders,</span> <br />
            Simply.
          </h1>

          <p class="hero-subtext">
            Send and receive money worldwide in minutes. Low fees, clear rates, and a secure experience from start to finish.
          </p>

          <div class="hero-cta-group">
            <button class="btn-primary-lg">Get Started</button>
            <button class="btn-secondary-lg">Learn More</button>

            <div class="cube-svg-wrapper cube-cta-inline">
              <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" stroke="#E1BEE7" stroke-width="2.5" opacity="0.85"/>
                <path d="M50 10 L50 50 L85 30 M50 50 L15 30 M50 50 L50 90" stroke="#E1BEE7" stroke-width="2.5" opacity="0.85"/>
              </svg>
            </div>
          </div>
        </div>

     
        <div class="hero-visual-column">
          <div class="cube-svg-wrapper cube-visual-right">
            <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" stroke="#E1BEE7" stroke-width="2.5" opacity="0.8"/>
              <path d="M50 10 L50 50 L85 30 M50 50 L15 30 M50 50 L50 90" stroke="#E1BEE7" stroke-width="2.5" opacity="0.8"/>
            </svg>
          </div>

   
          <div class="app-card card-send-money">
            <div class="step-badge badge-step-1">1</div>
            <div class="currency-badge coin-ksh">
              <span>KSh</span>
            </div>

            <h3 class="card-title">Send Money</h3>

            <div class="amount-display-box">
              <span class="amount-num">$500.00</span>
              <span class="currency-pill">USD</span>
            </div>

            <div class="exchange-rate-row">
              <span class="conversion-calc">KSh 64,500</span>
            </div>

            <div class="fee-row">
              <span class="fee-label">Fee</span>
              <span class="fee-val">$1.99</span>
            </div>

            <button class="btn-card-action">Confirm Transfer</button>
          </div>

          <div class="app-card card-dashboard">
            <div class="step-badge badge-step-2">2</div>
            <div class="currency-badge coin-usd">
              <span>$</span>
            </div>
            <div class="currency-badge coin-eur">
              <span>€</span>
            </div>

            <div class="card-header-user">
              <div class="avatar-circle">
                <span class="avatar-img">👤</span>
              </div>
              <div class="user-greeting">
                <span class="greeting-sub">Hi, Jane 👋</span>
              </div>
            </div>

            <div class="balance-container">
              <span class="balance-label">Total Balance</span>
              <h2 class="balance-amount">$2,540.00</h2>
            </div>

            <div class="dashboard-actions">
              <button class="action-pill">Send</button>
              <button class="action-pill">Receive</button>
              <button class="action-pill">Add</button>
            </div>

            <div class="transactions-section">
              <div class="section-title-row">
                <span>Recent Transactions</span>
              </div>

              <div class="transaction-item">
                <div class="tx-info">
                  <span class="tx-name">To David K.</span>
                  <span class="tx-country">Uganda</span>
                </div>
                <span class="tx-amount negative">-$120</span>
              </div>

              <div class="transaction-item">
                <div class="tx-info">
                  <span class="tx-name">From Amina</span>
                  <span class="tx-country">Kenya</span>
                </div>
                <span class="tx-amount positive">+$75</span>
              </div>

              <div class="transaction-item">
                <div class="tx-info">
                  <span class="tx-name">To Mum</span>
                  <span class="tx-country">Rwanda</span>
                </div>
                <span class="tx-amount negative">-$200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="how-it-works-wrapper" id="how-it-works">
  
      <div class="features-banner">
        <div class="features-container">
          <div class="feature-item">
            <h4 class="feature-title">Fast Transfers</h4>
            <p class="feature-desc">Send money in minutes, not days.</p>
          </div>

          <div class="feature-item">
            <h4 class="feature-title">Low Fees</h4>
            <p class="feature-desc">Know the full cost upfront, always.</p>
          </div>

          <div class="feature-item">
            <h4 class="feature-title">Secure &amp; Reliable</h4>
            <p class="feature-desc">Your money and data stay protected.</p>
          </div>

          <div class="feature-item">
            <h4 class="feature-title">Global Reach</h4>
            <p class="feature-desc">Send to 50+ countries worldwide.</p>
          </div>
        </div>
      </div>


      <div class="steps-main-container">
        <div class="section-header">
          <h2 class="section-title">Send money in 3 simple steps</h2>
          <p class="section-subtitle">From signup to delivery, it only takes a few minutes.</p>
        </div>

        <div class="steps-grid">

          <div class="step-card">
            <div class="step-number-badge badge-pulse-1">1</div>
            <h3 class="step-card-title">Create your account</h3>
            <p class="step-card-desc">
              Sign up free with your email or phone number.
            </p>
          </div>

    
          <div class="step-card">
            <div class="step-number-badge badge-pulse-2">2</div>
            <h3 class="step-card-title">Add a beneficiary</h3>
            <p class="step-card-desc">
              Enter your recipient's details once and reuse them.
            </p>
          </div>

      
          <div class="step-card">
            <div class="step-number-badge badge-pulse-3">3</div>
            <h3 class="step-card-title">Send money</h3>
            <p class="step-card-desc">
              Confirm, then track your transfer in real time.
            </p>
          </div>
        </div>
      </div>
    </section>


   <section class="global-reach-wrapper" id="services">
      <div class="global-reach-container">
  
        <div class="reach-text-column">
          <h2 class="reach-headline">One world, one transfer away</h2>
          <p class="reach-subtext">
            Send to Kenya, Uganda, Tanzania, the USA, the UK, Canada and 50+ more countries.
          </p>
          <button class="btn-start-sending">Start sending</button>
        </div>

 
        <div class="reach-carousel-column">
          <div class="carousel-3d-scene">
            <div class="carousel-3d-cylinder">
       
              <div class="country-card card-1"><span>UK</span></div>
              <div class="country-card card-2"><span>Canada</span></div>
              <div class="country-card card-3"><span>+50 more</span></div>
              <div class="country-card card-4"><span>Kenya</span></div>
              <div class="country-card card-5"><span>Uganda</span></div>
              <div class="country-card card-6"><span>Tanzania</span></div>
              <div class="country-card card-7"><span>USA</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why-choose-wrapper" id="about">
      <div class="why-choose-container">
        <h2 class="why-title">Why choose SwychPe?</h2>
        <p class="why-subtitle">
          Better rates, lower fees and a smoother experience than traditional banks.
        </p>

        <div class="comparison-table-scroll">
          <table class="comparison-table">
            <thead>
              <tr>
                <th class="col-feature">Feature</th>
                <th class="col-swychpe">SwychPe</th>
                <th class="col-banks">Traditional Banks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="feature-label">Transfer Speed</td>
                <td class="swychpe-val">Minutes</td>
                <td class="banks-val">1–5 Days</td>
              </tr>
              <tr>
                <td class="feature-label">Fees</td>
                <td class="swychpe-val">Low</td>
                <td class="banks-val">High</td>
              </tr>
              <tr>
                <td class="feature-label">Global Reach</td>
                <td class="swychpe-val">50+ Countries</td>
                <td class="banks-val">Limited</td>
              </tr>
              <tr>
                <td class="feature-label">Mobile App</td>
                <td class="swychpe-val">Yes</td>
                <td class="banks-val">No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="why-cta-wrapper">
          <button class="btn-started-now">Get Started Now →</button>
        </div>
      </div>
    </section>



    <section class="everyday-life-wrapper">
      <div class="everyday-life-container">
   
        <div class="everyday-image-column">
          <div class="image-card-wrapper">
           <img 
  :src="everydayLifeImg" 
  alt="Everyday life money transfer" 
  class="life-feature-img"
/>
            <div class="paid-out-badge">
              <span class="check-icon">✓</span>
              <span>Paid out in minutes</span>
            </div>
          </div>
        </div>

  
        <div class="everyday-text-column">
          <h2 class="everyday-title">Money that works for everyday life</h2>
          <p class="everyday-desc">
            From market stalls to family support, SwychPe helps people send, receive and manage money with confidence.
          </p>

          <div class="usecase-pills-row">
            <span class="usecase-pill">Family support</span>
            <span class="usecase-pill">Small business</span>
            <span class="usecase-pill">Daily needs</span>
          </div>
        </div>
      </div>
    </section>


    <section class="testimonials-wrapper">
      <div class="testimonials-container">
        <h2 class="testimonials-title">What Our Users Say</h2>
        <p class="testimonials-subtitle">Real people. Real stories.</p>

        <div class="testimonials-grid">
       
          <div class="testimonial-card">
            <p class="quote-text">
              "Sending money to my family has never been this easy. Fast and reliable!"
            </p>
            <div class="user-meta">
              <span class="user-name">Jane M.</span>
              <span class="user-location">Kenya</span>
            </div>
          </div>

          <div class="testimonial-card">
            <p class="quote-text">
              "The lowest fees I've ever seen. I recommend it to everyone."
            </p>
            <div class="user-meta">
              <span class="user-name">David K.</span>
              <span class="user-location">UK</span>
            </div>
          </div>

         
          <div class="testimonial-card">
            <p class="quote-text">
              "Simple, secure and trustworthy. That's SwychPe."
            </p>
            <div class="user-meta">
              <span class="user-name">Amina L.</span>
              <span class="user-location">Uganda</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import everydayLifeImg from '../assets/images/download (1).jpeg'
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
.home-view-container {
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
}

.hero-wrapper {
  width: 100%;
  min-height: 100vh;
  background: #7B1FA2;
  color: #ffffff;
  padding: 1.5rem 0 4rem 0;
  box-sizing: border-box;
  position: relative;
}

.cube-svg-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  animation: spinCube 10s linear infinite;
}

.cube-logo { margin-right: 0.6rem; }
.cube-cta-inline { margin-left: 0.8rem; }
.cube-visual-right { position: absolute; bottom: 20px; right: -20px; }

@keyframes spinCube {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto 3rem auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 20;
  box-sizing: border-box;
}

.logo-area { display: flex; align-items: center; font-size: 1.6rem; font-weight: 800; color: #ffffff; }
.nav-links { display: flex; gap: 2.2rem; }
.nav-item { color: rgba(255, 255, 255, 0.75); text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: color 0.25s ease; }
.nav-item:hover, .nav-item.active { color: #ffffff; }
.nav-actions { display: flex; align-items: center; gap: 1rem; }

.btn-login { background: transparent; border: none; color: #ffffff; font-family: 'Montserrat', sans-serif; font-size: 0.95rem; font-weight: 600; cursor: pointer; padding: 0.6rem 1.2rem; }
.btn-get-started { background: #ffffff; color: #180327; border: none; border-radius: 30px; font-family: 'Montserrat', sans-serif; font-size: 0.95rem; font-weight: 700; padding: 0.7rem 1.6rem; cursor: pointer; }

.hamburger-btn {
  display: none;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 1.4rem;
  border-radius: 8px;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  line-height: 1;
}

.mobile-nav-drawer {
  position: absolute;
  top: 80px;
  left: 1.25rem;
  right: 1.25rem;
  background: #25073c;
  border: 1px solid rgba(225, 190, 231, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  z-index: 30;
}

.mobile-nav-links { display: flex; flex-direction: column; gap: 1.2rem; text-align: center; }
.mobile-nav-item { color: rgba(255, 255, 255, 0.85); text-decoration: none; font-size: 1.1rem; font-weight: 600; }
.mobile-nav-item.active, .mobile-nav-item:hover { color: #E1BEE7; }
.mobile-nav-item.highlight-link { color: #ffffff; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 0.8rem; }

.slide-fade-enter-active, .slide-fade-leave-active { transition: all 0.3s ease; }
.slide-fade-enter-from, .slide-fade-leave-to { transform: translateY(-10px); opacity: 0; }

.hero-content-grid {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 5;
  box-sizing: border-box;
}

.hero-text-column { position: relative; display: flex; flex-direction: column; align-items: flex-start; }
.badge-pill { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(123, 31, 162, 0.3); border: 1px solid rgba(225, 190, 231, 0.25); padding: 0.45rem 1.1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600; color: #E1BEE7; margin-bottom: 1.8rem; }
.hero-headline { font-size: 3.6rem; font-weight: 800; line-height: 1.15; margin: 0 0 1.5rem 0; letter-spacing: -1px; }
.hero-subtext { font-size: 1.05rem; line-height: 1.65; color: rgba(255, 255, 255, 0.8); margin-bottom: 2.5rem; max-width: 480px; }

.hero-cta-group { display: flex; align-items: center; gap: 1.2rem; }
.btn-primary-lg { background: #ffffff; color: #180327; border: none; border-radius: 30px; padding: 0.95rem 2.4rem; font-family: 'Montserrat', sans-serif; font-size: 1rem; font-weight: 700; cursor: pointer; }
.btn-secondary-lg { background: rgba(255, 255, 255, 0.08); color: #ffffff; border: 1.5px solid rgba(255, 255, 255, 0.25); border-radius: 30px; padding: 0.95rem 2.4rem; font-family: 'Montserrat', sans-serif; font-size: 1rem; font-weight: 600; cursor: pointer; }

.hero-visual-column { position: relative; height: 540px; display: flex; justify-content: center; align-items: center; }
.app-card { position: absolute; background: #ffffff; color: #180327; border-radius: 28px; padding: 1.6rem; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45); box-sizing: border-box; }

.step-badge { position: absolute; background: #7B1FA2; color: #ffffff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.95rem; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25); z-index: 10; }
.badge-step-1 { top: -14px; left: -14px; }
.badge-step-2 { top: -14px; right: -14px; }

.card-send-money { width: 260px; left: 20px; top: 90px; z-index: 2; transform: rotate(-4deg); }
.card-dashboard { width: 280px; right: 15px; top: 30px; z-index: 4; transform: rotate(3deg); }

.currency-badge { position: absolute; background: #ffffff; color:#7B1FA2; border-radius: 50%; width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.88rem; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); z-index: 15; animation: rotateCoin3D 6s linear infinite; }
.coin-ksh { bottom: -20px; left: 40px; }
.coin-usd { top: -22px; left: 50%; }
.coin-eur { bottom: -15px; right: -15px; }

@keyframes rotateCoin3D {
  0% { transform: rotateY(0deg) rotateZ(0deg); }
  50% { transform: rotateY(180deg) rotateZ(10deg); }
  100% { transform: rotateY(360deg) rotateZ(0deg); }
}

.card-title { font-size: 1rem; font-weight: 700; margin: 0 0 1.2rem 0; color: #7B1FA2; }
.amount-display-box { background: #f3ecf9; border-radius: 14px; padding: 0.85rem 1.1rem; display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.85rem; }
.amount-num { font-weight: 800; font-size: 1.2rem; }
.currency-pill { font-size: 0.8rem; font-weight: 700; color: #7B1FA2; background: rgba(142, 36, 170, 0.12); padding: 0.25rem 0.65rem; border-radius: 8px; }
.exchange-rate-row { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.6rem; color: #7B1FA2; }
.fee-row { display: flex; justify-content: space-between; font-size: 0.82rem; color: #777; margin-bottom: 1.2rem; }
.btn-card-action { width: 100%; background: #7B1FA2; color: #ffffff; border: none; border-radius: 14px; padding: 0.75rem; font-family: 'Montserrat', sans-serif; font-weight: 700; font-size: 0.9rem; cursor: pointer; }

.card-header-user { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; }
.avatar-circle { width: 38px; height: 38px; background: #E1BEE7; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; }
.greeting-sub { font-weight: 700; font-size: 1rem; }
.balance-container { background: #f3ecf9; border-radius: 16px; padding: 1.1rem; margin-bottom: 1.1rem; }
.balance-label { font-size: 0.78rem; color: #777; font-weight: 600; }
.balance-amount { font-size: 1.7rem; font-weight: 800; margin: 0.2rem 0 0 0; color: #7B1FA2; }
.dashboard-actions { display: flex; gap: 0.5rem; margin-bottom: 1.25rem; }
.action-pill { flex: 1; background: #f3ecf9; border: none; border-radius: 10px; padding: 0.5rem 0; font-family: 'Montserrat', sans-serif; font-size: 0.78rem; font-weight: 700; color: #180327; }

.transactions-section { display: flex; flex-direction: column; gap: 0.7rem; }
.section-title-row { font-size: 0.78rem; font-weight: 700; color: #888; }
.transaction-item { display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; }
.tx-info { display: flex; flex-direction: column; }
.tx-name { font-weight: 700; }
.tx-country { font-size: 0.72rem; color: #888; }
.tx-amount { font-weight: 700; }
.tx-amount.negative { color: #d32f2f; }
.tx-amount.positive { color: #2e7d32; }


.how-it-works-wrapper { width: 100%; background-color: #ffffff; color: #7B1FA2; box-sizing: border-box; }
.features-banner { background-color: #f7effa; padding: 2rem 0; border-bottom: 1px solid #ebd9f3; }
.features-container { max-width: 1280px; margin: 0 auto; padding: 0 2rem; display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; box-sizing: border-box; }
.feature-item { display: flex; flex-direction: column; }
.feature-title { font-size: 0.95rem; font-weight: 700; color: #7B1FA2; margin: 0 0 0.3rem 0; }
.feature-desc { font-size: 0.85rem; color: #7B1FA2; margin: 0; line-height: 1.4; }

.steps-main-container { max-width: 1280px; margin: 0 auto; padding: 4.5rem 2rem 6rem 2rem; box-sizing: border-box; }
.section-header { margin-bottom: 3.5rem; }
.section-title { font-size: 2.5rem; font-weight: 800; color:#7B1FA2; margin: 0 0 0.8rem 0; letter-spacing: -0.5px; }
.section-subtitle { font-size: 1.05rem; color:#7B1FA2; margin: 0; }

.steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.step-card { background: #ffffff; border: 1.5px solid #ebd9f3; border-radius: 20px; padding: 2.2rem 2rem; box-sizing: border-box; transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1); display: flex; flex-direction: column; align-items: flex-start; position: relative; cursor: pointer; }
.step-card:hover { transform: translateY(-8px); border-color: #7B1FA2; box-shadow: 0 20px 40px rgba(142, 36, 170, 0.12); }
.step-card:hover .step-card-title { color: #7B1FA2; }

.step-number-badge { width: 44px; height: 44px; background-color: #7B1FA2; color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.15rem; font-weight: 800; margin-bottom: 1.8rem; box-shadow: 0 6px 16px rgba(142, 36, 170, 0.3); }
.badge-pulse-1 { animation: badgePulse 3s ease-in-out infinite alternate; }
.badge-pulse-2 { animation: badgePulse 3s ease-in-out 1s infinite alternate; }
.badge-pulse-3 { animation: badgePulse 3s ease-in-out 2s infinite alternate; }

@keyframes badgePulse {
  0% { transform: scale(1); box-shadow: 0 6px 16px rgba(142, 36, 170, 0.3); }
  100% { transform: scale(1.12); box-shadow: 0 10px 24px rgba(142, 36, 170, 0.5); }
}

.step-card-title { font-size: 1.25rem; font-weight: 700; color: #7B1FA2; margin: 0 0 0.8rem 0; transition: color 0.3s ease; }
.step-card-desc { font-size: 0.95rem; color: #7B1FA2; line-height: 1.6; margin: 0; }


.global-reach-wrapper { width: 100%; background-color: #f7f0f8; padding: 6rem 0; box-sizing: border-box; overflow: hidden; }
.global-reach-container { max-width: 1280px; margin: 0 auto; padding: 0 2rem; display: grid; grid-template-columns: 1fr 1.1fr; gap: 3rem; align-items: center; box-sizing: border-box; }
.reach-text-column { display: flex; flex-direction: column; align-items: flex-start; }
.reach-headline { font-size: 3rem; font-weight: 800; color: #7B1FA2; line-height: 1.15; margin: 0 0 1.2rem 0; letter-spacing: -0.5px; }
.reach-subtext { font-size: 1.05rem; color: #5d4a6b; line-height: 1.6; margin-bottom: 2.5rem; max-width: 480px; }

.btn-start-sending { background: #5c187d; color: #ffffff; border: none; border-radius: 30px; padding: 0.95rem 2.4rem; font-family: 'Montserrat', sans-serif; font-size: 1rem; font-weight: 700; cursor: pointer; transition: all 0.25s ease; box-shadow: 0 8px 20px rgba(92, 24, 125, 0.25); }
.btn-start-sending:hover { background: #7B1FA2; transform: translateY(-2px); box-shadow: 0 12px 28px rgba(92, 24, 125, 0.35); }

.reach-carousel-column { display: flex; justify-content: center; align-items: center; height: 380px; }
.carousel-3d-scene { width: 100%; height: 100%; perspective: 1000px; display: flex; justify-content: center; align-items: center; }
.carousel-3d-cylinder { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; animation: rotate3DCylinder 16s linear infinite; }

@keyframes rotate3DCylinder {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(-360deg); }
}

.country-card {
  position: absolute; left: 50%; top: 50%; width: 150px; height: 95px; margin-left: -75px; margin-top: -47px;
  background: #7B1FA2; color: #ffffff; border-radius: 16px; display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 1.15rem; box-shadow: 0 15px 35px rgba(24, 3, 39, 0.3); backface-visibility: visible;
}

.card-1 { transform: rotateY(0deg) translateZ(240px); }
.card-2 { transform: rotateY(51.4deg) translateZ(240px); }
.card-3 { transform: rotateY(102.8deg) translateZ(240px); }
.card-4 { transform: rotateY(154.2deg) translateZ(240px); }
.card-5 { transform: rotateY(205.6deg) translateZ(240px); }
.card-6 { transform: rotateY(257deg) translateZ(240px); }
.card-7 { transform: rotateY(308.4deg) translateZ(240px); }


.why-choose-wrapper {
  width: 100%;
  background: linear-gradient(135deg, #4b0e66 0%, #35084a 100%);
  color: #ffffff;
  padding: 5.5rem 0;
  box-sizing: border-box;
}

.why-choose-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
}

.why-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.why-subtitle {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3.5rem;
}


.comparison-table-scroll {
  width: 100%;
  overflow-x: auto;
  margin-bottom: 3rem;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.comparison-table thead tr {
  background: rgba(255, 255, 255, 0.12);
}

.comparison-table th {
  padding: 1.2rem 1.8rem;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
}

.col-feature { width: 35%; }
.col-swychpe { width: 35%; }
.col-banks { width: 30%; }

.comparison-table td {
  padding: 1.25rem 1.8rem;
  font-size: 0.98rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.feature-label {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.swychpe-val {
  color: #ffffff;
  font-weight: 700;
}

.banks-val {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}

.why-cta-wrapper {
  display: flex;
  justify-content: flex-start;
}

.btn-started-now {
  background: #ffffff;
  color: #7B1FA2;
  border: none;
  border-radius: 30px;
  padding: 0.9rem 2.2rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.98rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.btn-started-now:hover {
  background: #f3ecf9;
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
}

@media (max-width: 1024px) {
  .hero-headline { font-size: 3rem; }
  .reach-headline { font-size: 2.5rem; }
  .why-title { font-size: 2.4rem; }
}

@media (max-width: 992px) {
  .features-container { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
  .steps-grid { grid-template-columns: 1fr; gap: 1.5rem; }
  .global-reach-container { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
  .reach-text-column { align-items: center; }
  .section-title { font-size: 2.1rem; }
}

@media (max-width: 768px) {
  .desktop-only { display: none !important; }
  .hamburger-btn { display: block; }
  .hero-content-grid { grid-template-columns: 1fr; gap: 3.5rem; text-align: center; }
  .hero-text-column { align-items: center; }
  .hero-headline { font-size: 2.6rem; }
  .hero-subtext { max-width: 100%; font-size: 0.98rem; }
  .hero-cta-group { flex-wrap: wrap; justify-content: center; width: 100%; }
  .cube-visual-right { display: none; }
  
  .navbar-container,
  .hero-content-grid,
  .features-container,
  .steps-main-container,
  .global-reach-container,
  .why-choose-container {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
}

@media (max-width: 480px) {
  .logo-area { font-size: 1.3rem; }
  .btn-get-started { padding: 0.5rem 1.1rem; font-size: 0.85rem; }
  .hero-headline { font-size: 2.1rem; }
  .reach-headline { font-size: 2rem; }
  .why-title { font-size: 1.9rem; }
  .badge-pill { font-size: 0.78rem; padding: 0.35rem 0.85rem; }
  .hero-cta-group { flex-direction: column; width: 100%; gap: 0.8rem; }
  .btn-primary-lg, .btn-secondary-lg, .btn-start-sending, .btn-started-now { width: 100%; padding: 0.85rem 1rem; }
  .cube-cta-inline { display: none; }
  .hero-visual-column { height: 480px; transform: scale(0.88); transform-origin: top center; }
  .card-send-money { left: -10px; top: 110px; width: 240px; }
  .card-dashboard { right: -10px; top: 10px; width: 250px; }
  .carousel-3d-scene { transform: scale(0.8); }
  .comparison-table th, .comparison-table td { padding: 1rem; font-size: 0.88rem; }
}


.everyday-life-wrapper {
  width: 100%;
  background-color: #ffffff;
  padding: 6rem 0;
  box-sizing: border-box;
}

.everyday-life-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  box-sizing: border-box;
}

.image-card-wrapper {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.life-feature-img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: 28px;
  box-shadow: 0 20px 40px rgba(24, 3, 39, 0.15);
}

.paid-out-badge {
  position: absolute;
  bottom: -15px;
  left: 20px;
  background: #ffffff;
  color: #7B1FA2;
  border-radius: 30px;
  padding: 0.6rem 1.4rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.check-icon {
  color: #2e7d32;
  font-weight: 900;
}

.everyday-text-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.everyday-title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #180327;
  line-height: 1.2;
  margin: 0 0 1.2rem 0;
  letter-spacing: -0.5px;
}

.everyday-desc {
  font-size: 1.05rem;
  color: #7B1FA2;
  line-height: 1.65;
  margin-bottom: 2.2rem;
  max-width: 500px;
}

.usecase-pills-row {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.usecase-pill {
  background: #f3ecf9;
  color: #7B1FA2;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 0.65rem 1.2rem;
  border-radius: 20px;
}


.testimonials-wrapper {
  width: 100%;
  background-color: #faf6fc;
  padding: 5.5rem 0;
  box-sizing: border-box;
}

.testimonials-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
}

.testimonials-title {
  font-size: 2.6rem;
  font-weight: 800;
  color: #7B1FA2;
  margin: 0 0 0.6rem 0;
  letter-spacing: -0.5px;
}

.testimonials-subtitle {
  font-size: 1.05rem;
  color: #665273;
  margin-bottom: 3rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.testimonial-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid #ebd9f3;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
}

.quote-text {
  font-size: 0.98rem;
  color: #7B1FA2;
  line-height: 1.6;
  margin: 0 0 1.8rem 0;
}

.user-meta {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: #7B1FA2;
}

.user-location {
  font-size: 0.85rem;
  color: #887296;
}


@media (max-width: 1024px) {
  .hero-headline { font-size: 3rem; }
  .reach-headline { font-size: 2.5rem; }
  .why-title, .everyday-title { font-size: 2.3rem; }
  .testimonials-title { font-size: 2.2rem; }
}

@media (max-width: 992px) {
  .features-container { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
  .steps-grid, .testimonials-grid { grid-template-columns: 1fr; gap: 1.5rem; }
  .global-reach-container, .everyday-life-container { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
  .reach-text-column, .everyday-text-column { align-items: center; }
  .usecase-pills-row { justify-content: center; }
  .section-title { font-size: 2.1rem; }
}

@media (max-width: 768px) {
  .desktop-only { display: none !important; }
  .hamburger-btn { display: block; }
  .hero-content-grid { grid-template-columns: 1fr; gap: 3.5rem; text-align: center; }
  .hero-text-column { align-items: center; }
  .hero-headline { font-size: 2.6rem; }
  .hero-subtext { max-width: 100%; font-size: 0.98rem; }
  .hero-cta-group { flex-wrap: wrap; justify-content: center; width: 100%; }
  .cube-visual-right { display: none; }
  
  .navbar-container,
  .hero-content-grid,
  .features-container,
  .steps-main-container,
  .global-reach-container,
  .why-choose-container,
  .everyday-life-container,
  .testimonials-container {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
}

@media (max-width: 480px) {
  .logo-area { font-size: 1.3rem; }
  .btn-get-started { padding: 0.5rem 1.1rem; font-size: 0.85rem; }
  .hero-headline { font-size: 2.1rem; }
  .reach-headline { font-size: 2rem; }
  .why-title, .everyday-title { font-size: 1.9rem; }
  .badge-pill { font-size: 0.78rem; padding: 0.35rem 0.85rem; }
  .hero-cta-group { flex-direction: column; width: 100%; gap: 0.8rem; }
  .btn-primary-lg, .btn-secondary-lg, .btn-start-sending, .btn-started-now { width: 100%; padding: 0.85rem 1rem; }
  .cube-cta-inline { display: none; }
  .hero-visual-column { height: 480px; transform: scale(0.88); transform-origin: top center; }
  .card-send-money { left: -10px; top: 110px; width: 240px; }
  .card-dashboard { right: -10px; top: 10px; width: 250px; }
  .carousel-3d-scene { transform: scale(0.8); }
  .comparison-table th, .comparison-table td { padding: 1rem; font-size: 0.88rem; }
}
</style>