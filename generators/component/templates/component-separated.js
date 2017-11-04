import templateUrl from '<%= file %>.component.html';<% if(style){ %>
import '<%= file %>.component.scss';<% } %>

export const <%= name %>Component = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class <%= name %>Controller {
    constructor(){
      'ngInject';
    }
  }
};
