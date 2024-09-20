export class Command {
  constructor(name, description, category, keys) {
    this.name = name
    this.description = description
    this.category = category
    this.keys = keys
  }
}

// Categories can be predefined
export const CATEGORIES = {
  file: 'File Management',
  navigation: 'Navigation',
  editing: 'Editing',
  search: 'Search',
  miscellaneous: 'Miscellaneous'
}
