<template>
  <div class="home">
    <form @submit.prevent="addRestaurant">
      <label for="">Restaurant Name</label>
      <input id="restaurant-name" v-model="newRestaurant.name" type="text" />
      <input id="restaurant-name" v-model="newRestaurant.adress" type="text" />
      <select
        name="restaurant_status_select"
        id="restaurant_status_select"
        v-model="newRestaurant.status"
      >
        <option v-for="status in statusList" :value="status" :key="status">
          {{ status }}
        </option>
      </select>
      <input id="restaurant-name" v-model="newRestaurant.type" type="text" />
      <button type="submit">Adicionar</button>
    </form>
    <ul v-for="restaurant in restaurantList" :key="restaurant.name">
      <li>{{ restaurant.name }}</li>
      <li>{{ restaurant.adress }}</li>
      <li>{{ restaurant.status }}</li>
      <li>{{ restaurant.type }}</li>
    </ul>
  </div>
</template>

<script lang="ts" src="./HomeView.service.ts"></script>
