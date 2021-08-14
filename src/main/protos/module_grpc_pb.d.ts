// package: module
// file: module.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as module_pb from "./module_pb";

interface IModuleService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    task: IModuleService_ITask;
}

interface IModuleService_ITask extends grpc.MethodDefinition<module_pb.Controller, module_pb.Status> {
    path: "/module.Module/Task";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<module_pb.Controller>;
    requestDeserialize: grpc.deserialize<module_pb.Controller>;
    responseSerialize: grpc.serialize<module_pb.Status>;
    responseDeserialize: grpc.deserialize<module_pb.Status>;
}

export const ModuleService: IModuleService;

export interface IModuleServer {
    task: grpc.handleBidiStreamingCall<module_pb.Controller, module_pb.Status>;
}

export interface IModuleClient {
    task(): grpc.ClientDuplexStream<module_pb.Controller, module_pb.Status>;
    task(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<module_pb.Controller, module_pb.Status>;
    task(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<module_pb.Controller, module_pb.Status>;
}

export class ModuleClient extends grpc.Client implements IModuleClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public task(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<module_pb.Controller, module_pb.Status>;
    public task(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<module_pb.Controller, module_pb.Status>;
}
