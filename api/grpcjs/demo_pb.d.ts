// package: org.demo.v1
// file: demo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DemoContainer extends jspb.Message { 
    clearObjectsList(): void;
    getObjectsList(): Array<DemoObject>;
    setObjectsList(value: Array<DemoObject>): DemoContainer;
    addObjects(value?: DemoObject, index?: number): DemoObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DemoContainer.AsObject;
    static toObject(includeInstance: boolean, msg: DemoContainer): DemoContainer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DemoContainer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DemoContainer;
    static deserializeBinaryFromReader(message: DemoContainer, reader: jspb.BinaryReader): DemoContainer;
}

export namespace DemoContainer {
    export type AsObject = {
        objectsList: Array<DemoObject.AsObject>,
    }
}

export class DemoObject extends jspb.Message { 

    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): Info | undefined;
    setInfo(value?: Info): DemoObject;
    getName(): string;
    setName(value: string): DemoObject;
    getType(): MyType;
    setType(value: MyType): DemoObject;
    getCount(): number;
    setCount(value: number): DemoObject;
    getLongFieldName(): string;
    setLongFieldName(value: string): DemoObject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DemoObject.AsObject;
    static toObject(includeInstance: boolean, msg: DemoObject): DemoObject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DemoObject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DemoObject;
    static deserializeBinaryFromReader(message: DemoObject, reader: jspb.BinaryReader): DemoObject;
}

export namespace DemoObject {
    export type AsObject = {
        info?: Info.AsObject,
        name: string,
        type: MyType,
        count: number,
        longFieldName: string,
    }
}

export class Info extends jspb.Message { 
    getId(): string;
    setId(value: string): Info;
    getTime(): number;
    setTime(value: number): Info;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Info.AsObject;
    static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Info;
    static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
}

export namespace Info {
    export type AsObject = {
        id: string,
        time: number,
    }
}

export class DoSomethingRequest extends jspb.Message { 

    hasContainer(): boolean;
    clearContainer(): void;
    getContainer(): DemoContainer | undefined;
    setContainer(value?: DemoContainer): DoSomethingRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DoSomethingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DoSomethingRequest): DoSomethingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DoSomethingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DoSomethingRequest;
    static deserializeBinaryFromReader(message: DoSomethingRequest, reader: jspb.BinaryReader): DoSomethingRequest;
}

export namespace DoSomethingRequest {
    export type AsObject = {
        container?: DemoContainer.AsObject,
    }
}

export class DoSomethingResponse extends jspb.Message { 

    hasContainer(): boolean;
    clearContainer(): void;
    getContainer(): DemoContainer | undefined;
    setContainer(value?: DemoContainer): DoSomethingResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DoSomethingResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DoSomethingResponse): DoSomethingResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DoSomethingResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DoSomethingResponse;
    static deserializeBinaryFromReader(message: DoSomethingResponse, reader: jspb.BinaryReader): DoSomethingResponse;
}

export namespace DoSomethingResponse {
    export type AsObject = {
        container?: DemoContainer.AsObject,
    }
}

export enum MyType {
    MY_TYPE_UNSPECIFIED = 0,
    MY_TYPE_ENABLED = 1,
    MY_TYPE_DISABLED = 2,
}
