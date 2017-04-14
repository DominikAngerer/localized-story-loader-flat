module.exports = {
  watch: {
    'model': {
      handler: function (value) {
        this.$emit('changed-model', value);
      },
      deep: true
    }
  },
  data: {
    loadedStories: []
  },
  created: function() {
    var _this = this;

    var _locale = 'de';
    if (this.$parent.$parent.$parent.$get('model') && this.$parent.$parent.$parent.$get('model').story) {
      if(this.$parent.$parent.$parent.$get('model').story.full_slug) {
         _locale = this.$parent.$parent.$parent.$get('model').story.full_slug.slice(0, 2);
      }
    }
    if (['de', 'en'].indexOf(_locale) < 0) {
      _locale = 'de';
    }
    if (!this.schema.options) {
      console.error('localized-story-loader-flat: Define the following options: 0 : token, 1 : starts_with, 2 : en_starts_with');
      return false;
    }
    var url = 'https://api.storyblok.com/v1/cdn/stories/?token=' + this.schema.options[0].value + '&starts_with=' + _locale + '/' + this.schema.options[1].value + '/&per_page=250&is_startpage=false&time=' + Date.now();
    if(this.schema.options[2] && _locale == 'en') {
      url = 'https://api.storyblok.com/v1/cdn/stories/?token=' + this.schema.options[0].value + '&starts_with=' + _locale + '/' + this.schema.options[2].value + '/&per_page=250&is_startpage=false&time=' + Date.now();
    }
    jQuery.ajax({
      url: url,
      success: function success(response) {
        _this.$set('data.loadedStories', response.stories);
      }
    });
  },
  props: ['model','schema'],
  template: "<div class=uk-form-row><select class=uk-width-1-1 v-model=model><option><option v-for=\"loadedStory in data.loadedStories\" v-bind:value=loadedStory.uuid>{{ loadedStory.name }}</select></div>"
};
