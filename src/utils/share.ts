const share = {
  data() {
    return {
      share: {
        title: "标题",
        imageUrl: "/static/share.png",
      },
    };
  },
  onShareAppMessage(res) {
    console.log(res);
    return this.share;
  }
};

export default share;
