<template>
    
    <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
        <span class="card-title">Домашняя бухгалтерия</span>
    <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid"
        v-if="$v.email.$dirty && !$v.email.required"
        >Поле email не должно быть пустым</small>
        <small class="helper-text invalid"
        v-else-if="$v.email.$dirty && !$v.email.email"
        >Введите коректный email</small>

        </div>
        <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLentgh)}"            
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid"
        v-if="$v.password.$dirty && !$v.password.required"
        >Введите пароль</small>
        <small class="helper-text invalid"
        v-else-if="$v.password.$dirty && !$v.password.minLentgh"
        >Пароль должен быть не меньше {{$v.password.$params.minLentgh.min}} символов. Сейчас Вы ввели {{password.length}}</small>
        </div>


        <div class="input-field">
        <input
            id="name"
            type="text"
             v-model.trim="name"
            :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLentgh)}"            
        >
        <label for="name">Имя</label>
             <small class="helper-text invalid"
        v-if="$v.name.$dirty && !$v.name.required"
        >Введите имя</small>
        <small class="helper-text invalid"
        v-else-if="$v.name.$dirty && !$v.name.minLentgh"
        >Имя должно быть не меньше {{$v.name.$params.minLentgh.min}} символов. Сейчас Вы ввели {{name.length}}</small>
        </div>


        <p>
        <label>
            <input type="checkbox" v-model="agree" />
            <span>С правилами согласен</span>
        </label>
        </p>
    </div>
    <div class="card-action">
        <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
            Зарегистрироваться
            <i class="material-icons right">send</i>
        </button>
        </div>

        <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
        </p>
    </div>
    </form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
export default {
    name: 'register',
    data: () => ({
        email: '',
        password: '',
        name: '',
        agree: false
    }),
    validations: {
        email: {email, required},
        password: {required, minLentgh: minLength(6)},
        name: {required, minLentgh: minLength(3)},
        agree: {checked: v => v}
    },
    methods: {
        submitHandler(){
            if (this.$v.$invalid){
                this.$v.$touch()
                return
            }

            const formData = {
                email: this.email,
                password: this.password,
                name: this.name
            }
            console.log(formData)
            this.$router.push('/')
        }
    }
}
</script>