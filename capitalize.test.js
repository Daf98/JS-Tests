const capitalize = require('./capitalize');
test('capitalizes string', () => {
    expect(capitalize('daf')).toBe('DAF');
});