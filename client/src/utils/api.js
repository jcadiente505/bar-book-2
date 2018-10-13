import axios from "axios";

export default {
    getUser: function(id) {
        return axios.get("/api/user/" + id)
    },

    getRecipes: function(id) {
        return axios.get("/api/recipes/" + id);
    },

    addRecipe: function(recipe) {
        return axios.post("/api/recipes", recipe);
    },

    getArticles: function() {
        return axios.get("/api/articles");
    },

    getArticlesById: function(id) {
        return axios.get("/api/articles/" + id);
    },

    saveArticle: function(articleInfo) {
        return axios.put("/api/articles" + articleInfo);
    },

    getTopics: function() {
        return axios.get("/api/forum");
    },

    addTopic: function(topicInfo) {
        return axios.post("/api/topics", + topicInfo);
    },

    getComments: function(topicId) {
        return axios.get("/api/comments/" + topicId);
    },

    addComment: function(comment) {
        return axios.get("/api/comments", + comment)
    }
}