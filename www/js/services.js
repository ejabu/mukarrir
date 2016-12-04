angular.module('starter.services', [])

.factory('Items', function($http) {
    var Url   = "img/quran.csv";
    var Items = $http.get(Url).then(function(response){
      //  return csvParser(response.data);
    //   console.log(response);
    //   console.log(Papa);
      var hasil = Papa.parse(response.data)
    //   console.log(hasil);
    //   return 'sambal'
      return hasil

    });
    // console.log(Items.$$state.status);
    // return Items

    return {
      all: function() {
        return Items;
    },
    cobain: function(){
        return $http.get(Url).then(function(response){
          //  return csvParser(response.data);
        //   console.log(response);
        //   console.log(Papa);
          var hasil = Papa.parse(response.data)
        //   console.log(hasil);
        //   return 'sambal'
          return hasil

        });
    }
  }
}
)
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max فَالزّاجِراتِ زَجرًا',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }, {
    id: 5,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }, {
    id: 6,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }, {
    id: 7,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }, {
    id: 8,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }, {
    id: 9,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
