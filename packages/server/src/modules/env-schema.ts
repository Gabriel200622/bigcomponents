import env from "env-var";
import { config } from "dotenv";

interface EnvBase {
  required: boolean;
}

interface StringEnv extends EnvBase {
  type: "string";
}

interface NumberEnv extends EnvBase {
  type: "number";
}

interface PortEnv extends EnvBase {
  type: "port";
}

interface EnumEnv<T extends string> extends EnvBase {
  type: "enum";
  enumValues: T[];
}

type Env = StringEnv | NumberEnv | PortEnv | EnumEnv<string>;
type ExtractEnumValues<T extends EnumEnv<any>> = T["enumValues"][number];

export type EnvSchemaDefinition = Record<string, Env>;

export type EnvValues<T extends EnvSchemaDefinition> = {
  [K in keyof T]: T[K] extends StringEnv
    ? string
    : T[K] extends NumberEnv
    ? number
    : T[K] extends PortEnv
    ? number
    : T[K] extends EnumEnv<any>
    ? ExtractEnumValues<T[K]>
    : never;
};

export class EnvSchema<T extends EnvSchemaDefinition> {
  public envs: EnvValues<T>;

  constructor(envs: T) {
    this.envs = this.populateEnvSchema(envs);
  }

  private populateEnvSchema(envs: T): EnvValues<T> {
    config();

    const populatedEnv: Partial<EnvValues<T>> = {};

    for (const key in envs) {
      populatedEnv[key as keyof T] = this.getEnvValue(key, envs[key]);
    }

    return populatedEnv as EnvValues<T>;
  }

  private getEnvValue(key: string, envVar: Env): any {
    let variable = env.get(key);

    if (envVar.required) {
      variable = variable.required();
    }

    switch (envVar.type) {
      case "string":
        return variable.asString();
      case "number":
        return variable.asInt();
      case "port":
        return variable.asPortNumber();
      case "enum":
        if (!envVar.enumValues) {
          throw new Error(`Enum values are required for ${key}`);
        }
        return variable.asEnum(envVar.enumValues);
      default:
        throw new Error(`Unsupported type for`, envVar);
    }
  }
}
