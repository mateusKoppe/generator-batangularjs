import templateUrl from '<%= templateUrl %>';

export const <%= name %>Component = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class <%= name %>Controller {
    constructor(){}
  }
};