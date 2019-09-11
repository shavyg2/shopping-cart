<div class="flex flex-col min-h-full">

  <div class="bg-gray-100 p-2">
    <div class="container mx-auto">
      <div class="flex flex-row justify-end">
        <div class="search flex-grow p-3" >
            <div class="flex flew-row">

                <input class="w-64" type="text"/>
            </div>
        </div>
        <nav class="flex flex-row justify-end">
          <ul class="inline-flex flex-row">
            <li class="p-2 px-3">HomePage</li>
            <li class="p-2 px-3">Cart</li>
            <li class="p-2 px-3">Account</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>

  <div class="flex flex-row flex-grow container mx-auto h-full items-stretch">

    <aside class="w-0 hidden sm:block sm:w-64 lg:w-1/4 min-h-full p-3">
      <div class="h-full bg-gray-400">
        <h2>Categories</h2>

      </div>

    </aside>
    <content class="flex flex-col flex-grow h-full min-h-full p-3 block">
      <slot />
    </content>
  </div>

  <footer class="p-10">
    <h2>Footer</h2>
  </footer>

</div>
