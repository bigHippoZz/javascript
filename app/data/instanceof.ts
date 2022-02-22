export type Prototype<T> = {
	[Property in keyof T]: T[Property] extends NewableFunction
		? T[Property]
		: T[Property] | undefined;
};

export interface ConstructorFunction<T = Record<string, unknown>> {
	new (...args: unknown[]): T;
	prototype: Prototype<T>;
}

import { isPrimitive } from "../utils";

export function instanceOf<T>(target: object, source: ConstructorFunction<T>) {
	if (isPrimitive(target)) {
		throw new Error("target may only an Object type");
	}
	if (typeof source !== "function") {
		throw new Error("source must be a function");
	}
	let current = Object.getPrototypeOf(target);
	while (current) {
		if (current === source.prototype) return true;
		current = Object.getPrototypeOf(target);
	}
	return false;
}
