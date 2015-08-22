angular.module('addressBook')
    .factory('getAddress', ['$http', function($http) {
    var api = '/api/contacts/';
    var contact = {};

    contact.getContacts = function () {
        return $http.get(api);
    };

    contact.getContact = function (id) {
        return $http.get(api + id);
    };

    contact.addContact = function (first) {
        return $http.post(api, first);
    };

    contact.updateContact = function (id, obj) {
        return $http.put(api + id, obj);
    };

    contact.deleteContact = function (id) {
        return $http.delete(api + id);
    };

    return contact;
}]);