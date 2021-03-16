import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";

export type ConnContext {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
}