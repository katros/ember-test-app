import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  value: '',
  checked: false,

  init() {
    this._super(...arguments);
    this.get('filter')('').then(allResults => {
      this.set('results', allResults.results);
    });
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');

      filterAction(filterInputValue).then(filterResults => {
        if (filterResults.query === this.get('value')) {
          this.set('results', filterResults.results);
        }
      });
    },
    handleCheckboxClick() {
      let isChecked = this.get('checked');
      let checkboxFilterAction = this.get('checkboxFilter');

      console.log('~~~', isChecked)

      checkboxFilterAction(isChecked).then(filterResults => {
        if (filterResults.query === this.get('checked')) {
          this.set('results', filterResults.results);
        }
      });
    }
  }
});
