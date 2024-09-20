export default class Command {
  constructor(name, description, category, keys) {
    this.name = name
    this.description = description
    this.category = category
    this.keys = keys
  }
}

// Categories can be predefined
export const categories = ['File Management', 'Navigation', 'Editing', 'Search', 'Miscellaneous']
