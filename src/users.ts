import { ref, InjectionKey } from 'vue';

type User = {
    name: string,
    age: number
}

const defaultUsers = [{
    name: 'john',
    age: 20
}];

// export const users = ref<User[]>(defaultUsers);
// export const register = (name: string, age: number) => {
//     const newUser: User = { name: name, age: age };
//     users.value.push(newUser);
// };

export const users = (() => {
    const usersData = ref<User[]>(defaultUsers);
    const register = (name: string, age: number) => {
        const newUser: User = { name: name, age: age };
        usersData.value.push(newUser);
    };
    const deleteUser = (name: string) => {
        usersData.value = usersData.value.filter(user => user.name !== name)
    }

    return { usersData, register, deleteUser };
})();

type UsersType = typeof users;
export const usersKey: InjectionKey<UsersType> = Symbol('users');