export type Primitive = number | string | boolean | symbol | bigint | null | undefined;

export function isPrimitive(val: unknown): val is Primitive {
	return val === null || (typeof val !== "object" && typeof val !== "function");
}
