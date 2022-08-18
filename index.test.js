const { exportAllDeclaration } = require("@babel/types")
const  translate  = require("./index")

describe("translate", () => {
    test("converts from apple", () =>{
        expect(translate("apple")).toBe("appleway");
    });
});

describe("translate", () =>{
    test("converts from else", () =>{
        expect(translate("else")).toBe("elseway");
    });
});

describe("translate", () =>{
    test("converts from giraffe", () =>{
        expect(translate("giraffe")).toBe("iraffegay")
    })
});

describe("translate", () => {
    test("converts from important", () => {
        expect(translate("important")).toBe("importantway");
    });
});

describe("translate", () =>{
    test("converts from object", () =>{
        expect(translate("object")).toBe("objectway");
    });
});

describe("translate", () => {
    test("converts from understanding", () =>{
        expect(translate("understanding")).toBe("understandingway");
    });
});

describe("traslate", () =>{
    test("converts from converter", () =>{
        expect(translate("converter")).toBe("onvertercay");
    });
});

describe("translate", () =>{
    test("converts from thing", () => {
        expect(translate("thing")).toBe("ingthay");
    });
});

describe("tranlate", () =>{
    test("converts from xylophone", () => {
        expect(translate("xylophone")).toBe("ophonexylay");
    });
});

describe("translate", () => {
    test("lowercase conversion", () =>{
        expect(translate("LOWER")).toBe("owerlay");
    })
})