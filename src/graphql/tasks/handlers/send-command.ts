import {gql} from 'graphql-request';
import {taskClient} from '../index';
import {Command} from '../../../types/task';

const SEND_COMMAND = gql`
    mutation SendCommand($ControlToken: String!, $Command: COMMAND!){
        sendCommand(ControlToken: $ControlToken, Command: $Command)
    }
`;

export interface ScheduledTask {
  ID: string;
  SubscriptionToken: string;
  ControlToken: string;
  StartTime: string;
}

export const sendCommand = async (token: string, command: Command): Promise<boolean> => {
  const response = await taskClient()
    .request<{ sendCommand: boolean }>(SEND_COMMAND, {
      ControlToken: token, Command: command
    });

  return response.sendCommand;
};
