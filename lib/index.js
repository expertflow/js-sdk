"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowserInfo = exports.postMessages = exports.authenticateRequest = exports.screenControl = exports.videoControl = exports.audioControl = exports.closeSession = exports.terminateCurrentSession = exports.closeVideo = exports.sendInvite = exports.dialCall = exports.webhookNotifications = exports.callbackRequest = exports.getConversationData = exports.getConversationDataByCustomerIdentifier = exports.setConversationDataByCustomerIdentifier = exports.setConversationData = exports.uploadToFileEngine = exports.sendJoinConversation = exports.resumeChat = exports.chatEnd = exports.sendMessage = exports.voiceRequest = exports.chatRequest = exports.eventListeners = exports.establishConnection = exports.formValidation = exports.getPreChatForm = exports.widgetConfigs = void 0;
var socket_io_client_1 = require("socket.io-client");
var socket;
var wssServerIp;
var uriServerIp;
var diallingURI;
var sipExtension;
var extensionPassword;
var enable_sip_logs;
var enableLogs;
var wssPort;
var IP;
var dialerURI;
var sipPassword;
var ext;
var session;
var mediaElement;
var mediaLocal;
var userAgent;
var ex;
var register = false;
var displayMediaStrea;
var toggleVideo;
var video;
var audio;
var screen;
var mediaAcquire = "end";
var endCallBtn = false;
var dialedNumber;
var callVariableArray = [];
// Initialize an object to keep track of function locks
var functionLocks = {};
var canCallFunction = true;
var callEndDialogId;
var endCall = false;
var calls = [];
var consultSession;
var registerer;
var againRegister = false;
var allSessions = null;
var remoteSession = null;
var loginId = null;
var wrapUpEnabler = null;
var agentInfo = false;
var callbackFunction = null;
var remoteStream;
var localStream;
var dialogStateData = null;
var inviteData = null;
var outBoundDialingData = null;
var consultCallData = null;
var sipConfigs = {};
var isConversationActive = false;
var dialogStateData1 = {
    event: "dialogState",
    response: {
        loginId: null,
        dialog: {
            id: null,
            fromAddress: null,
            dialedNumber: null,
            customerNumber: null,
            dnis: null,
            callType: null,
            ani: null,
            wrapUpReason: null,
            callEndReason: null,
            queueName: null,
            queueType: null,
            associatedDialogUri: null,
            secondaryId: null,
            participants: [
                {
                    actions: {
                        action: ["TRANSFER_SST", "HOLD", "SEND_DTMF", "DROP"],
                    },
                    mediaAddress: null,
                    mediaAddressType: "SIP.js/0.21.2-CTI/Expertflow",
                    startTime: null,
                    state: null,
                    stateCause: null,
                    stateChangeTime: null,
                    mute: false,
                },
            ],
            callVariables: {
                CallVariable: [],
            },
            state: null,
            isCallAlreadyActive: false,
            callbackNumber: null,
            outboundClassification: null,
            scheduledCallbackInfo: null,
            isCallEnded: 0,
            eventType: "PUT",
        },
    },
};
var outBoundDialingData12 = {
    event: "outboundDialing",
    response: {
        loginId: null,
        dialog: {
            id: null,
            ani: null,
            customerNumber: null,
            associatedDialogUri: null,
            callbackNumber: null,
            outboundClassification: null,
            scheduledCallbackInfo: null,
            isCallEnded: 0,
            eventType: "PUT",
            callType: null,
            queueName: null,
            queueType: null,
            dialedNumber: null,
            dnis: null,
            secondaryId: null,
            state: "INITIATING",
            isCallAlreadyActive: false,
            wrapUpReason: null,
            callEndReason: null,
            fromAddress: null,
            callVariables: {
                CallVariable: [],
            },
            participants: [
                {
                    actions: {
                        action: ["TRANSFER_SST", "HOLD", "SEND_DTMF", "DROP"],
                    },
                    mediaAddress: null,
                    mediaAddressType: "SIP.js/0.21.2-CTI/Expertflow",
                    startTime: null,
                    state: null,
                    stateCause: null,
                    stateChangeTime: null,
                    mute: false,
                },
            ],
        },
    },
};
var consultCallData1 = {
    event: "ConsultCall",
    response: {
        loginId: null,
        dialog: {
            id: null,
            ani: null,
            customerNumber: null,
            associatedDialogUri: null,
            callbackNumber: null,
            outboundClassification: null,
            scheduledCallbackInfo: null,
            isCallEnded: 0,
            eventType: "PUT",
            callType: null,
            queueName: null,
            queueType: null,
            dialedNumber: null,
            dnis: null,
            secondaryId: null,
            state: "INITIATING",
            isCallAlreadyActive: false,
            wrapUpReason: null,
            callEndReason: null,
            fromAddress: null,
            callVariables: {
                CallVariable: [],
            },
            participants: [
                {
                    actions: {
                        action: ["TRANSFER_SST", "HOLD", "SEND_DTMF", "DROP"],
                    },
                    mediaAddress: null,
                    mediaAddressType: "SIP.js/0.21.2-CTI/Expertflow",
                    startTime: null,
                    state: null,
                    stateCause: null,
                    stateChangeTime: null,
                    mute: false,
                },
            ],
        },
    },
};
var inviteData1 = {
    event: "newInboundCall",
    response: {
        loginId: null,
        dialog: {
            id: null,
            ani: null,
            customerNumber: null,
            associatedDialogUri: null,
            callbackNumber: null,
            outboundClassification: null,
            scheduledCallbackInfo: null,
            isCallEnded: 0,
            eventType: "PUT",
            callType: null,
            queueName: null,
            queueType: null,
            dialedNumber: null,
            dnis: null,
            secondaryId: null,
            state: "ALERTING",
            isCallAlreadyActive: false,
            wrapUpReason: null,
            callEndReason: null,
            fromAddress: null,
            callVariables: {
                CallVariable: [],
            },
            participants: [
                {
                    actions: {
                        action: ["ANSWER"],
                    },
                    mediaAddress: null,
                    mediaAddressType: "SIP.js/0.21.2-CTI/Expertflow",
                    startTime: null,
                    state: null,
                    stateCause: null,
                    stateChangeTime: null,
                    mute: false,
                },
            ],
        },
    },
};
/* Function to Include js files in the customer application*/
// function include(file:any) {
//   var script = document.createElement('script');
//   script.src = file;
//   script.type = 'text/javascript';
//   script.defer = true;
//   document?.getElementsByTagName('head').item(0).appendChild(script);
// }
function include(file) {
    var script = document.createElement("script");
    script.src = file;
    script.type = "text/javascript";
    script.defer = true;
    var head = document === null || document === void 0 ? void 0 : document.getElementsByTagName("head").item(0);
    if (head) {
        console.log("sip script loaded successfully");
        head.appendChild(script);
    }
}
// /* Include js files */
// include("https://cdn.socket.io/4.5.4/socket.io.min.js");
include("https://cdnjs.cloudflare.com/ajax/libs/sip.js/0.15.11/sip-0.15.11.min.js");
/**
 *
 * @returns
 */
var getDynamicExt = function () {
    return new Promise(function (resolve, reject) {
        resolve(sipExtension);
    });
};
function widgetConfigs(ccmUrl, widgetIdentifier, callback) {
    fetch("".concat(ccmUrl, "/widget-configs/").concat(widgetIdentifier))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        callback(data);
        wssServerIp = data.webRtc.wssFs;
        uriServerIp = data.webRtc.uriFs;
        diallingURI = data.webRtc.diallingUri;
        sipExtension = data.webRtc.sipExtension;
        extensionPassword = data.webRtc.extensionPassword;
        enable_sip_logs = data.webRtc.enabledSipLogs;
        enableLogs = enable_sip_logs;
        IP = uriServerIp;
        dialerURI = "sip:" + diallingURI + "@" + uriServerIp;
        sipPassword = extensionPassword;
    });
}
exports.widgetConfigs = widgetConfigs;
function getPreChatForm(formUrl, formId, callback) {
    fetch("".concat(formUrl, "/forms/").concat(formId))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        callback(data);
    });
}
exports.getPreChatForm = getPreChatForm;
function formValidation(formUrl, callback) {
    fetch("".concat(formUrl, "/formValidation"))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        callback(data);
    });
}
exports.formValidation = formValidation;
function establishConnection(socket_url, serviceIdentifier, channelCustomerIdentifier, callback) {
    try {
        if (socket !== undefined && socket.connected) {
            console.log("Resuming Existing Connection");
            eventListeners(function (data) {
                callback(data);
            });
        }
        else {
            if (socket_url !== "") {
                console.log("Starting New Connection");
                var origin_1 = new URL(socket_url).origin;
                var path = new URL(socket_url).pathname;
                socket = (0, socket_io_client_1.io)(origin_1, {
                    path: path == "/" ? "" : path + "/socket.io",
                    auth: {
                        serviceIdentifier: serviceIdentifier,
                        channelCustomerIdentifier: channelCustomerIdentifier,
                    },
                });
                eventListeners(function (data) {
                    callback(data);
                });
            }
        }
    }
    catch (error) {
        callback(error);
    }
}
exports.establishConnection = establishConnection;
function eventListeners(callback) {
    socket === null || socket === void 0 ? void 0 : socket.on("connect", function () {
        if ((socket === null || socket === void 0 ? void 0 : socket.id) !== undefined) {
            console.log("you are connected with socket:", socket);
            var error_1 = localStorage.getItem("widget-error");
            if (error_1) {
                callback({ type: "SOCKET_RECONNECTED", data: socket });
            }
            else {
                callback({ type: "SOCKET_CONNECTED", data: socket });
            }
        }
    });
    socket === null || socket === void 0 ? void 0 : socket.on("CHANNEL_SESSION_STARTED", function (data) {
        console.log("Channel Session Started Data: ", data);
        callback({ type: "CHANNEL_SESSION_STARTED", data: data });
    });
    socket === null || socket === void 0 ? void 0 : socket.on("MESSAGE_RECEIVED", function (message) {
        console.log("MESSAGE_RECEIVED received: ", message);
        callback({ type: "MESSAGE_RECEIVED", data: message });
    });
    socket === null || socket === void 0 ? void 0 : socket.on("disconnect", function (reason) {
        console.error("Connection lost with the server: ", reason);
        callback({ type: "SOCKET_DISCONNECTED", data: reason });
    });
    socket === null || socket === void 0 ? void 0 : socket.on("connect_error", function (error) {
        console.log("unable to establish connection with the server: ", error.message);
        localStorage.setItem("widget-error", "1");
        callback({ type: "CONNECT_ERROR", data: error });
    });
    socket === null || socket === void 0 ? void 0 : socket.on("CHAT_ENDED", function (data) {
        console.log("CHAT_ENDED received: ", data);
        callback({ type: "CHAT_ENDED", data: data });
        socket === null || socket === void 0 ? void 0 : socket.disconnect();
    });
    socket === null || socket === void 0 ? void 0 : socket.on("ERRORS", function (data) {
        console.error("ERRORS received: ", data);
        callback({ type: "ERRORS", data: data });
    });
}
exports.eventListeners = eventListeners;
function chatRequest(data) {
    try {
        if (data) {
            var additionalAttributesData = [];
            var webChannelDataObj = {
                key: "WebChannelData",
                type: "WebChannelData",
                value: {
                    browserDeviceInfo: data.data.browserDeviceInfo,
                    queue: data.data.queue,
                    locale: data.data.locale,
                    formData: data.data.formData,
                },
            };
            additionalAttributesData.push(webChannelDataObj);
            var obj = {
                channelCustomerIdentifier: data.data.channelCustomerIdentifier,
                serviceIdentifier: data.data.serviceIdentifier,
                additionalAttributes: additionalAttributesData,
            };
            if (socket) {
                socket.emit("CHAT_REQUESTED", obj);
                console.log("SEND CHAT_REQUESTED DATA:", obj);
            }
        }
    }
    catch (error) {
        throw error;
    }
}
exports.chatRequest = chatRequest;
function voiceRequest(data) {
    try {
        if (data) {
            var additionalAttributesData = [];
            var webChannelDataObj = {
                key: "WebChannelData",
                type: "WebChannelData",
                value: {
                    browserDeviceInfo: data.data.browserDeviceInfo,
                    queue: data.data.queue,
                    locale: data.data.locale,
                    formData: data.data.formData,
                },
            };
            additionalAttributesData.push(webChannelDataObj);
            var obj = {
                channelCustomerIdentifier: data.data.channelCustomerIdentifier,
                serviceIdentifier: data.data.serviceIdentifier,
                additionalAttributes: additionalAttributesData,
            };
            if (socket) {
                socket.emit("VOICE_REQUESTED", obj);
                console.log("SEND VOICE_REQUESTED DATA:", obj);
            }
        }
    }
    catch (error) {
        throw error;
    }
}
exports.voiceRequest = voiceRequest;
function sendMessage(data) {
    data.timestamp = "";
    if (socket) {
        socket.emit("MESSAGE_RECEIVED", data, function (res) {
            console.log("[sendMessage] ", res);
            if (res.code !== 200) {
                console.log("message not sent");
            }
        });
    }
}
exports.sendMessage = sendMessage;
function chatEnd(data) {
    // Chat Disconnection Socket Event
    if (socket) {
        socket.emit("CHAT_ENDED", data);
    }
}
exports.chatEnd = chatEnd;
/**
 *
 * @param {*} data
 */
