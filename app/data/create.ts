import { isPrimitive } from "../utils";
import { ConstructorFunction } from "./instanceof";

export function create<T extends object | null>(prototype: T) {
	if (prototype === null) {
		return { __proto__: null } as T;
	}
	if (isPrimitive(prototype)) {
		throw new Error("Object prototype may only an Object or null");
	}
	const constructor = function () {} as unknown as ConstructorFunction<T>;
	constructor.prototype = prototype;
	return new constructor();
}
