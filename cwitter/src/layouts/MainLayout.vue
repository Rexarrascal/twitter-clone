<template>
  <q-layout class='wrapper' view="lHr lpR fFf">
    <q-header class="bg-white text-black">
      <q-toolbar>
        <q-btn
          flat
          rounded
          dense
          :ripple="false"
        >
            <q-avatar
              @click='left = !left'>
              <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
            </q-avatar>
        </q-btn>
          

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="header-icon q-pa-md lt-md"
            name="fa-brands fa-twitter"
            size="sm"
            color="primary"
          />
        </q-toolbar-title>

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
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" :width="450" side="left" bordered>
      <div class="row">
        <div class="col-4"></div>

        <div class="col-7">
          <q-btn
            to='/'
            :ripple='false'
            flat
            rounded
            dense
            outline
          >
            <q-icon
            class="q-mt-sm q-ma-sm"
            name="fa-brands fa-twitter"
            size="29px"
            color="primary"
            />
          </q-btn>
          
          <q-list class='q-mt-md'>
            <q-item 
              to="/" 
              class="q-mb-sm"
              :ripple="false"
              no-caps 
              flat 
              rounded
              exact
              >
              <q-item-section avatar>
                <q-icon name="fa-solid fa-house" size="22px" />
              </q-item-section>

              <q-item-section class="text-h6 text-weight-regular">Home</q-item-section>
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
                <q-icon name="fa-light fa-hashtag" size="30px" />
              </q-item-section>

              <q-item-section class="text-h6 text-weight-regular">Explore</q-item-section>
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

              <q-item-section class="text-h6 text-weight-regular">Notifications</q-item-section>
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

              <q-item-section class="text-h6 text-weight-regular">Messages</q-item-section>
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

              <q-item-section class="text-h6 text-weight-regular">Bookmarks</q-item-section>
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

              <q-item-section class="text-h6 text-weight-regular">Lists</q-item-section>
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

              <q-item-section class="text-h6 text-weight-regular">Profile</q-item-section>
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

              <q-item-section class="text-h6 text-weight-regular q-mb-5">More</q-item-section>
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
              <q-item class='q-pa-xs'>
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
    </q-drawer>

    <q-drawer show-if-above :width="600" v-model="right" side="right" bordered>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-8">
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
                <q-text-body1 q-text-body1 class="text-grey"
                  >Terms of Service</q-text-body1
                >
              </q-item>

              <q-item to="/">
                <q-text-body1 q-text-body1 class="text-grey"
                  >Privacy Policy</q-text-body1
                >
              </q-item>

              <q-item to="/">
                <q-text-body1 q-text-body1 class="text-grey"
                  >Cookie Policy</q-text-body1
                >
              </q-item>

              <q-item to="/">
                <q-text-body1 q-text-body1 class="text-grey"
                  >Imprint</q-text-body1
                >
              </q-item>

              <q-item to="/">
                <q-text-body1 q-text-body1 class="text-grey"
                  >Accesibility</q-text-body1
                >
              </q-item>

              <q-item to="/">
                <q-text-body1 q-text-body1 class="text-grey"
                  >Ads info</q-text-body1
                >
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
    };
  },
};
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)

.greyRounded
  background: #f7f7f7
  border-radius: 25px
  

.circularShadow

.bottomProfile
  bottom: 20px
  position: fixed


</style>
