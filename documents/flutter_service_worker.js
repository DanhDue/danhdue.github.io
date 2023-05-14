'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1a57967ad66493dc94971382004721d1",
"index.html": "c8157d637858616b99d076f1724cc521",
"/": "c8157d637858616b99d076f1724cc521",
"main.dart.js": "a28c9b152cb80d34f3852b5185327f13",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eea09b81169addb0a5da6eca14014ade",
"assets/images/home_top_ads.png": "c811fa2c5c01bfc32694b2ea5fe74d46",
"assets/images/cup-of-tea.gif": "a7661fc12c8057a444ad1dca07615bc4",
"assets/images/home_banner.jpg": "d69a8e8960f09c51951825781eb5b5d9",
"assets/web/assets/images/home_top_ads.png": "c811fa2c5c01bfc32694b2ea5fe74d46",
"assets/web/assets/images/cup-of-tea.gif": "a7661fc12c8057a444ad1dca07615bc4",
"assets/web/assets/images/home_banner.jpg": "d69a8e8960f09c51951825781eb5b5d9",
"assets/AssetManifest.json": "822e52466863979d0c232f3070735e7b",
"assets/NOTICES": "990262a3434c52330a0556168f04b4bc",
"assets/FontManifest.json": "ed9331b29bf07d5be1e88059ec19b86e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/jsons/resolution_data.json": "23962d7fd8c5e1c316997a9e6dc19bff",
"assets/assets/jsons/locations.json": "36a5b334eea6514d7bcde6b7d3e50eea",
"assets/assets/jsons/suggestion.json": "c37c6ac0d8e1576f3ac4aea38d7d644d",
"assets/assets/jsons/user_object.json": "d7c2e479e32233abd38e1afec664626e",
"assets/assets/jsons/auto_gen.json": "34926bf2657b1d639473d4e844235b92",
"assets/assets/images/resume.svg": "46677fc92c26b05ef05f6f57ee6cbf2f",
"assets/assets/images/login_account.png": "90c6cbc727e3d14224ad32196844da8b",
"assets/assets/images/ic_clock.svg": "832a2b295b37511f058724b671a34fc7",
"assets/assets/images/profile_header_bg.png": "e20989e7ba38a415bda288131bfebc69",
"assets/assets/images/ic_dot.svg": "6098e0754ed6dbc4d4a0e5e750cbeccf",
"assets/assets/images/traffic_on.png": "84007bc79affd182886c81700a63222f",
"assets/assets/images/splash_bot_content.png": "119b14da8be7180beb65b2d77edc9831",
"assets/assets/images/home_top_left_but_bg.png": "3f4de4f629498d2b0394f34c7d914ab5",
"assets/assets/images/ic_profile.svg": "6caace83f6df6e5a638183bbfd0c56ce",
"assets/assets/images/ic_lock.svg": "300fc2e4fa57348fa66d9fa3e0d7eed3",
"assets/assets/images/1.5x/profile_header_bg.png": "383fa0ded9da2c21e9e92017dd901c54",
"assets/assets/images/1.5x/splash_bot_content.png": "d828bb1d1ccbee2a2966a4322d23887b",
"assets/assets/images/1.5x/home_top_left_but_bg.png": "577823a486aae0f209eef1c633eb0bc5",
"assets/assets/images/1.5x/ic_award.png": "fe1a8034d0c26a83ed8ef56809ca2814",
"assets/assets/images/1.5x/ic_no_tasks.png": "3da64d7c9f81cce3af57d719ddbae17f",
"assets/assets/images/1.5x/home_bot_right_but_bg.png": "49571bee1a80888db966c81612e51d35",
"assets/assets/images/1.5x/ic_book.png": "f188da1d56fc890e3c303f098476b7cd",
"assets/assets/images/1.5x/ic_personal_award.png": "c12ba79058942c058a2bb2ae273c1b72",
"assets/assets/images/1.5x/home_bot_left_but_bg.png": "6e3471539b364b57ba6dd5680fd0d548",
"assets/assets/images/1.5x/ic_brifecase_tick.png": "2b5a45f5d9493cc5440945ac2a9768dc",
"assets/assets/images/1.5x/university_building.png": "7dd2ceb3c6699f19e8f50b203c2ab6a8",
"assets/assets/images/1.5x/ic_checkin.png": "5bfa65ac7aa9e386ef3007fcc236568a",
"assets/assets/images/1.5x/ic_filter_search.png": "8e7b48bdd386efe259103176c01797dd",
"assets/assets/images/1.5x/ic_microscope.png": "5bf3c1edeb5b24b68bbfbd0c82788dd5",
"assets/assets/images/1.5x/home_top_right_but_bg.png": "68b789d5a4f5ad4c5d9986d38203c713",
"assets/assets/images/1.5x/ic_document_normal.png": "6b4207d0aea938ca409fdd7db93ec4f3",
"assets/assets/images/1.5x/ftu_logo.png": "4a05ec5a8582d27b61238ee85300fe79",
"assets/assets/images/1.5x/personal_study_overview_bg.png": "657f8f31b6c8e27a6185fb54184a71b6",
"assets/assets/images/1.5x/ic_empty_wallet_change.png": "02c8b1a9e557ceecc71a285795a7b490",
"assets/assets/images/1.5x/ic_teacher.png": "cc1cd01a07f8024c2799d888e6539690",
"assets/assets/images/1.5x/ic_user_octagon.png": "c40b90b1bf344147d989ccc3ac875bde",
"assets/assets/images/1.5x/ic_mission.png": "880caf493024e71a01518fc83634c5eb",
"assets/assets/images/1.5x/ic_profile_tick.png": "3b15fefcf9de56edb02253c10c72f736",
"assets/assets/images/1.5x/but_gradient_bg.png": "eb63d487716134397b7b9e9f43c5a357",
"assets/assets/images/1.5x/ic_personal_books.png": "351023811e0cf35e69152c29b98ad9f1",
"assets/assets/images/ic_award.png": "085e822bc7ba24b7f2ae2be465e5ef9c",
"assets/assets/images/ic_no_tasks.png": "33dde280600b2a28695b64c7a2e4b3d8",
"assets/assets/images/ic_personal_finger_scan.svg": "3a982bc7ac77d73762ad55aec79dc1c8",
"assets/assets/images/ic_book.svg": "bf229eaef03d753d54657fff437e80f4",
"assets/assets/images/home_bot_right_but_bg.png": "038ab387ba6419df4c97d9e6c7ed2ea3",
"assets/assets/images/ic_book.png": "7fb1e88af1dce9aa30ec5608040bbb67",
"assets/assets/images/ic_home.svg": "ab2dc22c4d90d1a61d582bdbb0717716",
"assets/assets/images/login_password.png": "c80a705fd6face4f97b61ca6b959523f",
"assets/assets/images/2.0x/profile_header_bg.png": "1f36e12b899059de281192867033c400",
"assets/assets/images/2.0x/splash_bot_content.png": "c9cbb88867bd617f79524b9209639d7e",
"assets/assets/images/2.0x/home_top_left_but_bg.png": "1c05c2ac1dc1296d7a80e23f7470839c",
"assets/assets/images/2.0x/ic_award.png": "2cd36d4578cacc82a5c944ff6f9a977e",
"assets/assets/images/2.0x/ic_no_tasks.png": "4a788f2d31a962e1ec5e7d9f36e94e82",
"assets/assets/images/2.0x/home_bot_right_but_bg.png": "d038e92233c25cdd5ef76e48b505c1b9",
"assets/assets/images/2.0x/ic_book.png": "77f5735a3d16382fdcf73e8890ed3508",
"assets/assets/images/2.0x/ic_personal_award.png": "185d80b1120a292bb74989f41ede8873",
"assets/assets/images/2.0x/home_bot_left_but_bg.png": "0545f07c34ce6b79f4375e02125ce44d",
"assets/assets/images/2.0x/ic_brifecase_tick.png": "6c661b8f24a47e111936868574b591df",
"assets/assets/images/2.0x/university_building.png": "0bdcc515267c99a527ba2581f69c5d43",
"assets/assets/images/2.0x/ic_checkin.png": "cd65772a37fd62176d0b5065edf36a16",
"assets/assets/images/2.0x/ic_filter_search.png": "aaf0da6177be7262176d9a3f91bd0ce7",
"assets/assets/images/2.0x/ic_microscope.png": "24ffbecbbb018a36df584f6eddead807",
"assets/assets/images/2.0x/home_top_right_but_bg.png": "a5b865fd13e852e011f9c6fed0e90ad7",
"assets/assets/images/2.0x/ic_document_normal.png": "d0be083c56ac2f364f00a48ddd111667",
"assets/assets/images/2.0x/ftu_logo.png": "29584c212f404ea84ac1df14e99f92de",
"assets/assets/images/2.0x/personal_study_overview_bg.png": "287a6b8bf98028a3acedad05754571c4",
"assets/assets/images/2.0x/ic_empty_wallet_change.png": "502934110f42bd098b20b00a4313af0e",
"assets/assets/images/2.0x/ic_teacher.png": "4b0070bb591dce0c627d56435e9723c7",
"assets/assets/images/2.0x/ic_user_octagon.png": "9964e7068e97d7bbbfe0c03eedcd51c8",
"assets/assets/images/2.0x/ic_mission.png": "6b09b6a151071b02ebebd1e3c4fad787",
"assets/assets/images/2.0x/ic_profile_tick.png": "3cc517db47fb4b4c23bd422eb1afe80b",
"assets/assets/images/2.0x/but_gradient_bg.png": "269be672d3b9b6f86a372f251a3929b0",
"assets/assets/images/2.0x/ic_personal_books.png": "b502c8878c124c922420e60c92f8b1fb",
"assets/assets/images/ic_close.svg": "ac264949ceca51fef890bb07bfaf7966",
"assets/assets/images/lesson_registration_banner.png": "94863a1ee7b5d87a7d0f1044a20a6afb",
"assets/assets/images/icTarget.png": "b938e81f5b306739bdd11d72a28592f2",
"assets/assets/images/ic_personal_award.png": "a60f407432a967bb9defc60ac8f755ac",
"assets/assets/images/ic_key_square.svg": "6072c9638e992dd935c421312d6b142a",
"assets/assets/images/ic_notification.svg": "347fd94d2cff116350f6cbfa446df3d2",
"assets/assets/images/home_bot_left_but_bg.png": "b3aba5a47a9b01b93d2d3fd8e0d2134a",
"assets/assets/images/ic_calendar_edition.svg": "c0d89c0e2f393b184f4d347215e242f9",
"assets/assets/images/android12splash.png": "4273239728241a833b37ec687f748f9d",
"assets/assets/images/ic_brifecase_tick.png": "0f504aa60ffe0f55e812f14a9f619921",
"assets/assets/images/qn_slogan.jpg": "59d804c5e0aee8f2ee334aae81e08014",
"assets/assets/images/ic_arrow_left.svg": "6abead54eeb799fc9b5045dfd78b2f93",
"assets/assets/images/university_building.png": "4fb20ffe9804da1f0af3288924f5e9aa",
"assets/assets/images/arrow_right.svg": "1acb10e27c98ddea4ac1545c2760ead4",
"assets/assets/images/map_layer_road.png": "13e097b04c6ce7607c5f44a4571df497",
"assets/assets/images/3.0x/profile_header_bg.png": "9d1c4ebfd5e03762d8fd3a6e98ff7f4d",
"assets/assets/images/3.0x/splash_bot_content.png": "2783bf441742db85ef25b2206d4ba126",
"assets/assets/images/3.0x/home_top_left_but_bg.png": "e4236db767b7295ea3f6b445fa5d16d9",
"assets/assets/images/3.0x/ic_award.png": "df96c4369de46ae1907eaa77653ec045",
"assets/assets/images/3.0x/ic_no_tasks.png": "a077a87075c9827f73d2905f9da2f347",
"assets/assets/images/3.0x/home_bot_right_but_bg.png": "b9508693996e0ad2573cf051f6b66edc",
"assets/assets/images/3.0x/ic_book.png": "4a5118996c2804fcf6ab9de5bb170c68",
"assets/assets/images/3.0x/ic_personal_award.png": "e4f6a9f73ae83fa125b057e2728d063e",
"assets/assets/images/3.0x/home_bot_left_but_bg.png": "f4df8aa78db74cdda2a79e9e9e20c5d3",
"assets/assets/images/3.0x/ic_brifecase_tick.png": "8b4eb00f3ec43ac9b6d059640348519f",
"assets/assets/images/3.0x/university_building.png": "b60b29991213b29a8b3037882a8d372a",
"assets/assets/images/3.0x/ic_checkin.png": "320118e961cf8fcb17c8b9bfd0d4c951",
"assets/assets/images/3.0x/ic_filter_search.png": "b46b27ae1d6e5c241dacebc897d58672",
"assets/assets/images/3.0x/ic_microscope.png": "dba4d2a2c3e98b2cbdb59e3ba7edb35e",
"assets/assets/images/3.0x/home_top_right_but_bg.png": "345bcf0350fb03d5b7df276c8586a2eb",
"assets/assets/images/3.0x/ic_document_normal.png": "750817bca39a5fe3ecdb1ac99217c322",
"assets/assets/images/3.0x/ftu_logo.png": "f0efc1af37f84252c9b59074c9ab2a1c",
"assets/assets/images/3.0x/personal_study_overview_bg.png": "964d496df924d1e236f9629ab35839a3",
"assets/assets/images/3.0x/ic_empty_wallet_change.png": "c591960b0b6be45e65b59018384658a3",
"assets/assets/images/3.0x/ic_teacher.png": "ad8aa8ada45a30c444bdb179b21a50bc",
"assets/assets/images/3.0x/ic_user_octagon.png": "74cad8ad0b3312542734001f762f3dd0",
"assets/assets/images/3.0x/ic_mission.png": "4d48f06b9b1cc98872c21ce1f3bc9bde",
"assets/assets/images/3.0x/ic_profile_tick.png": "b2b2776750f99bbe454fdd363b1eb35c",
"assets/assets/images/3.0x/but_gradient_bg.png": "06c42c949e9a2664bba8d910f4e14858",
"assets/assets/images/3.0x/ic_personal_books.png": "92871810bb5511b99b7dcfc0c11cc607",
"assets/assets/images/ic_checkin.png": "19288aa198a537f5468d9693ffba8c13",
"assets/assets/images/communist_party.png": "ce77f36df6503d014cae1242748d294b",
"assets/assets/images/traffic_off.png": "20f900f105115ae66dc8c815c2588455",
"assets/assets/images/4.0x/profile_header_bg.png": "a0382df5bee045b458a4aff5ff0c939c",
"assets/assets/images/4.0x/splash_bot_content.png": "7153d68f1f5bd2cce4d5d7dadbb9d692",
"assets/assets/images/4.0x/home_top_left_but_bg.png": "a9bb9d4ccd40878c4b03fe0a291c6f3f",
"assets/assets/images/4.0x/ic_award.png": "8a2524a1c5d8f809db702906fabbbd4e",
"assets/assets/images/4.0x/ic_no_tasks.png": "72b7900ff586670a3e24ab16faa3ce17",
"assets/assets/images/4.0x/home_bot_right_but_bg.png": "1be6c9609dc435bcc44082a6d2e1c1fa",
"assets/assets/images/4.0x/ic_book.png": "3680cd1da49a806599e1bbe161b791f2",
"assets/assets/images/4.0x/ic_personal_award.png": "84cd700bf4b4734a122f8cdbc6467a56",
"assets/assets/images/4.0x/home_bot_left_but_bg.png": "0cf8430e7fc1c96c1c374a29c564ac93",
"assets/assets/images/4.0x/ic_brifecase_tick.png": "c434f9c91f0151c034490907ca40e7b7",
"assets/assets/images/4.0x/university_building.png": "7eb314509d409b90a9a9b7c244d2a5b1",
"assets/assets/images/4.0x/ic_checkin.png": "11580b0a70a3cd40536f699f65393603",
"assets/assets/images/4.0x/ic_filter_search.png": "4acaa63c34cfdb9d53d622960aada183",
"assets/assets/images/4.0x/ic_microscope.png": "f0cf0fd0bad2d2ffa6affe0c5dfbbc1d",
"assets/assets/images/4.0x/home_top_right_but_bg.png": "1cd1a51840ac998cfd2210a1d2ba2c82",
"assets/assets/images/4.0x/ic_document_normal.png": "0f344758f42ee657b830ace5fca76bda",
"assets/assets/images/4.0x/ftu_logo.png": "b55d424ee3821718415198946248b98f",
"assets/assets/images/4.0x/personal_study_overview_bg.png": "88765c7285fc33de605b66d1cf03a8ee",
"assets/assets/images/4.0x/ic_empty_wallet_change.png": "b980e0b16f6542b69ff3cdbbd807c771",
"assets/assets/images/4.0x/ic_teacher.png": "fa84087edd094ac72ac3055503e684d2",
"assets/assets/images/4.0x/ic_user_octagon.png": "fb37e000b6bcc035ef5c6ec9ac866b96",
"assets/assets/images/4.0x/ic_mission.png": "e063a405aba3fd378af879ecd5d1311e",
"assets/assets/images/4.0x/ic_profile_tick.png": "cf599504e214803eeec9e8d3f296b2f4",
"assets/assets/images/4.0x/but_gradient_bg.png": "bb83607737994de0da404cdb5cccf641",
"assets/assets/images/4.0x/ic_personal_books.png": "2d394a34718dde756e7d5a47f89dd2b7",
"assets/assets/images/icCar.png": "254543f418bea154b43f86bfdc79e6b7",
"assets/assets/images/ic_filter_search.png": "39471a10f170e5c5da9b1f9fcc6160ad",
"assets/assets/images/ic_microscope.png": "b188bff1b33d0854e537c417bc32a09a",
"assets/assets/images/0.75x/profile_header_bg.png": "6b6a83d3b65854a0e5f0d28d91946c90",
"assets/assets/images/0.75x/splash_bot_content.png": "9402ad15b04ce2b31cdf4b8dfa2d0c15",
"assets/assets/images/0.75x/home_top_left_but_bg.png": "879b496b9257fa1ec21874154063c671",
"assets/assets/images/0.75x/ic_award.png": "c495a7273cb0550d6f45ce1b8f54f7ab",
"assets/assets/images/0.75x/ic_no_tasks.png": "d30dfdaffa35420e3e7b5aa62f1759f9",
"assets/assets/images/0.75x/home_bot_right_but_bg.png": "eaa60ce89fe490ab795cc7652c5f806f",
"assets/assets/images/0.75x/ic_book.png": "4e05ff5bed943fc2e5c60a3a51ff1f9b",
"assets/assets/images/0.75x/ic_personal_award.png": "c480100100194750c85cd69d92e18cbb",
"assets/assets/images/0.75x/home_bot_left_but_bg.png": "1abe92fa3372969531a096fef6471898",
"assets/assets/images/0.75x/ic_brifecase_tick.png": "a123ad197fc6153206f0315d824eaf6d",
"assets/assets/images/0.75x/university_building.png": "4f40a9ab15a421b1fde535a55ab6f41a",
"assets/assets/images/0.75x/ic_checkin.png": "1db6f9c1b6714db098a91aa6b34b1513",
"assets/assets/images/0.75x/ic_filter_search.png": "667274a84da2006339ce04c1e0a719fe",
"assets/assets/images/0.75x/ic_microscope.png": "00bdefd23fda3ffa2e4525e48776edce",
"assets/assets/images/0.75x/home_top_right_but_bg.png": "8016619a44ebbc7d7a8817dc0e338f5e",
"assets/assets/images/0.75x/ic_document_normal.png": "5f8609e6b8a4f152d88cd8f895c5f128",
"assets/assets/images/0.75x/ftu_logo.png": "54ad38d21e6c6604677a8a69c7febd79",
"assets/assets/images/0.75x/personal_study_overview_bg.png": "6ec6fe71c4171334dce3c956b9fdbdb2",
"assets/assets/images/0.75x/ic_empty_wallet_change.png": "f6f9cff1f305c3d63203323107539fab",
"assets/assets/images/0.75x/ic_teacher.png": "13177639aed374c39c6a4d20cd3ce384",
"assets/assets/images/0.75x/ic_user_octagon.png": "22d10b6119f472ad3f9951ae4ca86d46",
"assets/assets/images/0.75x/ic_mission.png": "7e03422f75cac6e2ee0989370bf2239e",
"assets/assets/images/0.75x/ic_profile_tick.png": "6d775aaaf6b8ea9733990b1a0f4fc516",
"assets/assets/images/0.75x/but_gradient_bg.png": "991f833876f2587baf9e85de8d8c3ab1",
"assets/assets/images/0.75x/ic_personal_books.png": "cdd0ce7e5f59f0fb0d24672631848ed6",
"assets/assets/images/ic_info_circle.svg": "8f809035036604b027ed22b47051a813",
"assets/assets/images/home_top_right_but_bg.png": "38490b8f0feeab3e5a3e03f696f1d276",
"assets/assets/images/quote_bubble.png": "a5dd30f24f495ca8595aeb4902d9fe3b",
"assets/assets/images/ic_format_text_grey600_36dp.png": "f681cd40645b2e4b3da205f0d641dc78",
"assets/assets/images/ic_document_normal.png": "85f74ad405c47f6adb7dcd1ab560ac8c",
"assets/assets/images/ic_teacher.svg": "7cdb5f0f6804de142100516c6932af6d",
"assets/assets/images/ftu_logo.png": "e0118689a469ec10a4c3a70b44d7e7a6",
"assets/assets/images/personal_study_overview_bg.png": "465aea8d03b16ef17afadc73a4532b55",
"assets/assets/images/ic_sparkles.svg": "79e0469de1f1336bdd6a1a7536238834",
"assets/assets/images/map_layer_satellite.png": "5eeda1af654c50b1271d8e1b25bf70f7",
"assets/assets/images/ic_empty_wallet_change.png": "8f81fa979c4ff27a03dcffe7fe25fdda",
"assets/assets/images/ic_date.svg": "a12f0998287f4e731c56bd2234ce613b",
"assets/assets/images/ic_person.svg": "09f32924470d6a355f5ec5859e9b022c",
"assets/assets/images/ic_has_no_data.png": "1486605d46972c95de714a2198a03351",
"assets/assets/images/ic_lamp_charge.svg": "d0830359e3f462f959a04b5df95ed1bc",
"assets/assets/images/ic_teacher.png": "a7d10019e07e15cb2013dcf5d836dfa4",
"assets/assets/images/ic_user_octagon.png": "b7e962f0727589e5042631ef64df0965",
"assets/assets/images/ic_mission.png": "b5d2db17587e301321dadb25d6508779",
"assets/assets/images/icDirection.png": "4f2d468f3f7de5981ec092d5b3c8fe67",
"assets/assets/images/ic_medal_star.svg": "f1365d9d356085c1a7e4a4abf5929f5c",
"assets/assets/images/ic_settings.svg": "9fd040a7298de4329e990959308a2750",
"assets/assets/images/coin_logo.svg": "10e03386fca1504e9399ed251d499baa",
"assets/assets/images/ic_splash_background.png": "c2c08a7b5c293ab81302d40eb0585a77",
"assets/assets/images/ic_profile_tick.png": "88cd7475cc2f11a4570eeb22f550f53a",
"assets/assets/images/but_gradient_bg.png": "af94c9557f749cbd1468be08709f28b3",
"assets/assets/images/ic_read_all.svg": "baa58b7dea05f252f79644ee6b0383cd",
"assets/assets/images/ic_finger_scan.svg": "8dab416ca8d2da972a41af9b937fe99f",
"assets/assets/images/ic_personal_books.png": "842f0bbdfcf032709c12eaab665dedf0",
"assets/assets/images/ic_clear.svg": "5039b6e53faa68bf81de32507b41e31d",
"assets/assets/images/ic_document.svg": "47b28122c2caa07dc98ea76c9d99c502",
"assets/assets/lotties/ai.json": "09a2f709496ac6925f9051e7be2bbef3",
"assets/assets/lotties/splash_animation.json": "2212e02413cb4c55d3450d6bf1ac6d02",
"assets/assets/fonts/SF_Compact_Display_Medium.ttf": "ebac98d0f45d3a987d286fc063c1ab5a",
"assets/assets/fonts/SF_Compact_Display_Semibold.ttf": "154fb4fd0acc491b5a9662c3024bfd4e",
"assets/assets/fonts/SF_Compact_Display_Bold.ttf": "843314e798ceaa7057005b9e7366c72c",
"assets/assets/fonts/SF_Compact_Display_Regular.ttf": "b6f59a30de8ed141ab9ef69bc75a2642",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
