import rewire from "rewire"
const index = rewire("./index")
const countIslands = index.__get__("countIslands")
const visitAll = index.__get__("visitAll")
const getAdjacents = index.__get__("getAdjacents")
const inBounds = index.__get__("inBounds")
// @ponicode
describe("countIslands", () => {
    test("0", () => {
        let param1: any = [[100, -100, -5.48, -5.48, 100], [0, 100, 0, 100, 1]]
        let callFunction: any = () => {
            countIslands(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1: any = [[100, 1, -100], [-100, 0, -100], [0, -100, 1]]
        let callFunction: any = () => {
            countIslands(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1: any = [[100], [1, -5.48], [100, -5.48]]
        let callFunction: any = () => {
            countIslands(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1: any = [[1, -5.48, 0], [1, -5.48, 0], [0, 0, 100]]
        let callFunction: any = () => {
            countIslands(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1: any = [[100, -100, -5.48], [0, 100, 100], [0, -5.48, 0], [0, 1, 1, 0]]
        let callFunction: any = () => {
            countIslands(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            countIslands([])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("visitAll", () => {
    test("0", () => {
        let param1: any = [[0, 1, -100, -100], [100]]
        let param2: any = [[true], [true, true, true], [false, false], [true, true, false, false, true], [false, true, true]]
        let callFunction: any = () => {
            visitAll(param1, param2, 0, 410)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1: any = [[100, -100, -5.48, -100], [-5.48]]
        let param2: any = [[false], [false, false, true], [true, true], [false, false, false, true, true], [false, false, true]]
        let callFunction: any = () => {
            visitAll(param1, param2, -100, 50)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1: any = [[100, -5.48, 100, 1]]
        let param2: any = [[false, true, true]]
        let callFunction: any = () => {
            visitAll(param1, param2, 0, 50)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1: any = [[-5.48, 1, 100, 100], [-5.48]]
        let param2: any = [[true], [true, false, false], [false, true], [false, true, true, true, true], [false, true, true]]
        let callFunction: any = () => {
            visitAll(param1, param2, -5.48, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1: any = [[100, 100, 1, 0]]
        let param2: any = [[false, false, false]]
        let callFunction: any = () => {
            visitAll(param1, param2, -100, 320)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            visitAll([], [], -Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getAdjacents", () => {
    test("0", () => {
        let callFunction: any = () => {
            getAdjacents(1, 30, 32, 70)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            getAdjacents(1, 410, 56, 4)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            getAdjacents(100, 410, 48, 380)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            getAdjacents(1, 520, 40, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            getAdjacents(-100, 380, 8, 520)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            getAdjacents(NaN, NaN, NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("inBounds", () => {
    test("0", () => {
        let callFunction: any = () => {
            inBounds(100, 1, 24, 380)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inBounds(-5.48, -1, 40, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inBounds(1, 1, 56, 70)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inBounds(100, -1, 16, 410)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inBounds(100, -1, 40, 50)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inBounds(NaN, NaN, NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
