<template>
  <div class="command-item">
    <h3>{{ command.name }}</h3>
    <p>{{ command.description }}</p>
    <span>Category: {{ command.category }}</span>
    <p>Keys: {{ command.keys }}</p>
  </div>
</template>

<script setup>
import { Command } from '../models/Command.js'

defineProps({
  command: {
    type: Command,
    required: true
  }
})
</script>

<style scoped>
.command-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px; /* Rounded corners */
  background-color: #f9f9f9; /* Light background */
}
.command-item h3 {
  margin: 0;
  font-size: 1.2em;
  color: #333;
}
.command-item p {
  margin: 5px 0;
}
.command-item span {
  font-weight: bold;
  display: block;
  margin: 5px 0;
}
</style>
