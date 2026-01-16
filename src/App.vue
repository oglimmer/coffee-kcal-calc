<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale, availableLocales } from './i18n'

const { t, locale } = useI18n()

const form = reactive({
  milk: '0',
  cream: '0',
  sugar: '0',
  oatmilk: '0',
  vanillaErbsendrink: '0'
})

const totalCal = computed(() => {
  const total = (parseFloat(form.oatmilk) * 0.61) +
                (parseFloat(form.milk) * 0.66744) +
                (parseFloat(form.cream) * 2.92) +
                (parseFloat(form.sugar) * 3.87) +
                (parseFloat(form.vanillaErbsendrink) * 0.40)
  return isNaN(total) ? 0 : total.toFixed(1)
})

const calories = {
  milk: 0.67,
  cream: 2.92,
  oatmilk: 0.61,
  sugar: 3.87,
  vanillaErbsendrink: 0.40
}

function resetForm() {
  form.milk = '0'
  form.cream = '0'
  form.sugar = '0'
  form.oatmilk = '0'
  form.vanillaErbsendrink = '0'
}

// Get current year for copyright
const currentYear = new Date().getFullYear()

function changeLocale(event: Event) {
  const target = event.target as HTMLSelectElement
  setLocale(target.value)
}
</script>

<template>
  <div class="page-wrapper">
    <div class="app-container">
      <header class="header">
        <div class="logo">
          <div class="logo-icon">☕</div>
          <h1>{{ t('title') }}</h1>
        </div>
        <div class="language-switcher">
          <select :value="locale" @change="changeLocale" class="language-select">
            <option v-for="lang in availableLocales" :key="lang.code" :value="lang.code">
              {{ lang.name }}
            </option>
          </select>
        </div>
      </header>

      <main>
        <div class="calculator-container">
          <section class="ingredients-section">
            <h2>{{ t('ingredients.heading') }}</h2>
            
            <div class="ingredients-grid">
              <div class="ingredient-card">
                <div class="ingredient-header">
                  <span class="ingredient-name">{{ t('ingredients.milk') }}</span>
                  <span class="calorie-info">{{ calories.milk }} {{ t('units.kcalPerGram') }}</span>
                </div>
                <div class="input-container">
                  <input
                    id="milk-input"
                    v-model="form.milk"
                    type="number"
                    min="0"
                    placeholder="0"
                    class="ingredient-input"
                  >
                  <span class="unit-label">{{ t('units.gram') }}</span>
                </div>
              </div>

              <div class="ingredient-card">
                <div class="ingredient-header">
                  <span class="ingredient-name">{{ t('ingredients.cream') }}</span>
                  <span class="calorie-info">{{ calories.cream }} {{ t('units.kcalPerGram') }}</span>
                </div>
                <div class="input-container">
                  <input
                    id="cream-input"
                    v-model="form.cream"
                    type="number"
                    min="0"
                    placeholder="0"
                    class="ingredient-input"
                  >
                  <span class="unit-label">{{ t('units.gram') }}</span>
                </div>
              </div>
              
              <div class="ingredient-card">
                <div class="ingredient-header">
                  <span class="ingredient-name">{{ t('ingredients.oatMilk') }}</span>
                  <span class="calorie-info">{{ calories.oatmilk }} {{ t('units.kcalPerGram') }}</span>
                </div>
                <div class="input-container">
                  <input
                    id="oatmilk-input"
                    v-model="form.oatmilk"
                    type="number"
                    min="0"
                    placeholder="0"
                    class="ingredient-input"
                  >
                  <span class="unit-label">{{ t('units.gram') }}</span>
                </div>
              </div>
              
              <div class="ingredient-card">
                <div class="ingredient-header">
                  <span class="ingredient-name">{{ t('ingredients.sugar') }}</span>
                  <span class="calorie-info">{{ calories.sugar }} {{ t('units.kcalPerGram') }}</span>
                </div>
                <div class="input-container">
                  <input
                    id="sugar-input"
                    v-model="form.sugar"
                    type="number"
                    min="0"
                    placeholder="0"
                    class="ingredient-input"
                  >
                  <span class="unit-label">{{ t('units.gram') }}</span>
                </div>
              </div>

              <div class="ingredient-card">
                <div class="ingredient-header">
                  <span class="ingredient-name">{{ t('ingredients.vanillaPeaDrink') }}</span>
                  <span class="calorie-info">{{ calories.vanillaErbsendrink }} {{ t('units.kcalPerGram') }}</span>
                </div>
                <div class="input-container">
                  <input
                    id="vanillaErbsendrink-input"
                    v-model="form.vanillaErbsendrink"
                    type="number"
                    min="0"
                    placeholder="0"
                    class="ingredient-input"
                  >
                  <span class="unit-label">{{ t('units.gram') }}</span>
                </div>
              </div>
            </div>

            <button class="reset-button" @click="resetForm">
              <span class="reset-icon">↺</span> {{ t('actions.reset') }}
            </button>
          </section>

          <section class="results-section">
            <div class="results-display">
              <div class="results-label">{{ t('results.totalCalories') }}</div>
              <div class="results-value">{{ totalCal }}</div>
              <div class="results-unit">{{ t('units.kcal') }}</div>
            </div>
          </section>
        </div>
      </main>

      <footer class="footer">
        <div class="copyright">
          © {{ currentYear }} <span class="author">oglimmer</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
