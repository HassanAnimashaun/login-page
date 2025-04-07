<script></script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div class="flex flex-col items-center gap-6 mb-6">
      <img src="/src/components/icons/user.png" alt="profile" class="w-30" />
      <h2 class="text-2xl font-semibold text-center">Admin Login</h2>
    </div>

    <div class="max-w-md bg-white p-6 rounded-2xl shadow-lg">
      <form action="">
        <div class="relative mb-5">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span class="material-symbols-outlined text-gray-500"> person </span>
          </div>
          <input
            type="email"
            id="email"
            class="pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-300 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email"
          />
        </div>
        <div class="relative mb-5">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span class="material-symbols-outlined text-gray-500"> key </span>
          </div>
          <input
            type="password"
            id="password"
            class="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-300 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
          />
          <div class="absolute inset-y-0 right-2 flex items-center">
            <button class="cursor-pointer">
              <span class="material-symbols-outlined text-gray-500"> visibility </span>
              <span class="material-symbols-outlined text-gray-500"> visibility_off </span>
            </button>
          </div>
        </div>

        <div class="flex items-center mb-5">
          <input type="checkbox" id="remember" class="mr-2" />
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
/Users/hassananimashaun/Desktop/login-page/src/components/icons/profile.png
