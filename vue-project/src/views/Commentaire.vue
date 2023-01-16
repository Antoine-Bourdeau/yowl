<template>
  <div class="body">
    <h1>BIENVENUE</h1>
    <button type="button" class="btnlogout" @click="Logout">Log Out</button>
    <button type="button" class="btnlogout" @click="Getoken">Get Token</button>
    <div class="form-box">
      <div class="button-box">
        <div id="btn"></div>
        <button type="button" class="toggle-btn">Create a comment</button>
      </div>
      <form id="login" class="input-group">
        <input
          type="text"
          class="input-field"
          placeholder="Title"
          required
          v-model="newTitle"
        />
        <input
          type="text"
          class="input-field"
          placeholder="Content"
          required
          v-model="newContent"
        />
        <button type="submit" class="submit-btn" @click="publier">Post</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      newContent: "",
      newTitle: "",
      articles: [],
    };
  },
  methods: {
    Getoken() {
      const tokenget = localStorage.getItem("jwt");
      console.log(tokenget);
    },
    Logout() {
      localStorage.removeItem("jwt"), localStorage.removeItem("username");
      this.$router.push("/");
    },
    publier() {
      const article = {
        title: this.newTitle,
        content: this.newContent,
      };
      const token = localStorage.getItem("jwt");

      axios({
        method: "post",
        url: "http://localhost:1337/api/articles",
        headers: { authorization: "bearer " + token },
        data: {
          data: article,
        },
      }).then((response) => {
        this.articles.push(response.data.data);
        console.log(response.data);
        this.newTitle = "";
        this.newContent = "";
      });
    },
  },
  mounted() {
    axios.get("http://localhost:1337/api/articles").then((response) => {
      console.log(response.data.data);
      // console.log(token);
    });
  },
};
</script>

<style>
#btn {
  top: 0;
  left: 0;
  position: absolute;
  width: 220px;
  height: 100%;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border-radius: 30px;
  transition: 0.5s;
}
.form-box {
  width: 380px;
  height: 480px;
  position: relative;
  margin: 6% auto;
  background-color: rgb(44, 44, 135);
  padding: 5px;
  overflow: hidden;
}

.toggle-btn {
  padding: 10px 30px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}

.button-box {
  width: 220px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px #ff61241f;
  border-radius: 30px;
}

.input-group {
  top: 180px;
  position: absolute;
  width: 280px;
  transition: 0.5s;
}

.input-field {
  width: 100%;
  padding: 10px 0;
  margin: 5px 0;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #999;
  outline: none;
  background: transparent;
}

.submit-btn {
  width: 85%;
  padding: 10px 30px;
  cursor: pointer;
  display: block;
  margin: auto;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border: 0;
  outline: none;
  border-radius: 30px;
}
</style>