function resumeChat(data, callback) {
    if (socket) {
        socket.emit("CHAT_RESUMED", data, function (res) {
            if (res) {
                console.log(res, "resume chat response in sdk.");
                callback(res);
            }
        });
    }
}
exports.resumeChat = resumeChat;
/**
 *
 * @param {*} data
 */
function sendJoinConversation(data) {
    socket === null || socket === void 0 ? void 0 : socket.emit("joinConversation", data, function (res) {
        console.log("[sendJoinConversation] ", data);
        return res;
    });
}
exports.sendJoinConversation = sendJoinConversation;
/**
 *
 * @param {*} customer
 */
// export function getInitChat(customer: any) {
//   console.log("[initChat] customer ", customer);
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(customer),
//   };
//   fetch(`${config?.ServerUrl}/api/customer/init`, requestOptions)
//     .then((response) => response.json())
//     .then((data) => {
//       // onInitChat(data);
//       isConversationActive = true;
//     })
//     .catch((error) => {
//       console.error(`[initChat] `, error);
//       // onInitChat({ error: error });
//     });
// }
/**
 * File Upload to File Engine Function
 * @param {*} formData
 * @param {*} callback
 */
function uploadToFileEngine(fileServerUrl, formData, callback) {
    fetch("".concat(fileServerUrl, "/api/uploadFileStream"), {
        method: "POST",
        body: formData,
    })
        .then(function (response) { return response.json(); })
        .then(function (result) {
        console.log("Success: ", result);
        callback(result);
    })
        .catch(function (error) {
        console.error("Error: ", error);
        callback(error);
    });
}
exports.uploadToFileEngine = uploadToFileEngine;
/**
 * Set Conversation Data Api
 */
function setConversationData(url, conversationId, data) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(url, "/").concat(conversationId, "/conversation-data"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
exports.setConversationData = setConversationData;
/**
 * Set Conversation Data Api By Customer Channel Identifier
 */
function setConversationDataByCustomerIdentifier(url, channelIdentifier, data, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(url, "/").concat(channelIdentifier, "/conversation-data-by-identifier"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data),
                        })];
                case 1:
                    response = _a.sent();
                    if (response.status === 403) {
                        console.error("Forbidden: The server returned a 403 Forbidden response.");
                        callback(response);
                    }
                    if (!response.ok) {
                        console.error("Network response was not ok");
                        callback(response);
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log("Success:", result);
                    callback(result);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error:", error_2);
                    callback(error_2); // Re-throw the error for the caller to handle
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.setConversationDataByCustomerIdentifier = setConversationDataByCustomerIdentifier;
/**
 * Get Conversation Data Api By Customer Identifier
 */
function getConversationDataByCustomerIdentifier(url, channelIdentifier, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data_1, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, fetch("".concat(url, "/get/").concat(channelIdentifier), {
                            method: "GET", // Specify the HTTP method as GET
                            headers: {
                                "Content-Type": "application/json", // Set appropriate headers if needed
                            },
                        })];
                case 1:
                    response = _a.sent();
                    if (!(response.status === 403)) return [3 /*break*/, 2];
                    console.error("Forbidden: The server returned a 403 Forbidden response.");
                    callback(response);
                    return [3 /*break*/, 5];
                case 2:
                    if (!!response.ok) return [3 /*break*/, 3];
                    console.error("Failed to fetch data from ".concat(url, "/get/").concat(channelIdentifier, ": ").concat(response.status, " ").concat(response.statusText));
                    callback(response);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    data_1 = _a.sent();
                    callback(data_1);
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_3 = _a.sent();
                    console.error("Error:", error_3);
                    callback(error_3); // Re-throw the error for the caller to handle
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.getConversationDataByCustomerIdentifier = getConversationDataByCustomerIdentifier;
/**
 * Get Conversation Data Api
 */
function getConversationData(url, conversationId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(url, "/").concat(conversationId, "/conversation-data"))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to fetch data from ".concat(url, "/").concat(conversationId, "/conversation-data: ").concat(response.status, " ").concat(response.statusText));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.getConversationData = getConversationData;
/**
 * Callback Request To ECM
 * @param {*} payload
 * @param {*} url
 */
function callbackRequest(url, payload, callback) {
    try {
        // Make an API Call
        fetch("".concat(url), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            // Handle the API response here
            console.log("API response:", data);
            callback(data);
        })
            .catch(function (error) {
            // Handle any errors that occur during the API call
            console.error("API Call Error", error);
            callback(error);
        });
    }
    catch (error) {
        console.error("API Function Error", error);
        callback(error);
    }
}
exports.callbackRequest = callbackRequest;
/**
 * Webhook Notifications Functions
 * @param {*} data
 */
