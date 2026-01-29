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

        demo.v1 = (function() {

            /**
             * Namespace v1.
             * @memberof org.demo
             * @namespace
             */
            var v1 = {};

            v1.DemoContainer = (function() {

                /**
                 * Properties of a DemoContainer.
                 * @memberof org.demo.v1
                 * @interface IDemoContainer
                 * @property {Array.<org.demo.v1.IDemoObject>|null} [objects] DemoContainer objects
                 */

                /**
                 * Constructs a new DemoContainer.
                 * @memberof org.demo.v1
                 * @classdesc Represents a DemoContainer.
                 * @implements IDemoContainer
                 * @constructor
                 * @param {org.demo.v1.IDemoContainer=} [properties] Properties to set
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
                 * @member {Array.<org.demo.v1.IDemoObject>} objects
                 * @memberof org.demo.v1.DemoContainer
                 * @instance
                 */
                DemoContainer.prototype.objects = $util.emptyArray;

                /**
                 * Creates a new DemoContainer instance using the specified properties.
                 * @function create
                 * @memberof org.demo.v1.DemoContainer
                 * @static
                 * @param {org.demo.v1.IDemoContainer=} [properties] Properties to set
                 * @returns {org.demo.v1.DemoContainer} DemoContainer instance
                 */
                DemoContainer.create = function create(properties) {
                    return new DemoContainer(properties);
                };

                /**
                 * Encodes the specified DemoContainer message. Does not implicitly {@link org.demo.v1.DemoContainer.verify|verify} messages.
                 * @function encode
                 * @memberof org.demo.v1.DemoContainer
                 * @static
                 * @param {org.demo.v1.IDemoContainer} message DemoContainer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoContainer.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.objects != null && message.objects.length)
                        for (var i = 0; i < message.objects.length; ++i)
                            $root.org.demo.v1.DemoObject.encode(message.objects[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified DemoContainer message, length delimited. Does not implicitly {@link org.demo.v1.DemoContainer.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.demo.v1.DemoContainer
                 * @static
                 * @param {org.demo.v1.IDemoContainer} message DemoContainer message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoContainer.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DemoContainer message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.demo.v1.DemoContainer
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.demo.v1.DemoContainer} DemoContainer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DemoContainer.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.demo.v1.DemoContainer();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (!(message.objects && message.objects.length))
                                    message.objects = [];
                                message.objects.push($root.org.demo.v1.DemoObject.decode(reader, reader.uint32()));
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
                 * @memberof org.demo.v1.DemoContainer
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.demo.v1.DemoContainer} DemoContainer
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
                 * @memberof org.demo.v1.DemoContainer
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
                            var error = $root.org.demo.v1.DemoObject.verify(message.objects[i]);
                            if (error)
                                return "objects." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a DemoContainer message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.demo.v1.DemoContainer
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.demo.v1.DemoContainer} DemoContainer
                 */
                DemoContainer.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.demo.v1.DemoContainer)
                        return object;
                    var message = new $root.org.demo.v1.DemoContainer();
                    if (object.objects) {
                        if (!Array.isArray(object.objects))
                            throw TypeError(".org.demo.v1.DemoContainer.objects: array expected");
                        message.objects = [];
                        for (var i = 0; i < object.objects.length; ++i) {
                            if (typeof object.objects[i] !== "object")
                                throw TypeError(".org.demo.v1.DemoContainer.objects: object expected");
                            message.objects[i] = $root.org.demo.v1.DemoObject.fromObject(object.objects[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a DemoContainer message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.demo.v1.DemoContainer
                 * @static
                 * @param {org.demo.v1.DemoContainer} message DemoContainer
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
                            object.objects[j] = $root.org.demo.v1.DemoObject.toObject(message.objects[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this DemoContainer to JSON.
                 * @function toJSON
                 * @memberof org.demo.v1.DemoContainer
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DemoContainer.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DemoContainer
                 * @function getTypeUrl
                 * @memberof org.demo.v1.DemoContainer
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DemoContainer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/org.demo.v1.DemoContainer";
                };

                return DemoContainer;
            })();

            v1.DemoObject = (function() {

                /**
                 * Properties of a DemoObject.
                 * @memberof org.demo.v1
                 * @interface IDemoObject
                 * @property {org.demo.v1.IInfo|null} [info] DemoObject info
                 * @property {string|null} [name] DemoObject name
                 * @property {org.demo.v1.MyType|null} [type] DemoObject type
                 * @property {number|null} [count] DemoObject count
                 * @property {string|null} [longFieldName] DemoObject longFieldName
                 */

                /**
                 * Constructs a new DemoObject.
                 * @memberof org.demo.v1
                 * @classdesc Represents a DemoObject.
                 * @implements IDemoObject
                 * @constructor
                 * @param {org.demo.v1.IDemoObject=} [properties] Properties to set
                 */
                function DemoObject(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DemoObject info.
                 * @member {org.demo.v1.IInfo|null|undefined} info
                 * @memberof org.demo.v1.DemoObject
                 * @instance
                 */
                DemoObject.prototype.info = null;

                /**
                 * DemoObject name.
                 * @member {string} name
                 * @memberof org.demo.v1.DemoObject
                 * @instance
                 */
                DemoObject.prototype.name = "";

                /**
                 * DemoObject type.
                 * @member {org.demo.v1.MyType} type
                 * @memberof org.demo.v1.DemoObject
                 * @instance
                 */
                DemoObject.prototype.type = 0;

                /**
                 * DemoObject count.
                 * @member {number} count
                 * @memberof org.demo.v1.DemoObject
                 * @instance
                 */
                DemoObject.prototype.count = 0;

                /**
                 * DemoObject longFieldName.
                 * @member {string} longFieldName
                 * @memberof org.demo.v1.DemoObject
                 * @instance
                 */
                DemoObject.prototype.longFieldName = "";

                /**
                 * Creates a new DemoObject instance using the specified properties.
                 * @function create
                 * @memberof org.demo.v1.DemoObject
                 * @static
                 * @param {org.demo.v1.IDemoObject=} [properties] Properties to set
                 * @returns {org.demo.v1.DemoObject} DemoObject instance
                 */
                DemoObject.create = function create(properties) {
                    return new DemoObject(properties);
                };

                /**
                 * Encodes the specified DemoObject message. Does not implicitly {@link org.demo.v1.DemoObject.verify|verify} messages.
                 * @function encode
                 * @memberof org.demo.v1.DemoObject
                 * @static
                 * @param {org.demo.v1.IDemoObject} message DemoObject message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoObject.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                        $root.org.demo.v1.Info.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                 * Encodes the specified DemoObject message, length delimited. Does not implicitly {@link org.demo.v1.DemoObject.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.demo.v1.DemoObject
                 * @static
                 * @param {org.demo.v1.IDemoObject} message DemoObject message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DemoObject.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DemoObject message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.demo.v1.DemoObject
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.demo.v1.DemoObject} DemoObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DemoObject.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.demo.v1.DemoObject();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.info = $root.org.demo.v1.Info.decode(reader, reader.uint32());
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
                 * @memberof org.demo.v1.DemoObject
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.demo.v1.DemoObject} DemoObject
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
                 * @memberof org.demo.v1.DemoObject
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DemoObject.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.info != null && message.hasOwnProperty("info")) {
                        var error = $root.org.demo.v1.Info.verify(message.info);
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
                 * @memberof org.demo.v1.DemoObject
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.demo.v1.DemoObject} DemoObject
                 */
                DemoObject.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.demo.v1.DemoObject)
                        return object;
                    var message = new $root.org.demo.v1.DemoObject();
                    if (object.info != null) {
                        if (typeof object.info !== "object")
                            throw TypeError(".org.demo.v1.DemoObject.info: object expected");
                        message.info = $root.org.demo.v1.Info.fromObject(object.info);
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
                    case "MY_TYPE_UNSPECIFIED":
                    case 0:
                        message.type = 0;
                        break;
                    case "MY_TYPE_ENABLED":
                    case 1:
                        message.type = 1;
                        break;
                    case "MY_TYPE_DISABLED":
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
                 * @memberof org.demo.v1.DemoObject
                 * @static
                 * @param {org.demo.v1.DemoObject} message DemoObject
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
                        object.type = options.enums === String ? "MY_TYPE_UNSPECIFIED" : 0;
                        object.count = 0;
                        object.longFieldName = "";
                    }
                    if (message.info != null && message.hasOwnProperty("info"))
                        object.info = $root.org.demo.v1.Info.toObject(message.info, options);
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.org.demo.v1.MyType[message.type] === undefined ? message.type : $root.org.demo.v1.MyType[message.type] : message.type;
                    if (message.count != null && message.hasOwnProperty("count"))
                        object.count = message.count;
                    if (message.longFieldName != null && message.hasOwnProperty("longFieldName"))
                        object.longFieldName = message.longFieldName;
                    return object;
                };

                /**
                 * Converts this DemoObject to JSON.
                 * @function toJSON
                 * @memberof org.demo.v1.DemoObject
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DemoObject.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DemoObject
                 * @function getTypeUrl
                 * @memberof org.demo.v1.DemoObject
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DemoObject.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/org.demo.v1.DemoObject";
                };

                return DemoObject;
            })();

            v1.Info = (function() {

                /**
                 * Properties of an Info.
                 * @memberof org.demo.v1
                 * @interface IInfo
                 * @property {string|null} [id] Info id
                 * @property {number|Long|null} [time] Info time
                 */

                /**
                 * Constructs a new Info.
                 * @memberof org.demo.v1
                 * @classdesc Represents an Info.
                 * @implements IInfo
                 * @constructor
                 * @param {org.demo.v1.IInfo=} [properties] Properties to set
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
                 * @memberof org.demo.v1.Info
                 * @instance
                 */
                Info.prototype.id = "";

                /**
                 * Info time.
                 * @member {number|Long} time
                 * @memberof org.demo.v1.Info
                 * @instance
                 */
                Info.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                /**
                 * Creates a new Info instance using the specified properties.
                 * @function create
                 * @memberof org.demo.v1.Info
                 * @static
                 * @param {org.demo.v1.IInfo=} [properties] Properties to set
                 * @returns {org.demo.v1.Info} Info instance
                 */
                Info.create = function create(properties) {
                    return new Info(properties);
                };

                /**
                 * Encodes the specified Info message. Does not implicitly {@link org.demo.v1.Info.verify|verify} messages.
                 * @function encode
                 * @memberof org.demo.v1.Info
                 * @static
                 * @param {org.demo.v1.IInfo} message Info message or plain object to encode
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
                 * Encodes the specified Info message, length delimited. Does not implicitly {@link org.demo.v1.Info.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.demo.v1.Info
                 * @static
                 * @param {org.demo.v1.IInfo} message Info message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Info.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Info message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.demo.v1.Info
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.demo.v1.Info} Info
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Info.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.demo.v1.Info();
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
                 * @memberof org.demo.v1.Info
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.demo.v1.Info} Info
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
                 * @memberof org.demo.v1.Info
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
                 * @memberof org.demo.v1.Info
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.demo.v1.Info} Info
                 */
                Info.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.demo.v1.Info)
                        return object;
                    var message = new $root.org.demo.v1.Info();
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
                 * @memberof org.demo.v1.Info
                 * @static
                 * @param {org.demo.v1.Info} message Info
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
                 * @memberof org.demo.v1.Info
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Info.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Info
                 * @function getTypeUrl
                 * @memberof org.demo.v1.Info
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Info.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/org.demo.v1.Info";
                };

                return Info;
            })();

            /**
             * MyType enum.
             * @name org.demo.v1.MyType
             * @enum {number}
             * @property {number} MY_TYPE_UNSPECIFIED=0 MY_TYPE_UNSPECIFIED value
             * @property {number} MY_TYPE_ENABLED=1 MY_TYPE_ENABLED value
             * @property {number} MY_TYPE_DISABLED=2 MY_TYPE_DISABLED value
             */
            v1.MyType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "MY_TYPE_UNSPECIFIED"] = 0;
                values[valuesById[1] = "MY_TYPE_ENABLED"] = 1;
                values[valuesById[2] = "MY_TYPE_DISABLED"] = 2;
                return values;
            })();

            v1.DemoApiService = (function() {

                /**
                 * Constructs a new DemoApiService service.
                 * @memberof org.demo.v1
                 * @classdesc Represents a DemoApiService
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function DemoApiService(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (DemoApiService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DemoApiService;

                /**
                 * Creates new DemoApiService service using the specified rpc implementation.
                 * @function create
                 * @memberof org.demo.v1.DemoApiService
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {DemoApiService} RPC service. Useful where requests and/or responses are streamed.
                 */
                DemoApiService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link org.demo.v1.DemoApiService#doSomething}.
                 * @memberof org.demo.v1.DemoApiService
                 * @typedef DoSomethingCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {org.demo.v1.DoSomethingResponse} [response] DoSomethingResponse
                 */

                /**
                 * Calls DoSomething.
                 * @function doSomething
                 * @memberof org.demo.v1.DemoApiService
                 * @instance
                 * @param {org.demo.v1.IDoSomethingRequest} request DoSomethingRequest message or plain object
                 * @param {org.demo.v1.DemoApiService.DoSomethingCallback} callback Node-style callback called with the error, if any, and DoSomethingResponse
                 * @returns {undefined}
                 * @variation 1
                 */
                Object.defineProperty(DemoApiService.prototype.doSomething = function doSomething(request, callback) {
                    return this.rpcCall(doSomething, $root.org.demo.v1.DoSomethingRequest, $root.org.demo.v1.DoSomethingResponse, request, callback);
                }, "name", { value: "DoSomething" });

                /**
                 * Calls DoSomething.
                 * @function doSomething
                 * @memberof org.demo.v1.DemoApiService
                 * @instance
                 * @param {org.demo.v1.IDoSomethingRequest} request DoSomethingRequest message or plain object
                 * @returns {Promise<org.demo.v1.DoSomethingResponse>} Promise
                 * @variation 2
                 */

                return DemoApiService;
            })();

            v1.DoSomethingRequest = (function() {

                /**
                 * Properties of a DoSomethingRequest.
                 * @memberof org.demo.v1
                 * @interface IDoSomethingRequest
                 * @property {org.demo.v1.IDemoContainer|null} [container] DoSomethingRequest container
                 */

                /**
                 * Constructs a new DoSomethingRequest.
                 * @memberof org.demo.v1
                 * @classdesc Represents a DoSomethingRequest.
                 * @implements IDoSomethingRequest
                 * @constructor
                 * @param {org.demo.v1.IDoSomethingRequest=} [properties] Properties to set
                 */
                function DoSomethingRequest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DoSomethingRequest container.
                 * @member {org.demo.v1.IDemoContainer|null|undefined} container
                 * @memberof org.demo.v1.DoSomethingRequest
                 * @instance
                 */
                DoSomethingRequest.prototype.container = null;

                /**
                 * Creates a new DoSomethingRequest instance using the specified properties.
                 * @function create
                 * @memberof org.demo.v1.DoSomethingRequest
                 * @static
                 * @param {org.demo.v1.IDoSomethingRequest=} [properties] Properties to set
                 * @returns {org.demo.v1.DoSomethingRequest} DoSomethingRequest instance
                 */
                DoSomethingRequest.create = function create(properties) {
                    return new DoSomethingRequest(properties);
                };

                /**
                 * Encodes the specified DoSomethingRequest message. Does not implicitly {@link org.demo.v1.DoSomethingRequest.verify|verify} messages.
                 * @function encode
                 * @memberof org.demo.v1.DoSomethingRequest
                 * @static
                 * @param {org.demo.v1.IDoSomethingRequest} message DoSomethingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoSomethingRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.container != null && Object.hasOwnProperty.call(message, "container"))
                        $root.org.demo.v1.DemoContainer.encode(message.container, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified DoSomethingRequest message, length delimited. Does not implicitly {@link org.demo.v1.DoSomethingRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.demo.v1.DoSomethingRequest
                 * @static
                 * @param {org.demo.v1.IDoSomethingRequest} message DoSomethingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoSomethingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DoSomethingRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.demo.v1.DoSomethingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.demo.v1.DoSomethingRequest} DoSomethingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoSomethingRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.demo.v1.DoSomethingRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.container = $root.org.demo.v1.DemoContainer.decode(reader, reader.uint32());
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
                 * Decodes a DoSomethingRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.demo.v1.DoSomethingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.demo.v1.DoSomethingRequest} DoSomethingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoSomethingRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DoSomethingRequest message.
                 * @function verify
                 * @memberof org.demo.v1.DoSomethingRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DoSomethingRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.container != null && message.hasOwnProperty("container")) {
                        var error = $root.org.demo.v1.DemoContainer.verify(message.container);
                        if (error)
                            return "container." + error;
                    }
                    return null;
                };

                /**
                 * Creates a DoSomethingRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.demo.v1.DoSomethingRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.demo.v1.DoSomethingRequest} DoSomethingRequest
                 */
                DoSomethingRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.demo.v1.DoSomethingRequest)
                        return object;
                    var message = new $root.org.demo.v1.DoSomethingRequest();
                    if (object.container != null) {
                        if (typeof object.container !== "object")
                            throw TypeError(".org.demo.v1.DoSomethingRequest.container: object expected");
                        message.container = $root.org.demo.v1.DemoContainer.fromObject(object.container);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a DoSomethingRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.demo.v1.DoSomethingRequest
                 * @static
                 * @param {org.demo.v1.DoSomethingRequest} message DoSomethingRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DoSomethingRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.container = null;
                    if (message.container != null && message.hasOwnProperty("container"))
                        object.container = $root.org.demo.v1.DemoContainer.toObject(message.container, options);
                    return object;
                };

                /**
                 * Converts this DoSomethingRequest to JSON.
                 * @function toJSON
                 * @memberof org.demo.v1.DoSomethingRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DoSomethingRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DoSomethingRequest
                 * @function getTypeUrl
                 * @memberof org.demo.v1.DoSomethingRequest
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DoSomethingRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/org.demo.v1.DoSomethingRequest";
                };

                return DoSomethingRequest;
            })();

            v1.DoSomethingResponse = (function() {

                /**
                 * Properties of a DoSomethingResponse.
                 * @memberof org.demo.v1
                 * @interface IDoSomethingResponse
                 * @property {org.demo.v1.IDemoContainer|null} [container] DoSomethingResponse container
                 */

                /**
                 * Constructs a new DoSomethingResponse.
                 * @memberof org.demo.v1
                 * @classdesc Represents a DoSomethingResponse.
                 * @implements IDoSomethingResponse
                 * @constructor
                 * @param {org.demo.v1.IDoSomethingResponse=} [properties] Properties to set
                 */
                function DoSomethingResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DoSomethingResponse container.
                 * @member {org.demo.v1.IDemoContainer|null|undefined} container
                 * @memberof org.demo.v1.DoSomethingResponse
                 * @instance
                 */
                DoSomethingResponse.prototype.container = null;

                /**
                 * Creates a new DoSomethingResponse instance using the specified properties.
                 * @function create
                 * @memberof org.demo.v1.DoSomethingResponse
                 * @static
                 * @param {org.demo.v1.IDoSomethingResponse=} [properties] Properties to set
                 * @returns {org.demo.v1.DoSomethingResponse} DoSomethingResponse instance
                 */
                DoSomethingResponse.create = function create(properties) {
                    return new DoSomethingResponse(properties);
                };

                /**
                 * Encodes the specified DoSomethingResponse message. Does not implicitly {@link org.demo.v1.DoSomethingResponse.verify|verify} messages.
                 * @function encode
                 * @memberof org.demo.v1.DoSomethingResponse
                 * @static
                 * @param {org.demo.v1.IDoSomethingResponse} message DoSomethingResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoSomethingResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.container != null && Object.hasOwnProperty.call(message, "container"))
                        $root.org.demo.v1.DemoContainer.encode(message.container, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified DoSomethingResponse message, length delimited. Does not implicitly {@link org.demo.v1.DoSomethingResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof org.demo.v1.DoSomethingResponse
                 * @static
                 * @param {org.demo.v1.IDoSomethingResponse} message DoSomethingResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoSomethingResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DoSomethingResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof org.demo.v1.DoSomethingResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {org.demo.v1.DoSomethingResponse} DoSomethingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoSomethingResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.org.demo.v1.DoSomethingResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.container = $root.org.demo.v1.DemoContainer.decode(reader, reader.uint32());
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
                 * Decodes a DoSomethingResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof org.demo.v1.DoSomethingResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {org.demo.v1.DoSomethingResponse} DoSomethingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoSomethingResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DoSomethingResponse message.
                 * @function verify
                 * @memberof org.demo.v1.DoSomethingResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DoSomethingResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.container != null && message.hasOwnProperty("container")) {
                        var error = $root.org.demo.v1.DemoContainer.verify(message.container);
                        if (error)
                            return "container." + error;
                    }
                    return null;
                };

                /**
                 * Creates a DoSomethingResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof org.demo.v1.DoSomethingResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {org.demo.v1.DoSomethingResponse} DoSomethingResponse
                 */
                DoSomethingResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.org.demo.v1.DoSomethingResponse)
                        return object;
                    var message = new $root.org.demo.v1.DoSomethingResponse();
                    if (object.container != null) {
                        if (typeof object.container !== "object")
                            throw TypeError(".org.demo.v1.DoSomethingResponse.container: object expected");
                        message.container = $root.org.demo.v1.DemoContainer.fromObject(object.container);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a DoSomethingResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof org.demo.v1.DoSomethingResponse
                 * @static
                 * @param {org.demo.v1.DoSomethingResponse} message DoSomethingResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DoSomethingResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.container = null;
                    if (message.container != null && message.hasOwnProperty("container"))
                        object.container = $root.org.demo.v1.DemoContainer.toObject(message.container, options);
                    return object;
                };

                /**
                 * Converts this DoSomethingResponse to JSON.
                 * @function toJSON
                 * @memberof org.demo.v1.DoSomethingResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DoSomethingResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for DoSomethingResponse
                 * @function getTypeUrl
                 * @memberof org.demo.v1.DoSomethingResponse
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                DoSomethingResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/org.demo.v1.DoSomethingResponse";
                };

                return DoSomethingResponse;
            })();

            return v1;
        })();

        return demo;
    })();

    return org;
})();

module.exports = $root;
