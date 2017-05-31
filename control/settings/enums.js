'use strict';

(function (angular) {
    angular.module('eCommercePluginSettings')
        .constant('TAG_NAMES', {
            SHOPIFY_INFO: 'shopifyInfo',
            NEW_CURRENCY: 'newCurrency'
        });
})(window.angular);