function webhookNotifications(url, data) {
    var notifications = {
        text: undefined,
    };
    notifications["text"] = "".concat(data);
    fetch("".concat(url), {
        method: "POST",
        body: JSON.stringify(notifications),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
        .then(function (response) { return response.json(); })
        .then(function (result) {
        console.log("Success: ", result);
    })
        .catch(function (error) {
        console.error("Error: ", error);
    });
}
exports.webhookNotifications = webhookNotifications;
/**
 *
 * @param {*} eventsCallback
 */
function dialCall(eventsCallback) {
    getDynamicExt()
        .then(function (extension) {
        ext = extension;
        console.log(wssServerIp, "ip at call time");
        userAgent = new SIP.UA({
            uri: extension + "@" + uriServerIp,
            transportOptions: { wsServers: wssServerIp, traceSip: true },
            authorizationUser: extension,
            password: extensionPassword,
            log: {
                builtinEnabled: enableLogs,
                level: 3,
            },
            register: true,
        });
        userAgent.start();
        if (typeof eventsCallback === "function") {
            var event_1 = {
                event: "get_dynamic_ext",
                response: extension,
                cause: "",
            };
            eventsCallback(event_1);
        }
        userAgent.on("unregistered", function (response, cause) {
            register = false;
            if (typeof eventsCallback === "function") {
                var event_2 = {
                    event: "unregistered",
                    response: response,
                    cause: cause,
                };
                eventsCallback(event_2);
            }
        });
        userAgent.on("registered", function () {
            register = true;
            if (typeof eventsCallback === "function") {
                var event_3 = {
                    event: "registered",
                    response: "",
                    cause: "",
                };
                eventsCallback(event_3);
            }
        });
        userAgent.on("registrationFailed", function (response, cause) {
            if (typeof eventsCallback === "function") {
                var event_4 = {
                    event: "registrationFailed",
                    response: response,
                    cause: cause,
                };
                eventsCallback(event_4);
            }
        });
    })
        .catch(function (rej) {
        if (typeof eventsCallback === "function") {
            var event_5 = {
                event: "get_dynamic_ext",
                response: "",
                cause: rej,
            };
            eventsCallback(event_5);
        }
    });
}
exports.dialCall = dialCall;
/**
 *
 * @param {*} mediaType
 * @param {*} videoName
 * @param {*} videoLocal
 * @param {*} userData
 * @param {*} eventsCallback
 * @returns
 */
var sendInvite = function (mediaType, videoName, videoLocal, userData, eventsCallback) {
    return new Promise(function (resolve, reject) {
        var mediaConstraints = { audio: true, video: true };
        toggleVideo = "web_cam";
        mediaElement = document.getElementById(videoName);
        if (videoLocal === "") {
            mediaLocal = "";
        }
        else {
            mediaLocal = document.getElementById(videoLocal);
        }
        audio = "true";
        if (mediaType === "audio") {
            mediaConstraints = { audio: true, video: false };
            video = "false";
        }
        else {
            mediaConstraints = { audio: true, video: true };
            video = "true";
        }
        screen = "false";
        console.log("invite function has been triggered");
        if (userData !== null) {
            var extraHeaderString = [];
            var index = 0;
            for (var key in userData) {
                if (typeof userData[key] === "string") {
                    var keyvalue = userData[key].trim();
                    extraHeaderString.push("X-variable" + index + ":" + key + "|" + keyvalue);
                    index++;
                }
                else {
                    console.warn("Value for key ".concat(key, " is not a string and will be skipped."));
                }
            }
        }
        session = userAgent.invite("sip:" + diallingURI + "@" + uriServerIp, {
            sessionDescriptionHandlerOptions: {
                constraints: mediaConstraints,
            },
            extraHeaders: extraHeaderString,
        });
        if (typeof eventsCallback === "function") {
            var event_6 = {
                event: "Channel Creating",
                response: "",
                cause: "",
            };
            eventsCallback(event_6);
        }
        session.on("accepted", function () {
            // Assumes you have a media element on the DOM
            var remoteStream = new MediaStream();
            if (video === "false") {
                console.log("closing video");
            }
            session.sessionDescriptionHandler.peerConnection
                .getReceivers()
                .forEach(function (receiver) {
                if (receiver.track) {
                    console.log(receiver.track);
                    remoteStream.addTrack(receiver.track);
                }
            });
            mediaElement.srcObject = remoteStream;
            if (mediaLocal !== "") {
                var localStream_1 = new MediaStream();
                session.sessionDescriptionHandler.peerConnection
                    .getSenders()
                    .forEach(function (sender) {
                    if (sender.track.kind === "video") {
                        console.log(sender.track);
                        localStream_1.addTrack(sender.track);
                    }
                });
                mediaLocal.srcObject = localStream_1;
            }
            if (typeof eventsCallback === "function") {
                var event_7 = {
                    event: "session-accepted",
                    response: "",
                    cause: "",
                };
                eventsCallback(event_7);
            }
        });
        session.on("progress", function (response) {
            if (typeof eventsCallback === "function") {
                var event_8 = {
                    event: "session-progress",
                    response: response,
                    cause: "",
                };
                eventsCallback(event_8);
            }
        });
        session.on("rejected", function (response, cause) {
            if (typeof eventsCallback === "function") {
                var event_9 = {
                    event: "session-rejected",
                    response: response,
                    cause: cause,
                };
                eventsCallback(event_9);
            }
        });
        session.on("failed", function (response, cause) {
            if (typeof eventsCallback === "function") {
                var event_10 = {
                    event: "session-failed",
                    response: response,
                    cause: cause,
                };
                eventsCallback(event_10);
            }
            var options = {
                all: true,
            };
            userAgent.unregister(options);
        });
        session.on("terminated", function (message, cause) {
            closeSession(eventsCallback);
            if (typeof eventsCallback === "function") {
                var event_11 = {
                    event: "session-terminated",
                    response: message,
                    cause: cause,
                };
                eventsCallback(event_11);
            }
        });
        session.on("bye", function (request) {
            if (typeof eventsCallback === "function") {
                var event_12 = {
                    event: "session-bye",
                    response: request,
                    cause: "",
                };
                eventsCallback(event_12);
            }
        });
        session.on("iceConnectionDisconnected", function () {
            if (typeof eventsCallback === "function") {
                var event_13 = {
                    event: "session-iceConnectionDisconnected",
                    response: "request",
                    cause: "",
                };
                eventsCallback(event_13);
            }
        });
        session.on("SessionDescriptionHandler-created", function () {
            session.sessionDescriptionHandler.on("getDescription", function (sdpWrapper) {
                if (typeof eventsCallback === "function") {
                    var event_14 = {
                        event: "session-SessionDescriptionHandler-getDescription",
                        response: sdpWrapper,
                        cause: "",
                    };
                    eventsCallback(event_14);
                }
            });
            session.sessionDescriptionHandler.on("Media acquire start", function () {
                mediaAcquire = "start";
                if (typeof eventsCallback === "function") {
                    var event_15 = {
                        event: "session-SessionDescriptionHandler-Media acquire start",
                        response: "",
                        cause: "",
                    };
                    eventsCallback(event_15);
                }
            });
            session.sessionDescriptionHandler.on("Media acquire end", function () {
                if (endCallBtn === true) {
                    terminateCurrentSession(function () {
                        eventsCallback();
                    });
                    endCallBtn = false;
                }
                mediaAcquire = "end";
                if (typeof eventsCallback === "function") {
                    var event_16 = {
                        event: "session-SessionDescriptionHandler-Media acquire end",
                        response: "",
                        cause: "",
                    };
                    eventsCallback(event_16);
                }
            });
            if (typeof eventsCallback === "function") {
                var event_17 = {
                    event: "session-SessionDescriptionHandler-created",
                    response: "",
                    cause: "",
                };
                eventsCallback(event_17);
            }
        });
        resolve("successful");
    });
};
exports.sendInvite = sendInvite;
/**
 * Close Video Function
 */
function closeVideo() {
    var pc = session.sessionDescriptionHandler.peerConnection;
    pc.getSenders().find(function (s) {
        if (s.track.readyState == "live" && s.track.kind === "video") {
            s.track.stop();
        }
    });
}
exports.closeVideo = closeVideo;
/**
 *
 * @param {*} eventsCallback
 */
/**
 *
 * @param {*} eventsCallback
 */
function terminateCurrentSession(eventsCallback) {
    promise1
        .then(function (value) {
        userAgent.stop();
    })
        .then(function () {
        return userAgent.transport.disconnect();
    })
        .then(function () {
        var options = {
            all: true,
        };
        return userAgent.unregister(options);
    })
        .then(function () {
        if (typeof eventsCallback === "function") {
            var event_18 = {
                event: "session-session_ended",
                response: "userAgent unregistered",
                cause: "",
            };
            eventsCallback(event_18);
        }
    })
        .catch(function (error) {
        if (typeof eventsCallback === "function") {
            var event_19 = {
                event: "session-termination-failed",
                response: "An error occurred during session termination",
                cause: error.message,
            };
            eventsCallback(event_19);
        }
    });
}
exports.terminateCurrentSession = terminateCurrentSession;
/**
 * Promise
 * @param {resolve , reject}
 */
var promise1 = new Promise(function (resolve, reject) {
    resolve("Success!");
});
/**
 *
 *
 * @param {*} eventsCallback
 */
function closeSession(eventsCallback) {
    if (mediaAcquire === "start") {
        endCallBtn = true;
        if (typeof eventsCallback === "function") {
            var event_20 = {
                event: "session-terminated",
                response: "Session terminated due to media acquire start",
                cause: "",
            };
            eventsCallback(event_20);
        }
    }
    else {
        terminateCurrentSession(eventsCallback);
    }
}
exports.closeSession = closeSession;
/**
 * Audio Call Control
 */
function audioControl() {
    var pc = session.sessionDescriptionHandler.peerConnection;
    if (audio === "true") {
        pc.getSenders().find(function (s) {
            console.log(s.track.kind + "--------------" + s.track.readyState);
            if (s.track.readyState == "live" && s.track.kind === "audio") {
                s.track.stop();
            }
        });
        audio = "false";
    }
    else {
        navigator.mediaDevices
            .getUserMedia({
            audio: true,
        })
            .then(function (stream) {
            var audioTrack = stream.getAudioTracks()[0];
            var sender = pc.getSenders().find(function (s) {
                return s.track.kind == audioTrack.kind;
            });
            console.log("found sender:", sender);
            sender.replaceTrack(audioTrack);
        })
            .catch(function (err) {
            console.error("Error happens:", err);
        });
        audio = "true";
    }
}
exports.audioControl = audioControl;
/**
 * Video Call Control
 */
function videoControl() {
    var pc = session.sessionDescriptionHandler.peerConnection;
    if (video === "true") {
        pc.getSenders().find(function (s) {
            console.log(s.track.kind + "--------------" + s.track.readyState);
            if (s.track.readyState == "live" && s.track.kind === "video") {
                s.track.stop();
            }
        });
        video = "false";
    }
    else {
        navigator.mediaDevices
            .getUserMedia({
            video: true,
        })
            .then(function (stream) {
            var videoTrack = stream.getVideoTracks()[0];
            var sender = pc.getSenders().find(function (s) {
                return s.track.kind == videoTrack.kind;
            });
            console.log("found sender:", sender);
            sender.replaceTrack(videoTrack);
            mediaLocal.srcObject = stream;
            mediaLocal.play();
        })
            .catch(function (err) {
            console.error("Error happens:", err);
        });
        video = "true";
    }
}
exports.videoControl = videoControl;
/**
 * ScreenControl
 */
function screenControl() {
    if (screen === "false") {
        screen = "true";
    }
    else {
    }
}
exports.screenControl = screenControl;
/**
 * Webhook Notifications Functions
 * @param {*} data
 */
function authenticateRequest(authenticatorUrl, authData, callback) {
    var _this = this;
    console.log("authenticateRequest: in sdk function:", JSON.stringify(authData));
    fetch("".concat(authenticatorUrl, "/verifySecureLink"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
    })
        .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
        var contentType, errorMessage, errorData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contentType = response.headers.get("content-type");
                    if (!!response.ok) return [3 /*break*/, 4];
                    errorMessage = "Network response was not ok";
                    if (!(response.status === 400)) return [3 /*break*/, 2];
                    return [4 /*yield*/, response.json()];
                case 1:
                    errorData = _a.sent();
                    errorMessage = "400 Bad Request";
                    // Custom handling for the error response
                    callback({ error: true, message: errorMessage, data: errorData });
                    throw new Error(errorMessage); // Stop the promise chain
                case 2:
                    if (response.status === 500) {
                        errorMessage = "500 Internal Server Error";
                    }
                    _a.label = 3;
                case 3:
                    callback({ error: true, message: errorMessage });
                    throw new Error(errorMessage); // Stop the promise chain
                case 4:
                    if (contentType && contentType.includes("application/json")) {
                        return [2 /*return*/, response.json()];
                    }
                    else {
                        return [2 /*return*/, response.text()]; // Handle plain text response
                    }
                    return [2 /*return*/];
            }
        });
    }); })
        .then(function (result) {
        // This will not be executed if an error was thrown in the previous block
        // console.log('Authentication Api Success: ', result);
        // Check for the presence of reasonCode and message fields
        if ("reasonCode" in result && "message" in result) {
            console.log("Authentication Api Error: ", result);
            callback({
                status: 400,
                error: true,
                data: result,
                message: "Something went wrong!!",
            });
        }
        else {
            console.log("Authentication Api Success: ", result);
            callback({
                status: 200,
                error: false,
                data: result,
                message: "Authentication Successful!!!",
            });
        }
    })
        .catch(function (error) {
        // If an error is thrown in any of the previous blocks, it will be caught here
        console.error("Authentication Api Error: ", error);
        // Optionally, call the callback with an error if not already done
        // callback({ error: true, message: 'Something went wrong, please try again!' });
        // Since we're handling specific errors earlier, this catch might only be for unexpected errors
    });
}
exports.authenticateRequest = authenticateRequest;
function postMessages(obj, callback) {
    console.log(obj);
    var sipConfigs = {}; // Assuming sipConfigs is declared elsewhere
    if (Object.keys(sipConfigs).length === 0)
        sipConfigs = obj.parameter.sipConfig;
    switch (obj.action) {
        case "login":
            if (typeof obj.parameter.clientCallbackFunction === "function") {
                if (sipConfigs.uriFs !== null && sipConfigs.uriFs !== undefined) {
                    connect_useragent(obj.parameter.extension, sipConfigs.uriFs, sipConfigs.extensionPassword, sipConfigs.wssFs, sipConfigs.enabledSipLogs, obj.parameter.clientCallbackFunction);
                    callbackFunction = obj.parameter.clientCallbackFunction; // Assuming callbackFunction is declared elsewhere
                }
                else {
                    error("invalidState", obj.parameter.extension, "Server configurations not fetched ", obj.parameter.clientCallbackFunction);
                }
            }
            break;
        case "logout":
            loader3(obj.parameter.clientCallbackFunction);
            break;
        case "makeCall":
            initiate_call(obj.parameter.calledNumber, obj.parameter.Destination_Number, obj.parameter.callType, obj.parameter.authData, obj.parameter.clientCallbackFunction);
            break;
        case "SST":
            blind_transfer(obj.parameter.numberToTransfer, obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
            break;
        case "SST_Queue":
            blind_transfer_queue(obj.parameter.numberToTransfer, obj.parameter.queue, obj.parameter.queueType, obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
            break;
        case "makeConsult":
            makeConsultCall(obj.parameter.numberToConsult, obj.parameter.clientCallbackFunction);
            break;
        case "consultTransfer":
            makeConsultTransferCall(obj.parameter.clientCallbackFunction);
            break;
        case "silentMonitor":
            console.log("Freeswitch do not support silentMonitor currently");
            break;
        case "answerCall":
            respond_call(obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
            break;
        case "releaseCall":
            terminate_call(obj.parameter.dialogId);
            break;
        case "rejectCall":
            console.log("Freeswitch do not support rejectCall currently");
            break;
        case "closeCall":
            console.log("Freeswitch do not support closeCall currently");
            break;
        case "end_call":
            console.log(obj);
            break;
        case "holdCall":
            phone_hold(obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
            break;
        case "retrieveCall":
            phone_unhold(obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
            break;
        case "mute_call":
            phone_mute(obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
            break;
        case "unmute_call":
            phone_unmute(obj.parameter.clientCallbackFunction, obj.parameter.dialogId);
            break;
        case "conferenceCall":
            console.log("Freeswitch do not support conferenceCall currently");
            break;
        case "makeNotReadyWithReason":
            console.log("Freeswitch do not support makeNotReadyWithReason currently");
            break;
        case "makeReady":
            console.log("Freeswitch do not support makeReady currently");
            break;
        case "makeWorkReady":
            console.log("Freeswitch do not support makeWorkReady currently");
            break;
        case "getDialog":
            console.log("Freeswitch do not support getDialog currently");
            break;
        case "getWrapUpReasons":
            console.log("Freeswitch do not support getWrapUpReasons currently");
            break;
        case "updateCallVariableData":
            console.log("Freeswitch do not support updateCallVariableData currently");
            break;
        case "updateWrapupData":
            console.log("Freeswitch do not support updateWrapupData currently");
            break;
        case "acceptCall":
            console.log("Freeswitch do not support updateWrapupData currently");
            break;
        case "dropParticipant":
            console.log("Freeswitch do not support dropParticipant currently");
            break;
        case "bargeIn":
            console.log("Freeswitch do not support bargeIn currently");
            break;
        case "SendDtmf":
            sendDtmf(obj.parameter.message, obj.parameter.dialogId, obj.parameter.clientCallbackFunction);
            break;
        case "team_agent_update_status":
            console.log(obj);
            break;
        case "team_agent_update_state":
            console.log(obj);
            break;
        case "team_agent_update_reg":
            console.log(obj);
            break;
        case "getState":
            console.log("Freeswitch do not support getState currently");
            break;
        case "getNotReadyLogoutReasons":
            console.log("Freeswitch do not support getNotReadyLogoutReasons currently");
            break;
        case "getTeamUsers":
            console.log("Freeswitch do not support getTeamUsers currently");
            break;
    }
}
exports.postMessages = postMessages;
function connect_useragent(extension, sip_uri, sip_password, wss, sip_log, callback) {
    var res = lockFunction("connect_useragent", 500); // --- seconds cooldown
    if (!res)
        return;
    var undefinedParams = checkUndefinedParams(connect_useragent, [
        extension,
        sip_uri,
        sip_password,
        wss,
        sip_log,
        callback,
    ]);
    if (undefinedParams.length > 0) {
        error("generalError", extension, "Error: The following parameter(s) are undefined or null or empty: ".concat(undefinedParams.join(", ")), callback);
        return;
    }
    var uri = SIP.UserAgent.makeURI("sip:" + extension + "@" + sip_uri);
    if (!uri) {
        console.log("Connect User Agent: Failed to create URI");
    }
    var config = {
        uri: uri,
        authorizationUsername: extension,
        authorizationPassword: sip_password,
        transportOptions: {
            server: wss, // wss Protocol
        },
        extraContactHeaderParams: ["X-Referred-By-Someone: Username"],
        extraHeaders: ["X-Referred-By-Someone12: Username12"],
        contactParams: { transport: "wss" },
        contactName: extension,
        /**
         * If true, a first provisional response after the 100 Trying will be sent automatically if UAC does not
         * require reliable provisional responses.
         * defaultValue `true`
         */
        sendInitialProvisionalResponse: true,
        refreshFrequency: 5000,
        delegate: {
            onTransportMessage: function (message) {
                console.log("SIP Transport message received:", message);
                // Handle the SIP transport message here
                // You can access the message content and headers
            },
            onConnect: function () {
                console.log("Network connectivity established");
                var event = {
                    event: "xmppEvent",
                    response: {
                        loginId: extension,
                        type: "IN_SERVICE",
                        description: "Connected",
                    },
                };
                callback(event);
                if (againRegister) {
                    registerer
                        .register()
                        .then(function (request) {
                        console.log("Successfully sent REGISTER");
                        console.log("Sent request = ", request);
                        againRegister = false;
                    })
                        .catch(function (error) {
                        console.error("Failed to send REGISTER", error.message);
                    });
                }
            },
            onDisconnect: function (error) {
                againRegister = true;
                console.log("Network connectivity lost going to unregister");
                error("networkIssue", extension, error.message, callback);
                endCall = true;
                if (!error) {
                    console.log("User agent stopped");
                    var event = {
                        event: "agentInfo",
                        response: {
                            loginId: extension,
                            extension: extension,
                            state: "LOGOUT",
                            cause: (error === null || error === void 0 ? void 0 : error.cause) || null,
                        },
                    };
                    callback(event);
                    return;
                }
                // On disconnect, cleanup invalid registrations
                registerer
                    .unregister()
                    .then(function (data) {
                    againRegister = true;
                })
                    .catch(function (e) {
                    // Unregister failed
                    console.log("Unregister failed  ", e);
                });
                // Only attempt to reconnect if network/server dropped the connection
                if (error) {
                    console.log("Only attempt to reconnect if network/server dropped the connection", error);
                    var event_21 = {
                        event: "xmppEvent",
                        response: {
                            loginId: extension,
                            type: "OUT_OF_SERVICE",
                            description: error.message,
                        },
                    };
                    callback(event_21);
                    attemptReconnection();
                }
            },
            onInvite: function (invitation) {
                console.log("INVITE received", invitation);
                inviteData = inviteData1;
                var sip_from = invitation.incomingInviteRequest.message.headers.From[0].raw.split(" <");
                var variableList = sip_from[0]
                    .substring(1, sip_from[0].length - 1)
                    .split("|");
                var systemDate = new Date();
                var dateTime = systemDate.toISOString();
                var dnis = sip_from[1].split(">;")[0];
                dialedNumber =
                    invitation.incomingInviteRequest.message.headers["X-Destination-Number"];
                dialedNumber =
                    dialedNumber != undefined ? dialedNumber[0].raw : loginId;
                callVariableArray = [];
                if (invitation.incomingInviteRequest) {
                    dialogStateData.event = "dialogState";
                    inviteData.event = "newInboundCall";
                    if (invitation.incomingInviteRequest.message.from._displayName ===
                        "conference") {
                        dialogStateData.response.dialog.callType = "conference";
                        inviteData.response.dialog.callType = "conference";
                    }
                    else if (invitation.incomingInviteRequest.message.headers["X-Calltype"] !==
                        undefined) {
                        var callType = invitation.incomingInviteRequest.message.headers["X-Calltype"][0]
                            .raw;
                        if (callType == "PROGRESSIVE") {
                            dialogStateData.response.dialog.callType = "OUTBOUND";
                            inviteData.response.dialog.callType = "OUTBOUND";
                            dialogStateData.event = "campaignCall";
                            inviteData.event = "campaignCall";
                            setTimeout(respond_call, sipConfigs.autoCallAnswer * 1000, callback);
                        }
                        else if (callType == "CONSULT") {
                            dialogStateData.response.dialog.callType = "CONSULT";
                            inviteData.response.dialog.callType = "CONSULT";
                            dialogStateData.event = "ConsultCall";
                            inviteData.event = "ConsultCall";
                        }
                    }
                    else {
                        dialogStateData.response.dialog.callType = "OTHER_IN";
                        inviteData.response.dialog.callType = "OTHER_IN";
                    }
                }
                var queueNameVal = invitation.incomingInviteRequest.message.headers["X-Queue"] !=
                    undefined
                    ? invitation.incomingInviteRequest.message.headers["X-Queue"][0]["raw"]
                    : "Nil";
                var queueTypeVal = invitation.incomingInviteRequest.message.headers["X-Queuetype"] !=
                    undefined
                    ? invitation.incomingInviteRequest.message.headers["X-Queuetype"][0]["raw"]
                    : "Nil";
                dialogStateData.response.dialog.callVariables.CallVariable =
                    callVariableArray;
                dialogStateData.response.loginId = loginId;
                dialogStateData.response.dialog.id =
                    invitation.incomingInviteRequest.message.headers["X-Call-Id"] !=
                        undefined
                        ? invitation.incomingInviteRequest.message.headers["X-Call-Id"][0]["raw"]
                        : invitation.incomingInviteRequest.message.headers["Call-ID"][0]["raw"];
                dialogStateData.response.dialog.ani = dnis
                    .split("sip:")[1]
                    .split("@")[0];
                dialogStateData.response.dialog.fromAddress = dnis
                    .split("sip:")[1]
                    .split("@")[0];
                dialogStateData.response.dialog.customerNumber = dnis
                    .split("sip:")[1]
                    .split("@")[0];
                dialogStateData.response.dialog.participants[0].mediaAddress = loginId;
                dialogStateData.response.dialog.dnis = dialedNumber;
                dialogStateData.response.dialog.participants[0].startTime = dateTime;
                dialogStateData.response.dialog.participants[0].stateChangeTime =
                    dateTime;
                dialogStateData.response.dialog.participants[0].state = "ALERTING";
                dialogStateData.response.dialog.state = "ALERTING";
                dialogStateData.response.dialog.dialedNumber = dialedNumber;
                dialogStateData.response.dialog.queueName =
                    queueNameVal == "Nil" ? null : queueNameVal;
                dialogStateData.response.dialog.queueType =
                    queueTypeVal == "Nil" ? null : queueTypeVal;
                inviteData.response.dialog.callVariables.CallVariable =
                    callVariableArray;
                inviteData.response.loginId = loginId;
                inviteData.response.dialog.dnis = dialedNumber;
                inviteData.response.dialog.id =
                    invitation.incomingInviteRequest.message.headers["X-Call-Id"] !=
                        undefined
                        ? invitation.incomingInviteRequest.message.headers["X-Call-Id"][0]["raw"]
                        : invitation.incomingInviteRequest.message.headers["Call-ID"][0]["raw"];
                inviteData.response.dialog.ani = dnis.split("sip:")[1].split("@")[0];
                inviteData.response.dialog.fromAddress = dnis
                    .split("sip:")[1]
                    .split("@")[0];
                inviteData.response.dialog.customerNumber = dnis
                    .split("sip:")[1]
                    .split("@")[0];
                inviteData.response.dialog.participants[0].mediaAddress = loginId;
                inviteData.response.dialog.participants[0].startTime = dateTime;
                inviteData.response.dialog.participants[0].stateChangeTime = dateTime;
                inviteData.response.dialog.participants[0].state = "ALERTING";
                inviteData.response.dialog.state = "ALERTING";
                inviteData.response.dialog.dialedNumber = dialedNumber;
                inviteData.response.dialog.queueName =
                    queueNameVal == "Nil" ? null : queueNameVal;
                inviteData.response.dialog.queueType =
                    queueTypeVal == "Nil" ? null : queueTypeVal;
                callback(inviteData);
                SendPostMessage(inviteData);
                callEndDialogId = inviteData.response.dialog.id;
                var index = getCallIndex(inviteData.response.dialog.id);
                if (index == -1) {
                    inviteData.session = invitation;
                    calls.push(inviteData);
                }
                remoteSession = invitation;
                allSessions = invitation;
                addSipCallback(invitation, "inbound", callback);
            },
            onAck: function (onACk) {
                console.log("onACk received", onACk);
            },
            onMessage: function (message) {
                console.log("MESSAGE received");
            },
            onNotify: function (notification) {
                console.log("NOTIFY received", notification);
            },
            onRefer: function (referral) {
                console.log("REFER onRefer received");
            },
            onSubscribe: function (subscription) {
                console.log("SUBSCRIBE received");
            },
            onReject: function (response) {
                console.log("onReject response = ", response);
            },
        },
    };
    userAgent = new SIP.UserAgent(config);
    userAgent
        .start()
        .then(function () {
        console.log("Connected");
        registerer = new SIP.Registerer(userAgent);
        // Setup registerer state change handler
        registerer.stateChange.addListener(function (newState) {
            console.log("newState:", newState);
            switch (newState) {
                case SIP.RegistererState.Registered:
                    console.log("Registered");
                    if (dialogStateData == null)
                        dialogStateData = dialogStateData1;
                    if (dialogStateData.response.dialog.state == "ACTIVE" &&
                        endCall == true) {
                        //need to setup for loop here .
                        setTimeout(terminateAllCalls, 5000);
                        endCall = false;
                    }
                    loginId = extension;
                    dialogStateData.response.loginId = extension;
                    console.log(" connected registered", registerer);
                    var event = {
                        event: "agentInfo",
                        response: {
                            loginId: extension,
                            extension: extension,
                            state: "LOGIN",
                            cause: null,
                        },
                    };
                    if (!agentInfo) {
                        callback(event);
                        callback({
                            event: "dialogState",
                            response: {
                                loginId: extension,
                                dialog: null,
                            },
                        });
                        agentInfo = true;
                    }
                    break;
                case SIP.RegistererState.Unregistered:
                    console.log("Unregistered", registerer);
                    if (!againRegister) {
                        var event = {
                            event: "agentInfo",
                            response: {
                                loginId: extension,
                                extension: extension,
                                state: "LOGOUT",
                                cause: null,
                            },
                        };
                        callback(event);
                        dialogStateData = null;
                        loginId = null;
                        agentInfo = false;
                        userAgent.delegate = null;
                        userAgent = null;
                        allSessions = null;
                    }
                    break;
                case SIP.RegistererState.Terminated:
                    console.log("Terminated");
                    break;
            }
        });
        // Send REGISTER
        registerer
            .register()
            .then(function (request) {
            console.log("Successfully sent REGISTER");
            console.log("Sent request = ", request);
        })
            .catch(function (error) {
            console.error("Failed to send REGISTER", error.message);
            console.error("subscriptionFailed", extension, error.message, callback);
        });
    })
        .catch(function (error) {
        console.error("Failed to connect", error);
        console.error("subscriptionFailed", extension, error.message, callback);
    });
    // Allow the function to be called again after 5 seconds
    setTimeout(function () {
        canCallFunction = true;
    }, 1000); // 5000 milliseconds = 5 seconds
    //
}
function initiate_call(calledNumber, DN, callType, authData, callback) {
    console.log("Inside Initiate_call function:", calledNumber, DN, callType, authData, callback);
    var res = lockFunction("initiate_call", 500); // --- seconds cooldown
    if (!res)
        return;
    var undefinedParams = checkUndefinedParams(initiate_call, [
        calledNumber,
        DN,
        callType,
        authData,
        callback,
    ]);
    if (undefinedParams.length > 0) {
        error("generalError", loginId, "Error: The following parameter(s) are undefined or null or empty: ".concat(undefinedParams.join(", ")), callback);
        return;
    }
    if (userAgent !== null && userAgent !== undefined) {
        // Target URI
        var sip_uri = SIP.UserAgent.makeURI("sip:" + calledNumber + "@" + sipConfigs.uriFs);
        if (!sip_uri) {
            error("generalError", loginId, "Invalid target Uri:" + calledNumber, callback);
            return;
        }
        // Create new Session instance in "initial" state
        allSessions = new SIP.Inviter(userAgent, sip_uri);
        var request = allSessions.request;
        request.extraHeaders.push("X-Agent-Id:" + authData.agentId);
        request.extraHeaders.push("X-Agent-Name:" + authData.agentName);
        request.extraHeaders.push("X-Agent-Extension:" + authData.agentExtension);
        request.extraHeaders.push("X-Customer-Number:" + authData.customerNumber);
        request.extraHeaders.push("X-Channel:" + authData.channel);
        request.extraHeaders.push("X-Customer-Id:" + authData.customerId);
        request.extraHeaders.push("X-Service-Identifier:" + authData.serviceIdentifier);
        request.extraHeaders.push("X-Destination-Number:" + DN);
        // Options including delegate to capture response messages
        var inviteOptions = {
            requestDelegate: {
                onAccept: function (response) {
                    console.log("onAccept response = ", response);
                },
                onReject: function (response) {
                    console.log("onReject response = ", response);
                    error("generalError", loginId, response.message.reasonPhrase, callback);
                },
                onCancel: function (response) {
                    console.log("onCancel response = ", response);
                    error("generalError", loginId, response.message.reasonPhrase, callback);
                },
                onBye: function (response) {
                    console.log("onBye response = ", response);
                    error("generalError", loginId, response.message.reasonPhrase, callback);
                },
                onTerminate: function (response) {
                    console.log("onTerminate response = ", response);
                    error("generalError", loginId, response.message.reasonPhrase, callback);
                },
                onProgress: function (response) {
                    console.log("INITIATED response = onProgress", response);
                    var systemDate = new Date();
                    var dateTime = systemDate.toISOString();
                    dialogStateData.response.dialog.participants[0].state = "INITIATED";
                    dialogStateData.response.dialog.state = "INITIATED";
                    outBoundDialingData.response.dialog.participants[0].startTime =
                        dateTime;
                    outBoundDialingData.response.dialog.participants[0].state =
                        "INITIATED";
                    outBoundDialingData.response.dialog.state = "INITIATED";
                    outBoundDialingData.response.dialog.isCallEnded = 0;
                    var session = outBoundDialingData.session, dataToPass = __rest(outBoundDialingData, ["session"]);
                    callback(dataToPass);
                    SendPostMessage(dataToPass);
                },
                onTrying: function (response) {
                    console.log("INITIATING response = onTrying", response);
                    if (response.message) {
                        outBoundDialingData = null;
                        outBoundDialingData = outBoundDialingData12;
                        var systemDate = new Date();
                        var dateTime = systemDate.toISOString();
                        dialedNumber = response.message.to.uri.raw.user;
                        dialogStateData.response.loginId = loginId;
                        dialogStateData.response.dialog.fromAddress = loginId;
                        dialogStateData.response.dialog.callType = "OUT";
                        dialogStateData.response.dialog.ani = dialedNumber;
                        dialogStateData.response.dialog.id = response.message.callId;
                        dialogStateData.response.dialog.dialedNumber = dialedNumber;
                        dialogStateData.response.dialog.fromAddress = loginId;
                        dialogStateData.response.dialog.customerNumber = dialedNumber;
                        dialogStateData.response.dialog.participants[0].stateChangeTime =
                            dateTime;
                        outBoundDialingData.response.loginId = loginId;
                        outBoundDialingData.response.dialog.fromAddress = loginId;
                        outBoundDialingData.response.dialog.callType = "OUT";
                        outBoundDialingData.response.dialog.ani = dialedNumber;
                        outBoundDialingData.response.dialog.dnis = dialedNumber;
                        outBoundDialingData.response.dialog.id = response.message.callId;
                        outBoundDialingData.response.dialog.dialedNumber = dialedNumber;
                        outBoundDialingData.response.dialog.customerNumber = dialedNumber;
                        outBoundDialingData.response.dialog.participants[0].mediaAddress =
                            loginId;
                        outBoundDialingData.response.dialog.participants[0].startTime =
                            dateTime;
                        outBoundDialingData.response.dialog.participants[0].stateChangeTime =
                            dateTime;
                        outBoundDialingData.response.dialog.participants[0].startTime =
                            dateTime;
                        outBoundDialingData.response.dialog.participants[0].state =
                            "INITIATING";
                        outBoundDialingData.response.dialog.state = "INITIATING";
                        outBoundDialingData.response.dialog.isCallEnded = 0;
                        dialogStateData.response.dialog.participants[0].startTime =
                            dateTime;
                        dialogStateData.response.dialog.participants[0].state =
                            "INITIATING";
                        dialogStateData.response.dialog.state = "INITIATING";
                        outBoundDialingData.event = "outboundDialing";
                        allSessions.request.extraHeaders.push("X-Call-Unique-ID:" + DN);
                        callback(outBoundDialingData);
                        var index = getCallIndex(outBoundDialingData.response.dialog.id);
                        if (index == -1) {
                            outBoundDialingData.session = allSessions;
                            calls.push(outBoundDialingData);
                        }
                    }
                },
                onRedirect: function (response) {
                    console.log("Negative response = onRedirect" + response);
                },
                onRefer: function (response) {
                    console.log("onRefer response = onRefer" + response);
                },
            },
            sessionDescriptionHandlerOptions: {
                constraints: {
                    audio: true,
                    video: callType == "video" ? true : false,
                },
            },
            earlyMedia: true,
            requestOptions: {
                extraHeaders: [
                    "X-Referred-By-Someone: Username",
                    // 'X-Agent-Id': authData.agentId ? authData.agentId : null,
                    // 'X-Agent-Name': authData.agentName ? authData.agentName : null,
                    // 'X-Agent-Extension': authData.agentExtension ? authData.agentExtension : null,
                    // 'X-Customer-Number': authData.customerNumber ? authData.customerNumber : null,
                    // 'X-Channel': authData.channel ? authData.channel : null,
                    // 'X-Customer-Id': authData.customerId ? authData.customerId : null,
                    // 'X-Service-Identifier': authData.serviceIdentifier ? authData.serviceIdentifier : null,
                ],
            },
        };
        // Send initial INVITE
        allSessions
            .invite(inviteOptions)
            .then(function (request) {
            console.log("Successfully sent INVITE");
            console.log("INVITE request = ", request);
            if (allSessions.outgoingRequestMessage) {
            }
        })
            .catch(function (error) {
            console.log("Failed to send INVITE", error.message);
            error("generalError", loginId, error.message, callback);
        });
        addSipCallback(allSessions, "outbound", callback);
    }
    else {
        error("invalidState", loginId, "invalid action makeCall", callback);
    }
}
// ------------------------------------------------------------------
function terminate_call(dialogId) {
    var res = lockFunction("terminate_call", 500); // --- seconds cooldown
    if (!res)
        return;
    var index = getCallIndex(dialogId);
    var sessionToEnd = null;
    if (index !== -1) {
        sessionToEnd = calls[index].session;
    }
    if (!sessionToEnd) {
        if (typeof callbackFunction === "function")
            error("invalidState", loginId, "invalid action releaseCall", callbackFunction);
        return;
    }
    console.log("state", sessionToEnd.state);
    switch (sessionToEnd.state) {
        case SIP.SessionState.Initial:
        case SIP.SessionState.Establishing:
            if (sessionToEnd instanceof SIP.Inviter) {
                // An unestablished outgoing session
                sessionToEnd.cancel();
            }
            else {
                // An unestablished incoming session
                dialogStateData.response.dialog.callEndReason = "Rejected";
                sessionToEnd.reject();
            }
            break;
        case SIP.SessionState.Established:
            // An established session
            sessionToEnd.bye();
            break;
        case SIP.SessionState.Terminating:
        case SIP.SessionState.Terminated:
            // Cannot terminate a session that is already terminated
            break;
    }
    allSessions = null;
}
// function reject_call() {
//   // reject a call
//   if (remoteSession) {
//     remoteSession.reject();
//   } else {
//     error("invalidState", loginId, "invalid action rejectCall", callback);
//   }
// }
function blind_transfer(numberToTransfer, callback, dialogId) {
    var res = lockFunction("blind_transfer", 500); // --- seconds cooldown
    if (!res)
        return;
    var undefinedParams = checkUndefinedParams(blind_transfer, [
        numberToTransfer,
        callback,
        dialogId,
    ]);
    if (undefinedParams.length > 0) {
        error("generalError", loginId, "Error: The following parameter(s) are undefined or null or empty: ".concat(undefinedParams.join(", ")), callback);
        return;
    }
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        allSessions = calls[index].session;
    }
    if (!allSessions) {
        return;
    }
    // Target URI
    var target = SIP.UserAgent.makeURI("sip:" + numberToTransfer + "@" + sipConfigs.uriFs);
    if (!target) {
        error("generalError", loginId, "Invalid target Uri:" + numberToTransfer, callback);
        return;
    }
    var options = {
        eventHandlers: {
            accepted: function () {
                console.log("REFER request accepted");
            },
            failed: function (response) {
                console.log("REFER request failed:", response.statusCode);
            },
        },
        requestDelegate: {
            onAccept: function (request) {
                console.log("Custom onAccept logic");
                // Custom logic for accepting the REFER request
            },
            onReject: function (request) {
                console.log("Custom onReject logic");
                // Custom logic for rejecting the REFER request
            },
        },
    };
    allSessions
        .refer(target, options)
        .then(function (res) {
        console.log("success blind_transfer", res);
        dialogStateData.response.dialog.callEndReason = "direct-transfered";
    })
        .catch(function (e) {
        console.log("blind_transfer error ", e);
        error("generalError", loginId, e.message, callback);
    });
}
function blind_transfer_queue(numberToTransfer, queue, queuetype, callback, dialogId) {
    var res = lockFunction("blind_transfer_queue", 500); // --- seconds cooldown
    if (!res)
        return;
    var undefinedParams = checkUndefinedParams(blind_transfer_queue, [
        numberToTransfer,
        queue,
        queuetype,
        callback,
        dialogId,
    ]);
    if (undefinedParams.length > 0) {
        // console.log(`Error: The following parameter(s) are undefined or null: ${undefinedParams.join(', ')}`);
        error("generalError", loginId, "Error: The following parameter(s) are undefined or null or empty: ".concat(undefinedParams.join(", ")), callback);
        return;
    }
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        allSessions = calls[index].session;
    }
    if (!allSessions) {
        return;
    }
    // Target URI
    var target = SIP.UserAgent.makeURI("sip:" + numberToTransfer + "-" + queue + "@" + sipConfigs.uriFs);
    if (!target) {
        error("generalError", loginId, "Invalid target Uri:" + numberToTransfer, callback);
        return;
    }
    var options = {
        eventHandlers: {
            accepted: function () {
                // console.log('REFER request accepted');
            },
            failed: function (response) {
                // console.log('REFER request failed:', response.statusCode);
            },
        },
        requestOptions: {
            extraHeaders: [
                "X-queueTransfer: " + queue, // Replace with your desired header and value
                "X-queueTypeTransfer: " + queuetype,
            ],
        },
        requestDelegate: {
            onAccept: function (request) {
                console.log("Custom onAccept logic");
                // Custom logic for accepting the REFER request
            },
            onReject: function (request) {
                console.log("Custom onReject logic");
                // Custom logic for rejecting the REFER request
            },
        },
    };
    allSessions
        .refer(target, options)
        .then(function (res) {
        console.log("success blind_transfer_queue", res);
        dialogStateData.response.dialog.callEndReason = "direct-transfered";
    })
        .catch(function (e) {
        console.log("blind_transfer_queue error ", e);
        error("generalError", loginId, e.message, callback);
    });
}
function phone_hold(callback, dialogId) {
    var res = lockFunction("phone_hold", 500); // --- seconds cooldown
    if (!res)
        return;
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        allSessions = calls[index].session;
    }
    if (!allSessions || dialogStateData.response.dialog.state == "HELD") {
        error("invalidState", loginId, "invalid action holdCall", callback);
        return;
    }
    //for mute/unmute
    var peer = allSessions.sessionDescriptionHandler.peerConnection;
    var senders = peer.getSenders();
    if (!senders.length)
        return;
    //let that = this;
    senders.forEach(function (sender) {
        if (sender.track)
            sender.track.enabled = false;
    });
    // Hold the session by sending a re-INVITE with hold session description
    var holdOptions = {
        sessionDescriptionHandlerOptions: {
            hold: true,
        },
    };
    allSessions
        .invite(holdOptions)
        .then(function () {
        console.log("Session held successfully.");
        var systemDate = new Date();
        var dateTime = systemDate.toISOString();
        var data = calls[index];
        data.response.dialog.participants[0].stateChangeTime = dateTime;
        data.response.dialog.participants[0].state = "HELD";
        data.response.dialog.state = "HELD";
        data.response.dialog.isCallAlreadyActive = true;
        if (typeof callback === "function") {
            callback(data);
        }
    })
        .catch(function (error) {
        console.error("Failed to hold the session:", error);
        error("generalError", loginId, error.message, callback);
    });
}
function phone_unhold(callback, dialogId) {
    var res = lockFunction("phone_unhold", 500); // --- seconds cooldown
    if (!res)
        return;
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        allSessions = calls[index].session;
    }
    if (!allSessions || dialogStateData.response.dialog.state == "ACTIVE") {
        error("invalidState", loginId, "invalid action unholdCall", callback);
        return;
    }
    //for mute/unmute
    var peer = allSessions.sessionDescriptionHandler.peerConnection;
    var senders = peer.getSenders();
    if (!senders.length)
        return;
    //let that = this;
    senders.forEach(function (sender) {
        if (sender.track)
            sender.track.enabled = true;
    });
    // Hold the session by sending a re-INVITE with hold session description
    var holdOptions = {
        sessionDescriptionHandlerOptions: {
            hold: false,
        },
    };
    allSessions
        .invite(holdOptions)
        .then(function () {
        console.log("Session unhold successfully.");
        var systemDate = new Date();
        var dateTime = systemDate.toISOString();
        var data = calls[index];
        data.response.dialog.participants[0].stateChangeTime = dateTime;
        data.response.dialog.participants[0].state = "ACTIVE";
        data.response.dialog.state = "ACTIVE";
        data.response.dialog.isCallAlreadyActive = true;
        if (typeof callback === "function") {
            callback(data);
        }
    })
        .catch(function (error) {
        console.error("Failed to unhold the session:", error);
        error("generalError", loginId, error.message, callback);
    });
}
function phone_mute(callback, dialogId) {
    var res = lockFunction("phone_mute", 500); // --- seconds cooldown
    if (!res)
        return;
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        allSessions = calls[index].session;
    }
    if (!allSessions) {
        //console.warn("No session to toggle mute");
        error("invalidState", loginId, "invalid action mute_call", callback);
        return;
    }
    //for mute/unmute
    var peer = allSessions.sessionDescriptionHandler.peerConnection;
    var senders = peer.getSenders();
    if (!senders.length)
        return;
    //let that = this;
    senders.forEach(function (sender) {
        if (sender.track)
            sender.track.enabled = false;
    });
    var systemDate = new Date();
    var dateTime = systemDate.toISOString();
    var data = calls[index];
    data.response.dialog.participants[0].stateChangeTime = dateTime;
    data.response.dialog.participants[0].mute = true;
    if (typeof callback === "function") {
        callback(data);
    }
}
function phone_unmute(callback, dialogId) {
    var res = lockFunction("phone_unmute", 500); // --- seconds cooldown
    if (!res)
        return;
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        allSessions = calls[index].session;
    }
    if (!allSessions) {
        error("invalidState", loginId, "invalid action unmute_call", callback);
        return;
    }
    //for mute/unmute
    var peer = allSessions.sessionDescriptionHandler.peerConnection;
    var senders = peer.getSenders();
    if (!senders.length)
        return;
    //let that = this;
    senders.forEach(function (sender) {
        if (sender.track)
            sender.track.enabled = true;
    });
    var systemDate = new Date();
    var dateTime = systemDate.toISOString();
    var data = calls[index];
    data.response.dialog.participants[0].stateChangeTime = dateTime;
    data.response.dialog.participants[0].mute = false;
    if (typeof callback === "function") {
        callback(dialogStateData);
    }
}
function respond_call(callback, dialogId) {
    var res = lockFunction("respond_call", 500); // --- seconds cooldown
    if (!res)
        return;
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        allSessions = calls[index].session;
    }
    if (!allSessions || allSessions.state === SIP.SessionState.Established) {
        if (typeof callback === "function")
            error("invalidState", loginId, "invalid action answerCall", callback);
        return;
    }
    // answer a call
    if (allSessions.status === SIP.SessionState.Established) {
        console.log("Call already answered");
    }
    else {
        var sdp = allSessions.request.body;
        var offeredAudio = false, offeredVideo = false;
        if (/\r\nm=audio /.test(sdp)) {
            offeredAudio = true;
        }
        if (/\r\nm=video /.test(sdp)) {
            offeredVideo = true;
        }
        allSessions
            .accept({
            sessionDescriptionHandlerOptions: {
                constraints: {
                    audio: offeredAudio,
                    video: offeredVideo,
                },
            },
        })
            .then(function (res) {
            console.log("call accepted : ");
        })
            .catch(function (e) {
            console.log("error :", e.message);
            error("generalError", loginId, e.message, callback);
        });
        video = true;
        allSessions = allSessions;
    }
}
function makeConsultCall(calledNumber, callback) {
    var res = lockFunction("makeConsultCall", 500); // --- seconds cooldown
    if (!res)
        return;
    var undefinedParams = checkUndefinedParams(makeConsultCall, [
        calledNumber,
        callback,
    ]);
    if (undefinedParams.length > 0) {
        // console.log(`Error: The following parameter(s) are undefined or null: ${undefinedParams.join(', ')}`);
        error("generalError", loginId, "Error: The following parameter(s) are undefined or null or empty: ".concat(undefinedParams.join(", ")), callback);
        return;
    }
    if (userAgent !== null && userAgent !== undefined) {
        // Target URI
        var sip_uri = SIP.UserAgent.makeURI("sip:" + calledNumber + "@" + sipConfigs.uriFs);
        if (!sip_uri) {
            // console.error("Failed to create target URI.");
            error("generalError", loginId, "Invalid target Uri:" + sip_id, callback);
            return;
        }
        // Create new Session instance in "initial" state
        consultSession = new SIP.Inviter(userAgent, sip_uri);
        var request = consultSession.request;
        request.extraHeaders.push("X-Calltype: CONSULT");
        // Options including delegate to capture response messages
        var inviteOptions1 = {
            requestDelegate: {
                onAccept: function (response) {
                    console.log("onAccept response = ", response);
                },
                onReject: function (response) {
                    console.log("onReject response = ", response);
                    error("generalError", loginId, response.message.reasonPhrase, callback);
                },
                onCancel: function (response) {
                    console.log("onCancel response = ", response);
                    error("generalError", loginId, response.message.reasonPhrase, callback);
                },
                onBye: function (response) {
                    console.log("onBye response = ", response);
                    error("generalError", loginId, response.message.reasonPhrase, callback);
                },
                onTerminate: function (response) {
                    console.log("onTerminate response = ", response);
                    error("generalError", loginId, response.message.reasonPhrase, callback);
                },
                onProgress: function (response) {
                    console.log("INITIATED response = onProgress", response);
                    var systemDate = new Date();
                    var dateTime = systemDate.toISOString();
                    consultCallData.response.dialog.participants[0].state = "INITIATED";
                    consultCallData.response.dialog.state = "INITIATED";
                    consultCallData.response.dialog.participants[0].startTime = dateTime;
                    consultCallData.response.dialog.participants[0].state = "INITIATED";
                    consultCallData.response.dialog.state = "INITIATED";
                    callback(consultCallData);
                },
                onTrying: function (response) {
                    console.log("INITIATING response = onTrying", response);
                    if (response.message) {
                        consultCallData = null;
                        consultCallData = consultCallData1;
                        var systemDate = new Date();
                        var dateTime = systemDate.toISOString();
                        dialedNumber = response.message.to.uri.raw.user;
                        consultCallData.response.loginId = loginId;
                        consultCallData.response.dialog.fromAddress = loginId;
                        consultCallData.response.dialog.callType = "CONSULT";
                        consultCallData.response.dialog.ani = dialedNumber;
                        consultCallData.response.dialog.dnis = dialedNumber;
                        consultCallData.response.dialog.id = response.message.callId;
                        consultCallData.response.dialog.dialedNumber = dialedNumber;
                        consultCallData.response.dialog.customerNumber = dialedNumber;
                        consultCallData.response.dialog.participants[0].mediaAddress =
                            loginId;
                        consultCallData.response.dialog.participants[0].startTime =
                            dateTime;
                        consultCallData.response.dialog.participants[0].stateChangeTime =
                            dateTime;
                        consultCallData.response.dialog.participants[0].startTime =
                            dateTime;
                        consultCallData.response.dialog.participants[0].state =
                            "INITIATING";
                        consultCallData.response.dialog.state = "INITIATING";
                        callback(consultCallData);
                        var index = getCallIndex(consultCallData.response.dialog.id);
                        if (index == -1) {
                            consultCallData.session = consultSession;
                            calls.push(consultCallData);
                        }
                        phone_hold(callback, calls[0].response.dialog.id);
                    }
                },
                onRedirect: function (response) {
                    console.log("Negative response = onRedirect" + response);
                },
                onRefer: function (response) {
                    console.log("onRefer response = onRefer" + response);
                },
            },
            sessionDescriptionHandlerOptions: {
                constraints: {
                    audio: true,
                    video: false,
                },
            },
            earlyMedia: true,
            requestOptions: {
                extraHeaders: ["X-Referred-By-Someone: Username"],
            },
        };
        // Send initial INVITE
        consultSession
            .invite(inviteOptions1)
            .then(function (request) {
            console.log("Successfully sent INVITE");
            console.log("INVITE request = ", request);
            if (consultSession.outgoingRequestMessage) {
            }
        })
            .catch(function (error) {
            console.log("Failed to send INVITE", error.message);
            error("generalError", loginId, error.message, callback);
        });
        consultSession.stateChange.addListener(function (newState) {
            console.log(newState);
            var dialogId;
            if (consultSession.incomingInviteRequest) {
                dialogId =
                    consultSession.incomingInviteRequest.message.headers["X-Call-Id"] !=
                        undefined
                        ? consultSession.incomingInviteRequest.message.headers["X-Call-Id"][0]["raw"]
                        : consultSession.incomingInviteRequest.message.headers["Call-ID"][0]["raw"];
            }
            else {
                dialogId =
                    consultSession.outgoingRequestMessage.headers["X-Call-Id"] !=
                        undefined
                        ? consultSession.outgoingRequestMessage.headers["X-Call-Id"][0]["raw"]
                        : consultSession.outgoingRequestMessage.headers["Call-ID"][0];
            }
            var index = getCallIndex(dialogId);
            switch (newState) {
                case SIP.SessionState.Establishing:
                    console.log("Ringing");
                    break;
                case SIP.SessionState.Established:
                    console.log("consult call Answered");
                    setupRemoteMedia(consultSession);
                    var call_type1;
                    if (consultSession.incomingInviteRequest) {
                        if (consultSession.incomingInviteRequest.message.from._displayName ===
                            "conference") {
                            call_type1 = "conference";
                        }
                        else {
                            call_type1 = "incoming";
                        }
                    }
                    else {
                        call_type1 = "outbound";
                    }
                    var systemDate = new Date();
                    var dateTime = systemDate.toISOString();
                    consultSession.startTime = dateTime;
                    // console.log(event);
                    if (call_type1 != "inbound") {
                        callVariableArray = [];
                        if (consultSession.outgoingRequestMessage.headers["X-Call-Variable0"]) {
                            callVariableArray.push({
                                name: "callVariable0",
                                value: data.headers["X-Call-Variable0"][0]["raw"],
                            });
                        }
                        else {
                            callVariableArray.push({
                                name: "callVariable0",
                                value: "",
                            });
                        }
                        for (var index_1 = 1; index_1 < 10; index_1++) {
                            if (consultSession.outgoingRequestMessage.headers["X-Call-Variable" + index_1]) {
                                callVariableArray.push({
                                    name: "callVariable" + index_1,
                                    value: data.headers["X-Call-Variable" + index_1],
                                });
                            }
                        }
                        consultCallData.response.dialog.callVariables.CallVariable =
                            callVariableArray;
                    }
                    consultCallData.response.dialog.participants[0].stateChangeTime =
                        dateTime;
                    consultCallData.response.dialog.participants[0].state = "ACTIVE";
                    consultCallData.response.dialog.state = "ACTIVE";
                    consultCallData.response.dialog.isCallEnded = 0;
                    consultCallData.response.dialog.participants[0].mute = false;
                    var session = consultCallData.session, dataToPass = __rest(consultCallData, ["session"]);
                    callback(dataToPass);
                    if (index != -1) {
                        calls[index].response = consultCallData.response;
                    }
                    break;
                case SIP.SessionState.Terminated:
                    console.log("Consult Call Ended");
                    var systemDate1 = new Date();
                    var dateTime = systemDate1.toISOString();
                    if (consultCallData != null) {
                        consultCallData.response.dialog.participants[0].mute = false;
                        consultCallData.response.dialog.participants[0].stateChangeTime =
                            dateTime;
                        consultCallData.response.dialog.participants[0].state = "DROPPED";
                        if (consultCallData.response.dialog.callEndReason ==
                            "direct-transfered") {
                            consultCallData.response.dialog.isCallEnded = 0;
                        }
                        else {
                            consultCallData.response.dialog.isCallEnded = 1;
                        }
                        consultCallData.response.dialog.state = "DROPPED";
                        consultCallData.response.dialog.isCallAlreadyActive = false;
                        callback(consultCallData);
                        consultCallData.response.dialog.callEndReason = null;
                        consultCallData = null;
                        // clearTimeout(myTimeout);
                    }
                    calls.splice(index, 1);
                    if (calls.length != 0) {
                        setupRemoteMedia(calls[0].session);
                    }
                    break;
            }
        });
        //addSipCallback(allSessions, 'outbound', callback);
    }
    else {
        error("invalidState", loginId, "invalid action makeCall", callback);
    }
    //allSessions.refer(consultSession);
}
function makeConsultTransferCall(callback) {
    var res = lockFunction("makeConsultTransferCall", 500); // --- seconds cooldown
    if (!res)
        return;
    allSessions = calls[0].session;
    consultSession = calls[1].session;
    allSessions.refer(consultSession);
}
function addSipCallback(temp_session, call_type, callback) {
    try {
        //
        remoteSession = temp_session;
        temp_session.stateChange.addListener(function (newState) {
            console.log(newState);
            var dialogId;
            if (temp_session.incomingInviteRequest) {
                dialogId =
                    temp_session.incomingInviteRequest.message.headers["X-Call-Id"] !=
                        undefined
                        ? temp_session.incomingInviteRequest.message.headers["X-Call-Id"][0]["raw"]
                        : temp_session.incomingInviteRequest.message.headers["Call-ID"][0]["raw"];
            }
            else {
                dialogId =
                    temp_session.outgoingRequestMessage.headers["X-Call-Id"] != undefined
                        ? temp_session.outgoingRequestMessage.headers["X-Call-Id"][0]["raw"]
                        : temp_session.outgoingRequestMessage.headers["Call-ID"][0];
            }
            var index = getCallIndex(dialogId);
            if (index != -1) {
                dialogStateData.response = calls[index].response;
            }
            switch (newState) {
                case SIP.SessionState.Establishing:
                    console.log("Ringing");
                    break;
                case SIP.SessionState.Established:
                    console.log("Answered");
                    setupRemoteMedia(temp_session);
                    var call_type1;
                    if (temp_session.incomingInviteRequest) {
                        if (temp_session.incomingInviteRequest.message.from._displayName ===
                            "conference") {
                            call_type1 = "conference";
                        }
                        else {
                            call_type1 = "incoming";
                        }
                    }
                    else {
                        call_type1 = "outbound";
                    }
                    var systemDate = new Date();
                    var dateTime = systemDate.toISOString();
                    temp_session.startTime = dateTime;
                    // console.log(event);
                    if (call_type != "inbound") {
                        callVariableArray = [];
                        if (temp_session.outgoingRequestMessage.headers["X-Call-Variable0"]) {
                            callVariableArray.push({
                                name: "callVariable0",
                                value: data.headers["X-Call-Variable0"][0]["raw"],
                            });
                        }
                        else {
                            callVariableArray.push({
                                name: "callVariable0",
                                value: "",
                            });
                        }
                        for (var index_2 = 1; index_2 < 10; index_2++) {
                            if (temp_session.outgoingRequestMessage.headers["X-Call-Variable" + index_2]) {
                                callVariableArray.push({
                                    name: "callVariable" + index_2,
                                    value: data.headers["X-Call-Variable" + index_2],
                                });
                            }
                        }
                        dialogStateData.response.dialog.callVariables.CallVariable =
                            callVariableArray;
                        dialogStateData.response.dialog.participants[0].stateChangeTime =
                            dateTime;
                        dialogStateData.response.dialog.participants[0].state = "ACTIVE";
                        dialogStateData.response.dialog.state = "ACTIVE";
                        dialogStateData.response.dialog.isCallEnded = 0;
                    }
                    else {
                        dialogStateData.response.dialog.participants[0].stateChangeTime =
                            dateTime;
                        dialogStateData.response.dialog.participants[0].state = "ACTIVE";
                        dialogStateData.response.dialog.state = "ACTIVE";
                        dialogStateData.response.dialog.isCallEnded = 0;
                    }
                    var dialogStateMedia = JSON.parse(JSON.stringify(dialogStateData));
                    dialogStateMedia.response.dialog.participants[0].mute = false;
                    callback(dialogStateMedia);
                    if (index != -1) {
                        calls[index].response = dialogStateData.response;
                        calls[index].event = "dialogState";
                    }
                    break;
                case SIP.SessionState.Terminated:
                    console.log("Ended");
                    var systemDate1 = new Date();
                    var dateTime = systemDate1.toISOString();
                    if (dialogStateData != null) {
                        dialogStateData.response.dialog.participants[0].mute = false;
                        dialogStateData.response.dialog.participants[0].stateChangeTime =
                            dateTime;
                        dialogStateData.response.dialog.participants[0].state = "DROPPED";
                        if (dialogStateData.response.dialog.callEndReason ==
                            "direct-transfered") {
                            //  dialogStateData.response.dialog.callEndReason = "transfered";
                            dialogStateData.response.dialog.isCallEnded = 0;
                        }
                        else {
                            // dialogStateData.response.dialog.callEndReason = null;
                            dialogStateData.response.dialog.isCallEnded = 1;
                        }
                        dialogStateData.response.dialog.state = "DROPPED";
                        dialogStateData.response.dialog.isCallAlreadyActive = false;
                        callback(dialogStateData);
                        console.log("call end reason :", dialogStateData.response.dialog.callEndReason);
                        SendPostMessage(dialogStateData);
                        dialogStateData.response.dialog.callEndReason = null;
                        // clearTimeout(myTimeout);
                    }
                    calls.splice(index, 1);
                    break;
            }
        });
        temp_session.delegate = {
            onCancel: function (invitation) {
                console.log("onCancel received", invitation);
                var dialogId;
                if (temp_session.incomingInviteRequest) {
                    dialogId =
                        temp_session.incomingInviteRequest.message.headers["X-Call-Id"] !=
                            undefined
                            ? temp_session.incomingInviteRequest.message.headers["X-Call-Id"][0]["raw"]
                            : temp_session.incomingInviteRequest.message.headers["Call-ID"][0]["raw"];
                }
                else {
                    dialogId =
                        temp_session.outgoingRequestMessage.message.headers["X-Call-Id"] !=
                            undefined
                            ? temp_session.outgoingRequestMessage.message.headers["X-Call-Id"][0]["raw"]
                            : temp_session.outgoingRequestMessage.message.headers["Call-ID"][0]["raw"];
                }
                var index = getCallIndex(dialogId);
                if (index != -1) {
                    dialogStateData.response = calls[index].response;
                }
                var match = invitation.incomingCancelRequest.data.match(/text="([^"]+)"/);
                if (match && match[1]) {
                    dialogStateData.response.dialog.callEndReason = match[1];
                }
                else {
                    dialogStateData.response.dialog.callEndReason = "Canceled";
                }
                //invitation.accept();
            },
            onFailed: function (invitation) {
                console.log("onFailed received", invitation);
                //invitation.accept();
            },
            onAccepted: function (invitation) {
                console.log("onAccepted received", invitation);
                //invitation.accept();
            },
            onrejectionhandled: function (invitation) {
                console.log("onrejectionhandled received", invitation);
                //invitation.accept();
            },
            onunhandledrejection: function (invitation) {
                console.log("onunhandledrejection received", invitation);
                //invitation.accept();
            },
            onTerminated: function (invitation) {
                console.log("onTerminated received", invitation);
                //invitation.accept();
            },
            onTerminate: function (invitation) {
                console.log("onTerminate received", invitation);
                //invitation.accept();
            },
            onRefer: function (refer) {
                console.log("onRefer received : ", refer);
            },
        };
        //
    }
    catch (e) {
        console.log(e);
        error("generalError", loginId, "e", callback);
    }
}
function sendDtmf(message, dialogId, callback) {
    var index = getCallIndex(dialogId);
    if (index !== -1) {
        allSessions = calls[index].session;
        if (allSessions.state !== SIP.SessionState.Established) {
            if (typeof callback === "function")
                error("invalidState", loginId, "invalid action SendDtmf", callback);
            return;
        }
        var options = {
            requestOptions: {
                body: {
                    contentDisposition: "render",
                    contentType: "application/dtmf-relay",
                    content: "Signal=" + message + "\r\nDuration=1000",
                },
            },
        };
        allSessions
            .info(options)
            .then(function (request) {
            // Actions when DTMF is successful
            console.log("send dtmf :", request);
            var event = {
                event: "DTMF",
                response: {
                    loginId: loginId,
                    type: 1,
                    description: "Success",
                },
            };
            callback(event);
        })
            .catch(function (error) {
            // Actions when DTMF fails
            console.log("send dtmf :", error);
            var event = {
                event: "DTMF",
                response: {
                    loginId: loginId,
                    type: 0,
                    description: "Failed " + error,
                },
            };
            callback(event);
        });
    }
}
window.addEventListener("beforeunload", function (event) {
    //need to check here.
    terminateAllCalls();
    callVariableArray = {};
    dialogStateData = null;
    inviteData = null;
    outBoundDialingData = null;
});
function loader3(callback) {
    if (!userAgent || !registerer) {
        error("invalidState", "", "Invalid action logout", callback);
    }
    else {
        // Send un-REGISTER
        console.log(registerer.state);
        registerer
            .unregister()
            .then(function (request) {
            console.log("Successfully sent un-REGISTER");
            console.log("Sent request = " + request);
        })
            .catch(function (error) {
            console.error("Failed to send un-REGISTER", error);
            console.log("Failed to send un-REGISTER", error);
        });
    }
}
function error(type, loginId, cause, callback) {
    if (typeof callback !== "function") {
        console.error("invalid call back function");
        return;
    }
    var systemDate = new Date();
    var dateTime = systemDate.getFullYear() +
        "-" +
        (systemDate.getMonth() + 1) +
        "-" +
        systemDate.getDate() +
        " " +
        systemDate.getHours() +
        ":" +
        systemDate.getMinutes() +
        ":" +
        systemDate.getSeconds() +
        "." +
        systemDate.getMilliseconds();
    var event = {
        event: "Error",
        response: {
            type: type,
            loginId: loginId,
            description: cause,
            event_time: dateTime,
        },
    };
    callback(event);
}
var errorsList = {
    Forbidden: "Invalid Credentials.Please provide valid credentials.",
    Busy: "Device is busy",
    Redirected: "Redirected",
    Unavailable: "Unavailable",
    "Not Found": "Not Found",
    "Address Incomplete": "Address Incomplete",
    "Incompatible SDP": "Incompatible SDP",
    "Authentication Error": "Authentication Error",
    "Request Timeout": "The timeout expired for the client transaction before a response was received.",
    "Connection Error": "WebSocket connection error occurred.",
    "Invalid target": "The specified target can not be parsed as a valid SIP.URI",
    "SIP Failure Code": "A negative SIP response was received which is not part of any of the groups defined in the table below.",
    Terminated: "Session terminated normally by local or remote peer.",
    Canceled: "Session canceled by local or remote peer",
    "No Answer": "Incoming call was not answered in the time given in the configuration no_answer_timeout parameter.",
    Expires: "Incoming call contains an Expires header and the local user did not answer within the time given in the header",
    "No ACK": "An incoming INVITE was replied to with a 2XX status code, but no ACK was received.",
    "No TRACK": "An incoming iNVITE was replied to with a reliable provisional response, but no TRACK was received",
    "User Denied Media Access": "Local user denied media access when prompted for audio/video devices.",
    "WebRTC not supported": "The browser or device does not support the WebRTC specification.",
    "RTP Timeout": "There was an error involving the PeerConnection associated with the call.",
    "Bad Media Description": "Received SDP is wrong.",
    "‘Dialog Error": "	An in-dialog request received a 408 or 481 SIP error.",
};
// Number of times to attempt reconnection before giving up
var reconnectionAttempts = 10;
// Number of seconds to wait between reconnection attempts
var reconnectionDelay = 5;
// Used to guard against overlapping reconnection attempts
var attemptingReconnection = false;
// If false, reconnection attempts will be discontinued or otherwise prevented
var shouldBeConnected = true;
// Function which recursively attempts reconnection
var attemptReconnection = function (reconnectionAttempt) {
    if (reconnectionAttempt === void 0) { reconnectionAttempt = 1; }
    // If not intentionally connected, don't reconnect.
    if (!shouldBeConnected) {
        return;
    }
    // Reconnection attempt already in progress
    if (attemptingReconnection) {
        return;
    }
    // Reconnection maximum attempts reached
    if (reconnectionAttempt > reconnectionAttempts) {
        return;
    }
    // We're attempting a reconnection
    attemptingReconnection = true;
    setTimeout(function () {
        // If not intentionally connected, don't reconnect.
        if (!shouldBeConnected) {
            attemptingReconnection = false;
            return;
        }
        // Attempt reconnect
        userAgent
            .reconnect()
            .then(function () {
            // Reconnect attempt succeeded
            attemptingReconnection = false;
        })
            .catch(function (error) {
            // Reconnect attempt failed
            console.log("error  ", error);
            attemptingReconnection = false;
            attemptReconnection(++reconnectionAttempt);
        });
    }, reconnectionAttempt === 1 ? 0 : reconnectionDelay * 1000);
};
// function setupRemoteMedia(session:any) {
//   var pc = session.sessionDescriptionHandler.peerConnection;
//   var remoteStream;
//   remoteStream = new MediaStream();
//   var size = pc.getReceivers().length;
//   console.log("size is ", size);
//   var receiver = pc.getReceivers()[0];
//   var receiverVideo = pc.getReceivers()[1];
//   remoteStream.addTrack(receiver.track);
//   if (receiverVideo) {
//     console.log("vdieo found");
//     remoteStream.addTrack(receiverVideo.track);
//   }
//   remoteStream = remoteStream;
//   var remoteVideo = document.getElementById("remoteVideo");
//   if (remoteVideo) remoteVideo.srcObject = remoteStream;
//   var localStream_1:any;
//   if (pc.getSenders) {
//     localStream_1 = new window.MediaStream();
//     pc.getSenders().forEach(function (sender) {
//       var track = sender.track;
//       if (track && track.kind === "video") {
//         localStream_1.addTrack(track);
//       }
//     });
//   } else {
//     localStream_1 = pc.getLocalStreams()[0];
//   }
//   var localVideo = document.getElementById("localVideo");
//   if (localVideo) localVideo.srcObject = localStream_1;
//   localStream = localStream_1;
// }
function setupRemoteMedia(session) {
    var pc = session.sessionDescriptionHandler.peerConnection;
    var remoteStream;
    remoteStream = new MediaStream();
    var size = pc.getReceivers().length;
    console.log("size is ", size);
    var receiver = pc.getReceivers()[0];
    var receiverVideo = pc.getReceivers()[1];
    if (receiver) {
        remoteStream.addTrack(receiver.track);
    }
    if (receiverVideo) {
        console.log("video found");
        remoteStream.addTrack(receiverVideo.track);
    }
    remoteStream = remoteStream;
    var remoteVideo = document.getElementById("remoteVideo");
    if (remoteVideo && remoteStream) {
        remoteVideo.srcObject = remoteStream;
    }
    var localStream;
    if (pc.getSenders) {
        localStream = new MediaStream();
        pc.getSenders().forEach(function (sender) {
            var track = sender.track;
            if (track && track.kind === "video") {
                localStream === null || localStream === void 0 ? void 0 : localStream.addTrack(track);
            }
        });
    }
    else {
        localStream = pc.getLocalStreams()[0];
    }
    var localVideo = document.getElementById("localVideo");
    if (localVideo && localStream) {
        localVideo.srcObject = localStream;
    }
}
function registrationFailed(response) {
    //console.log('helo ',msg);
    error("subscriptionFailed", loginId, errorsList[response.message.reasonPhrase], callbackFunction);
}
function getCallIndex(dialogId) {
    for (var index = 0; index < calls.length; index++) {
        var element = calls[index];
        if (element.response.dialog.id == dialogId) {
            return index;
        }
    }
    return -1;
}
function checkUndefinedParams(func, params) {
    var paramNames = getParameterNames(func);
    var undefinedParams = [];
    paramNames.forEach(function (paramName, index) {
        var paramValue = params[index];
        if (paramValue === undefined || paramValue === null || paramValue === "") {
            undefinedParams.push(paramName);
        }
    });
    return undefinedParams;
}
function getParameterNames(func) {
    var functionString = func.toString();
    var parameterRegex = /function\s*\w*\s*\(([\s\S]*?)\)/;
    var match = parameterRegex.exec(functionString);
    if (match && match[1]) {
        return match[1].split(",").map(function (param) { return param.trim(); });
    }
    return [];
}
function SendPostMessage(data) {
    console.log("Send Post Message: ===>", data);
    // try{
    //     var obj = JSON.stringify(data, getCircularReplacer());
    //     window.postMessage(obj, "*"); // "*" means sending to all origins
    //     console.log('post message sent');
    // }catch(e){
    //     console.log("Exception: ",e);
    // }
}
var getCircularReplacer = function () {
    var seen = new WeakSet();
    return function (key, value) {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};
function terminateAllCalls() {
    if (calls.length > 0)
        for (var index = 0; index < calls.length; index++) {
            var element = calls[index];
            if (element.response.dialog.id) {
                terminate_call(element.response.dialog.id);
            }
        }
    userAgent.stop();
}
// Reusable function to check and set the lock state for a specific function
function lockFunction(funcName, delay) {
    if (!functionLocks[funcName]) {
        // If the function is not locked, lock it and allow execution
        functionLocks[funcName] = true;
        setTimeout(function () {
            // After the specified delay, unlock the function
            functionLocks[funcName] = false;
        }, delay);
        return true;
    }
    else {
        console.log("".concat(funcName, " is not allowed to be called yet"));
        return false;
    }
}
function getBrowserInfo(apiKey, callback) {
    // const apiKey = '5c8c5a26decc9b30da07abf360b73256faa5b00c59b32689c9860a84';
    try {
        fetch("https://api.ipdata.co?api-key=".concat(apiKey), {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            // Handle the API response here
            console.log("ipData API response:", data);
            callback(data);
        })
            .catch(function (error) {
            // Handle any errors that occur during the API call
            console.error("ipData API Call Error", error);
            callback(error);
        });
    }
    catch (error) {
        console.error("API Function Error", error);
        callback(error);
    }
}
exports.getBrowserInfo = getBrowserInfo;
window.dialCall = dialCall;
window.sendInvite = exports.sendInvite;
window.closeSession = closeSession;
window.videoControl = videoControl;
window.audioControl = audioControl;
window.screenControl = screenControl;
