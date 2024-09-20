<script setup>
import { ref, computed } from 'vue'
import { CATEGORIES, Command } from '../models/Command.js'
const searchQuery = ref('')
const commands = ref([new Command(':wq', 'Save and exit', CATEGORIES.file, ':wq')])
const filteredCommands = computed(() => {
  return commands
})

const searchCommands = () => {
  filteredCommands.value = commands.value.filter((command) =>
    command.name.includes(searchQuery.value)
  )
}
</script>

<template>
  <div class="home">
    <h1>Welcome to the Vim Commands Cheat Sheet</h1>
    <p>Quickly find and learn Vim commands!</p>
    <input type="text" placeholder="Search commands..." v-model="searchQuery" />
    <button @click="searchCommands">Search</button>
    <div v-if="commands.length">
      <h2>Commands</h2>
      <ul>
        <li v-for="command in commands" :key="command.name">
          <strong>{{ command.name }}</strong
          >: {{ command.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.home {
  padding: 20px;
  text-align: center;
}
</style>
