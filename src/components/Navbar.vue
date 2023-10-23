<template>
  <w-toolbar class="navbar" bg-color="white" height="15vh" fixed shadow>
    <div class="spacer"></div>
    <router-link to="/">
      <img
        class="logo"
        src="https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/301182524_180443291134791_1089552232503117722_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XT4rBsivjy8AX-P3EUl&_nc_ht=scontent-mxp2-1.xx&oh=00_AfCGBlGGhgkKSEpT0Lc3Q4KD1ot1wtnOdl1A512CaJnEQw&oe=653AF662"
        alt="logo"
      />
    </router-link>
    <div class="spacer"></div>
    <router-link class="r_link" to="/about" active-class="active-link">
      <span class="navbar_titles">Chi Siamo</span>
    </router-link>
    <router-link class="r_link" to="/blog" active-class="active-link">
      <span class="navbar_titles">Il Blog</span>
    </router-link>
    <router-link class="r_link" to="/services" active-class="active-link">
      <span class="navbar_titles">Servizi Editoriali</span>
    </router-link>
    <router-link class="r_link" to="/contacts" active-class="active-link">
      <span class="navbar_titles">Contatti</span>
    </router-link>
    <div class="spacer"></div>
  </w-toolbar>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }

    return {
      activeIndex,
      handleSelect,
    }
  },
}
</script>

<style>
.navbar {
  font-size: 22px;
}

.logo {
  height: 15vh;
}

.active-link {
  font-weight: bold;
  border-bottom: 2px solid var(--primary);
  padding: 1rem;
  margin: 0 1rem;
}

.r_link {
  margin-left: 1rem;
  margin-right: 1rem;
}

#logo_nav {
  max-width: 10%;
}

.flex-grow {
  flex-grow: 1;
}

a {
  text-decoration: none;
  color: var(--primary);
}

a:hover {
  cursor: pointer;
  color: var(--link);
}

@media screen and (max-width: 430px) {
  .navbar_titles {
    display: none;
  }
}
</style>
