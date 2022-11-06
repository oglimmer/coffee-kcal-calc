<script setup lang="ts">

import {computed, reactive} from 'vue'

const form = reactive({
  milk: '0',
  cream: '0',
  sugar: '0'
})

const totalCal = computed(() => (parseFloat(form.milk) * 0.66744) + (parseFloat(form.cream) * 2.92) + (parseFloat(form.sugar) * 3.87))

</script>

<template>
  <b-nav tabs>
    <b-nav-item active>kcal coffee calculator</b-nav-item>
  </b-nav>

  <b-card>
    <div>
      <b-form>
        
        <b-form-group id="input-group-1" label="3.5% Milch in g" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.milk"
            type="email"
            placeholder="0"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="30% Cream in g" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.cream"
            placeholder="0"
            required
          ></b-form-input>
        </b-form-group>
        
        <b-form-group id="input-group-3" label="Sugar in g" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.sugar"
            placeholder="0"
            required
          ></b-form-input>
        </b-form-group>
        
      </b-form>

      <b-card class="mt-3" header="Total calories in kcal" bg-variant="primary" text-variant="white" >
        <pre class="m-0">{{ totalCal }}</pre>
      </b-card>
    </div>
  </b-card>

</template>

<style scoped>

</style>
