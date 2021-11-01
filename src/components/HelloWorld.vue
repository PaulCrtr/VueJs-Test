<template>
  <div>
    <button @click="fizzBuzz()">fizzbuzz</button>
    <v-container fluid>
      <v-row>
        <v-col :key="index" v-for="(user, index) in users" cols="12" sm="12" md="6" lg="3">
          <v-card>
            <v-card-title :style="{ backgroundColor: getRandomColor(), opacity: 0.8 }">
              <v-avatar size="90">
                <img alt="user" :src="user.picture.large" />
              </v-avatar>

              <v-badge
                :color="user.gender === 'male' ? 'blue' : 'pink'"
                icon
                bordered
                offset-y="20"
                offset-x="-10"
              >
                <template v-slot:badge>
                  <v-icon
                    size="17"
                    color="white"
                    v-if="user.gender === 'female'"
                    right
                  >mdi-gender-female</v-icon>
                  <v-icon
                    size="17"
                    color="white"
                    v-if="user.gender === 'male'"
                    right
                  >mdi-gender-male</v-icon>
                </template>
                <span class="ml-4">{{ user.name.first }} {{ user.name.last }}</span>
              </v-badge>
              <v-spacer></v-spacer>
              {{ user.dob.age }}
            </v-card-title>
            <v-card-text>
              <div class="mt-4">
                <v-icon class="mr-3" right>mdi-map-marker</v-icon>
                <span>{{ user.location.city }}</span>
              </div>

              <div class="mt-4">
                <v-icon class="mr-3" right>mdi-cellphone</v-icon>
                <span>{{ user.phone }}</span>
              </div>

              <div class="mt-4">
                <v-icon class="mr-3" right>mdi-at</v-icon>
                <span>{{ user.email }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      messages: [
        {
          from: "You",
          message: `Sure, I'll see you later.`,
          time: "10:42am",
          color: "deep-purple lighten-1",
        },
        {
          from: "John Doe",
          message: "Yeah, sure. Does 1:00pm work?",
          time: "10:37am",
          color: "green",
        },
        {
          from: "You",
          message: "Did you still want to grab lunch today?",
          time: "9:47am",
          color: "deep-purple lighten-1",
        },
      ],
    };
  },

  mounted() {
    this.$nextTick(function () {
      if (!this.users.length) {
        this.$store.dispatch("getUsers");
      }
    });
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    getRandomColor() {
      return "#" + ((Math.random() * 0xffffff) << 0).toString(16);
    },
    fizzBuzz(){
      for (let i=1; i<=100; i++){
        if(i%15 === 0){
          console.log('fizzBuzz')
        } else if(i%5 === 0){
          console.log('buzz')
        } else if(i%3 === 0){
          console.log('fizz')
        } else {
          console.log(i)
        }
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .title-background {
  background-color: red;
 } */
</style>
