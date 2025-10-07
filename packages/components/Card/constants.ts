import type { InjectionKey } from "vue";
import type { CardGroupContext } from "./types";

export const CARD_GROUP_CTX_KEY: InjectionKey<CardGroupContext> = Symbol('cardGroupContext')
