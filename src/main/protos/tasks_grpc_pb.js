// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tasks_pb = require('./tasks_pb.js');
var module_pb = require('./module_pb.js');

function serialize_tasks_Client(arg) {
  if (!(arg instanceof tasks_pb.Client)) {
    throw new Error('Expected argument of type tasks.Client');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_Client(buffer_arg) {
  return tasks_pb.Client.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_Status(arg) {
  if (!(arg instanceof tasks_pb.Status)) {
    throw new Error('Expected argument of type tasks.Status');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_Status(buffer_arg) {
  return tasks_pb.Status.deserializeBinary(new Uint8Array(buffer_arg));
}


var TasksService = exports.TasksService = {
  task: {
    path: '/tasks.Tasks/Task',
    requestStream: true,
    responseStream: true,
    requestType: tasks_pb.Client,
    responseType: tasks_pb.Status,
    requestSerialize: serialize_tasks_Client,
    requestDeserialize: deserialize_tasks_Client,
    responseSerialize: serialize_tasks_Status,
    responseDeserialize: deserialize_tasks_Status,
  },
};

exports.TasksClient = grpc.makeGenericClientConstructor(TasksService);
