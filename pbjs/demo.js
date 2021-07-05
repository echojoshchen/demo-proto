/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.DemoContainer = (function() {

    /**
     * Properties of a DemoContainer.
     * @exports IDemoContainer
     * @interface IDemoContainer
     * @property {Array.<IDemoObject>|null} [objects] DemoContainer objects
     */

    /**
     * Constructs a new DemoContainer.
     * @exports DemoContainer
     * @classdesc Represents a DemoContainer.
     * @implements IDemoContainer
     * @constructor
     * @param {IDemoContainer=} [properties] Properties to set
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
     * @member {Array.<IDemoObject>} objects
     * @memberof DemoContainer
     * @instance
     */
    DemoContainer.prototype.objects = $util.emptyArray;

    /**
     * Creates a new DemoContainer instance using the specified properties.
     * @function create
     * @memberof DemoContainer
     * @static
     * @param {IDemoContainer=} [properties] Properties to set
     * @returns {DemoContainer} DemoContainer instance
     */
    DemoContainer.create = function create(properties) {
        return new DemoContainer(properties);
    };

    /**
     * Encodes the specified DemoContainer message. Does not implicitly {@link DemoContainer.verify|verify} messages.
     * @function encode
     * @memberof DemoContainer
     * @static
     * @param {IDemoContainer} message DemoContainer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DemoContainer.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.objects != null && message.objects.length)
            for (var i = 0; i < message.objects.length; ++i)
                $root.DemoObject.encode(message.objects[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DemoContainer message, length delimited. Does not implicitly {@link DemoContainer.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DemoContainer
     * @static
     * @param {IDemoContainer} message DemoContainer message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DemoContainer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DemoContainer message from the specified reader or buffer.
     * @function decode
     * @memberof DemoContainer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DemoContainer} DemoContainer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DemoContainer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DemoContainer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.objects && message.objects.length))
                    message.objects = [];
                message.objects.push($root.DemoObject.decode(reader, reader.uint32()));
                break;
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
     * @memberof DemoContainer
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DemoContainer} DemoContainer
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
     * @memberof DemoContainer
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
                var error = $root.DemoObject.verify(message.objects[i]);
                if (error)
                    return "objects." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DemoContainer message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DemoContainer
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DemoContainer} DemoContainer
     */
    DemoContainer.fromObject = function fromObject(object) {
        if (object instanceof $root.DemoContainer)
            return object;
        var message = new $root.DemoContainer();
        if (object.objects) {
            if (!Array.isArray(object.objects))
                throw TypeError(".DemoContainer.objects: array expected");
            message.objects = [];
            for (var i = 0; i < object.objects.length; ++i) {
                if (typeof object.objects[i] !== "object")
                    throw TypeError(".DemoContainer.objects: object expected");
                message.objects[i] = $root.DemoObject.fromObject(object.objects[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DemoContainer message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DemoContainer
     * @static
     * @param {DemoContainer} message DemoContainer
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
                object.objects[j] = $root.DemoObject.toObject(message.objects[j], options);
        }
        return object;
    };

    /**
     * Converts this DemoContainer to JSON.
     * @function toJSON
     * @memberof DemoContainer
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DemoContainer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DemoContainer;
})();

$root.DemoObject = (function() {

    /**
     * Properties of a DemoObject.
     * @exports IDemoObject
     * @interface IDemoObject
     * @property {string|null} [name] DemoObject name
     * @property {string|null} [type] DemoObject type
     * @property {number|null} [count] DemoObject count
     */

    /**
     * Constructs a new DemoObject.
     * @exports DemoObject
     * @classdesc Represents a DemoObject.
     * @implements IDemoObject
     * @constructor
     * @param {IDemoObject=} [properties] Properties to set
     */
    function DemoObject(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DemoObject name.
     * @member {string} name
     * @memberof DemoObject
     * @instance
     */
    DemoObject.prototype.name = "";

    /**
     * DemoObject type.
     * @member {string} type
     * @memberof DemoObject
     * @instance
     */
    DemoObject.prototype.type = "";

    /**
     * DemoObject count.
     * @member {number} count
     * @memberof DemoObject
     * @instance
     */
    DemoObject.prototype.count = 0;

    /**
     * Creates a new DemoObject instance using the specified properties.
     * @function create
     * @memberof DemoObject
     * @static
     * @param {IDemoObject=} [properties] Properties to set
     * @returns {DemoObject} DemoObject instance
     */
    DemoObject.create = function create(properties) {
        return new DemoObject(properties);
    };

    /**
     * Encodes the specified DemoObject message. Does not implicitly {@link DemoObject.verify|verify} messages.
     * @function encode
     * @memberof DemoObject
     * @static
     * @param {IDemoObject} message DemoObject message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DemoObject.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.count);
        return writer;
    };

    /**
     * Encodes the specified DemoObject message, length delimited. Does not implicitly {@link DemoObject.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DemoObject
     * @static
     * @param {IDemoObject} message DemoObject message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DemoObject.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DemoObject message from the specified reader or buffer.
     * @function decode
     * @memberof DemoObject
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DemoObject} DemoObject
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DemoObject.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DemoObject();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.type = reader.string();
                break;
            case 3:
                message.count = reader.int32();
                break;
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
     * @memberof DemoObject
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DemoObject} DemoObject
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
     * @memberof DemoObject
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DemoObject.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            if (!$util.isString(message.type))
                return "type: string expected";
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count))
                return "count: integer expected";
        return null;
    };

    /**
     * Creates a DemoObject message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DemoObject
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DemoObject} DemoObject
     */
    DemoObject.fromObject = function fromObject(object) {
        if (object instanceof $root.DemoObject)
            return object;
        var message = new $root.DemoObject();
        if (object.name != null)
            message.name = String(object.name);
        if (object.type != null)
            message.type = String(object.type);
        if (object.count != null)
            message.count = object.count | 0;
        return message;
    };

    /**
     * Creates a plain object from a DemoObject message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DemoObject
     * @static
     * @param {DemoObject} message DemoObject
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DemoObject.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.type = "";
            object.count = 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = message.type;
        if (message.count != null && message.hasOwnProperty("count"))
            object.count = message.count;
        return object;
    };

    /**
     * Converts this DemoObject to JSON.
     * @function toJSON
     * @memberof DemoObject
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DemoObject.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return DemoObject;
})();

/**
 * MyEnum enum.
 * @exports MyEnum
 * @enum {number}
 * @property {number} DEFAULT=0 DEFAULT value
 * @property {number} ENABLED=1 ENABLED value
 */
$root.MyEnum = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "DEFAULT"] = 0;
    values[valuesById[1] = "ENABLED"] = 1;
    return values;
})();

module.exports = $root;
