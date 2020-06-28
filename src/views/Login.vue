<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-toolbar color="primary" dark flat>登入</v-toolbar>
            <v-card-text>
              <form @submit.prevent="login" class="text-center">
                <div class="form-group">
                  <v-text-field
                    label="使用者名稱"
                    placeholder="請輸入使用者名稱 ..."
                    name="name"
                    type="text"
                    v-model="name"
                    hide-details
                  ></v-text-field>
                  <p
                    v-if="errorText"
                    class="red--text text-justify text-caption mb-0"
                  >{{ errorText }}</p>
                </div>
                <v-btn class="mt-4" :color="'primary'" type="submit">進入悄悄話</v-btn>
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
        this.errorText = "請輸入使用者名稱!";
      }
    }
  }
};
</script>