import { describe, it, expect } from "vitest";
import { Sum } from "./sum";

describe("Sum", () => {
    it("deve retornar a soma de dois números", () => {
        expect(Sum(2, 3)).toBe(5);
        expect(Sum(-1, 1)).toBe(0);
        expect(Sum(0, 0)).toBe(0);
    })
})