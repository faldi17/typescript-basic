import { sayHello } from "../src/say-hello";
describe('sayHello', function () {
    it('should return hello faldi', function () {
        expect(sayHello('faldi')).toBe('Hello faldi');
    });
});
