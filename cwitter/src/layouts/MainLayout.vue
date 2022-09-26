<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold"> 
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="header-icon q-pa-md lt-md"
            name="fa-brands fa-twitter"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer 
      show-if-above 
      v-model="left" 
      :width="450"
      side="left" 
      bordered
    >
      <div class="row">
        <div class="col-4"></div>

        <div class="col-7">
          <q-icon
            class="q-pa-md"
            name="fa-brands fa-twitter"
            size="29px"
            color="primary"
          />
          <q-list>
            <q-item 
              to="/"
              class='q-mb-md'
              clickable 
              v-ripple
              exact
            >
              <q-item-section avatar>
                <q-icon name="fa-solid fa-house" size="22px" />
              </q-item-section>

              <q-item-section class="text-h6">Home</q-item-section>
            </q-item>  
            <q-item 
              to="/about"
              class='q-mb-md'
              clickable 
              v-ripple
              exact
            >
              <q-item-section avatar>
                <q-icon name="fa-light fa-hashtag" size="30px" />
              </q-item-section>

              <q-item-section class="text-h6 ">Explore</q-item-section>
            </q-item>
            <q-item 
              to="/notifications"
              class='q-mb-md'
              clickable 
              v-ripple
              exact
            >
              <q-item-section avatar>
                <q-icon name="fa-regular fa-bell" size="25px" />
              </q-item-section>

              <q-item-section class="text-h6 ">Notifications</q-item-section>
            </q-item>  
            <q-item 
              to="/messages"
              class='q-mb-md'
              clickable 
              v-ripple
              exact
            >
              <q-item-section avatar>
                <q-icon name="fa-regular fa-envelope" size="25px" />
              </q-item-section>

              <q-item-section class="text-h6 ">Messages</q-item-section>
            </q-item>

             <q-item 
              to="/bookmarks"
              class='q-mb-md'
              clickable 
              v-ripple
              exact
            >
              <q-item-section avatar>
                <q-icon name="fa-regular fa-bookmark" size="sm" />
              </q-item-section>

              <q-item-section class="text-h6 ">Bookmarks</q-item-section>
            </q-item>  
            <q-item 
              to="/lists"
              class='q-mb-md'
              clickable 
              v-ripple
              exact
            >
              <q-item-section avatar>
                <q-icon name="fa-solid fa-bars-staggered" size="sm" />
              </q-item-section>

              

              <q-item-section class="text-h6 ">Lists</q-item-section>
            </q-item>
            <q-item 
              to="/profile"
              class='q-mb-md'
              clickable 
              v-ripple
              exact
            >
              <q-item-section avatar>
                <q-icon name="fa-regular fa-user" size="sm" />
              </q-item-section>

              <q-item-section class="text-h6">Profile</q-item-section>
            </q-item>  
            <q-item 
              to="/more"
              class='q-mb-md'
              clickable 
              v-ripple
              exact
            >
              <q-item-section avatar>
                <q-icon name="fa-solid fa-ellipsis" size="sm" />
              </q-item-section>
              
              <q-item-section class="text-h6 q-mb-5">More</q-item-section>
            </q-item>

            <q-btn 
              class='full-width q-mb-xl'
              color="primary" 
              label="Cweet" 
              size='lg'
              rounded
              no-caps
            />
            <div class='q-mt-xl'>
              <div class="row">
                <div class="col-3">
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
                  </q-avatar>
                </div>

                <div class="col-8">
                  <q-item-label class='q-mt-sm'>
                  <strong>Serkan Oz</strong> 
                  <br> @oz_serkan
                </q-item-label>
                </div>
              </div>
            </div>
          </q-list>
        </div>

        <div class="col-1"></div>
      </div>
    </q-drawer>

    <q-drawer
      show-if-above
      :width='600'
      v-model="right" 
      side="right" 
      bordered
    >
      <div class="row">
        <div class="col-1"></div>
        <div class="col-8">
          <q-input
            placeholder="Search Cwitter"
            class="q-ma-md"
            rounded
            standout
            outlined
            dense
            bg-color='grey-2'
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>

          <q-list 
            padding
            separator
          >
            <q-item class="q-pa-md"> 
              <q-item-section>
                <q-item-label overline class="text-gray">News</q-item-label>
                <q-item-label
                  class="text-weight-bold"
                >Breaking News!</q-item-label>
                <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="q-pa-md"> 
              <q-item-section>
                <q-item-label overline class="text-gray">News</q-item-label>
                <q-item-label
                  class="text-weight-bold"
                >Breaking News!</q-item-label>
                <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="q-pa-md">
              <q-item-section>
                <q-item-label overline class="text-gray">News</q-item-label>
                <q-item-label
                  class="text-weight-bold"
                >Breaking News!</q-item-label>
                <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-4"></div>
      </div>

    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  data() {
    return {
        left: false,
        right: false,
    }
  }
}

</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
