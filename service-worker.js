/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/cliqq.io/2014/03/22/vuejs-010-release/index.html","1916bfbee2e411d01dbe0f119f5c8b04"],["/cliqq.io/2014/07/29/vue-next/index.html","2902717437af591398aa27c17b6a901c"],["/cliqq.io/2014/11/09/vue-011-release/index.html","2c4559b5e9997e4818331e28edf4de61"],["/cliqq.io/2014/12/08/011-component/index.html","d37dd00c2e410bc9f61a09de04aa81f0"],["/cliqq.io/2015/06/11/012-release/index.html","40f95cd36a5e0e819368c93be83a489c"],["/cliqq.io/2015/10/26/1.0.0-release/index.html","7c82a416bf1bdfff061696a126788e5c"],["/cliqq.io/2015/10/28/why-no-template-url/index.html","1711c05a31765701c643e436951bd6e9"],["/cliqq.io/2015/12/28/vue-cli/index.html","3f1654ab46f364bb24f63c2460c6ad77"],["/cliqq.io/2016/02/06/common-gotchas/index.html","b797495abc47a83ab496d6b674f94775"],["/cliqq.io/2016/03/14/march-update/index.html","849262237c01c6fb8d98061d181f46ba"],["/cliqq.io/2016/04/27/announcing-2.0/index.html","bf13796ab662cbb84bc48c4ea46bdb0f"],["/cliqq.io/2020/05/13/a/import-sdk.jpg","464746696001dce8eb041f0ae9b77dd6"],["/cliqq.io/2020/05/13/a/index.html","d20e8b73996d7c33d19a93d4a4a58f85"],["/cliqq.io/2020/05/13/a/select-contact.png","8c372968d34adbf8b846f3d30eb1d81f"],["/cliqq.io/api/index.html","2088befd33fa6f9c45297ea0dd7def87"],["/cliqq.io/archives/2014/03/index.html","7a5a5f70fea17f3839904a7eca8da33c"],["/cliqq.io/archives/2014/07/index.html","190369363cdb731216b4b2725cd92392"],["/cliqq.io/archives/2014/11/index.html","0b2284b74fbc11ec5c1d4d05125faed6"],["/cliqq.io/archives/2014/12/index.html","ecf3a3c504b168a779b314066fac9155"],["/cliqq.io/archives/2014/index.html","264373402c0f0c235b397654b7ee6d5d"],["/cliqq.io/archives/2015/06/index.html","71a1e619683aaa6be30b11db132c15db"],["/cliqq.io/archives/2015/10/index.html","b27f6bb07289e472927aa9f7758166c5"],["/cliqq.io/archives/2015/12/index.html","154f9d39c7d04282eadffee8c0963185"],["/cliqq.io/archives/2015/index.html","62edfbfda36b1fa00ae74e9da07dc663"],["/cliqq.io/archives/2016/02/index.html","37968024e0a3298ff66cb94bec8c3e09"],["/cliqq.io/archives/2016/03/index.html","2e97b6cab3e6b5877cfa2e0cf4c44a68"],["/cliqq.io/archives/2016/04/index.html","873a989f9735f937ea4080e6c6d6c041"],["/cliqq.io/archives/2016/index.html","2324e856e9218fbab276bd144bbc2fa5"],["/cliqq.io/archives/2020/05/index.html","6b54a9329b5908f85ce4188bcb4a672c"],["/cliqq.io/archives/2020/index.html","ad8987de9829897abef71cac2fdfc0e3"],["/cliqq.io/archives/index.html","156cf72c6d7e8ff68139aaba13e82908"],["/cliqq.io/archives/page/2/index.html","cd3be4fe4b69cbf72075fcba516b3ab3"],["/cliqq.io/atom.xml","24b4cd17af18853eed04ef5078f57cd6"],["/cliqq.io/browserconfig.xml","a9461fcba28550a616a19a0aee8450ac"],["/cliqq.io/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/cliqq.io/css/index.css","fbcf012cff9a26d8b39ef59e1436ce40"],["/cliqq.io/css/page.css","4a77320090d7834b9ab16d5e223045c5"],["/cliqq.io/css/search.css","e4e6c1e2a49dfe73bd8f10ca3409c040"],["/cliqq.io/examples/commits.html","2bc315d8eb1fe563c377884f91f04941"],["/cliqq.io/examples/elastic-header.html","d3df26d187be8e051e81ea5f5f60fb75"],["/cliqq.io/examples/firebase.html","6ca4f54e8f14787b68a94178d99e9b7a"],["/cliqq.io/examples/grid-component.html","eb84eed983d881b4e8b29f78ef7deecd"],["/cliqq.io/examples/hackernews.html","d9a3f175378c8232242aae706d03f297"],["/cliqq.io/examples/index.html","19b44557c382f359e9977add7978db23"],["/cliqq.io/examples/modal.html","b5ac77f631a35155f1b69201700ab703"],["/cliqq.io/examples/select2.html","f9271664e91157a8c8cf87ae00d6cab4"],["/cliqq.io/examples/svg.html","af6492220e4cc8db0ea21a5fce1ec0b4"],["/cliqq.io/examples/todomvc.html","2f43ed95e66ac41e49426c66a323a978"],["/cliqq.io/examples/tree-view.html","ad302089526acbf725ad9f5a9833f82e"],["/cliqq.io/guide/class-and-style.html","1829a76fa5c0ce32e8976ccc366b1674"],["/cliqq.io/guide/comparison.html","22e247fce70005eb9f78c0f11b8729cc"],["/cliqq.io/guide/components.html","2625a467f6b54fc574b765034dbd97d1"],["/cliqq.io/guide/computed.html","87575bd797cc5363ebb7e5b1ec7a45a1"],["/cliqq.io/guide/conditional.html","c23d93408b2f644650707e8cbed44cfd"],["/cliqq.io/guide/custom-directive.html","f73967e1f0a67d8ed9b7ccd8c92cdadb"],["/cliqq.io/guide/deployment.html","86da0f4b13eb7cde3236e81ca889d318"],["/cliqq.io/guide/events.html","c7b5bafb817bb38135b0b7dfe1b9b5db"],["/cliqq.io/guide/forms.html","717fbb9c73a753f3a3070408026fbab9"],["/cliqq.io/guide/index.html","559beb7ef94c8b6fa4bdc004828c76ef"],["/cliqq.io/guide/installation.html","d2982961f104da1ce18714f97cb0a9ff"],["/cliqq.io/guide/instance.html","dd0e7688c5590ce748ddd9d7f23bf0e2"],["/cliqq.io/guide/join.html","c96d182f54e109be2e39ca0bd8ea79a3"],["/cliqq.io/guide/list.html","e18c1dcc1896791158322b0afeac8364"],["/cliqq.io/guide/migration-vue-router.html","0875d3114ab2372fac64cc410deabd07"],["/cliqq.io/guide/migration-vuex.html","b06666f3595af1af58cb0d3a82f439a5"],["/cliqq.io/guide/migration.html","cb44b8ac00c16452643ad6d28dbb46aa"],["/cliqq.io/guide/mixins.html","8a1811c5c98453c762a12ca33db520fd"],["/cliqq.io/guide/plugins.html","e4df1ad9712ba33c2c9c365c68abffdc"],["/cliqq.io/guide/reactivity.html","2211a45ff78cbe88ff6c0155563723bf"],["/cliqq.io/guide/render-function.html","8fd77d8da78f9356d440850ea4223496"],["/cliqq.io/guide/routing.html","b1d957e36c69448811bc94055b83b647"],["/cliqq.io/guide/single-file-components.html","97c3fe661ecb40ee55c5902daf30630a"],["/cliqq.io/guide/ssr.html","e5c35816189decaa0e94067819ee9769"],["/cliqq.io/guide/state-management.html","b563406a4bde6666af28dbfc9616f01f"],["/cliqq.io/guide/syntax.html","ce0e987a5a96495159289a6bf9acb1fd"],["/cliqq.io/guide/transitioning-state.html","e2057147cc07bd14a0a459a2cc6a1d7a"],["/cliqq.io/guide/transitions.html","dcde01393613f585e49974c95bb39a6b"],["/cliqq.io/guide/unit-testing.html","8de5b373381cea0ce1310338f227e001"],["/cliqq.io/images/100offer.png","8029274e3fa53cd1f5195d4cf02d5234"],["/cliqq.io/images/2mhost.png","cf1c6b16ae197cc8fece227593cf3cd8"],["/cliqq.io/images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["/cliqq.io/images/actualize.png","2a07999eb1d845af6d9f7fe7b2eb0253"],["/cliqq.io/images/anymod.png","234cf9604fd55de7ce924f520d6c5610"],["/cliqq.io/images/bit-wide.png","e7b6072d049ed29615462f7c83cbfeaa"],["/cliqq.io/images/bit.png","db6a4b731ecc06de8bd36d64112c768b"],["/cliqq.io/images/bmqb.png","25e28c3c20f8f32618a732fe055d6321"],["/cliqq.io/images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["/cliqq.io/images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["/cliqq.io/images/chaitin.png","549e43997790dc624c477424acbfe228"],["/cliqq.io/images/check.png","c634675b753a1a03b587c43d8b535600"],["/cliqq.io/images/codepilot.png","123c45958229de783198d2d893a4044c"],["/cliqq.io/images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["/cliqq.io/images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["/cliqq.io/images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["/cliqq.io/images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["/cliqq.io/images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["/cliqq.io/images/conf.png","0d1e4840e924b232e605779b5040c879"],["/cliqq.io/images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["/cliqq.io/images/data.png","5de7af21d4c2de951720c006f84b98fc"],["/cliqq.io/images/datacamp.png","251ad9e67095233b3fcede7b03eaca9c"],["/cliqq.io/images/devtools-storage-chrome.png","ac1f3b275b87e2fec9c4df951347be81"],["/cliqq.io/images/devtools-storage-edge.png","3e92a3bea017b8398e71db0a2419a191"],["/cliqq.io/images/devtools-storage.png","e742c3b1d526bee7be77c050f4bffc92"],["/cliqq.io/images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["/cliqq.io/images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["/cliqq.io/images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["/cliqq.io/images/down.png","2f948222df409af3121254d5fe0ed377"],["/cliqq.io/images/email-login.png","5690bbbf2d496ebb572bf8126661768b"],["/cliqq.io/images/famebroker.png","9a879f5f83d3583145c756ba381ca482"],["/cliqq.io/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/cliqq.io/images/frontend-love.png","b514babc53a0f3ddc854b0b14a54a489"],["/cliqq.io/images/frontend-meetups.png","d9b76c14d7eaf24c6b030ac3352d1e58"],["/cliqq.io/images/hackr-io.png","2a0d1f9625ec5b529656fe6028f66c4f"],["/cliqq.io/images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["/cliqq.io/images/hn.png","99176cdebac521e823be519aef514bb3"],["/cliqq.io/images/htmlburger.png","c7ce1344d001e7a236a89694ed59d988"],["/cliqq.io/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/cliqq.io/images/icons/android-icon-144x144.png","8cd6f398983c00dfa6d79427564ed24c"],["/cliqq.io/images/icons/android-icon-192x192.png","297f8bf4a188ec86955f8cd3495f0736"],["/cliqq.io/images/icons/android-icon-36x36.png","e5ae07eaacb24b15478d2fbac3ec090d"],["/cliqq.io/images/icons/android-icon-48x48.png","db4a201f604661cb836e57c6223e4d89"],["/cliqq.io/images/icons/android-icon-72x72.png","366c88c28e54c78fa12dfcd0d5d8723d"],["/cliqq.io/images/icons/android-icon-96x96.png","40b559df2eaf8ae34babe725ccde30ef"],["/cliqq.io/images/icons/apple-icon-114x114.png","424e164f9d47e1cfb48936de0958e8eb"],["/cliqq.io/images/icons/apple-icon-120x120.png","9f060efef24d07e11e907fe7ccf9594e"],["/cliqq.io/images/icons/apple-icon-144x144.png","8cd6f398983c00dfa6d79427564ed24c"],["/cliqq.io/images/icons/apple-icon-152x152.png","dc48f89259350831cea8e436f8958e0c"],["/cliqq.io/images/icons/apple-icon-180x180.png","26454c9da1d7a5cbf2d4da4cc0ee3f83"],["/cliqq.io/images/icons/apple-icon-57x57.png","27c82218198c6192752cc5ff024e886f"],["/cliqq.io/images/icons/apple-icon-60x60.png","367febdec454266d7a982cea4ff6822d"],["/cliqq.io/images/icons/apple-icon-72x72.png","366c88c28e54c78fa12dfcd0d5d8723d"],["/cliqq.io/images/icons/apple-icon-76x76.png","c7624fc035b8e37683a7529e893448bc"],["/cliqq.io/images/icons/apple-icon-precomposed.png","9983b8fb858ec6b6eafde1f69f3b2e1e"],["/cliqq.io/images/icons/apple-icon.png","9983b8fb858ec6b6eafde1f69f3b2e1e"],["/cliqq.io/images/icons/browserconfig.xml","653d077300a12f09a69caeea7a8947f8"],["/cliqq.io/images/icons/favicon-16x16.png","0409aed6e377eb3c57a284daf32a53b6"],["/cliqq.io/images/icons/favicon-32x32.png","c9dfdee31c413a436b784dcd2eb3b949"],["/cliqq.io/images/icons/favicon-96x96.png","40b559df2eaf8ae34babe725ccde30ef"],["/cliqq.io/images/icons/manifest.json","57a7ca65a5e92dfa1167098b0339427e"],["/cliqq.io/images/icons/ms-icon-144x144.png","8cd6f398983c00dfa6d79427564ed24c"],["/cliqq.io/images/icons/ms-icon-150x150.png","c3f3f8936ac5a443f033f543cb7b509e"],["/cliqq.io/images/icons/ms-icon-310x310.png","5ce19daab7642c412d212430eda8aff0"],["/cliqq.io/images/icons/ms-icon-70x70.png","5fac73c068e180c9dd213fdaf2324f56"],["/cliqq.io/images/icons8.png","ffcdd01817ecdb32b92bd2f1e4d75e84"],["/cliqq.io/images/infinitynewtab.png","446b9c9b5b7c251e3cf3b67ac5ed4acb"],["/cliqq.io/images/itunescn.png","dffb5409b975a5590aab9be99fb53ca8"],["/cliqq.io/images/jsfiddle.png","9f92527b7bce17471203e83f948292c5"],["/cliqq.io/images/jsguru.png","31c4e9e56df283700fd81a44d46099c7"],["/cliqq.io/images/juejin.png","46d2970cf094e50a218e1a8cd242b536"],["/cliqq.io/images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["/cliqq.io/images/lifecycle.png","6f2c97f045ba988851b02056c01c8d62"],["/cliqq.io/images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["/cliqq.io/images/loginservice-codesandbox.png","70590e4e2226f5df382e4dae9532274a"],["/cliqq.io/images/logo.png","75b915e5e98fc9fe7bbb26d39d44424f"],["/cliqq.io/images/logovue.png","cf23526f451784ff137f161b8fe18d5a"],["/cliqq.io/images/memory-leak-example.png","c2fae8bd6d8fa50632f9cde80be8b3f6"],["/cliqq.io/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/cliqq.io/images/monterail.png","3a441c52ccf03e6d09defa528cd2d632"],["/cliqq.io/images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["/cliqq.io/images/neds.png","8936cd0dd2ea2dedb127a330448d45e8"],["/cliqq.io/images/nsoft.png","a4b60a037e1870b022a6c5f40880dc56"],["/cliqq.io/images/onsen-ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["/cliqq.io/images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["/cliqq.io/images/pay-wallet.png","9b1e85c2bcb425465250ebf3540e4546"],["/cliqq.io/images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["/cliqq.io/images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["/cliqq.io/images/pubnub.png","c8adaae8b1a592516f7791ad82ab25c3"],["/cliqq.io/images/search-by-algolia.png","3f22d84b817bb896bd5bef0705ff8fc7"],["/cliqq.io/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/cliqq.io/images/someline.png","d6908ea0b99280afa9655c564d385833"],["/cliqq.io/images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["/cliqq.io/images/stdlib.png","2ec485cb1b307821c82a850f440fab3f"],["/cliqq.io/images/strikingly.png","ef615f471302167fbc882f4a5f783dd1"],["/cliqq.io/images/tde.png","8b43557cde5163b9c7a11cc541cc9b97"],["/cliqq.io/images/teamextension.png","29f354472d73a5568552f9475d48d5a4"],["/cliqq.io/images/tmvuejs2.png","3ee9bd2b594a166ccc14995630c81cbe"],["/cliqq.io/images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["/cliqq.io/images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["/cliqq.io/images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["/cliqq.io/images/user-management.png","64d0af4c7ca02b68cb3548384f1c2c06"],["/cliqq.io/images/valuecoders.png","1bccdd1583af0609cada15218d98a2f4"],["/cliqq.io/images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["/cliqq.io/images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["/cliqq.io/images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["/cliqq.io/images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["/cliqq.io/images/vuejobs.svg","c31e68ce1f2663afbe9655c368c6dd35"],["/cliqq.io/images/vuejsadmin.png","e517dc0c38a982cfca2b123ce33dc261"],["/cliqq.io/images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["/cliqq.io/images/vueschool.png","cc8c47d63a2c5dc2e073357372e12048"],["/cliqq.io/images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["/cliqq.io/images/vuetron-heirarchy.gif","04444ec1376afad5deae6a3df0f16f46"],["/cliqq.io/images/xfive.png","2fd3304fe6a1b44d2bfd19876e454d0c"],["/cliqq.io/index.html","20f44fc8a60f3528f99462bad6664fbe"],["/cliqq.io/js/common.js","3e012abbd558261d697fb1bfb4ba598d"],["/cliqq.io/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/cliqq.io/js/smooth-scroll.min.js","53a7fcc785e987d5ed08302f36de6653"],["/cliqq.io/js/vue.js","1e99e929ad552078273d58192153ab2d"],["/cliqq.io/js/vue.min.js","6c81f02ad0bf8e12a66c18cab188d029"],["/cliqq.io/manifest.json","1f9d32296abfe6424fabf01ea92f7a4b"],["/cliqq.io/menu/index.html","6f8024dc6173d83fd35581cda006fd44"],["/cliqq.io/page/2/index.html","44a6342b73166a473d3f85d745671298"],["/cliqq.io/perf/index.html","c1b53926cf911cfa43e1bd2068d8786c"],["/cliqq.io/support-vuejs/index.html","9df117fe6bc81b9728f5ace8f89ab0ae"],["/cliqq.io/v2/api/index.html","c75ad4dd541ad2d325dc3a7d78fd1770"],["/cliqq.io/v2/cookbook/adding-instance-properties.html","6b5f4e858565b45c8944bc82293adbf8"],["/cliqq.io/v2/cookbook/avoiding-memory-leaks.html","ed4b84033e4d52f5b114723840e360e4"],["/cliqq.io/v2/cookbook/client-side-storage.html","2702a1a4e334eebf9b678774623d3737"],["/cliqq.io/v2/cookbook/creating-custom-scroll-directives.html","4311d9cdcf27d7193a20150a28257bed"],["/cliqq.io/v2/cookbook/debugging-in-vscode.html","4dd8c5bdfdcebd73ff589d2d4f6006bc"],["/cliqq.io/v2/cookbook/dockerize-vuejs-app.html","4075e66183c9c478bf4712eb3d4efe01"],["/cliqq.io/v2/cookbook/editable-svg-icons.html","263ba11448906bdc5de324dfc8c19a67"],["/cliqq.io/v2/cookbook/form-validation.html","ee41670450f26161c7865b57ef2694fd"],["/cliqq.io/v2/cookbook/index.html","7836b727383484d7011a792efe40fae5"],["/cliqq.io/v2/cookbook/packaging-sfc-for-npm.html","9bb870d2c3d979d4563803b6b4ff23fe"],["/cliqq.io/v2/cookbook/serverless-blog.html","468009344e31da6cc71a0de833930c60"],["/cliqq.io/v2/cookbook/unit-testing-vue-components.html","6c58556e921dbd8aa64646e3d198a145"],["/cliqq.io/v2/cookbook/using-axios-to-consume-apis.html","a4703a0afb2d45ab3f050231032b4109"],["/cliqq.io/v2/examples/commits.html","9cd886bf04cc4e6e731af8ff1184b3f0"],["/cliqq.io/v2/examples/deepstream.html","ba3d43dff440ee7cfdff2761c00230f7"],["/cliqq.io/v2/examples/elastic-header.html","05e55171c94359ecf88fb3f007552ac9"],["/cliqq.io/v2/examples/firebase.html","975d0667c06f6f925dccac27ca5d0375"],["/cliqq.io/v2/examples/grid-component.html","4f6aa3ec37b94dfcb35317ca8bf2e2c9"],["/cliqq.io/v2/examples/hackernews.html","f9e5489adf2833fc667131626dbb7e4e"],["/cliqq.io/v2/examples/index.html","9c800df1ad27fe6599ac67273ffe9851"],["/cliqq.io/v2/examples/modal.html","2a9ce6a569d761fcf9e32229d6daf09e"],["/cliqq.io/v2/examples/select2.html","ae36d04c9911dd13f46cd3e9084ebee9"],["/cliqq.io/v2/examples/svg.html","66e3c940df191f2e86eb9edeb0f7a9d2"],["/cliqq.io/v2/examples/todomvc.html","5073c033225bc28661b956756e821fbd"],["/cliqq.io/v2/examples/tree-view.html","bfeb2d00df96b04f9c3f84ff28d3dcd5"],["/cliqq.io/v2/guide/account-dashboard.html","79e474a7288a1d87258d2c56d52bbf2c"],["/cliqq.io/v2/guide/index.html","7c22c888674425f2d0a2aced0da7b579"],["/cliqq.io/v2/guide/installation.html","9c869e779dc3732773480857f6a00885"],["/cliqq.io/v2/search/index.html","b3896458031d54bb61e21227535c91d8"],["/cliqq.io/v2/style-guide/index.html","2cd9d73f1ffc2481d7e1c8e04fd18597"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




