angular.module('ttc-jsonAdmin').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('ttc-jsonAdmin/jsonAdminView.html',
    "<div>\n" +
    "\n" +
    "    <md-toolbar>\n" +
    "        <div class=\"md-toolbar-tools\">\n" +
    "            <span>Editeur JSON</span>\n" +
    "\n" +
    "            <!-- fill up the space between left and right area -->\n" +
    "            <span flex></span>\n" +
    "\n" +
    "            <md-button class=\"md-raised md-primary\" ng-click=\"newAction()\">\n" +
    "                Nouveau\n" +
    "            </md-button>\n" +
    "            <md-button class=\"md-raised md-warn\" ng-click=\"confirmAndDeleteAction($event)\">\n" +
    "                Supprimer\n" +
    "            </md-button>\n" +
    "            <md-button class=\"md-raised md-accent\" ng-click=\"clearActionLocalChange()\">\n" +
    "                Annuler\n" +
    "            </md-button>\n" +
    "            <md-button class=\"md-raised md-primary\" ng-click=\"saveAction()\">\n" +
    "                Sauvegarder\n" +
    "            </md-button>\n" +
    "            <md-button class=\"md-raised md-primary\" ng-click=\"showHelp()\">\n" +
    "                ?\n" +
    "            </md-button>\n" +
    "        </div>\n" +
    "    </md-toolbar>\n" +
    "\n" +
    "    <div layout=\"row\">\n" +
    "        <md-content flex=\"30\">\n" +
    "\n" +
    "            <md-list>\n" +
    "                <md-subheader class=\"md-no-sticky\">Listes des commandes</md-subheader>\n" +
    "                <md-list-item class=\"md-1-line\" ng-repeat=\"item in actions.data\" ng-click=\"selectAction(item)\">\n" +
    "                    <div class=\"md-list-item-text\" layout=\"column\">\n" +
    "                        {{item.name}}\n" +
    "                    </div>\n" +
    "                </md-list-item>\n" +
    "            </md-list>\n" +
    "\n" +
    "        </md-content>\n" +
    "\n" +
    "        <md-content flex=\"70\">\n" +
    "            <div ui-ace=\"aceOption\" ng-model=\"aceModel\" style=\"width: 100%;height:350px\"></div>\n" +
    "            <div ng-if=\"errors.length || editorError\" layout=\"row\" class=\"warn-font\" style=\"font-size: 0.9em\">\n" +
    "\n" +
    "                <md-icon md-svg-src=\"material-design:error_outline\" class=\"ic_16px warn-font\" style=\"margin: 0 2px;\"></md-icon>\n" +
    "\n" +
    "                <span ng-if=\"errors.length\" ng-repeat=\"error in errors\">{{error}}</span>\n" +
    "\n" +
    "                <span ng-if=\"editorError\">{{editorError}}</span>\n" +
    "\n" +
    "            </div>\n" +
    "        </md-content>\n" +
    "    </div>\n" +
    "    </md-content>\n" +
    "\n" +
    "</div>\n"
  );

}]);
