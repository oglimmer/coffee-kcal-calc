<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const form = reactive({
  milk: '0',
  cream: '0',
  sugar: '0',
  oatmilk: '0'
})

const totalCal = computed(() => {
  const total = (parseFloat(form.oatmilk) * 0.61) + 
                (parseFloat(form.milk) * 0.66744) + 
                (parseFloat(form.cream) * 2.92) + 
                (parseFloat(form.sugar) * 3.87)
  return isNaN(total) ? 0 : total.toFixed(1)
})

const calories = {
  milk: 0.67,
  cream: 2.92,
  oatmilk: 0.61,
  sugar: 3.87
}

function resetForm() {
  form.milk = '0'
  form.cream = '0'
  form.sugar = '0'
  form.oatmilk = '0'
}
</script>

<template>
  <div class="app-container">
    <header class="header">
      <h1>Coffee Calorie Calculator</h1>
      <div class="coffee-icon">☕</div>
    </header>

    <main class="main-content">
      <div class="card ingredients-card">
        <h2>Your Coffee Ingredients</h2>
        
        <div class="form-group">
          <label for="milk-input">
            <span class="ingredient-name">Milk (3.5%)</span>
            <span class="calorie-hint">{{ calories.milk }} kcal/g</span>
          </label>
          <div class="input-with-unit">
            <input
              id="milk-input"
              v-model="form.milk"
              type="number"
              min="0"
              placeholder="0"
              class="form-input"
            >
            <span class="unit">g</span>
          </div>
        </div>

        <div class="form-group">
          <label for="cream-input">
            <span class="ingredient-name">Cream (30%)</span>
            <span class="calorie-hint">{{ calories.cream }} kcal/g</span>
          </label>
          <div class="input-with-unit">
            <input
              id="cream-input"
              v-model="form.cream"
              type="number"
              min="0"
              placeholder="0"
              class="form-input"
            >
            <span class="unit">g</span>
          </div>
        </div>
        
        <div class="form-group">
          <label for="oatmilk-input">
            <span class="ingredient-name">Oat Milk</span>
            <span class="calorie-hint">{{ calories.oatmilk }} kcal/g</span>
          </label>
          <div class="input-with-unit">
            <input
              id="oatmilk-input"
              v-model="form.oatmilk"
              type="number"
              min="0"
              placeholder="0"
              class="form-input"
            >
            <span class="unit">g</span>
          </div>
        </div>
        
        <div class="form-group">
          <label for="sugar-input">
            <span class="ingredient-name">Sugar</span>
            <span class="calorie-hint">{{ calories.sugar }} kcal/g</span>
          </label>
          <div class="input-with-unit">
            <input
              id="sugar-input"
              v-model="form.sugar"
              type="number"
              min="0"
              placeholder="0"
              class="form-input"
            >
            <span class="unit">g</span>
          </div>
        </div>

        <button class="reset-button" @click="resetForm">Reset</button>
      </div>

      <div class="card result-card">
        <div class="result-header">Total Calories</div>
        <div class="result-value">{{ totalCal }}</div>
        <div class="result-unit">kcal</div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Modern Color Palette */
:root {
  --primary: #6a3e37;
  --primary-light: #8a5a52;
  --secondary: #d4a26a;
  --light: #f5f0e8;
  --dark: #2c2723;
  --white: #ffffff;
  --gray: #f0f0f0;
  --gray-dark: #d1d1d1;
  --shadow: rgba(0, 0, 0, 0.1);
}

.app-container {
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--dark);
  background-color: var(--light);
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--secondary);
}

h1 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--primary);
  margin: 0;
}

.coffee-icon {
  font-size: 2rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card {
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 4px 15px var(--shadow);
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px var(--shadow);
}

.ingredients-card h2 {
  font-size: 1.4rem;
  color: var(--primary);
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.ingredient-name {
  color: var(--dark);
}

.calorie-hint {
  font-size: 0.8rem;
  color: var(--primary-light);
  font-weight: 400;
}

.input-with-unit {
  position: relative;
  display: flex;
  align-items: center;
}

.form-input {
  width: 100%;
  padding: 0.8rem 2rem 0.8rem 1rem;
  border: 1px solid var(--gray-dark);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: var(--secondary);
  box-shadow: 0 0 0 3px rgba(212, 162, 106, 0.2);
}

.unit {
  position: absolute;
  right: 12px;
  color: var(--primary-light);
  pointer-events: none;
}

.reset-button {
  background-color: var(--gray);
  color: var(--primary);
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 1rem;
  width: 100%;
}

.reset-button:hover {
  background-color: var(--gray-dark);
}

.result-card {
  background: linear-gradient(to right bottom, var(--primary), var(--primary-light));
  color: var(--white);
  text-align: center;
  padding: 1.8rem;
}

.result-header {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.result-value {
  font-size: 3rem;
  font-weight: 700;
  margin: 0.5rem 0;
}

.result-unit {
  font-size: 1.2rem;
  opacity: 0.9;
}

@media (min-width: 768px) {
  .main-content {
    flex-direction: row;
  }
  
  .ingredients-card {
    flex: 2;
  }
  
  .result-card {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>