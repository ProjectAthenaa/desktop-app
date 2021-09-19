export enum Theme {
  Variation1 = 'Variation1',
  Variation2 = 'Variation2',
  Variation3 = 'Variation3',
  Variation4 = 'Variation4',
}

export interface User {
  ID: string;
  Theme: Theme;
  DiscordID: string;
  DiscordUsername: string;
  DiscordAvatar: string;
  DiscordDiscriminator: string;
}
