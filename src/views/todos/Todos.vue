<template>
<h1>Todos ({{countTodos}})</h1>
    <div class="add-item-form">
        <input v-model="newTodo" type="text" placeholder="Add an item" @keyup.enter="addTodo"/> <p> {{ characterLength}}/100</p>
        <button class="btn btn-primary" @click="addTodo" :disabled=" 0===characterLength || characterLength>100">Add Todo</button>
        <button class="btn btn-primary"  @click="hideOrShowFilter">
            {{ filterChecker ? 'Hide filters' :'Show filters' }} 
        </button>
    </div>
    <div v-if="filterChecker">
        <div id="nav">
            <button @click="filter = 'all'">All</button>
            <button @click="filter = 'active'">Active</button>
            <button @click="filter = 'completed'">Completed</button>
        </div>
    </div>
  <div v-if="todos.length" class="todo-list"> 
    <div v-for="todo in reverseTodos" :key="todo.id" class="todo">
            <input type="checkbox" v-model="todo.completed"/>
            <h2>  {{ todo.title }}</h2>
    </div>
  </div>
  <div v-else>
      Loading job details...
  </div>
  
</template>

<script>
let id = 1000

export default {
    data(){
        return {
            filterChecker: false,
            filter: 'all',
            newTodo: '',
            todos: []
        }
    },
    computed: {
        reverseTodos() {
            return this.filteredTodos(this.filter).slice(0).reverse();
        },
        characterLength() {
            return this.newTodo.length;
        },
        countTodos() {
            return this.todos.length;
        }
    },
    methods: {
        addTodo() {
            this.todos.push({ userId: 1, id: id++, title: this.newTodo, completed: false })
            this.newTodo = ''
        },
        hideOrShowFilter() {
            this.filterChecker = !this.filterChecker
            if (this.filterChecker === false) {this.state = 'all'}
        },
        filteredTodos(state) {
            if (state === 'completed'){
                console.log('byłam w piewszej ifce')
                return this.todos ? this.todos.filter((t) => t.completed) : this.todos
            }
            else if (state === 'active'){
                console.log('byłam w drugiej ifce')
                console.log(this.todos.filter((t) => t.completed))
                return this.filterChecker ? this.todos.filter((t) => !t.completed) : this.todos
            }
            else if (state === 'all'){
                console.log('byłam w trzeciej ifce')
                return this.todos
            }
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => this.todos = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>
.todo-list{
    display: flex;
    flex-direction: column;
}
.todo-list h2 {
    margin-right: 10px;
}
.todo {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    min-width: 600px;
    cursor: pointer;
    color: #444;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.add-item-form {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.add-item-form input {
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
    border: 1px solid #F1F5F8;
    color: #606F7B;
    padding: .5rem .75rem;
    box-sizing: border-box;
    margin: 5px;
    font-size: 1rem;
    letter-spacing: .5px;
}
.btn {
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.btn[disabled] {
    background: #8795A1;
}

.btn[disabled]:hover {
    background: #606F7B;
}

.btn-primary {
    background: #6CB2EB;
    color: #fff;
    font-weight: bold;

}

.btn-primary:hover {
    background: #3490DC;
    font-weight: bold;

}
</style>