<script setup>
import { ref, computed } from 'vue'
import { CATEGORIES, Command } from '../models/Command.js'

import ItemCommand from './ItemCommand.vue'

// Reactive references for the search query and the list of commands
const searchQuery = ref('')

// Initial list of commands (using the Command model)
const commands = ref([
  new Command(':wq', 'Save and exit Vim', CATEGORIES.file, ':wq'),
  new Command(':q!', 'Quit without saving', CATEGORIES.file, ':q!'),
  new Command(':w', 'Save the current file', CATEGORIES.file, ':w'),
  new Command(':e filename', 'Open a file named "filename"', CATEGORIES.file, ':e filename'),
  new Command('gg', 'Go to the first line of the file', CATEGORIES.navigation, 'gg'),
  new Command('G', 'Go to the last line of the file', CATEGORIES.navigation, 'G'),
  new Command('h', 'Move cursor left', CATEGORIES.navigation, 'h'),
  new Command('j', 'Move cursor down', CATEGORIES.navigation, 'j'),
  new Command('k', 'Move cursor up', CATEGORIES.navigation, 'k'),
  new Command('l', 'Move cursor right', CATEGORIES.navigation, 'l'),
  new Command('dd', 'Delete the current line', CATEGORIES.editing, 'dd'),
  new Command('yy', 'Yank (copy) the current line', CATEGORIES.editing, 'yy'),
  new Command('p', 'Paste the last yanked text', CATEGORIES.editing, 'p'),
  new Command('u', 'Undo the last change', CATEGORIES.editing, 'u'),
  new Command('Ctrl+r', 'Redo the last undone change', CATEGORIES.editing, 'Ctrl+r'),
  new Command('/', 'Search forward for a pattern', CATEGORIES.search, '/'),
  new Command('?', 'Search backward for a pattern', CATEGORIES.search, '?'),
  new Command('n', 'Repeat the last search forward', CATEGORIES.search, 'n'),
  new Command('N', 'Repeat the last search backward', CATEGORIES.search, 'N'),
  new Command(':!command', 'Execute an external command', CATEGORIES.miscellaneous, ':!command')
])

// Computed property for filtering commands based on the search query
const filteredCommands = computed(() => {
  return commands.value.filter(
    (command) =>
      command.name.includes(searchQuery.value) || command.description.includes(searchQuery.value)
  )
})
</script>

<template>
  <div class="home">
    <h1>Welcome to the Vim Commands Cheat Sheet</h1>
    <p>Quickly find and learn Vim commands!</p>
    <input type="text" placeholder="Search commands..." v-model="searchQuery" />
    <button @click="searchCommands">Search</button>
    <div v-if="filteredCommands.length">
      <h2>Commands</h2>
      <div class="command-list">
        <ItemCommand v-for="command in filteredCommands" :key="command.name" :command="command" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}
.command-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Space between items */
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px; /* Space below input */
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}
</style>
