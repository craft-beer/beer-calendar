<template >
  <nav class="navbar navbar-toggleable-md navbar-light">
    <div class="container">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Navbar</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" to="/" class="nav-item" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" to="/about" class="nav-item" active-class="active">
            <a class="nav-link">About</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>
