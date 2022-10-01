<template>
  <q-layout>
    <div class='container'>
      
      <div class="navbar">
        <div class="navWrapper">
          <q-list>
            <q-btn
              to='/'
              :ripple='false'
              flat
              rounded
              dense
              outline
              >
              <q-icon
              class="q-mt-sm q-ml-sm"
              name="fa-brands fa-twitter"
              size="26px"
              color="primary"
              />
            </q-btn>

            <q-item 
              to="/" 
              class="nav-item q-mb-sm q-mt-sm"
              :ripple="false"
              no-caps 
              flat 
              rounded
              exact
              >
              <q-item-section avatar>
                <q-icon name="fa-solid fa-house" size="20px" class="nav-avatar" />
              </q-item-section>

              <q-item-section class="text-h6 text-weight-regular nav-description">Home</q-item-section>
            </q-item>

            <q-item 
              to="/about" 
              class="q-mb-sm"
              :ripple="false"
              no-caps 
              flat 
              rounded
              > 
              <q-item-section avatar>
                <q-icon name="fa-light fa-hashtag" size="28px" />
              </q-item-section>

              <q-item-section class="text-h6 text-weight-regular nav-description">Explore</q-item-section>
            </q-item>

            <q-item 
              to="/notifications" 
              class="q-mb-sm"
              :ripple="false"
              no-caps 
              flat 
              rounded
              >
              <q-item-section avatar>
                <q-icon name="fa-regular fa-bell" size="25px" />
              </q-item-section>

              <q-item-section class="text-h6 text-weight-regular nav-description">Notifications</q-item-section>
            </q-item>

            <q-item 
              to="/messages" 
              class="q-mb-sm"
              :ripple="false"
              no-caps 
              flat 
              rounded
              >
              <q-item-section avatar>
                <q-icon name="fa-regular fa-envelope" size="25px" />
              </q-item-section>

              <q-item-section class="text-h6 text-weight-regular nav-description">Messages</q-item-section>
            </q-item>

            <q-item 
              to="/bookmarks" 
              class="q-mb-sm"
              :ripple="false"
              no-caps 
              flat 
              rounded
              >
              <q-item-section avatar>
                <q-icon name="fa-regular fa-bookmark" size="sm" />
              </q-item-section>

              <q-item-section class="text-h6 text-weight-regular nav-description">Bookmarks</q-item-section>
            </q-item>

            <q-item 
              to="/lists" 
              class="q-mb-sm"
              :ripple="false"
              no-caps 
              flat 
              rounded
              >
              <q-item-section avatar>
                <q-icon name="fa-solid fa-bars-staggered" size="sm" />
              </q-item-section>

              <q-item-section class="text-h6 text-weight-regular nav-description">Lists</q-item-section>
            </q-item>

            <q-item 
              to="/profile" 
              class="q-mb-sm"
              :ripple="false"
              no-caps 
              flat 
              rounded
              >
              <q-item-section avatar>
                <q-icon name="fa-regular fa-user" size="sm" />
              </q-item-section>

              <q-item-section class="text-h6 text-weight-regular nav-description">Profile</q-item-section>
            </q-item>

            <q-item 
              to="/more" 
              class="q-mb-sm"
              :ripple="false"
              no-caps 
              flat 
              rounded
              >
              <q-item-section avatar>
                <q-icon name="fa-solid fa-ellipsis" size="sm" />
              </q-item-section>

              <q-item-section class="text-h6 text-weight-regular nav-description">More</q-item-section>
            </q-item>

            <q-btn
              class="full-width q-mb-xl"
              color="primary"
              label="Cweet"
              size="lg"
              rounded
              no-caps
            />
          </q-list>

          <div class="bottomProfile">
              <q-item>
                <q-avatar class='q-mr-sm'>
                    <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
                  </q-avatar>

                  <q-item-label class="q-mt-sm">
                    <strong>Serkan Oz</strong>
                    <br />
                    @oz_serkan
                  </q-item-label>
              </q-item>
            </div>
        </div>
        
      </div>

      <div class="content">
        <div class="contentWrapper">
          <div class="toolbar">
            <div class="pageNavigator">
              <q-toolbar-title class="text-weight-bold">
                {{ $route.name }}
              </q-toolbar-title>
            </div>
            <div class="topTweetsIcon">
              <q-item >
                <q-btn 
                  flat
                  rounded
                  dense
                  >
                  <q-icon
                  name='auto_awesome'
                  size=sm
                />
                </q-btn>
              </q-item>
            </div>
          </div>

          <div class="mainContent">
            <q-page-container>
              <router-view />
            </q-page-container>
          </div>
        </div>
        
      </div>

      <div class="seperator">
      </div>

      <div class="rightDrawer">
        <div class="searchBar">
          <q-input
            placeholder="Search Cwitter"
            class="q-mt-md q-mb-md"
            rounded
            standout
            outlined
            dense
            bg-color="grey-2"
            style="width:full"
            >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
          

        <div class='trendsForYou'>
          <q-list class="greyRounded q-mb-md">
            <q-item class="text-h6 text-weight-bold"> Trends for you </q-item>

            <q-item 
              class="q-pa-md"
              clickable
              >
              <q-item-section>
                <q-item-label overline class="text-gray">News</q-item-label>
                <q-item-label class="text-weight-bold"
                  >Breaking News!</q-item-label
                >
                <q-item-label caption
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                  adipiscit elit.</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="q-pa-md" clickable>
              <q-item-section>
                <q-item-label overline class="text-gray">News</q-item-label>
                <q-item-label class="text-weight-bold"
                  >Breaking News!
                </q-item-label>
                <q-item-label caption
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                  adipiscit elit.
                </q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="q-pa-md" clickable>
              <q-item-section>
                <q-item-label overline class="text-gray">News</q-item-label>
                <q-item-label class="text-weight-bold"
                  >Breaking News!</q-item-label
                >
                <q-item-label caption
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                  adipiscit elit.</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="q-pa-md" clickable>
              <q-item-section>
                <q-item-label overline class="text-gray">News</q-item-label>
                <q-item-label class="text-weight-bold"
                  >Breaking News!</q-item-label
                >
                <q-item-label caption
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                  adipiscit elit.</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="q-pa-md" clickable>
              <q-item-section>
                <q-item-label overline class="text-gray">News</q-item-label>
                <q-item-label class="text-weight-bold"
                  >Breaking News!</q-item-label
                >
                <q-item-label caption
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                  adipiscit elit.</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="q-pa-md" clickable>
              <q-item-section>
                <q-item-label overline class="text-gray">News</q-item-label>
                <q-item-label class="text-weight-bold"
                  >Breaking News!</q-item-label
                >
                <q-item-label caption
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                  adipiscit elit.</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="q-pa-md" clickable>
              <q-item-section>
                <q-item-label overline class="text-gray">News</q-item-label>
                <q-item-label class="text-weight-bold"
                  >Breaking News!</q-item-label
                >
                <q-item-label caption
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                  adipiscit elit.</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="q-pa-md" clickable>
              <q-item-section>
                <q-item-label overline class="text-gray">News</q-item-label>
                <q-item-label class="text-weight-bold"
                  >Breaking News!</q-item-label
                >
                <q-item-label caption
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                  adipiscit elit.</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-text-body1 class="text-primary">Show more </q-text-body1>
            </q-item>
          </q-list>
        </div>
          

          <q-list class="greyRounded q-mb-md">
            <q-item class="text-h6 text-weight-bold"> Who to follow </q-item>

            <q-item class="q-py-md" clickable>
              <q-item-section avatar top class="q-pl-xs">
                <q-avatar>
                  <img src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  <strong>Bill Gates</strong>
                  <span class="text-grey-7"> <br />@BillGates </span>
                </q-item-label>
              </q-item-section>

              <q-item-section>
                <q-btn
                  class="q-pt-xs"
                  rounded
                  color="black"
                  label="Follow"
                  no-caps
                  size="12px"
                />
              </q-item-section>
            </q-item>

            <q-item class="q-py-md" clickable>
              <q-item-section avatar top class="q-pl-xs">
                <q-avatar>
                  <img src="https://pbs.twimg.com/profile_images/1572573363255525377/Xz3fufYY_400x400.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  <strong>Elon Musk</strong>
                  <span class="text-grey-7"> <br />@elonmusk </span>
                </q-item-label>
              </q-item-section>

              <q-item-section>
                <q-btn
                  label="Follow"
                  class="q-pt-xs"
                  rounded
                  color="black"
                  no-caps
                  size="12px"
                />
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-text-body1 class="text-primary">Show more </q-text-body1>
            </q-item>
          </q-list>

          <q-list class='q-mb-xl'>
            <div class="row">
              <q-item to="/">
                <q-text-body1 q-text-body1 class="text-grey">
                  Terms of Service
                </q-text-body1>
              </q-item>

              <q-item to="/">
                <q-text-body1 q-text-body1 class="text-grey">
                  Privacy Policy
                </q-text-body1>
              </q-item>

              <q-item to="/">
                <q-text-body1 q-text-body1 class="text-grey"
                  >Cookie Policy
                </q-text-body1>
              </q-item>

              <q-item to="/">
                <q-text-body1 q-text-body1 class="text-grey">
                  Imprint
                </q-text-body1>
              </q-item>

              <q-item to="/">
                <q-text-body1 q-text-body1 class="text-grey"
                  >Accesibility
                </q-text-body1>
              </q-item>

              <q-item to="/">
                <q-text-body1 q-text-body1 class="text-grey"
                  >Ads info
                </q-text-body1>
              </q-item>

              <q-item to="/">
                <q-text-body1 q-text-body1 class="text-grey">More</q-text-body1>
              </q-item>

              <q-item>
                <q-text-body1 q-text-body1 class="text-grey"
                  >© 2022 Cwitter, Inc.</q-text-body1
                >
              </q-item>
            </div>
          </q-list>
      </div>
    </div>
  </q-layout>
  
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style lang="sass">

