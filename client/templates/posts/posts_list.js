var postsDatass = [
  {
    title: 'Introducing Telescope',
    urls: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    urls: 'http://meteor.com'
  },
  {
    title: 'The Meteor Book',
    urls: 'http://themeteorbook.com'
  }
];
Template.postsList.helpers({
  posts: postsDatass
});