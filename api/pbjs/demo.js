/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.org = (function() {

    /**
     * Namespace org.
     * @exports org
     * @namespace
     */
    var org = {};

    org.demo = (function() {

        /**
         * Namespace demo.
         * @memberof org
         * @namespace
         */
        var demo = {};

        demo.DemoContainer = (function() {

            /**
             * Properties of a DemoContainer.
             * @memberof org.demo
             * @interface IDemoContainer
             * @property {Array.<org.demo.IDemoObject>|null} [objects] DemoContainer objects
             */

            /**
             * Constructs a new DemoContainer.
             * @memberof org.demo
             * @classdesc Represents a DemoContainer.
             * @implements IDemoContainer
             * @constructor
             * @param {org.demo.IDemoContainer=} [properties] Properties to set
             */
            function DemoContainer(properties) {
                this.objects = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DemoContainer objects.
             * @member {Array.<org.demo.IDemoObject>} objects
             * @memberof org.demo.DemoContainer
             * @instance
             */
            DemoContainer.prototype.objects = $util.emptyArray;

            /**
             * Creates a new DemoContainer instance using the specified properties.
             * @function create
             * @memberof org.demo.DemoContainer
             * @static
             * @param {org.demo.IDemoContainer=} [properties] Properties to set
             * @returns {org.demo.DemoContainer} DemoContainer instance
             */
            DemoContainer.create = function create(properties) {
                return new DemoContainer(properties);
            };

            /**
             * Encodes the specified DemoContainer message. Does not implicitly {@link org.demo.DemoContainer.verify|verify} messages.
             * @function encode
             * @memberof org.demo.DemoContainer
             * @static
             * @param {org.demo.IDemoContainer} message DemoContainer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DemoContainer.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.objects != null && message.objects.length)
                    for (var i = 0; i < message.objects.length; ++i)
                        $root.org.demo.DemoObject.encode(message.objects[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DemoContainer message, length delimited. Does not implicitly {@link org.demo.DemoContainer.verify|verify} messages.
             * @function encodeDelimited
             * @memberof org.demo.DemoContainer
             * @static
             * @param {org.demo.IDemoContainer} message DemoContainer message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DemoContainer.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DemoContainer message from the specified reader or buffer.
             * @function decode
             * @memberof org.demo.DemoContainer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {org.demo.DemoContainer} DemoContainer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DemoContainer.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.demo.DemoContainer();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.objects && message.objects.length))
                                message.objects = [];
                            message.objects.push($root.org.demo.DemoObject.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DemoContainer message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof org.demo.DemoContainer
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {org.demo.DemoContainer} DemoContainer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DemoContainer.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DemoContainer message.
             * @function verify
             * @memberof org.demo.DemoContainer
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DemoContainer.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.objects != null && message.hasOwnProperty("objects")) {
                    if (!Array.isArray(message.objects))
                        return "objects: array expected";
                    for (var i = 0; i < message.objects.length; ++i) {
                        var error = $root.org.demo.DemoObject.verify(message.objects[i]);
                        if (error)
                            return "objects." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a DemoContainer message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof org.demo.DemoContainer
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {org.demo.DemoContainer} DemoContainer
             */
            DemoContainer.fromObject = function fromObject(object) {
                if (object instanceof $root.org.demo.DemoContainer)
                    return object;
                var message = new $root.org.demo.DemoContainer();
                if (object.objects) {
                    if (!Array.isArray(object.objects))
                        throw TypeError(".org.demo.DemoContainer.objects: array expected");
                    message.objects = [];
                    for (var i = 0; i < object.objects.length; ++i) {
                        if (typeof object.objects[i] !== "object")
                            throw TypeError(".org.demo.DemoContainer.objects: object expected");
                        message.objects[i] = $root.org.demo.DemoObject.fromObject(object.objects[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a DemoContainer message. Also converts values to other types if specified.
             * @function toObject
             * @memberof org.demo.DemoContainer
             * @static
             * @param {org.demo.DemoContainer} message DemoContainer
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DemoContainer.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.objects = [];
                if (message.objects && message.objects.length) {
                    object.objects = [];
                    for (var j = 0; j < message.objects.length; ++j)
                        object.objects[j] = $root.org.demo.DemoObject.toObject(message.objects[j], options);
                }
                return object;
            };

            /**
             * Converts this DemoContainer to JSON.
             * @function toJSON
             * @memberof org.demo.DemoContainer
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DemoContainer.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DemoContainer
             * @function getTypeUrl
             * @memberof org.demo.DemoContainer
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DemoContainer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/org.demo.DemoContainer";
            };

            return DemoContainer;
        })();

        demo.DemoObject = (function() {

            /**
             * Properties of a DemoObject.
             * @memberof org.demo
             * @interface IDemoObject
             * @property {org.demo.IInfo|null} [info] DemoObject info
             * @property {string|null} [name] DemoObject name
             * @property {org.demo.MyType|null} [type] DemoObject type
             * @property {number|null} [count] DemoObject count
             * @property {string|null} [longFieldName] DemoObject longFieldName
             */

            /**
             * Constructs a new DemoObject.
             * @memberof org.demo
             * @classdesc Represents a DemoObject.
             * @implements IDemoObject
             * @constructor
             * @param {org.demo.IDemoObject=} [properties] Properties to set
             */
            function DemoObject(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DemoObject info.
             * @member {org.demo.IInfo|null|undefined} info
             * @memberof org.demo.DemoObject
             * @instance
             */
            DemoObject.prototype.info = null;

            /**
             * DemoObject name.
             * @member {string} name
             * @memberof org.demo.DemoObject
             * @instance
             */
            DemoObject.prototype.name = "";

            /**
             * DemoObject type.
             * @member {org.demo.MyType} type
             * @memberof org.demo.DemoObject
             * @instance
             */
            DemoObject.prototype.type = 0;

            /**
             * DemoObject count.
             * @member {number} count
             * @memberof org.demo.DemoObject
             * @instance
             */
            DemoObject.prototype.count = 0;

            /**
             * DemoObject longFieldName.
             * @member {string} longFieldName
             * @memberof org.demo.DemoObject
             * @instance
             */
            DemoObject.prototype.longFieldName = "";

            /**
             * Creates a new DemoObject instance using the specified properties.
             * @function create
             * @memberof org.demo.DemoObject
             * @static
             * @param {org.demo.IDemoObject=} [properties] Properties to set
             * @returns {org.demo.DemoObject} DemoObject instance
             */
            DemoObject.create = function create(properties) {
                return new DemoObject(properties);
            };

            /**
             * Encodes the specified DemoObject message. Does not implicitly {@link org.demo.DemoObject.verify|verify} messages.
             * @function encode
             * @memberof org.demo.DemoObject
             * @static
             * @param {org.demo.IDemoObject} message DemoObject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DemoObject.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                    $root.org.demo.Info.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
                if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.count);
                if (message.longFieldName != null && Object.hasOwnProperty.call(message, "longFieldName"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.longFieldName);
                return writer;
            };

            /**
             * Encodes the specified DemoObject message, length delimited. Does not implicitly {@link org.demo.DemoObject.verify|verify} messages.
             * @function encodeDelimited
             * @memberof org.demo.DemoObject
             * @static
             * @param {org.demo.IDemoObject} message DemoObject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DemoObject.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DemoObject message from the specified reader or buffer.
             * @function decode
             * @memberof org.demo.DemoObject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {org.demo.DemoObject} DemoObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DemoObject.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.demo.DemoObject();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.info = $root.org.demo.Info.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.type = reader.int32();
                            break;
                        }
                    case 4: {
                            message.count = reader.int32();
                            break;
                        }
                    case 5: {
                            message.longFieldName = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DemoObject message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof org.demo.DemoObject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {org.demo.DemoObject} DemoObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DemoObject.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DemoObject message.
             * @function verify
             * @memberof org.demo.DemoObject
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DemoObject.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.info != null && message.hasOwnProperty("info")) {
                    var error = $root.org.demo.Info.verify(message.info);
                    if (error)
                        return "info." + error;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.count != null && message.hasOwnProperty("count"))
                    if (!$util.isInteger(message.count))
                        return "count: integer expected";
                if (message.longFieldName != null && message.hasOwnProperty("longFieldName"))
                    if (!$util.isString(message.longFieldName))
                        return "longFieldName: string expected";
                return null;
            };

            /**
             * Creates a DemoObject message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof org.demo.DemoObject
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {org.demo.DemoObject} DemoObject
             */
            DemoObject.fromObject = function fromObject(object) {
                if (object instanceof $root.org.demo.DemoObject)
                    return object;
                var message = new $root.org.demo.DemoObject();
                if (object.info != null) {
                    if (typeof object.info !== "object")
                        throw TypeError(".org.demo.DemoObject.info: object expected");
                    message.info = $root.org.demo.Info.fromObject(object.info);
                }
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.type) {
                default:
                    if (typeof object.type === "number") {
                        message.type = object.type;
                        break;
                    }
                    break;
                case "DEFAULT":
                case 0:
                    message.type = 0;
                    break;
                case "ENABLED":
                case 1:
                    message.type = 1;
                    break;
                case "DISABLED":
                case 2:
                    message.type = 2;
                    break;
                }
                if (object.count != null)
                    message.count = object.count | 0;
                if (object.longFieldName != null)
                    message.longFieldName = String(object.longFieldName);
                return message;
            };

            /**
             * Creates a plain object from a DemoObject message. Also converts values to other types if specified.
             * @function toObject
             * @memberof org.demo.DemoObject
             * @static
             * @param {org.demo.DemoObject} message DemoObject
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DemoObject.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.info = null;
                    object.name = "";
                    object.type = options.enums === String ? "DEFAULT" : 0;
                    object.count = 0;
                    object.longFieldName = "";
                }
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = $root.org.demo.Info.toObject(message.info, options);
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.org.demo.MyType[message.type] === undefined ? message.type : $root.org.demo.MyType[message.type] : message.type;
                if (message.count != null && message.hasOwnProperty("count"))
                    object.count = message.count;
                if (message.longFieldName != null && message.hasOwnProperty("longFieldName"))
                    object.longFieldName = message.longFieldName;
                return object;
            };

            /**
             * Converts this DemoObject to JSON.
             * @function toJSON
             * @memberof org.demo.DemoObject
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DemoObject.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DemoObject
             * @function getTypeUrl
             * @memberof org.demo.DemoObject
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DemoObject.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/org.demo.DemoObject";
            };

            return DemoObject;
        })();

        demo.Info = (function() {

            /**
             * Properties of an Info.
             * @memberof org.demo
             * @interface IInfo
             * @property {string|null} [id] Info id
             * @property {number|Long|null} [time] Info time
             */

            /**
             * Constructs a new Info.
             * @memberof org.demo
             * @classdesc Represents an Info.
             * @implements IInfo
             * @constructor
             * @param {org.demo.IInfo=} [properties] Properties to set
             */
            function Info(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Info id.
             * @member {string} id
             * @memberof org.demo.Info
             * @instance
             */
            Info.prototype.id = "";

            /**
             * Info time.
             * @member {number|Long} time
             * @memberof org.demo.Info
             * @instance
             */
            Info.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new Info instance using the specified properties.
             * @function create
             * @memberof org.demo.Info
             * @static
             * @param {org.demo.IInfo=} [properties] Properties to set
             * @returns {org.demo.Info} Info instance
             */
            Info.create = function create(properties) {
                return new Info(properties);
            };

            /**
             * Encodes the specified Info message. Does not implicitly {@link org.demo.Info.verify|verify} messages.
             * @function encode
             * @memberof org.demo.Info
             * @static
             * @param {org.demo.IInfo} message Info message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Info.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.time);
                return writer;
            };

            /**
             * Encodes the specified Info message, length delimited. Does not implicitly {@link org.demo.Info.verify|verify} messages.
             * @function encodeDelimited
             * @memberof org.demo.Info
             * @static
             * @param {org.demo.IInfo} message Info message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Info.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Info message from the specified reader or buffer.
             * @function decode
             * @memberof org.demo.Info
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {org.demo.Info} Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Info.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.demo.Info();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.time = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Info message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof org.demo.Info
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {org.demo.Info} Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Info.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Info message.
             * @function verify
             * @memberof org.demo.Info
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Info.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                return null;
            };

            /**
             * Creates an Info message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof org.demo.Info
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {org.demo.Info} Info
             */
            Info.fromObject = function fromObject(object) {
                if (object instanceof $root.org.demo.Info)
                    return object;
                var message = new $root.org.demo.Info();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from an Info message. Also converts values to other types if specified.
             * @function toObject
             * @memberof org.demo.Info
             * @static
             * @param {org.demo.Info} message Info
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Info.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                return object;
            };

            /**
             * Converts this Info to JSON.
             * @function toJSON
             * @memberof org.demo.Info
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Info.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Info
             * @function getTypeUrl
             * @memberof org.demo.Info
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Info.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/org.demo.Info";
            };

            return Info;
        })();

        /**
         * MyType enum.
         * @name org.demo.MyType
         * @enum {number}
         * @property {number} DEFAULT=0 DEFAULT value
         * @property {number} ENABLED=1 ENABLED value
         * @property {number} DISABLED=2 DISABLED value
         */
        demo.MyType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEFAULT"] = 0;
            values[valuesById[1] = "ENABLED"] = 1;
            values[valuesById[2] = "DISABLED"] = 2;
            return values;
        })();

        demo.DemoApi = (function() {

            /**
             * Constructs a new DemoApi service.
             * @memberof org.demo
             * @classdesc Represents a DemoApi
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function DemoApi(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (DemoApi.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DemoApi;

            /**
             * Creates new DemoApi service using the specified rpc implementation.
             * @function create
             * @memberof org.demo.DemoApi
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {DemoApi} RPC service. Useful where requests and/or responses are streamed.
             */
            DemoApi.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link org.demo.DemoApi#doSomething}.
             * @memberof org.demo.DemoApi
             * @typedef DoSomethingCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {org.demo.DemoContainer} [response] DemoContainer
             */

            /**
             * Calls DoSomething.
             * @function doSomething
             * @memberof org.demo.DemoApi
             * @instance
             * @param {org.demo.IDemoContainer} request DemoContainer message or plain object
             * @param {org.demo.DemoApi.DoSomethingCallback} callback Node-style callback called with the error, if any, and DemoContainer
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(DemoApi.prototype.doSomething = function doSomething(request, callback) {
                return this.rpcCall(doSomething, $root.org.demo.DemoContainer, $root.org.demo.DemoContainer, request, callback);
            }, "name", { value: "DoSomething" });

            /**
             * Calls DoSomething.
             * @function doSomething
             * @memberof org.demo.DemoApi
             * @instance
             * @param {org.demo.IDemoContainer} request DemoContainer message or plain object
             * @returns {Promise<org.demo.DemoContainer>} Promise
             * @variation 2
             */

            return DemoApi;
        })();

        return demo;
    })();

    return org;
})();

module.exports = $root;
