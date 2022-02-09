<template>
  <h1>Todo details</h1>
  <!-- Conditionally showing data -->
  <!-- v-if directive prevents us from rendering job=null, null doesn't have title and details -->
  <div v-if="todo" class="todo"> 
    <p>User id | {{ todo.userId }}</p>
    <!-- <p> {{$route.params}}</p> display { "id": "21" } -->
    <p>Title | {{ todo.title }}</p>
    <p>Completed? | {{ todo.completed }}</p>
  </div>
  <div v-else>
      Loading todo details...
  </div>

</template>

<script>
// $route.params.id we can use in script and template too
export default {
    props: ['id'],
    data() {
        return {
            todo: null
           // id: this.$route.params.id <-- we don't need it because we have props parametr
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos/' + this.id)
            .then(res => res.json())
            .then(data => this.todo = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>
.todo {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    color: #444;
    text-align: justify;
}   
</style>