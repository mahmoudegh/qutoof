<template>
  <b-row no-gutters>
    <b-col cols="2">
      <leaftSidebar />
    </b-col>

    <b-col cols="10">
      <b-row no-gutters>
        <b-col cols="12">
          <qHeader />
        </b-col>

        <b-col cols="9" class="layout-top-space">
          <b-container fluid>
            <Nuxt />
          </b-container>
        </b-col>

        <b-col cols="2">
          <rightSidebar />
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
