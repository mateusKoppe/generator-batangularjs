export const <%= directiveName %>Directive = () => {
  return {
    restrict: 'A',
    scope: {},
    transclude: false,
    template: `
      <div></div>
    `,
    link: (scope, element, attrs) => {

    },
    controller: class <%= directiveName %>Controller {
      constructor(){}
    }
  }
};
