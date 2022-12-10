<script setup lang="ts">
import { inject } from 'vue';
import { usersKey } from '../users.js';

const state = inject(usersKey);
if (!state) {
    throw new Error('state is nothing')
}

const { usersData, deleteUser: _deleteUser } = state;
// console.log(usersData)
// type User = {
//     name: string,
//     age: number
// }
// type Props = {
//     users: User[];
// }
// defineProps<Props>();

// const emit = defineEmits<{
//     (e: 'delete-user', name: string): void,
// }>()
const deleteUser = (name: string) => {
    _deleteUser(name);
};
</script>

<template>
    <p v-if="usersData.length <= 0">データがありません</p>
    <div v-else class="list-container">
        <div v-for="user in usersData" class="list">
            <p>{{ user.name }}</p>
            <p>{{ user.age }}</p>
            <slot></slot>
            <div class="footer">
                <slot name="footer"><span>default</span></slot>
            </div>
            <button @click="deleteUser(user.name)">delete</button>
        </div>
    </div>
</template>

<style scoped>
.list-container {
    background-color: aqua;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
}

.list {
    background-color: #fff;
    width: 500px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
}
</style>