<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
  import Header from '@/components/header'
  import Footer from '@/components/footer'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  body { font-family: 'Montserrat', sans-serif; }
  h1 {font-weight: 600; font-size: 2.5em;}
  h2 {font-weight: 600; font-size: 1.8em;}
  p {font-size: 1em;}
</style>
