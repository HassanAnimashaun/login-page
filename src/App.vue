<script></script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <img src="/src/components/icons/profile.png" alt="profile" />
    <h2 class="text-2xl font-semibold text-center">Admin Login</h2>

    <div class="flex items-center w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg space-y-4">
      <form action="" class="">
        <div class="mb-6">
          <input
            type="text"
            id="email"
            class="rounded-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
          />
        </div>

        <div class="flex">
          <input
            type="password"
            id="password"
            class="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
          />
          <span
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-r-md dark:text-gray-400 dark:border-gray-600"
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
              />
            </svg>
          </span>
        </div>
        <div class="p-2">
          <input type="checkbox" name="remember" id="remember" />
          <label for="remember">Remember Me</label>
        </div>
        <div class="bg-green-600 rounded w-20 text-center mx-auto m-2">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
/Users/hassananimashaun/Desktop/login-page/src/components/icons/profile.png
