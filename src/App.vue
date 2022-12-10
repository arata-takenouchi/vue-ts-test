<script setup lang="ts">
import { ref } from 'vue';
import Form from './components/Form.vue';
import List from './components/List.vue';
import { provide, InjectionKey } from 'vue';
import { users, usersKey } from './users.js';

provide(usersKey, users);
const isFirstTab = ref(true);
const updateTab = (isFirst: boolean) => {
  isFirstTab.value = isFirst;
};

// const users = ref([{
//   name: 'john',
//   age: 20
// }]);

// const register = (name: string, age: number) => {
//   users.value.push({ name: name, age: age });
// }

// const deleteUser = (name: string) => {
//   console.log(name, users.value)
//   users.value = users.value.filter(user => user.name !== name)
// }
</script>

<template>
  <!-- <Form @register-data="register" /> -->
  <!-- <List @delete-user="deleteUser" :users="users" /> -->
  <Form />
  <div class="tab-changer">
    <button @click="updateTab(true)">Tab 1</button>
    <button @click="updateTab(false)">Tab 2</button>
  </div>
  <div class="tab-contents">
    <List v-if="isFirstTab" />
    <List v-if="!isFirstTab">
      <p>slot</p>
      <template #footer>
        <span>footer</span>
      </template>
    </List>
  </div>
</template>

<style scoped>
</style>
