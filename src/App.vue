<template>
  <h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/kegiatan">Isi Kegiatan</router-link>
  </h1>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  box-sizing: border-box;
}

:root{
  --checkbox-color: rgba(202, 60, 60);
  --checbox-shadow: rgba(238, 156, 167, 0.2);
  --add-button: rgba(255, 255, 255, 0.7);
  --add-button-shadow: rgba(238, 156, 167, 0.4)
}

body{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: 
  linear-gradient(62deg, rgba(7, 86, 160, 0.973) 13%, rgba(255, 122, 151, 0.5) 4%),
  linear-gradient(44deg, rgba(0, 43, 99, 0.079) 39%, rgba(242, 140, 143, 0.5) 18%),
  linear-gradient(118deg, rgba(84, 202, 242, 0.031) 40%, rgba(247, 155, 187, 0.5) 54%),
  linear-gradient(58deg, rgba(90, 90, 237, 0.161) 83%, rgba(249, 156, 142, 0.5) 23%);
  background-blend-mode: normal, lighten, multiply, hard-light;
  font-family: "DM Sans",  sans-serif;
  overflow: hidden;
}

input{
  outline: none;
}

ul {
  list-style: none;
  padding: 0;
}

.app-container{
  max-width: 480px;
  width: 100%;
  max-height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 25px;
  border-radius: 25px;
  overflow: auto;
  color: #222;
}

.app-header{
  font-size: 20px;
  line-height: 32px;
  margin: 0 0 12px 0;
  color: #272727;
}

.submit-task{
  border: none;
  color: #272727;
  border-radius: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
}

.add-task{
  height: 40px;
  font-size: 14px;
  display: flex;
}

.task-input{
  width: 75%;
  padding: 0 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid #272727;
  background-color: transparent;
  margin-right: 15px;
  color: #272727;
  box-shadow: none;
  border-radius: 0;
}

.task-input::placeholder{
  color: #272727;
}

.task-list-item{
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 35px;
  margin-bottom: 12px;
  cursor: pointer;
}

.task-list-item input {
  width: 16px;
  height: 16px;
  border: 1px solid #272727;
  background-image: url("assets/check.png");
  border-radius: 30px;
  transition: 0.2s;
  margin-right: 8px;
  margin-top: 4px;
  appearance: none;
}

.task-list-item input:hover {
  border-color: var(--checkbox-color);
  box-shadow: 0 0 0 3px var(--checbox-shadow);
  text-decoration: line-through #272727;
  cursor: pointer;
}

.task-list-item input:checked {
  background-size: 14px;
  border: 1px solid var(--checkbox-color);
  background-color: var(--checkbox-color);
  text-decoration: line-through #272727;
  cursor: pointer;
}

.completed{
  color: #272727;
  text-decoration: line-through #272727;
}

.task-list-item-label{
  display: flex;
  align-items: flex-start;
  color: #272727;
  margin-right: 8px;
  font-size: 14px;
  line-height: 24px;
  position: relative;
  transition: 0.2s;
  cursor: pointer;
}

.delete-btn{
  margin-left: auto;
  margin-right: 5px;
  margin-bottom: 7px;
  margin-top: 7px;
  display: block;
  border: none;
  border-radius: 35px;
  cursor: pointer;
}

hr{
  border: 1px solid;
}

</style>