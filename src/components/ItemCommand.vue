<template>
  <div class="command-item">
    <h3>{{ command.name }}</h3>
    <p>{{ command.description }}</p>
    <span class="badge">{{ command.category }}</span>
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
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  width: 200px;
  text-align: left;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.command-item:hover {
  transform: scale(1.05);
}

.badge {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 12px; /* Rounded badge */
  font-size: 0.9em; /* Slightly smaller font */
  margin-top: 5px; /* Space above the badge */
}
</style>
