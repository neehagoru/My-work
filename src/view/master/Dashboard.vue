<template> 
    <div class="w-screen h-screen flex">
        <!-- side bar -->
        
      <div class="w-[400px] h-full bg-cyan-100 text-black" v-show="showSide">
        <div class="h-[50px] bg-cyan-200 flex justify-start items-center" >
            <div class="px-[20px]">
                <h3 class="font-bold text-xl">Dashboard</h3>
            </div>    
        </div>
        <div class="h-[calc(100vh-50px)] bg-cyan-300">
           <div class="px-[20px] flex flex-col">
            <div>
            <router-link to="/home" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out">
                <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                Home
            </router-link>
            <router-link to="/profile" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
                Profile
            </router-link>
        </div>
        </div>
        </div>
      </div>
      
      <div class="w-full h-full bg-cyan-50">
        <div class="h-[50px] bg-cyan-200 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
            <!-- Hamburger menu -->
            <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" w-[25px] h-[25px]">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </div>
            <!-- User login -->
<div class="w-[200px] flex justify-end">
<div class="flex items-end justify-end" @click="toggleDrop">

<img class="w-10 h-10 rounded-full border-2 border-gray-50"  alt="">
<div class="font-semibold dark:text-white text-right">
<div><h1>Welcome {{user.firstname }}</h1></div>

<div class="text-xs text-gry-500 dark:text-gray-400"></div>
</div>
</div>

<!-- Drop down -->
<div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
<div class="py-1 text-left" role="none">



<button @click="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>

</div>
</div>
</div>
        </div>
        <div class="h-[calc(100vh-50px)] bg-cyan-50">
            <div class="border border-gray-300 rounded-md p-[20px] h-full">
                <router-view></router-view>
            </div>
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'DASHBOARD',
    // Dashboard component logic goes here
    data() {
        return {
            showDropDown: false,
            showSide: true,
            user: "",
            users:[]
        }
    },
    mounted(){

if(localStorage.activeUser){

    let lsUsers = localStorage.users;

    this.users = JSON.parse(lsUsers);

    let activeUser = localStorage.activeUser;

    this.user = JSON.parse(activeUser);

}
   
    },









    methods:{
        toggleSideBar () {
            this.showSide = !this.showSide

        },
        toggleDrop() {
            this.showDropDown = !this.showDropDown

        },
        submit() {
      // Perform sign out logic here 

      // Redirect to the login page
      window.location = '/'; 
    }
    }
  }

    </script> 


<style>




</style>

  
