<template>
  <div class="leftside ">
    <div class="container leftpages">


      <img
      src="@/assets/ab6761610000e5eb66a95bfbbcadc4c0a690e7c7.jpeg"

      class="img-left-side"
      id="slide3"
      alt=""
    />


      <h1 class="qoutof-h1">QOUtof</h1>

      <div class="bemusic ms-4 mt-4">
        <NuxtLink to="/admin" class="nav-link ">
          <i class="fas fa-tag icon-left-side mr-2  mt-2"></i>

          Admin


        </NuxtLink>


        <NuxtLink to="/collectionlist" class="nav-link">
          <!-- <i class="fas fa-arrows-alt-v  icon-left-side"></i> -->

          <i class="fas fa-layer-group icon-left-side mr-2  mt-2"></i>

          <!-- <i class="fas fa-tag icon-left-side"></i> -->
          Collection

        </NuxtLink>


        <NuxtLink to="/collectionalbums" class="nav-link">
          <i class="fas fa-record-vinyl  icon-left-side mr-2  mt-2"></i>
          albums
        </NuxtLink>


<!--
        <NuxtLink to="/collectionalbums" class="nav-link">
          <i class="fas fa-record-vinyl mt-4">albums</i>

        </NuxtLink> -->
      </div>

      <div class="yourmusic">
        <div>
          <h6>Your Music</h6>
        </div>

        <div class="subyourmusic ">
          <NuxtLink to="/register" class="nav-link">
            <i class="far fa-registered icon-left-side mr-2  mt-2"></i>
            Register

            <!-- Register -->
          </NuxtLink>

          <NuxtLink to="/forgetpassword" class="nav-link">

            <i class="fas fa-lock icon-left-side mr-2  mt-2"></i>
            Password

          </NuxtLink>

          <NuxtLink to="/home" class="nav-link">
            <i class="fas fa-home icon-left-side mr-2  mt-2"></i>
            home
          </NuxtLink>

          <NuxtLink to="/sigin" class="nav-link">
            <!-- <i class="fas fa-tag icon-left-side">  </i> -->
            <i class="fas fa-sign icon-left-side mr-2 mt-2"></i>
            sigin
          </NuxtLink>


        </div>

        <div class="platlist">
          <p>PlayList</p>
          <a href="" class="platlist-link">
            <i class="fas fa-list position-absolute "></i>
          </a>
        </div>
      </div>


















    </div>
  </div>
</template>