/* Base Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Modern Coffee-themed Color Palette */
:root {
  --primary: #774936;
  --primary-light: #9a7b69;
  --primary-dark: #5c3828;
  --secondary: #c8a087;
  --accent: #e6ccb2;
  --background: #f8f1e9;
  --text: #33272a;
  --text-light: #7d7169;
  --white: #ffffff;
  --shadow: rgba(0, 0, 0, 0.08);
  --card-shadow: 0 8px 20px var(--shadow);
  --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  /* Font Sizes */
  --fs-small: 0.875rem;
  --fs-medium: 1rem;
  --fs-large: 1.25rem;
  --fs-xlarge: 1.5rem;
  --fs-xxlarge: 2.5rem;
}

/* Typography */
body {
  font-family: 'Inter', 'Segoe UI', Roboto, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text);
  line-height: 1.6;
  font-size: var(--fs-medium);
  background-color: var(--background);
}

/* Page Structure */
.page-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  background-color: var(--background);
}

.app-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
}

/* Header Styles */
.header {
  padding: 2rem 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.language-switcher {
  display: flex;
  align-items: center;
}

.language-select {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--secondary);
  border-radius: 0.5rem;
  background-color: var(--white);
  color: var(--text);
  font-size: var(--fs-small);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.language-select:hover {
  border-color: var(--primary);
}

.language-select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(200, 160, 135, 0.2);
}

.logo-icon {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: var(--fs-xlarge);
  font-weight: 700;
  color: var(--primary);
}

/* Main Content */
main {
  flex: 1;
  margin-bottom: 2rem;
}

.calculator-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

/* Ingredients Section */
.ingredients-section {
  background-color: var(--white);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
}

.ingredients-section h2 {
  font-size: var(--fs-large);
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--accent);
  padding-bottom: 0.75rem;
}

.ingredients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.ingredient-card {
  background-color: var(--background);
  border-radius: 0.75rem;
  padding: 1rem;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ingredient-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.ingredient-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.ingredient-name {
  font-weight: 500;
  color: var(--text);
  white-space: nowrap;
}

.calorie-info {
  font-size: var(--fs-small);
  color: var(--text-light);
}

.input-container {
  position: relative;
}

.ingredient-input {
  width: 100%;
  padding: 0.75rem 2rem 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  font-size: var(--fs-medium);
  transition: var(--transition);
  background-color: var(--white);
}

.ingredient-input:focus {
  outline: none;
  border-color: var(--secondary);
  box-shadow: 0 0 0 3px rgba(200, 160, 135, 0.2);
}

.unit-label {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  pointer-events: none;
}

.reset-button {
  background-color: var(--primary-light);
  color: var(--white);
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: var(--fs-medium);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
}

.reset-button:hover {
  background-color: var(--primary);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.reset-icon {
  font-size: 1.1rem;
}

/* Results Section */
.results-section {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: var(--card-shadow);
  color: var(--white);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.results-label {
  font-size: var(--fs-large);
  opacity: 0.9;
  font-weight: 500;
}

.results-value {
  font-size: var(--fs-xxlarge);
  font-weight: 700;
  margin: 1rem 0 0.5rem;
}

.results-unit {
  font-size: var(--fs-medium);
  opacity: 0.8;
}

/* Footer Styles */
.footer {
  padding: 1.5rem 0;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  margin-top: auto;
}

.copyright {
  font-size: var(--fs-small);
  color: var(--text-light);
}

.author {
  color: var(--primary);
  font-weight: 500;
}

/* Responsive Design */
@media (min-width: 768px) {
  .calculator-container {
    grid-template-columns: 2fr 1fr;
  }
  
  h1 {
    font-size: var(--fs-xxlarge);
  }
  
  .results-section {
    height: 100%;
  }
}

/* Remove input number arrows */
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>