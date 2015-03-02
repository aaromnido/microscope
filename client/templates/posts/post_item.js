Template.postItem.helpers({
  book_domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});