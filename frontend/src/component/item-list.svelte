<script>
  export let items;

  function DisplayRating(rating) {
    return rating.toFixed(2);
  }

  function GenerateStarCount(rating) {
    return Math.floor(rating) || 0;
  }

  function GetStars(rating) {
    return Array.from(new Array(GenerateStarCount(rating)));
  }
</script>

<style>
  .image {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    width:16    rem;
    height: 5rem;
  }

  .star {
    margin: 0.05rem;
  }

  p {
    min-width: 700px;
  }
</style>

{#each items as item, i}
  <div class="p-2">
    <div class:bg-gray-100={i % 2 === 0} class="p-2 flex flex-col md:flex-row justify-start">
      <div
        style="background-image:url('{item.image[0]}')"
        class="image w-64 h-64" />
      <div class="p-2 min-h-full">
        <div class="flex flex-col p-2 justify-between h-full">
          <div class="flex flex-col flex-grow">
            <h3 class="text-lg font-bold text-gray-700">{item.title}</h3>

            {#if item.description}
              <div class="p-1">
                <p class="p-2 text-sm">{item.description}</p>
              </div>
            {/if}
          </div>

          {#if item.rating}
            <div class="stars text-yellow-500 flex items-center">
              <div class="px-2">{DisplayRating(item.rating)}</div>
              {#each GetStars(item.rating) as star}
                <span class="star">
                  <i class="fas fa-star" />
                </span>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/each}
