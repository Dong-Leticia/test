const sum = require("./sum")

test("accurately add two number", () => {
    expect(sum(67, 43)
        ).toBe(110)
     
})
