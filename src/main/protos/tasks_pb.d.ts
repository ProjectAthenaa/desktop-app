// package: tasks
// file: tasks.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as module_pb from "./module_pb";

export class Client extends jspb.Message { 
    getCommand(): module_pb.COMMAND;
    setCommand(value: module_pb.COMMAND): Client;

    hasTaskid(): boolean;
    clearTaskid(): void;
    getTaskid(): string | undefined;
    setTaskid(value: string): Client;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Client.AsObject;
    static toObject(includeInstance: boolean, msg: Client): Client.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Client, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Client;
    static deserializeBinaryFromReader(message: Client, reader: jspb.BinaryReader): Client;
}

export namespace Client {
    export type AsObject = {
        command: module_pb.COMMAND,
        taskid?: string,
    }
}

export class Status extends jspb.Message { 
    getStatus(): module_pb.STATUS;
    setStatus(value: module_pb.STATUS): Status;

    hasError(): boolean;
    clearError(): void;
    getError(): string | undefined;
    setError(value: string): Status;

    getInformationMap(): jspb.Map<string, string>;
    clearInformationMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Status.AsObject;
    static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Status;
    static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
    export type AsObject = {
        status: module_pb.STATUS,
        error?: string,

        informationMap: Array<[string, string]>,
    }
}
