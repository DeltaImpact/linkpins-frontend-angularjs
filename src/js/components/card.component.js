let Cards = {
  bindings: {
    items: "="
  },
  templateUrl: "components/card.html",
  controller: [
    function() {
      var $ctrl = this;
      $ctrl.$onInit = initialization;
      $ctrl.$onDestroy = onDestroy;
      $ctrl.$onChanges = onChanges;

      /**
       * public properties
       */
      /**
       * public methods
       */
      /**
       * @function
       * @name initialization
       * @description
       * A component's lifeCycle hook which is called after all the controllers on an element have been constructed and had their bindings initialized
       */
      function initialization(bindings) {
        // debugger
      }

      /**
       * @function
       * @name onChanges
       * @description
       * A component's lifeCycle hook which is called when bindings are updated.
       */
      function onChanges(bindings) {
        // debugger
        // if (bindings.fieldType && bindings.fieldType.isFirstChange()) {
        //   //$ctrl.fieldType['text' | 'textarea' | 'select' | 'radio']
        //   $ctrl.templateUrl = "partials/fields/" + $ctrl.fieldType + ".html";
        // }
      }
      /**
       * @function
       * @name onDestroy
       * @description
       * A component's lifeCycle hook which is called when is called on a controller when its containing scope is destroyed.
       * Usefull to release external resources, watches and event handlers.
       */
      function onDestroy() {
        // debugger

      }
    }
  ]
  // changeList(newList) {
  //   this._$scope.$broadcast("setListTo", newList);
  // }
};

export default Cards;
