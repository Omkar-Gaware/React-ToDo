# Todo App - Refactoring Plan & README

![image](https://github.com/user-attachments/assets/5bfcd9cc-0f52-4821-9fa3-7fb1b2daf861)

## 📋 Refactoring Plan

### 1. Code Structure & Naming Conventions
- Rename component to `TodoApp` instead of default export
- Use consistent camelCase naming (e.g., `setTodos` instead of `settodos`)
- Add proper type annotations (TypeScript) or PropTypes
- Split into smaller components (TodoItem, TodoForm, TodoList)

### 2. State Management
- Consider using a reducer pattern for complex state changes
- Move state logic to custom hooks for reusability
- Add proper error handling for user inputs

### 3. Performance Improvements
- Add memoization for list items to prevent unnecessary re-renders
- Implement batch updates for multiple state changes

### 4. Code Duplication
- Create a unified function for tasks that follow similar patterns (uppercase, mark as done)
- Extract repeated styling logic to separate constants or CSS classes

### 5. Accessibility & UX
- Add proper ARIA attributes for accessibility 
- Implement keyboard navigation support
- Add focus states and improve button labeling

### 6. Testing
- Add unit tests for components and functions
- Implement integration tests for user workflows

## 📝 README

# Todo List Application

A simple, interactive Todo List application built with React that allows you to manage your daily tasks efficiently.

## Features

- Add new tasks to your todo list
- Mark tasks as completed
- Delete tasks you no longer need
- Convert task text to uppercase
- Bulk actions: mark all tasks as done or convert all to uppercase

## Installation

1. Clone this repository
```bash
git clone <repository-url>
cd todo-list-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

## Usage

- **Add a task**: Type in the input field and click "Add Task"
- **Mark as done**: Click "Mark as Done" to cross out a completed task
- **Delete**: Remove a task by clicking "Delete"
- **Uppercase**: Convert a specific task to uppercase by clicking "Uppercase"
- **Bulk actions**: Use "Uppercase All" or "Mark All Done" buttons at the bottom

## Technologies Used

- React
- UUID for unique identifiers
- CSS for styling

## Future Improvements

- Add local storage to persist todos
- Implement task categories/tags
- Add due dates and reminders
- Improve UI/UX with animations and better styling
- Add drag and drop functionality to reorder tasks

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
