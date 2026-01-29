import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace org. */
export namespace org {

    /** Namespace demo. */
    namespace demo {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a DemoContainer. */
            interface IDemoContainer {

                /** DemoContainer objects */
                objects?: (org.demo.v1.IDemoObject[]|null);
            }

            /** Represents a DemoContainer. */
            class DemoContainer implements IDemoContainer {

                /**
                 * Constructs a new DemoContainer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.demo.v1.IDemoContainer);

                /** DemoContainer objects. */
                public objects: org.demo.v1.IDemoObject[];

                /**
                 * Creates a new DemoContainer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DemoContainer instance
                 */
                public static create(properties?: org.demo.v1.IDemoContainer): org.demo.v1.DemoContainer;

                /**
                 * Encodes the specified DemoContainer message. Does not implicitly {@link org.demo.v1.DemoContainer.verify|verify} messages.
                 * @param message DemoContainer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.demo.v1.IDemoContainer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DemoContainer message, length delimited. Does not implicitly {@link org.demo.v1.DemoContainer.verify|verify} messages.
                 * @param message DemoContainer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.demo.v1.IDemoContainer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DemoContainer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DemoContainer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.demo.v1.DemoContainer;

                /**
                 * Decodes a DemoContainer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DemoContainer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.demo.v1.DemoContainer;

                /**
                 * Verifies a DemoContainer message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DemoContainer message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DemoContainer
                 */
                public static fromObject(object: { [k: string]: any }): org.demo.v1.DemoContainer;

                /**
                 * Creates a plain object from a DemoContainer message. Also converts values to other types if specified.
                 * @param message DemoContainer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.demo.v1.DemoContainer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DemoContainer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DemoContainer
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DemoObject. */
            interface IDemoObject {

                /** DemoObject info */
                info?: (org.demo.v1.IInfo|null);

                /** DemoObject name */
                name?: (string|null);

                /** DemoObject type */
                type?: (org.demo.v1.MyType|null);

                /** DemoObject count */
                count?: (number|null);

                /** DemoObject longFieldName */
                longFieldName?: (string|null);
            }

            /** Represents a DemoObject. */
            class DemoObject implements IDemoObject {

                /**
                 * Constructs a new DemoObject.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.demo.v1.IDemoObject);

                /** DemoObject info. */
                public info?: (org.demo.v1.IInfo|null);

                /** DemoObject name. */
                public name: string;

                /** DemoObject type. */
                public type: org.demo.v1.MyType;

                /** DemoObject count. */
                public count: number;

                /** DemoObject longFieldName. */
                public longFieldName: string;

                /**
                 * Creates a new DemoObject instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DemoObject instance
                 */
                public static create(properties?: org.demo.v1.IDemoObject): org.demo.v1.DemoObject;

                /**
                 * Encodes the specified DemoObject message. Does not implicitly {@link org.demo.v1.DemoObject.verify|verify} messages.
                 * @param message DemoObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.demo.v1.IDemoObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DemoObject message, length delimited. Does not implicitly {@link org.demo.v1.DemoObject.verify|verify} messages.
                 * @param message DemoObject message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.demo.v1.IDemoObject, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DemoObject message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DemoObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.demo.v1.DemoObject;

                /**
                 * Decodes a DemoObject message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DemoObject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.demo.v1.DemoObject;

                /**
                 * Verifies a DemoObject message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DemoObject message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DemoObject
                 */
                public static fromObject(object: { [k: string]: any }): org.demo.v1.DemoObject;

                /**
                 * Creates a plain object from a DemoObject message. Also converts values to other types if specified.
                 * @param message DemoObject
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.demo.v1.DemoObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DemoObject to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DemoObject
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an Info. */
            interface IInfo {

                /** Info id */
                id?: (string|null);

                /** Info time */
                time?: (number|Long|null);
            }

            /** Represents an Info. */
            class Info implements IInfo {

                /**
                 * Constructs a new Info.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.demo.v1.IInfo);

                /** Info id. */
                public id: string;

                /** Info time. */
                public time: (number|Long);

                /**
                 * Creates a new Info instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Info instance
                 */
                public static create(properties?: org.demo.v1.IInfo): org.demo.v1.Info;

                /**
                 * Encodes the specified Info message. Does not implicitly {@link org.demo.v1.Info.verify|verify} messages.
                 * @param message Info message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.demo.v1.IInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Info message, length delimited. Does not implicitly {@link org.demo.v1.Info.verify|verify} messages.
                 * @param message Info message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.demo.v1.IInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Info message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Info
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.demo.v1.Info;

                /**
                 * Decodes an Info message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Info
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.demo.v1.Info;

                /**
                 * Verifies an Info message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Info message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Info
                 */
                public static fromObject(object: { [k: string]: any }): org.demo.v1.Info;