* 
  margin: 0
  padding: 0

.container 
  display: flex
  justify-content: center
  flex-direction: row

.navbar
  display: flex
  flex-direction: column
  width: 275px
  height: 100vh
  padding: 0 11px
  position: relative
  order: 1

.navWrapper
  display: grid
  position: fixed
  width: 253px
  height: inherit

.bottomProfile
  position: absolute
  bottom: 2vh
  
.content
  width: 600px
  order: 2

  border-top-width: 0px
  border-bottom-width: 0px
  border-right-width: 1px
  border-right-style: solid
  border-right-color: rgb(239, 243, 244)
  border-left-width: 1px
  border-left-style: solid
  border-left-color: rgb(239, 243, 244)

.contentWrapper
  padding: 0 15px
  
.toolbar
  display: flex
  height: 50px
  padding: 11.5px 0
  justify-content: space-between

.seperator
  width: 40px
  order: 3

.rightDrawer
  width: 350px
  order: 4


.topTweetsIcon
  

// .nav-item
//   padding: 11px
//   margin: 0

.nav-avatar
  padding: 0

.greyRounded
  background: #f7f7f7
  border-radius: 25px



@media all and ( max-width: 1000px )
  .navbar
    max-width: 88px
    padding: 0 11px

  .content
    max-width: 600px
    min-width: 420px
    padding: 0

  .rightDrawer
    display: none

  .seperator
    display: none

@media all and ( max-width: 1115px )
  .navbar
    max-width: 68px
    padding: 0 4px

  .content
    max-width: 600px
    padding: 0

  .rightDrawer
    max-width: 290px

  .seperator
    max-width: 30px

@media all and ( max-width: 1300px )
  .navbar
    max-width: 68px
    padding: 0 4px

  .content
    max-width: 600px
    padding: 0

  .nav-description
    display: none
</style>
