// source: demo.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.DemoContainer', null, global);
goog.exportSymbol('proto.DemoObject', null, global);
goog.exportSymbol('proto.Info', null, global);
goog.exportSymbol('proto.MyType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DemoContainer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DemoContainer.repeatedFields_, null);
};
goog.inherits(proto.DemoContainer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DemoContainer.displayName = 'proto.DemoContainer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DemoObject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DemoObject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DemoObject.displayName = 'proto.DemoObject';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Info = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Info, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Info.displayName = 'proto.Info';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DemoContainer.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DemoContainer.prototype.toObject = function(opt_includeInstance) {
  return proto.DemoContainer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DemoContainer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DemoContainer.toObject = function(includeInstance, msg) {
  var f, obj = {
    objectsList: jspb.Message.toObjectList(msg.getObjectsList(),
    proto.DemoObject.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DemoContainer}
 */
proto.DemoContainer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DemoContainer;
  return proto.DemoContainer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DemoContainer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DemoContainer}
 */
proto.DemoContainer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.DemoObject;
      reader.readMessage(value,proto.DemoObject.deserializeBinaryFromReader);
      msg.addObjects(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DemoContainer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DemoContainer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DemoContainer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DemoContainer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.DemoObject.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DemoObject objects = 1;
 * @return {!Array<!proto.DemoObject>}
 */
proto.DemoContainer.prototype.getObjectsList = function() {
  return /** @type{!Array<!proto.DemoObject>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.DemoObject, 1));
};


/**
 * @param {!Array<!proto.DemoObject>} value
 * @return {!proto.DemoContainer} returns this
*/
proto.DemoContainer.prototype.setObjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.DemoObject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.DemoObject}
 */
proto.DemoContainer.prototype.addObjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.DemoObject, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.DemoContainer} returns this
 */
proto.DemoContainer.prototype.clearObjectsList = function() {
  return this.setObjectsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DemoObject.prototype.toObject = function(opt_includeInstance) {
  return proto.DemoObject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DemoObject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DemoObject.toObject = function(includeInstance, msg) {
  var f, obj = {
    info: (f = msg.getInfo()) && proto.Info.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    count: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DemoObject}
 */
proto.DemoObject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DemoObject;
  return proto.DemoObject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DemoObject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DemoObject}
 */
proto.DemoObject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Info;
      reader.readMessage(value,proto.Info.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.MyType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DemoObject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DemoObject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DemoObject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DemoObject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Info.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional Info info = 1;
 * @return {?proto.Info}
 */
proto.DemoObject.prototype.getInfo = function() {
  return /** @type{?proto.Info} */ (
    jspb.Message.getWrapperField(this, proto.Info, 1));
};


/**
 * @param {?proto.Info|undefined} value
 * @return {!proto.DemoObject} returns this
*/
proto.DemoObject.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.DemoObject} returns this
 */
proto.DemoObject.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DemoObject.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.DemoObject.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.DemoObject} returns this
 */
proto.DemoObject.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional MyType type = 3;
 * @return {!proto.MyType}
 */
proto.DemoObject.prototype.getType = function() {
  return /** @type {!proto.MyType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.MyType} value
 * @return {!proto.DemoObject} returns this
 */
proto.DemoObject.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int32 count = 4;
 * @return {number}
 */
proto.DemoObject.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.DemoObject} returns this
 */
proto.DemoObject.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Info.prototype.toObject = function(opt_includeInstance) {
  return proto.Info.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Info} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Info.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    time: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Info}
 */
proto.Info.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Info;
  return proto.Info.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Info} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Info}
 */
proto.Info.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Info.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Info.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Info} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Info.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.Info.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Info} returns this
 */
proto.Info.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 time = 2;
 * @return {number}
 */
proto.Info.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Info} returns this
 */
proto.Info.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.MyType = {
  DEFAULT: 0,
  ENABLED: 1,
  DISABLED: 2
};

goog.object.extend(exports, proto);
