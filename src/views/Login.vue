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
    </div>
    <div class="card-action">
        <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
            Войти
            <i class="material-icons right">send</i>
        </button>
        </div>

        <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
        </p>
    </div>
    </form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
import messages from '@/utils/messages'
export default {
    name: 'login',
    data: () => ({
        email: '',
        password: ''
    }),
    mounted(){
        if (messages[this.$route.query.message]){
            this.$message(messages[this.$route.query.message])
        }
    },
    validations: {
        email: {email, required},
        
        password: {required, minLentgh: minLength(6)}
    },
    methods: {
        submitHandler(){
            if (this.$v.$invalid){
                this.$v.$touch()
                return
            }



            const formData = {
                email: this.email,
                password: this.password
            }
            console.log(formData)
            this.$router.push('/')
        }
    }
}
</script>