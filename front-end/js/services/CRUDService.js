(function () {

  'use strict'

  angular.module('forumApp')

    .service('CRUDService', function ($q, $http, API_ENDPOINT) {

      var createThread = function (thread) {
        return $q(function (resolve, reject) {
          $http.post(API_ENDPOINT.url + '/create-thread', thread).then(function (result) {
            if (result.data.success) {
              resolve(result.data.msg)
            } else {
              reject(result.data.msg)
            }
          })
        })
      }

      var getThreads = function () {
        return $q(function (resolve, reject) {
          $http.get(API_ENDPOINT.url + '/get-threads').then(function (result) {
            if (result.data.success) {
              delete result.data.success
              resolve(result.data)
            }
          })
        })
      }

      var editThread = function (thread) {
        return $q(function (resolve, reject) {
          $http.put(API_ENDPOINT.url + '/edit-thread/' + thread.id, thread).then(function (result) {
            if (result.data.success) {
              resolve(result.data.msg)
            }
          })
        })
      }
      
      var deleteThread = function (thread) {
        return $q(function (resolve, reject) {
          $http.delete(API_ENDPOINT.url + '/delete-thread/' + thread.id).then(function (result) {
            if (result.data.success) {
              resolve(result.data.msg)
            }
          })
        })
      }

      var getNewestMessage = function (name) {
        return $q(function (resolve, reject) {
          $http.get(API_ENDPOINT.url + '/get-message/' + name).then(function (result) {
            if (result.data.success) {
              delete result.data.success
              resolve(result.data)
            }
          })
        })
      }

      var getMessages = function (threadName) {
        return $q(function (resolve, reject) {
          $http.get(API_ENDPOINT.url + '/get-messages/' + threadName).then(function (result) {
            if (result.data.success) {
              delete result.data.success
              resolve(result.data.messages)
            }
          })
        })
      }

      var editMessage = function (message) {
        return $q(function (resolve, reject) {
          $http.put(API_ENDPOINT.url + '/edit-message/' + message.id, message).then(function (result) {
            if (result.data.success) {
              resolve(result.data.msg)
            }
          })
        })
      }


      return {
        createThread: createThread,
        getThreads: getThreads,
        editThread: editThread,
        deleteThread: deleteThread,
        getNewestMessage: getNewestMessage,
        getMessages: getMessages,
        editMessage: editMessage
      }
    })
})()