import test from 'ava';
import hotjs from '../src/hotjs';

test('verifies json', async t => {
    const json = await Promise.resolve(hotjs(1));

    t.is(32, json.docs.length);
});