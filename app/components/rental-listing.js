import Component from '@ember/component';

export default Component.extend({
  isWide: false,
  isChecked: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  }
});
