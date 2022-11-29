<template>
  <div class="absolute top-0 left-0">
    <img
      class="hidden dark:block w-full h-[250px] lg:h-auto"
      srcset="
        ../assets/images/bg-desktop-dark.jpg 1440w,
        ../assets/images/BG-MOBILE-DARK.jpg   375w
      "
      src="../assets/images/bg-desktop-dark.jpg"
      alt="backround image"
    />
    <img
      class="dark:hidden w-full h-[250px] lg:h-auto"
      srcset="
        ../assets/images/bg-desktop-light.jpg 1440w,
        ../assets/images/BG-MOBILE-LIGHT.jpg   375w
      "
      src="../assets/images/bg-desktop-light.jpg"
      alt="backround image"
    />
  </div>
</template>
