angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,
    $ionicModal,
    $timeout,
    Items,
    $ionicSlideBoxDelegate,
    $ionicSideMenuDelegate,
    $ionicScrollDelegate) {

  console.log($ionicSideMenuDelegate);
  $ionicModal.fromTemplateUrl('templates/modal-my.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.openModal2 = function() {
    console.log($ionicSideMenuDelegate["_instances"][0]);
    $ionicSideMenuDelegate["_instances"][0].toggleLeft()
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });









  console.log($scope);
  $scope.data = {};
  $scope.data.choice = "surah";
  $scope.data.choice_text = "Filter by Surah"


  $scope.setLevelText = function() {
    switch ($scope.data.choice) {
      case "surah":
        $scope.data.choice_text = "Filter by Surah"
        break;
      case "juz":
        $scope.data.choice_text = "Filter by Juz"
        break;
      case "page":
        $scope.data.choice_text = "Filter by Page"
        break;
      default:

    }
  }

  $timeout(function() {
    console.log($scope.data.bankCardNo);

    $scope.data.currSlide = $ionicSlideBoxDelegate.$getByHandle('mainScroll')["_instances"][0].currentIndex();
  }, 50);

  // $scope.options = {
  //   loop: true,
  //   speed: 51000,
  // }

  $scope.nextSlide = function(index, speed) {
    //   $ionicSlideBoxDelegate.next();

    $ionicSlideBoxDelegate.slide(index, speed);
  }
  $scope.slideChanged = function() {
    console.log($scope);

    // console.log($ionicScrollDelegate["_instances"][0]);
    console.log($ionicSlideBoxDelegate["_instances"][0]);
    $scope.data.currSlide = $ionicSlideBoxDelegate.$getByHandle('mainScroll')["_instances"][0].currentIndex()
    $timeout(function() {
      $ionicScrollDelegate["_instances"][0].scrollTop()
      $ionicScrollDelegate["_instances"][0].resize()
    }, 50);

  }

  Items.cobain().then(function(users) {
    $scope.users = users;
    var data = $scope.users.data
    var line_1 = data[0]
    var line_2 = data[1]
    var line_3 = data[2]
    $scope.surah_num_1 = line_1[0]
    $scope.ayat_num_1 = line_1[1]
    $scope.ayat_1 = line_1[2]
    $scope.surah_num_2 = line_2[0]
    $scope.ayat_num_2 = line_2[1]
    $scope.ayat_2 = line_2[2]
    $scope.surah_num_3 = line_3[0]
    $scope.ayat_num_3 = line_3[1]
    $scope.ayat_3 = line_3[2]
  });

  function getRandomInt(min, max) {
    min = Math.ceil(min) - 1;
    max = Math.floor(max) - 1;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function filterBySurah(surah_number, filter_value) {
    var random = 1


    var index = [1,
      8,
      294,
      494,
      670,
      790,
      955,
      1161,
      1236,
      1365,
      1474,
      1597,
      1708,
      1751,
      1803,
      1902,
      2030,
      2141,
      2251,
      2349,
      2484,
      2596,
      2691,
      2792,
      2856,
      2933,
      3160,
      3253,
      3341,
      3410,
      3470,
      3504,
      3534,
      3607,
      3661,
      3706,
      3789,
      3971,
      4059,
      4134,
      4219,
      4273,
      4326,
      4415,
      4474,
      4511,
      4546,
      4584,
      4613,
      4631,
      4676,
      4736,
      4785,
      4847,
      4902,
      4980,
      5076,
      5105,
      5127,
      5151,
      5164,
      5178,
      5189,
      5200,
      5218,
      5230,
      5242,
      5272,
      5324,
      5376,
      5420,
      5448,
      5476,
      5496,
      5552,
      5592,
      5623,
      5673,
      5713,
      5759,
      5801,
      5830,
      5849,
      5885,
      5910,
      5932,
      5949,
      5968,
      5994,
      6024,
      6044,
      6059,
      6080,
      6091,
      6099,
      6107,
      6126,
      6132,
      6139,
      6147,
      6158,
      6169,
      6177,
      6180,
      6189,
      6194,
      6198,
      6205,
      6208,
      6214,
      6217,
      6222,
      6226,
      6231,
      6237
    ]

    var index_page = [
      1, 8, 13, 24, 32, 37, 45, 56, 65, 69, 77, 84, 91, 96, 101, 109, 113, 120, 127, 134, 142, 149, 153, 161, 171, 177, 184, 189, 194, 198, 204, 210, 218, 223, 227, 232, 238, 241, 245, 253, 256, 260, 264, 267, 272, 277, 282, 289, 290, 294, 303, 309, 316, 323, 331, 339, 346, 355, 364, 371, 377, 385, 394, 402, 409, 415, 426, 434, 442, 447, 451, 459, 467, 474, 480, 488, 494, 500, 505, 508, 513, 517, 520, 527, 531, 538, 545, 553, 559, 568, 573, 580, 585, 588, 595, 599, 607, 615, 621, 628, 634, 641, 648, 656, 664, 669, 672, 675, 679, 683, 687, 693, 701, 706, 711, 715, 720, 727, 734, 740, 746, 752, 759, 765, 773, 778, 783, 790, 798, 808, 817, 825, 834, 842, 849, 858, 863, 871, 880, 884, 891, 900, 908, 914, 921, 927, 932, 936, 941, 947, 955, 966, 977, 985, 992, 998, 1006, 1012, 1022, 1028, 1036, 1042, 1050, 1059, 1075, 1085, 1092, 1098, 1104, 1110, 1114, 1118, 1125, 1133, 1142, 1150, 1161, 1169, 1177, 1186, 1194, 1201, 1206, 1213, 1222, 1230, 126, 1242, 1249, 1256, 1262, 1267, 1272, 1276, 1283, 1290, 1297, 1304, 1308, 1315, 1322, 1329, 1335, 1342, 1347, 1353, 1358, 1365, 1371, 1379, 1385, 1390, 1398, 1407, 1418, 1426, 1435, 1443, 1453, 1462, 1471, 1479, 1486, 1493, 1502, 1511, 1519, 1527, 1536, 1545, 1555, 1562, 1571, 1582, 1591, 1601, 1611, 1619, 1627, 1634, 1640, 1649, 1660, 1666, 1675, 1683, 1692, 1700, 1708, 1713, 1721, 1726, 1736, 1742, 1750, 1756, 1761, 1769, 1775, 1784, 1793, 1803, 1818, 1834, 1854, 1873, 1893, 1908, 1916, 1928, 1936, 1944, 1956, 1966, 1974, 1981, 1989, 1995, 2004, 2012, 2020, 2030, 2037, 2047, 2057, 2068, 2079, 2088, 2096, 2105, 2116, 2126, 2134, 2145, 2156, 2161, 2168, 2175, 2186, 2194, 2202, 2215, 2224, 2238, 2251, 2262, 2276, 2289, 2302, 2315, 2327, 2346, 2361, 2386, 2400, 2413, 2425, 2436, 2447, 2462, 2474, 2484, 2494, 2508, 2519, 2528, 2541, 2556, 2565, 2574, 2585, 2596, 2601, 2611, 2619, 2626, 2634, 2642, 2651, 2660, 2668, 2674, 2691, 2701, 2716, 2733, 2748, 2763, 2778, 2792, 2802, 2812, 2819, 2823, 2828, 2835, 2845, 2850, 2853, 2858, 2867, 2876, 2888, 2899, 2911, 2923, 2933, 2952, 2972, 2993, 3016, 3044, 3069, 3092, 3116, 3139, 3160, 3173, 3182, 3195, 3204, 3215, 3223, 3236, 3248, 3258, 3266, 3274, 3281, 3288, 3296, 3303, 3312, 3323, 3330, 3337, 3347, 3355, 3364, 3371, 3379, 3386, 3394, 3404, 3415, 3425, 3434, 3442, 3451, 3460, 3470, 3481, 3489, 3498, 3504, 3515, 3524, 3534, 3540, 3549, 3356, 3564, 3569, 3577, 3584, 3588, 3596, 3607, 3614, 3621, 3629, 3638, 3646, 3655, 3664, 3672, 3679, 3691, 3699, 3705, 3718, 3733, 3746, 3760, 3776, 3789, 3813, 3840, 3865, 3891, 3915, 3942, 3971, 3987, 3997, 4013, 4032, 4054, 4064, 4069, 4080, 4090, 4099, 4106, 4115, 4126, 4133, 4141, 4150, 4159, 4167, 4174, 4183, 4192, 4200, 4211, 4219, 4230, 4239, 4248, 4257, 4265, 4273, 4283, 4288, 4295, 4304, 4317, 4324, 4336, 4348, 4359, 4373, 4386, 4399, 4415, 4433, 4454, 4474, 4487, 4496, 4506, 4516, 4525, 4531, 4539, 4546, 4557, 4565, 4575, 4584, 4593, 4599, 4607, 4612, 4617, 4624, 4631, 4646, 4666, 4682, 4706, 4727, 4750, 4767, 4785, 4811, 4829, 4853, 4874, 4896, 4918, 4942, 4969, 4996, 5030, 5056, 5079, 5087, 5094, 5100, 5105, 5111, 5116, 5126, 5130, 5136, 5143, 5151, 5156, 5162, 5169, 5178, 5186, 5193, 5200, 5209, 5218, 5223, 5230, 5237, 5242, 5254, 5268, 5287, 5314, 5332, 5358, 5386, 5415, 5430, 5448, 5461, 5476, 5495, 5513, 5543, 5571, 5597, 5617, 5642, 5673, 5703, 5728, 5759, 5801, 5830, 5855, 5883, 5910, 5932, 5964, 5994, 6017, 6044, 6073, 6099, 6126, 6138, 6156, 6169, 6194, 6208, 6222, 6237
    ]

    var index_juz = [
      1, 149, 260, 385, 517, 641, 746, 900, 1042, 1201, 1322, 1479, 1649, 1803, 2030, 2215, 2484, 2674, 2876, 3215, 3386, 3564, 3733, 4090, 4265, 4506, 4706, 5105, 5242, 5673, 6237
    ]


    switch (filter_value) {
      case 'surah':
        // random = getRandomInt(index[surah_number - 1][0] - 1, index[surah_number - 1][1] - 1)
        random = getRandomInt(index[surah_number - 1], index[surah_number])
        console.log(index[surah_number - 1]);
        console.log(index[surah_number] - 1);
        break;
      case 'page':
        // random = getRandomInt(index[surah_number - 1][0] - 1, index[surah_number - 1][1] - 1)
        random = getRandomInt(index_page[surah_number - 1], index_page[surah_number])
        console.log(index_page[surah_number - 1]);
        console.log(index_page[surah_number] - 1);
        break;
      case 'juz':
        // random = getRandomInt(index[surah_number - 1][0] - 1, index[surah_number - 1][1] - 1)
        random = getRandomInt(index_juz[surah_number - 1], index_juz[surah_number])
        console.log(index_juz[surah_number - 1]);
        console.log(index_juz[surah_number] - 1);
        break;
      default:

    }
    return random
  }


  $scope.onClickEja = function() {
    var random = 0
    switch ($scope.data.choice) {
      case 'surah':
        if ($scope.data.which_surah == undefined | $scope.data.which_surah == "") {
          random = getRandomInt(0, 6235);
        } else {
          random = filterBySurah($scope.data.which_surah, 'surah')
        }
        break;
      case 'page':
        if ($scope.data.which_page == undefined | $scope.data.which_page == "") {
          random = getRandomInt(0, 6235);
        } else {
          random = filterBySurah($scope.data.which_page, 'page')
        }
        break;
      case 'juz':
        if ($scope.data.which_juz == undefined | $scope.data.which_juz == "") {
          random = getRandomInt(0, 6235);
        } else {
          random = filterBySurah($scope.data.which_juz, 'juz')
        }
        break;
      default:

    }

    $scope.ayat = ''
    var data = $scope.users.data
    var line_1 = data[random]
    $scope.surah_num_1 = line_1[0]
    $scope.ayat_num_1 = line_1[1]
    $scope.ayat_1 = line_1[2]
    var line_2 = data[random + 1]
    $scope.surah_num_2 = line_2[0]
    $scope.ayat_num_2 = line_2[1]
    $scope.ayat_2 = line_2[2]
    var line_3 = data[random + 2]
    $scope.surah_num_3 = line_3[0]
    $scope.ayat_num_3 = line_3[1]
    $scope.ayat_3 = line_3[2]
    $ionicSlideBoxDelegate.slide(1, 500);

  };
})

.controller('ChatsCtrl', function($scope, Chats, Items) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  console.log(Chats.all());
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };


})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $ionicSlideBoxDelegate) {

  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }
  $scope.settings = {
    enableFriends: true
  };
});
