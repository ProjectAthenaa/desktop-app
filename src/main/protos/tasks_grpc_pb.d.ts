// package: tasks
// file: tasks.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as tasks_pb from "./tasks_pb";
import * as module_pb from "./module_pb";

interface ITasksService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    task: ITasksService_ITask;
}

interface ITasksService_ITask extends grpc.MethodDefinition<tasks_pb.Client, tasks_pb.Status> {
    path: "/tasks.Tasks/Task";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<tasks_pb.Client>;
    requestDeserialize: grpc.deserialize<tasks_pb.Client>;
    responseSerialize: grpc.serialize<tasks_pb.Status>;
    responseDeserialize: grpc.deserialize<tasks_pb.Status>;
}

export const TasksService: ITasksService;

export interface ITasksServer {
    task: grpc.handleBidiStreamingCall<tasks_pb.Client, tasks_pb.Status>;
}

export interface ITasksClient {
    task(): grpc.ClientDuplexStream<tasks_pb.Client, tasks_pb.Status>;
    task(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<tasks_pb.Client, tasks_pb.Status>;
    task(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<tasks_pb.Client, tasks_pb.Status>;
}

export class TasksClient extends grpc.Client implements ITasksClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public task(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<tasks_pb.Client, tasks_pb.Status>;
    public task(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<tasks_pb.Client, tasks_pb.Status>;
}
