import templateUrl from '<%= templateUrl %>';

export const <%= directiveName %>Directive = {
  restrict: 'AE',
  scope: {},
  transclude: false,
  templateUrl,
  link: class <%= directiveName %>Link {
    constructor(scope, element, attrs){
      this.scope = scope;
      this.element = element;
      this.attrs = attrs;
    } 
  },
  controller: class <%= directiveName %>Controller {
    constructor(){}
  }
};
