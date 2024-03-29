import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace org. */
export namespace org {

    /** Namespace demo. */
    namespace demo {

        /** Properties of a DemoContainer. */
        interface IDemoContainer {

            /** DemoContainer objects */
            objects?: (org.demo.IDemoObject[]|null);
        }

        /** Represents a DemoContainer. */
        class DemoContainer implements IDemoContainer {

            /**
             * Constructs a new DemoContainer.
             * @param [properties] Properties to set
             */
            constructor(properties?: org.demo.IDemoContainer);

            /** DemoContainer objects. */
            public objects: org.demo.IDemoObject[];

            /**
             * Creates a new DemoContainer instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DemoContainer instance
             */
            public static create(properties?: org.demo.IDemoContainer): org.demo.DemoContainer;

            /**
             * Encodes the specified DemoContainer message. Does not implicitly {@link org.demo.DemoContainer.verify|verify} messages.
             * @param message DemoContainer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: org.demo.IDemoContainer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DemoContainer message, length delimited. Does not implicitly {@link org.demo.DemoContainer.verify|verify} messages.
             * @param message DemoContainer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: org.demo.IDemoContainer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DemoContainer message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DemoContainer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.demo.DemoContainer;

            /**
             * Decodes a DemoContainer message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DemoContainer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.demo.DemoContainer;

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
            public static fromObject(object: { [k: string]: any }): org.demo.DemoContainer;

            /**
             * Creates a plain object from a DemoContainer message. Also converts values to other types if specified.
             * @param message DemoContainer
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: org.demo.DemoContainer, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            info?: (org.demo.IInfo|null);

            /** DemoObject name */
            name?: (string|null);

            /** DemoObject type */
            type?: (org.demo.MyType|null);

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
            constructor(properties?: org.demo.IDemoObject);

            /** DemoObject info. */
            public info?: (org.demo.IInfo|null);

            /** DemoObject name. */
            public name: string;

            /** DemoObject type. */
            public type: org.demo.MyType;

            /** DemoObject count. */
            public count: number;

            /** DemoObject longFieldName. */
            public longFieldName: string;

            /**
             * Creates a new DemoObject instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DemoObject instance
             */
            public static create(properties?: org.demo.IDemoObject): org.demo.DemoObject;

            /**
             * Encodes the specified DemoObject message. Does not implicitly {@link org.demo.DemoObject.verify|verify} messages.
             * @param message DemoObject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: org.demo.IDemoObject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DemoObject message, length delimited. Does not implicitly {@link org.demo.DemoObject.verify|verify} messages.
             * @param message DemoObject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: org.demo.IDemoObject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DemoObject message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DemoObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.demo.DemoObject;

            /**
             * Decodes a DemoObject message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DemoObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.demo.DemoObject;

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
            public static fromObject(object: { [k: string]: any }): org.demo.DemoObject;

            /**
             * Creates a plain object from a DemoObject message. Also converts values to other types if specified.
             * @param message DemoObject
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: org.demo.DemoObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            constructor(properties?: org.demo.IInfo);

            /** Info id. */
            public id: string;

            /** Info time. */
            public time: (number|Long);

            /**
             * Creates a new Info instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Info instance
             */
            public static create(properties?: org.demo.IInfo): org.demo.Info;

            /**
             * Encodes the specified Info message. Does not implicitly {@link org.demo.Info.verify|verify} messages.
             * @param message Info message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: org.demo.IInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Info message, length delimited. Does not implicitly {@link org.demo.Info.verify|verify} messages.
             * @param message Info message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: org.demo.IInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Info message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): org.demo.Info;

            /**
             * Decodes an Info message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Info
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): org.demo.Info;

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
            public static fromObject(object: { [k: string]: any }): org.demo.Info;

            /**
             * Creates a plain object from an Info message. Also converts values to other types if specified.
             * @param message Info
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: org.demo.Info, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            DEFAULT = 0,
            ENABLED = 1,
            DISABLED = 2
        }

        /** Represents a DemoApi */
        class DemoApi extends $protobuf.rpc.Service {

            /**
             * Constructs a new DemoApi service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new DemoApi service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DemoApi;

            /**
             * Calls DoSomething.
             * @param request DemoContainer message or plain object
             * @param callback Node-style callback called with the error, if any, and DemoContainer
             */
            public doSomething(request: org.demo.IDemoContainer, callback: org.demo.DemoApi.DoSomethingCallback): void;

            /**
             * Calls DoSomething.
             * @param request DemoContainer message or plain object
             * @returns Promise
             */
            public doSomething(request: org.demo.IDemoContainer): Promise<org.demo.DemoContainer>;
        }

        namespace DemoApi {

            /**
             * Callback as used by {@link org.demo.DemoApi#doSomething}.
             * @param error Error, if any
             * @param [response] DemoContainer
             */
            type DoSomethingCallback = (error: (Error|null), response?: org.demo.DemoContainer) => void;
        }
    }
}
