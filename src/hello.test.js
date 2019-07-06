const hello = require('./hello');

test('hello function should be defined', () => {
    expect(hello).toBeDefined();
});

test('should say: Hello, Maksimko!', () => {
    expect(hello('Maksimko')).toBe('Hello, Maksimko!')
});
