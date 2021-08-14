// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var module_pb = require('./module_pb.js');

function serialize_module_Controller(arg) {
  if (!(arg instanceof module_pb.Controller)) {
    throw new Error('Expected argument of type module.Controller');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_module_Controller(buffer_arg) {
  return module_pb.Controller.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_module_Status(arg) {
  if (!(arg instanceof module_pb.Status)) {
    throw new Error('Expected argument of type module.Status');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_module_Status(buffer_arg) {
  return module_pb.Status.deserializeBinary(new Uint8Array(buffer_arg));
}


var ModuleService = exports.ModuleService = {
  task: {
    path: '/module.Module/Task',
    requestStream: true,
    responseStream: true,
    requestType: module_pb.Controller,
    responseType: module_pb.Status,
    requestSerialize: serialize_module_Controller,
    requestDeserialize: deserialize_module_Controller,
    responseSerialize: serialize_module_Status,
    responseDeserialize: deserialize_module_Status,
  },
};

exports.ModuleClient = grpc.makeGenericClientConstructor(ModuleService);
