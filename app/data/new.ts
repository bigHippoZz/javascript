import { isPrimitive } from "../utils";
import { ConstructorFunction } from "./instanceof";

export function selfNew(constructor: ConstructorFunction, ...args: unknown[]) {
	if (typeof constructor !== "function") throw new Error("Constructor must be function type");
	const instance = Object.create(constructor.prototype);
	const result = constructor.apply(instance, args);
	!isPrimitive(result) ? result : instance;
}
