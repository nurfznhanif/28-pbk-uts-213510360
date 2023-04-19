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

    <div class="uncompleted">
      <label>
        <input type="checkbox" v-model="showOnlyUncompleted"/>
        Tampilkan hanya kegiatan yang belum selesai
      </label>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: "",
      showOnlyUncompleted: false
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
  computed: {
    filteredTasks() {
      if (this.showOnlyUncompleted) {
        return this.tasks.filter(task => !task.completed);
      } else {
        return this.tasks;
      }
    }
  },
};
</script>