                /**
                 * Creates a plain object from an Info message. Also converts values to other types if specified.
                 * @param message Info
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.demo.v1.Info, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Info to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Info
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** MyType enum. */
            enum MyType {
                MY_TYPE_UNSPECIFIED = 0,
                MY_TYPE_ENABLED = 1,
                MY_TYPE_DISABLED = 2
            }

            /** Represents a DemoApiService */
            class DemoApiService extends $protobuf.rpc.Service {

                /**
                 * Constructs a new DemoApiService service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new DemoApiService service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DemoApiService;

                /**
                 * Calls DoSomething.
                 * @param request DoSomethingRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and DoSomethingResponse
                 */
                public doSomething(request: org.demo.v1.IDoSomethingRequest, callback: org.demo.v1.DemoApiService.DoSomethingCallback): void;

                /**
                 * Calls DoSomething.
                 * @param request DoSomethingRequest message or plain object
                 * @returns Promise
                 */
                public doSomething(request: org.demo.v1.IDoSomethingRequest): Promise<org.demo.v1.DoSomethingResponse>;
            }

            namespace DemoApiService {

                /**
                 * Callback as used by {@link org.demo.v1.DemoApiService#doSomething}.
                 * @param error Error, if any
                 * @param [response] DoSomethingResponse
                 */
                type DoSomethingCallback = (error: (Error|null), response?: org.demo.v1.DoSomethingResponse) => void;
            }

            /** Properties of a DoSomethingRequest. */
            interface IDoSomethingRequest {

                /** DoSomethingRequest container */
                container?: (org.demo.v1.IDemoContainer|null);
            }

            /** Represents a DoSomethingRequest. */
            class DoSomethingRequest implements IDoSomethingRequest {

                /**
                 * Constructs a new DoSomethingRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.demo.v1.IDoSomethingRequest);

                /** DoSomethingRequest container. */
                public container?: (org.demo.v1.IDemoContainer|null);

                /**
                 * Creates a new DoSomethingRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DoSomethingRequest instance
                 */
                public static create(properties?: org.demo.v1.IDoSomethingRequest): org.demo.v1.DoSomethingRequest;

                /**
                 * Encodes the specified DoSomethingRequest message. Does not implicitly {@link org.demo.v1.DoSomethingRequest.verify|verify} messages.
                 * @param message DoSomethingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.demo.v1.IDoSomethingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DoSomethingRequest message, length delimited. Does not implicitly {@link org.demo.v1.DoSomethingRequest.verify|verify} messages.
                 * @param message DoSomethingRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.demo.v1.IDoSomethingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DoSomethingRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DoSomethingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.demo.v1.DoSomethingRequest;

                /**
                 * Decodes a DoSomethingRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DoSomethingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.demo.v1.DoSomethingRequest;

                /**
                 * Verifies a DoSomethingRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DoSomethingRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DoSomethingRequest
                 */
                public static fromObject(object: { [k: string]: any }): org.demo.v1.DoSomethingRequest;

                /**
                 * Creates a plain object from a DoSomethingRequest message. Also converts values to other types if specified.
                 * @param message DoSomethingRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.demo.v1.DoSomethingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DoSomethingRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DoSomethingRequest
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a DoSomethingResponse. */
            interface IDoSomethingResponse {

                /** DoSomethingResponse container */
                container?: (org.demo.v1.IDemoContainer|null);
            }

            /** Represents a DoSomethingResponse. */
            class DoSomethingResponse implements IDoSomethingResponse {

                /**
                 * Constructs a new DoSomethingResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: org.demo.v1.IDoSomethingResponse);

                /** DoSomethingResponse container. */
                public container?: (org.demo.v1.IDemoContainer|null);

                /**
                 * Creates a new DoSomethingResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DoSomethingResponse instance
                 */
                public static create(properties?: org.demo.v1.IDoSomethingResponse): org.demo.v1.DoSomethingResponse;

                /**
                 * Encodes the specified DoSomethingResponse message. Does not implicitly {@link org.demo.v1.DoSomethingResponse.verify|verify} messages.
                 * @param message DoSomethingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: org.demo.v1.IDoSomethingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DoSomethingResponse message, length delimited. Does not implicitly {@link org.demo.v1.DoSomethingResponse.verify|verify} messages.
                 * @param message DoSomethingResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: org.demo.v1.IDoSomethingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DoSomethingResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DoSomethingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.demo.v1.DoSomethingResponse;

                /**
                 * Decodes a DoSomethingResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DoSomethingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.demo.v1.DoSomethingResponse;

                /**
                 * Verifies a DoSomethingResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DoSomethingResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DoSomethingResponse
                 */
                public static fromObject(object: { [k: string]: any }): org.demo.v1.DoSomethingResponse;

                /**
                 * Creates a plain object from a DoSomethingResponse message. Also converts values to other types if specified.
                 * @param message DoSomethingResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: org.demo.v1.DoSomethingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DoSomethingResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DoSomethingResponse
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
