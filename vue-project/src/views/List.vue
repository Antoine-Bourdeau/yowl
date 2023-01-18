<template>
  <div>
    <h1>Artcle list</h1>
    {{ message }}
  </div>
  <div class="container">
    <div v-for="article in articles" :key="article.id" class="list-group">
      <div class="list-group-item">
        {{ article.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Yo voici la liste des commentaires de Yowl !!",
      articles: [
        {
          id: 1,
          title: "Facebook",
          content: "C'est fait par Mark Zuckerberg",
        },
        {
          id: 2,
          title: "twitter",
          content: "C'est Elon Musk qui l'a racheté ",
        }
      ],
    };
  },
};
</script>
