<script setup lang="ts">
import { ref, computed, inject, DirectiveBinding } from 'vue';
import { usersKey } from '../users.js'

const state = inject(usersKey);
if (!state) {
    throw new Error('state is nothing');
}

const { register: _register } = state;
const register = (name: string, age: number) => {
    _register(name, age);
    inputtingText.value = '';
    inputtingAge.value = 0;
}
const onSubmit = () => {
    console.log('onSubmit');
}
const vFocus = {
    mounted: (el: HTMLElement, binding: DirectiveBinding) => {
        el.focus();
        if (binding.modifiers.alert) {
            el.style.backgroundColor = 'pink';
        }
    }
}

const inputtingText = ref<string>('');
const inputtingAge = ref<number>(0);

const isMaxNameLength = 15;
const checkNameLength = computed(() => inputtingText.value.length <= isMaxNameLength)

// const emit = defineEmits<{
//     (e: 'register-data', name: string, age: number): void
// }>();

// const register = () => {
//     emit('register-data', inputtingText.value, inputtingAge.value);
// };
</script>

<template>
    <div class="form">
        <div>
            <label>name:</label>
            <input type="text" :class="{ red: !checkNameLength }" v-model="inputtingText" v-focus.alert>
            <p v-if="!checkNameLength" class="red">名前は15文字以下にしてください</p>
        </div>
        <div>
            <label>age:</label>
            <input type="number" v-model="inputtingAge">
        </div>
        <button type="button" @click="register(inputtingText, inputtingAge)">register</button>
        <button @click.prevent="onSubmit">modifier</button>
    </div>
</template>

<style scoped>
.form {
    background-color: orange;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
}

.red {
    background-color: red;
}
</style>