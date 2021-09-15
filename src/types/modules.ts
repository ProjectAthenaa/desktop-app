import {Site} from './task';

export enum FieldType {
  KEYWORDS = 'KEYWORDS',
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  DROPDOWN = 'DROPDOWN',
}

export enum ModuleStatus {
  FUNCTIONAL = 'FUNCTIONAL',
  DEGRADED = 'DEGRADED',
  DOWN = 'DOWN'
}

export interface ModuleField {
  Type: FieldType;
  Label: string;
  Validation: string;
  FieldKey: string;
  DropdownValues?: string[];
}

export interface ModuleInformation {
  Name: Site;
  Status: ModuleStatus;
  Fields: ModuleField[];
}
