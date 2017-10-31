import templateUrl from '<%= templateUrl %>';

export const <%= componentName %>Component = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class <%= componentName %>Controller {
    constructor(){}
  }
};