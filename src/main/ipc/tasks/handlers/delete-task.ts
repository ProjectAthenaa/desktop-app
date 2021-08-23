export const deleteTask = async (event: Electron.IpcMainInvokeEvent, taskId: string): Promise<string> => {
  return taskId;
};

export default deleteTask;

