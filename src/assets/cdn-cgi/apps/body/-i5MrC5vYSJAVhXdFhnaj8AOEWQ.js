;
if (CloudflareApps.matchPage(CloudflareApps.installs['mpNCQqxqlQmD'].URLPatterns)) {
    (function(modules) {
        var installedModules = {};

        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.r = function(exports) {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
            }
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
        };
        __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, 'default', {
                enumerable: true,
                value: value
            });
            if (mode & 2 && typeof value != 'string')
                for (var key in value) __webpack_require__.d(ns, key, function(key) {
                    return value[key];
                }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module['default'];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, 'a', getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = "./src/index.js");
    })
    ({
        "./src/index.js": (function(module, exports, __webpack_require__) {
            "use strict";

            function get_host_name() {
                if ("mpNCQqxqlQmD" == 'preview') {
                    console.log('preview mode');
                    return CloudflareApps.proxy.originalURL.parsed.host;
                } else {
                    return window.location.hostname;
                }
            }

            function check_plan() {
                var options = CloudflareApps.installs['mpNCQqxqlQmD'].options;
                var product = CloudflareApps.installs['mpNCQqxqlQmD'].product;
                if (product && product.id === 'google-analytics-pro') {
                    console.log('CF-GA: Thank you for installing pro :)');
                } else {
                    console.log('CF-GA: Please update to pro in order to get more features.');
                }
            }

            function init() {
                check_plan();
                var current_host = get_host_name();
                var sub_domain_tracker_ids = CloudflareApps.installs['mpNCQqxqlQmD'].options.subdomain_tracker_ids;
                var options = CloudflareApps.installs['mpNCQqxqlQmD'].options;
                var product = CloudflareApps.installs['mpNCQqxqlQmD'].product;
                if (product && product.id === 'google-analytics-pro' && true) {
                    var subdomain_tracker = sub_domain_tracker_ids.filter(function(item) {
                        return item.subdomain == current_host;
                    });
                    if (subdomain_tracker[0] && subdomain_tracker[0].tracker_id) {
                        send_to_google_analytics(subdomain_tracker[0].tracker_id);
                    } else {
                        send_to_google_analytics(CloudflareApps.installs['mpNCQqxqlQmD'].options.tracker_id);
                    }
                } else {
                    send_to_google_analytics(CloudflareApps.installs['mpNCQqxqlQmD'].options.tracker_id);
                }
            }

            function send_to_google_analytics(tracker_id) {
                console.log('CF-GA: ' + get_host_name() + " is using " + tracker_id);
                if (tracker_id != "UA-XXXXX-Y") {
                    var gtag = function gtag() {
                        dataLayer.push(arguments);
                    };
                    var url = "https://www.googletagmanager.com/gtag/js?id=" + tracker_id;
                    (function(i, s, o, g, r, a, m) {
                        i['GoogleAnalyticsObject'] = r;
                        i[r] = i[r] || function() {
                            (i[r].q = i[r].q || []).push(arguments);
                        }, i[r].l = 1 * new Date();
                        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                        a.async = 1;
                        a.src = g;
                        m.parentNode.insertBefore(a, m);
                    })(window, document, 'script', url, 'ga');
                    window.dataLayer = window.dataLayer || [];
                    gtag('js', new Date());
                    gtag('config', tracker_id);
                }
            }
            init();
        })
    });
}