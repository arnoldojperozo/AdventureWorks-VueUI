<template>
  <v-app>
   <layoutTopBar/>
    <v-content>
      <router-view/>
    </v-content>
  <layoutFooter/>
  </v-app>
</template>

<script>
import layoutTopBar from './components/mainLayout/layoutTopBar'
import layoutFooter from './components/mainLayout/layoutFooter'

export default {
  name: 'App',
  components: {
    layoutFooter,
    layoutTopBar,
  },
  data () {
    return {
      //
    }
  }
}
</script>
