<% if(style){ %>import '<%= file %>.component.scss';

<% } %>export const <%= name %>Component = {
  bindings: {},
  transclude: false,
  template: `
    <div></div>
  `,
  controller: class <%= name %>Controller {
    constructor(){
      'ngInject';
    }
  }
};
