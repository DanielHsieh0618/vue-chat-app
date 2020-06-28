<template>
  <div>
    <!-- <div class="container">
      <div class="card login">
        <div class="card-body">
          <h2 class="card-title text-center">Login</h2>
          <form @submit.prevent="login" class="text-center">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Please enter your name ..."
                name="name"
                v-model="name"
              />
              <p v-if="errorText" class="text-danger">{{ errorText }}</p>
            </div>
            <button class="btn btn-primary">Enter Chat</button>
          </form>
        </div>
      </div>
    </div>-->
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-toolbar color="primary" dark flat>Login</v-toolbar>
            <v-card-text>
              <form @submit.prevent="login" class="text-center">
                <div class="form-group">
                  <v-text-field
                    placeholder="Please enter your name ..."
                    name="name"
                    type="text"
                    v-model="name"
                  ></v-text-field>
                  <p v-if="errorText" class="text-danger">{{ errorText }}</p>
                </div>
                <v-btn :color="'primary'" type="submit">Enter Chat</v-btn>
              </form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      name: "",
      errorText: null
    };
  },
  methods: {
    login() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.errorText = "Please enter a name!";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
// .login {
//   max-width: 450px;
//   margin-top: 50px;
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
// }
</style>