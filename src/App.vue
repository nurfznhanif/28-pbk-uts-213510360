<template>
  <div class="app-container">

    <h1 class="app-header">To-Do List</h1>

    <form class="add-task" @submit.prevent="addTask">
      <input v-model="newTask" type="text" placeholder="Tambahkan kegiatan" class="task-input" />
      <input type="submit" class="submit-task" title="Add Task">
    </form>

    <ul class="task-list">
      <li v-for="(task, index) in tasks" :key="index">
        <label class="task-list-item">
          <input type="checkbox" v-model="task.completed"/>
          <span :class="{ 'completed': task.completed }">{{ task.name }}</span>
        </label>
          <button @click="deleteTask(task)" class="delete-btn">Hapus</button>
      </li>
    </ul>

    <p text-align="center"><hr>DAFTAR KEGIATAN</p>
        

  </div>

</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask !== "") {
        this.tasks.push({ name: this.newTask, completed: false });
        this.newTask = "";
      }
    },
    toggleTask(task) {
      task.completed = !task.completed;
    },
    deleteTask(task) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    }
  },
  
};
</script>