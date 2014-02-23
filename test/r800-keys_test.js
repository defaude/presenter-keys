(function ($) {
    /*
     ======== A Handy Little QUnit Reference ========
     http://api.qunitjs.com/

     Test methods:
         module(name, {[setup][ ,teardown]})
         test(name, callback)
         expect(numberOfAssertions)
         stop(increment)
         start(decrement)
     Test assertions:
         ok(value, [message])
         equal(actual, expected, [message])
         notEqual(actual, expected, [message])
         deepEqual(actual, expected, [message])
         notDeepEqual(actual, expected, [message])
         strictEqual(actual, expected, [message])
         notStrictEqual(actual, expected, [message])
         throws(block, [expected], [message])
     */

    function keyDown (which) {
        return $.Event('keydown', { which: which });
    }

    module('jQuery#r800Keys', {
        // This will run before each test in this module.
        setup: function () {
            this.foo = $('#qunit-fixture #foo');
        }
    });

    test('is chainable', function () {
        expect(1);
        // Not a bad test to run on collection methods.
        strictEqual(this.foo.r800Keys(), this.foo, 'should be chainable');
    });

    asyncTest('should invoke the PREV key callback', function () {
        expect(1);

        this.foo.r800Keys({ prev: function () {
            ok(true, 'PREV key callback executed');
            start();
        }});

        this.foo.trigger(keyDown(33));
    });

    asyncTest('should invoke the NEXT key callback', function () {
        expect(1);

        this.foo.r800Keys({ next: function () {
            ok(true, 'NEXT key callback executed');
            start();
        }});

        this.foo.trigger(keyDown(34));
    });

    asyncTest('should invoke the RUN key callback (1)', function () {
        expect(1);

        this.foo.r800Keys({ run: function () {
            ok(true, 'RUN key callback executed');
            start();
        }});

        this.foo.trigger(keyDown(116));
    });

    asyncTest('should invoke the RUN key callback (2)', function () {
        expect(1);

        this.foo.r800Keys({ run: function () {
            ok(true, 'RUN key callback executed');
            start();
        }});

        this.foo.trigger(keyDown(27));
    });

    asyncTest('should invoke the BLANK key callback', function () {
        expect(1);

        this.foo.r800Keys({ blank: function () {
            ok(true, 'BLANK key callback executed');
            start();
        }});

        this.foo.trigger(keyDown(190));
    });

}(jQuery));
