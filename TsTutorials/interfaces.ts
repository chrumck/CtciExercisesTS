interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number; foo: string } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }

    let newSquare2 = { foo: "barBar", ...newSquare }

    return newSquare2;
}

let mySquare = createSquare({ color: "black" });

console.log(mySquare)