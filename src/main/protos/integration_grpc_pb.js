// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var integration_pb = require('./integration_pb.js');

function serialize_integration_AccGroups(arg) {
  if (!(arg instanceof integration_pb.AccGroups)) {
    throw new Error('Expected argument of type integration.AccGroups');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_AccGroups(buffer_arg) {
  return integration_pb.AccGroups.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_AccountGroup(arg) {
  if (!(arg instanceof integration_pb.AccountGroup)) {
    throw new Error('Expected argument of type integration.AccountGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_AccountGroup(buffer_arg) {
  return integration_pb.AccountGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_CreateListRequest(arg) {
  if (!(arg instanceof integration_pb.CreateListRequest)) {
    throw new Error('Expected argument of type integration.CreateListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_CreateListRequest(buffer_arg) {
  return integration_pb.CreateListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_CreateListResponse(arg) {
  if (!(arg instanceof integration_pb.CreateListResponse)) {
    throw new Error('Expected argument of type integration.CreateListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_CreateListResponse(buffer_arg) {
  return integration_pb.CreateListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_CreateProfileGroup(arg) {
  if (!(arg instanceof integration_pb.CreateProfileGroup)) {
    throw new Error('Expected argument of type integration.CreateProfileGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_CreateProfileGroup(buffer_arg) {
  return integration_pb.CreateProfileGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_CreateTaskGroup(arg) {
  if (!(arg instanceof integration_pb.CreateTaskGroup)) {
    throw new Error('Expected argument of type integration.CreateTaskGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_CreateTaskGroup(buffer_arg) {
  return integration_pb.CreateTaskGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_CreateTaskGroupResponse(arg) {
  if (!(arg instanceof integration_pb.CreateTaskGroupResponse)) {
    throw new Error('Expected argument of type integration.CreateTaskGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_CreateTaskGroupResponse(buffer_arg) {
  return integration_pb.CreateTaskGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_CreateTaskResponse(arg) {
  if (!(arg instanceof integration_pb.CreateTaskResponse)) {
    throw new Error('Expected argument of type integration.CreateTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_CreateTaskResponse(buffer_arg) {
  return integration_pb.CreateTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_Delay(arg) {
  if (!(arg instanceof integration_pb.Delay)) {
    throw new Error('Expected argument of type integration.Delay');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_Delay(buffer_arg) {
  return integration_pb.Delay.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_DeleteGroupRequest(arg) {
  if (!(arg instanceof integration_pb.DeleteGroupRequest)) {
    throw new Error('Expected argument of type integration.DeleteGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_DeleteGroupRequest(buffer_arg) {
  return integration_pb.DeleteGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_DeleteListRequest(arg) {
  if (!(arg instanceof integration_pb.DeleteListRequest)) {
    throw new Error('Expected argument of type integration.DeleteListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_DeleteListRequest(buffer_arg) {
  return integration_pb.DeleteListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_DeleteProfileRequest(arg) {
  if (!(arg instanceof integration_pb.DeleteProfileRequest)) {
    throw new Error('Expected argument of type integration.DeleteProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_DeleteProfileRequest(buffer_arg) {
  return integration_pb.DeleteProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_DeleteTask(arg) {
  if (!(arg instanceof integration_pb.DeleteTask)) {
    throw new Error('Expected argument of type integration.DeleteTask');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_DeleteTask(buffer_arg) {
  return integration_pb.DeleteTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_EmptyRequest(arg) {
  if (!(arg instanceof integration_pb.EmptyRequest)) {
    throw new Error('Expected argument of type integration.EmptyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_EmptyRequest(buffer_arg) {
  return integration_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_GetGroupRequest(arg) {
  if (!(arg instanceof integration_pb.GetGroupRequest)) {
    throw new Error('Expected argument of type integration.GetGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_GetGroupRequest(buffer_arg) {
  return integration_pb.GetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_GetListRequest(arg) {
  if (!(arg instanceof integration_pb.GetListRequest)) {
    throw new Error('Expected argument of type integration.GetListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_GetListRequest(buffer_arg) {
  return integration_pb.GetListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_GetListResponse(arg) {
  if (!(arg instanceof integration_pb.GetListResponse)) {
    throw new Error('Expected argument of type integration.GetListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_GetListResponse(buffer_arg) {
  return integration_pb.GetListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_GetProfileRequest(arg) {
  if (!(arg instanceof integration_pb.GetProfileRequest)) {
    throw new Error('Expected argument of type integration.GetProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_GetProfileRequest(buffer_arg) {
  return integration_pb.GetProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_GetTask(arg) {
  if (!(arg instanceof integration_pb.GetTask)) {
    throw new Error('Expected argument of type integration.GetTask');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_GetTask(buffer_arg) {
  return integration_pb.GetTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_IDResponse(arg) {
  if (!(arg instanceof integration_pb.IDResponse)) {
    throw new Error('Expected argument of type integration.IDResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_IDResponse(buffer_arg) {
  return integration_pb.IDResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_Profile(arg) {
  if (!(arg instanceof integration_pb.Profile)) {
    throw new Error('Expected argument of type integration.Profile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_Profile(buffer_arg) {
  return integration_pb.Profile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_ProfileGroup(arg) {
  if (!(arg instanceof integration_pb.ProfileGroup)) {
    throw new Error('Expected argument of type integration.ProfileGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_ProfileGroup(buffer_arg) {
  return integration_pb.ProfileGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_ProfileGroups(arg) {
  if (!(arg instanceof integration_pb.ProfileGroups)) {
    throw new Error('Expected argument of type integration.ProfileGroups');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_ProfileGroups(buffer_arg) {
  return integration_pb.ProfileGroups.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_ProxyLists(arg) {
  if (!(arg instanceof integration_pb.ProxyLists)) {
    throw new Error('Expected argument of type integration.ProxyLists');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_ProxyLists(buffer_arg) {
  return integration_pb.ProxyLists.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_SetResponse(arg) {
  if (!(arg instanceof integration_pb.SetResponse)) {
    throw new Error('Expected argument of type integration.SetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_SetResponse(buffer_arg) {
  return integration_pb.SetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_StatusResponse(arg) {
  if (!(arg instanceof integration_pb.StatusResponse)) {
    throw new Error('Expected argument of type integration.StatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_StatusResponse(buffer_arg) {
  return integration_pb.StatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_Task(arg) {
  if (!(arg instanceof integration_pb.Task)) {
    throw new Error('Expected argument of type integration.Task');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_Task(buffer_arg) {
  return integration_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_TaskGroups(arg) {
  if (!(arg instanceof integration_pb.TaskGroups)) {
    throw new Error('Expected argument of type integration.TaskGroups');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_TaskGroups(buffer_arg) {
  return integration_pb.TaskGroups.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_TestListRequest(arg) {
  if (!(arg instanceof integration_pb.TestListRequest)) {
    throw new Error('Expected argument of type integration.TestListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_TestListRequest(buffer_arg) {
  return integration_pb.TestListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_TestListResponse(arg) {
  if (!(arg instanceof integration_pb.TestListResponse)) {
    throw new Error('Expected argument of type integration.TestListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_TestListResponse(buffer_arg) {
  return integration_pb.TestListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_TestResponse(arg) {
  if (!(arg instanceof integration_pb.TestResponse)) {
    throw new Error('Expected argument of type integration.TestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_TestResponse(buffer_arg) {
  return integration_pb.TestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_UpdateGroupRequest(arg) {
  if (!(arg instanceof integration_pb.UpdateGroupRequest)) {
    throw new Error('Expected argument of type integration.UpdateGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_UpdateGroupRequest(buffer_arg) {
  return integration_pb.UpdateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_UpdateListRequest(arg) {
  if (!(arg instanceof integration_pb.UpdateListRequest)) {
    throw new Error('Expected argument of type integration.UpdateListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_UpdateListRequest(buffer_arg) {
  return integration_pb.UpdateListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_UpdateProfileRequest(arg) {
  if (!(arg instanceof integration_pb.UpdateProfileRequest)) {
    throw new Error('Expected argument of type integration.UpdateProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_UpdateProfileRequest(buffer_arg) {
  return integration_pb.UpdateProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_UpdateTask(arg) {
  if (!(arg instanceof integration_pb.UpdateTask)) {
    throw new Error('Expected argument of type integration.UpdateTask');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_UpdateTask(buffer_arg) {
  return integration_pb.UpdateTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_UpdateTaskGroupRequest(arg) {
  if (!(arg instanceof integration_pb.UpdateTaskGroupRequest)) {
    throw new Error('Expected argument of type integration.UpdateTaskGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_UpdateTaskGroupRequest(buffer_arg) {
  return integration_pb.UpdateTaskGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_UserSettings(arg) {
  if (!(arg instanceof integration_pb.UserSettings)) {
    throw new Error('Expected argument of type integration.UserSettings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_UserSettings(buffer_arg) {
  return integration_pb.UserSettings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_integration_Webhook(arg) {
  if (!(arg instanceof integration_pb.Webhook)) {
    throw new Error('Expected argument of type integration.Webhook');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_integration_Webhook(buffer_arg) {
  return integration_pb.Webhook.deserializeBinary(new Uint8Array(buffer_arg));
}


// START SETTINGS
var SettingsService = exports.SettingsService = {
  setSuccessWebhook: {
    path: '/integration.Settings/SetSuccessWebhook',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.Webhook,
    responseType: integration_pb.SetResponse,
    requestSerialize: serialize_integration_Webhook,
    requestDeserialize: deserialize_integration_Webhook,
    responseSerialize: serialize_integration_SetResponse,
    responseDeserialize: deserialize_integration_SetResponse,
  },
  setDeclineWebhook: {
    path: '/integration.Settings/SetDeclineWebhook',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.Webhook,
    responseType: integration_pb.SetResponse,
    requestSerialize: serialize_integration_Webhook,
    requestDeserialize: deserialize_integration_Webhook,
    responseSerialize: serialize_integration_SetResponse,
    responseDeserialize: deserialize_integration_SetResponse,
  },
  setCheckoutDelay: {
    path: '/integration.Settings/SetCheckoutDelay',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.Delay,
    responseType: integration_pb.SetResponse,
    requestSerialize: serialize_integration_Delay,
    requestDeserialize: deserialize_integration_Delay,
    responseSerialize: serialize_integration_SetResponse,
    responseDeserialize: deserialize_integration_SetResponse,
  },
  setATCDelay: {
    path: '/integration.Settings/SetATCDelay',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.Delay,
    responseType: integration_pb.SetResponse,
    requestSerialize: serialize_integration_Delay,
    requestDeserialize: deserialize_integration_Delay,
    responseSerialize: serialize_integration_SetResponse,
    responseDeserialize: deserialize_integration_SetResponse,
  },
  get: {
    path: '/integration.Settings/Get',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.EmptyRequest,
    responseType: integration_pb.UserSettings,
    requestSerialize: serialize_integration_EmptyRequest,
    requestDeserialize: deserialize_integration_EmptyRequest,
    responseSerialize: serialize_integration_UserSettings,
    responseDeserialize: deserialize_integration_UserSettings,
  },
  testSuccessWebhook: {
    path: '/integration.Settings/TestSuccessWebhook',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.EmptyRequest,
    responseType: integration_pb.TestResponse,
    requestSerialize: serialize_integration_EmptyRequest,
    requestDeserialize: deserialize_integration_EmptyRequest,
    responseSerialize: serialize_integration_TestResponse,
    responseDeserialize: deserialize_integration_TestResponse,
  },
  testDeclineWebhook: {
    path: '/integration.Settings/TestDeclineWebhook',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.EmptyRequest,
    responseType: integration_pb.TestResponse,
    requestSerialize: serialize_integration_EmptyRequest,
    requestDeserialize: deserialize_integration_EmptyRequest,
    responseSerialize: serialize_integration_TestResponse,
    responseDeserialize: deserialize_integration_TestResponse,
  },
};

exports.SettingsClient = grpc.makeGenericClientConstructor(SettingsService);
// START PROXYLISTS
var ProxyListService = exports.ProxyListService = {
  create: {
    path: '/integration.ProxyList/Create',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.CreateListRequest,
    responseType: integration_pb.CreateListResponse,
    requestSerialize: serialize_integration_CreateListRequest,
    requestDeserialize: deserialize_integration_CreateListRequest,
    responseSerialize: serialize_integration_CreateListResponse,
    responseDeserialize: deserialize_integration_CreateListResponse,
  },
  get: {
    path: '/integration.ProxyList/Get',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.GetListRequest,
    responseType: integration_pb.GetListResponse,
    requestSerialize: serialize_integration_GetListRequest,
    requestDeserialize: deserialize_integration_GetListRequest,
    responseSerialize: serialize_integration_GetListResponse,
    responseDeserialize: deserialize_integration_GetListResponse,
  },
  update: {
    path: '/integration.ProxyList/Update',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.UpdateListRequest,
    responseType: integration_pb.StatusResponse,
    requestSerialize: serialize_integration_UpdateListRequest,
    requestDeserialize: deserialize_integration_UpdateListRequest,
    responseSerialize: serialize_integration_StatusResponse,
    responseDeserialize: deserialize_integration_StatusResponse,
  },
  delete: {
    path: '/integration.ProxyList/Delete',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.DeleteListRequest,
    responseType: integration_pb.StatusResponse,
    requestSerialize: serialize_integration_DeleteListRequest,
    requestDeserialize: deserialize_integration_DeleteListRequest,
    responseSerialize: serialize_integration_StatusResponse,
    responseDeserialize: deserialize_integration_StatusResponse,
  },
  test: {
    path: '/integration.ProxyList/Test',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.TestListRequest,
    responseType: integration_pb.TestListResponse,
    requestSerialize: serialize_integration_TestListRequest,
    requestDeserialize: deserialize_integration_TestListRequest,
    responseSerialize: serialize_integration_TestListResponse,
    responseDeserialize: deserialize_integration_TestListResponse,
  },
  getAll: {
    path: '/integration.ProxyList/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.EmptyRequest,
    responseType: integration_pb.ProxyLists,
    requestSerialize: serialize_integration_EmptyRequest,
    requestDeserialize: deserialize_integration_EmptyRequest,
    responseSerialize: serialize_integration_ProxyLists,
    responseDeserialize: deserialize_integration_ProxyLists,
  },
};

exports.ProxyListClient = grpc.makeGenericClientConstructor(ProxyListService);
// END PROXYLITS
//
// START PROFILES
var ProfilesService = exports.ProfilesService = {
  create: {
    path: '/integration.Profiles/Create',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.Profile,
    responseType: integration_pb.IDResponse,
    requestSerialize: serialize_integration_Profile,
    requestDeserialize: deserialize_integration_Profile,
    responseSerialize: serialize_integration_IDResponse,
    responseDeserialize: deserialize_integration_IDResponse,
  },
  update: {
    path: '/integration.Profiles/Update',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.UpdateProfileRequest,
    responseType: integration_pb.StatusResponse,
    requestSerialize: serialize_integration_UpdateProfileRequest,
    requestDeserialize: deserialize_integration_UpdateProfileRequest,
    responseSerialize: serialize_integration_StatusResponse,
    responseDeserialize: deserialize_integration_StatusResponse,
  },
  get: {
    path: '/integration.Profiles/Get',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.GetProfileRequest,
    responseType: integration_pb.Profile,
    requestSerialize: serialize_integration_GetProfileRequest,
    requestDeserialize: deserialize_integration_GetProfileRequest,
    responseSerialize: serialize_integration_Profile,
    responseDeserialize: deserialize_integration_Profile,
  },
  delete: {
    path: '/integration.Profiles/Delete',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.DeleteProfileRequest,
    responseType: integration_pb.StatusResponse,
    requestSerialize: serialize_integration_DeleteProfileRequest,
    requestDeserialize: deserialize_integration_DeleteProfileRequest,
    responseSerialize: serialize_integration_StatusResponse,
    responseDeserialize: deserialize_integration_StatusResponse,
  },
  createGroup: {
    path: '/integration.Profiles/CreateGroup',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.CreateProfileGroup,
    responseType: integration_pb.IDResponse,
    requestSerialize: serialize_integration_CreateProfileGroup,
    requestDeserialize: deserialize_integration_CreateProfileGroup,
    responseSerialize: serialize_integration_IDResponse,
    responseDeserialize: deserialize_integration_IDResponse,
  },
  updateGroup: {
    path: '/integration.Profiles/UpdateGroup',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.UpdateGroupRequest,
    responseType: integration_pb.StatusResponse,
    requestSerialize: serialize_integration_UpdateGroupRequest,
    requestDeserialize: deserialize_integration_UpdateGroupRequest,
    responseSerialize: serialize_integration_StatusResponse,
    responseDeserialize: deserialize_integration_StatusResponse,
  },
  getGroup: {
    path: '/integration.Profiles/GetGroup',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.GetGroupRequest,
    responseType: integration_pb.ProfileGroup,
    requestSerialize: serialize_integration_GetGroupRequest,
    requestDeserialize: deserialize_integration_GetGroupRequest,
    responseSerialize: serialize_integration_ProfileGroup,
    responseDeserialize: deserialize_integration_ProfileGroup,
  },
  deleteGroup: {
    path: '/integration.Profiles/DeleteGroup',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.DeleteGroupRequest,
    responseType: integration_pb.StatusResponse,
    requestSerialize: serialize_integration_DeleteGroupRequest,
    requestDeserialize: deserialize_integration_DeleteGroupRequest,
    responseSerialize: serialize_integration_StatusResponse,
    responseDeserialize: deserialize_integration_StatusResponse,
  },
  getGroups: {
    path: '/integration.Profiles/GetGroups',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.EmptyRequest,
    responseType: integration_pb.ProfileGroups,
    requestSerialize: serialize_integration_EmptyRequest,
    requestDeserialize: deserialize_integration_EmptyRequest,
    responseSerialize: serialize_integration_ProfileGroups,
    responseDeserialize: deserialize_integration_ProfileGroups,
  },
};

exports.ProfilesClient = grpc.makeGenericClientConstructor(ProfilesService);
// END PROFILES
//
// START TASKS
var TasksService = exports.TasksService = {
  create: {
    path: '/integration.Tasks/Create',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.Task,
    responseType: integration_pb.CreateTaskResponse,
    requestSerialize: serialize_integration_Task,
    requestDeserialize: deserialize_integration_Task,
    responseSerialize: serialize_integration_CreateTaskResponse,
    responseDeserialize: deserialize_integration_CreateTaskResponse,
  },
  update: {
    path: '/integration.Tasks/Update',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.UpdateTask,
    responseType: integration_pb.StatusResponse,
    requestSerialize: serialize_integration_UpdateTask,
    requestDeserialize: deserialize_integration_UpdateTask,
    responseSerialize: serialize_integration_StatusResponse,
    responseDeserialize: deserialize_integration_StatusResponse,
  },
  get: {
    path: '/integration.Tasks/Get',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.GetTask,
    responseType: integration_pb.Task,
    requestSerialize: serialize_integration_GetTask,
    requestDeserialize: deserialize_integration_GetTask,
    responseSerialize: serialize_integration_Task,
    responseDeserialize: deserialize_integration_Task,
  },
  delete: {
    path: '/integration.Tasks/Delete',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.DeleteTask,
    responseType: integration_pb.StatusResponse,
    requestSerialize: serialize_integration_DeleteTask,
    requestDeserialize: deserialize_integration_DeleteTask,
    responseSerialize: serialize_integration_StatusResponse,
    responseDeserialize: deserialize_integration_StatusResponse,
  },
  createGroup: {
    path: '/integration.Tasks/CreateGroup',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.CreateTaskGroup,
    responseType: integration_pb.CreateTaskGroupResponse,
    requestSerialize: serialize_integration_CreateTaskGroup,
    requestDeserialize: deserialize_integration_CreateTaskGroup,
    responseSerialize: serialize_integration_CreateTaskGroupResponse,
    responseDeserialize: deserialize_integration_CreateTaskGroupResponse,
  },
  updateGroup: {
    path: '/integration.Tasks/UpdateGroup',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.UpdateTaskGroupRequest,
    responseType: integration_pb.StatusResponse,
    requestSerialize: serialize_integration_UpdateTaskGroupRequest,
    requestDeserialize: deserialize_integration_UpdateTaskGroupRequest,
    responseSerialize: serialize_integration_StatusResponse,
    responseDeserialize: deserialize_integration_StatusResponse,
  },
  deleteGroup: {
    path: '/integration.Tasks/DeleteGroup',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.DeleteGroupRequest,
    responseType: integration_pb.StatusResponse,
    requestSerialize: serialize_integration_DeleteGroupRequest,
    requestDeserialize: deserialize_integration_DeleteGroupRequest,
    responseSerialize: serialize_integration_StatusResponse,
    responseDeserialize: deserialize_integration_StatusResponse,
  },
  getGroups: {
    path: '/integration.Tasks/GetGroups',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.EmptyRequest,
    responseType: integration_pb.TaskGroups,
    requestSerialize: serialize_integration_EmptyRequest,
    requestDeserialize: deserialize_integration_EmptyRequest,
    responseSerialize: serialize_integration_TaskGroups,
    responseDeserialize: deserialize_integration_TaskGroups,
  },
};

exports.TasksClient = grpc.makeGenericClientConstructor(TasksService);
var AccountGroupsService = exports.AccountGroupsService = {
  create: {
    path: '/integration.AccountGroups/Create',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.AccountGroup,
    responseType: integration_pb.IDResponse,
    requestSerialize: serialize_integration_AccountGroup,
    requestDeserialize: deserialize_integration_AccountGroup,
    responseSerialize: serialize_integration_IDResponse,
    responseDeserialize: deserialize_integration_IDResponse,
  },
  getAll: {
    path: '/integration.AccountGroups/GetAll',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.EmptyRequest,
    responseType: integration_pb.AccGroups,
    requestSerialize: serialize_integration_EmptyRequest,
    requestDeserialize: deserialize_integration_EmptyRequest,
    responseSerialize: serialize_integration_AccGroups,
    responseDeserialize: deserialize_integration_AccGroups,
  },
  update: {
    path: '/integration.AccountGroups/Update',
    requestStream: false,
    responseStream: false,
    requestType: integration_pb.AccountGroup,
    responseType: integration_pb.IDResponse,
    requestSerialize: serialize_integration_AccountGroup,
    requestDeserialize: deserialize_integration_AccountGroup,
    responseSerialize: serialize_integration_IDResponse,
    responseDeserialize: deserialize_integration_IDResponse,
  },
};

exports.AccountGroupsClient = grpc.makeGenericClientConstructor(AccountGroupsService);
