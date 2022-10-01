<template>
  <q-page class="relative-position">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            class="new-Cweet"
            bottom-slots
            v-model="newCweetContent"
            placeholder="What's happening?"
            counter
            maxlength="280"
            autogrow
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </template>
          </q-input>
        </div>

        <div class="col col-shrink">
          <q-btn
            @click="addNewCweet"
            :disable="!newCweetContent"
            class="q-mb-lg"
            uneleavated
            rounded
            color="primary"
            label="Cweet"
            no-caps
          />
        </div>
      </div>

      <q-separator size="2px" color="grey-2" />

      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <q-item 
            v-for="cweet in cweets" 
            :key="cweet.date" 
            class="q-py-md"
            clickable
          >
            <q-item-section avatar top>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <strong>Serkan Oz</strong>
                <span class="text-grey-7"> 
                  @oz_serkan
                  <br class="lt-md">&bull; 
                  {{ cweet.date | relativeDate }}
                </span>
              </q-item-label>
              <q-item-label class="cweet-content text-body1">
                {{ cweet.content }}
              </q-item-label>
              <div class="cweet-icons row justify-between q-mt-sm">
                <q-btn 
                  flat 
                  round 
                  color="grey" 
                  icon="far fa-comment" 
                  size="sm" 
                />
                <q-btn
                  @click="retweetThis(cweet)" 
                  :color="cweet.retweet ? 'green' : 'grey'"
                  flat 
                  round 
                  
                  icon="fas fa-retweet" 
                  size="sm" 
                />
                <q-btn
                  @click="toggleLiked(cweet)"
                  :icon="cweet.liked ? 'fas fa-heart' :  'far fa-heart'" 
                  :color="cweet.liked ? 'pink' : 'grey'"
                  flat 
                  round 
                  size="sm" 
                />
                <q-btn 
                  @click="deleteCweet(cweet)" 
                  flat 
                  round 
                  color="grey" 
                  icon="fas fa-trash" 
                  size="sm" 
                />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    
  </q-page>
</template>

<script>
import { formatDistance } from 'date-fns';
import db from 'src/boot/firebase'
import { collection, query, onSnapshot, orderBy, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';

export default{
  name: 'PageHome',
  data() {
    return {
      newCweetContent: '',
      cweets: [
        // {
        //   content: 'Random content',
        //   date: 1661973142918,
        // },
        // {
        //   content: 'Random content 2',
        //   date: 1661972581011,
        // },
      ],
    };
  },
  methods: {
    async addNewCweet() {
      let newCweet = {
        content: this.newCweetContent,
        date: Date.now(),
        liked: false,
        retweet: false,
        reply: []
      };
      const docRef = await addDoc(collection(db, 'cweets'), newCweet);
      console.log('Document written with ID: ', docRef.id)
      this.newCweetContent = ''
    },

    async deleteCweet(cweet) {
      await deleteDoc(doc(db, 'cweets', cweet.id))
      // let idToDelete = cweet.id
      // let index = this.cweets.findIndex(cweet => cweet.id === idToDelete)
      // this.cweets.splice(index, 1)
    },
    async toggleLiked(cweet) {
      const likeRef = doc(db, 'cweets', cweet.id);
      await updateDoc(likeRef, {
        liked: !cweet.liked});
    },
    async retweetThis(cweet) {
      const retweetRef = doc(db, 'cweets', cweet.id);
      await updateDoc(retweetRef, {
        retweet: !cweet.retweet});
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    }
  },
  mounted() {
    const q = query(collection(db, 'cweets'), orderBy('date') )
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let cweetChange = change.doc.data()
        cweetChange.id = change.doc.id
        if (change.type === 'added') {
            console.log('New cweet: ', cweetChange)
            this.cweets.unshift(cweetChange)
        }
        if (change.type === 'modified') {
            console.log('Modified cweet: ', cweetChange)
            let index = this.cweets.findIndex(cweet => cweet.id === cweetChange.id)
            Object.assign(this.cweets[index], cweetChange)
        }
        if (change.type === 'removed') {
            console.log(`Removed cweet: `, cweetChange)
            let index = this.cweets.findIndex(cweet => cweet.id === cweetChange.id)
            this.cweets.splice(index, 1)
        }
      })
    })
  }
}
</script>

<style lang='sass'>
.new-Cweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.cweet-icons
  margin-left: -5px
</style>