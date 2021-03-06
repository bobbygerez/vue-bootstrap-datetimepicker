import component from './component.vue';

const DatetimePickerPlugin = {
  install: function (Vue, options) {
    Vue.component('date-picker', component);
  }
};

component.install = DatetimePickerPlugin.install;

export default component;
export {component, DatetimePickerPlugin};
