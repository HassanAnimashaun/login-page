<script>
export default {
  data() {
    return {
      error: '',
      showPassword: false,
      email: '',
      password: '',
      rememberMe: false,
    }
  },
  mounted() {
    const storedRememberMe = localStorage.getItem('rememberMe')
    if (storedRememberMe === true) {
      this.rememberMe = true
      this.email = localStorage.getItem('email') || ''
      this.password = localStorage.getItem('password') || ''
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    handleRememberMeChange() {
      if (this.rememberMe) {
        localStorage.setItem('rememberMe', true)
        localStorage.setItem('email', this.email)
        localStorage.setItem('password', this.password)
      } else {
        localStorage.removeItem('rememberMe')
        localStorage.removeItem('email')
        localStorage.removeItem('password')
      }
    },
    // BACKEND API CALL
    async login() {
      try {
        const response = await fetch('http://localhost:5173/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        })
        const data = await response.json()

        if (!response.ok) {
          this.error = data.error || 'Login failed'
          return
        }

        if (this.rememberMe) {
          localStorage.setItem('token', data.token)
        } else {
          sessionStorage.setItem('token', data.token)
        }
        this.$router.push('/admin-dashboard')
      } catch {
        this.error = 'Something went wrong. Please try again.'
      }
    },
  },
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div class="flex flex-col items-center gap-6 mb-6">
      <img src="/src/components/icons/user.png" alt="profile" class="w-30" />
      <h2 class="text-2xl font-semibold text-center">Admin Login</h2>
    </div>

    <div class="max-w-md bg-white p-6 rounded-2xl shadow-lg">
      <form @submit.prevent="login" method="post" novalidate="true">
        <div class="relative mb-5">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span class="material-symbols-outlined text-gray-500"> person </span>
          </div>
          <input
            type="email"
            id="email"
            v-model="email"
            class="pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-300 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        <div class="relative mb-5">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span class="material-symbols-outlined text-gray-500"> key </span>
          </div>
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="password"
            class="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-300 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
            required
          />
          <div class="absolute inset-y-6 right-2 flex items-center">
            <button @click.prevent="togglePassword" class="cursor-pointer">
              <span v-if="showPassword" class="material-symbols-outlined text-gray-500">
                visibility
              </span>
              <span v-else class="material-symbols-outlined text-gray-500"> visibility_off </span>
            </button>
          </div>
        </div>

        <div class="flex items-center mb-5">
          <input
            type="checkbox"
            id="remember"
            v-model="rememberMe"
            @change="handleRememberMeChange"
            class="mr-2"
          />
          <label for="remember" class="text-sm text-gray-700">Remember Me</label>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="w-full bg-green-600 text-white rounded-lg py-2 text-sm hover:bg-green-700 transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
