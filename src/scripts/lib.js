var canvasKita = document.querySelector("#canvas1");

export function drawDot(imageDataTemp, x, y, r, g, b) {
    if ((x > 0) && (x < canvasKita.width) && (y > 0) && (y < canvasKita.height)) {
        var index = 4 * (Math.ceil(x) + ( Math.ceil(y) * canvasKita.width));
        imageDataTemp.data[index] = r;
        imageDataTemp.data[index + 1] = g;
        imageDataTemp.data[index + 2] = b;
        imageDataTemp.data[index + 3] = 255;
    }
}

export function dda_line(imageData, x1, y1, x2, y2, r,g,b) {
    var dx = x2-x1;
    var dy = y2-y1;
    if (Math.abs(dx) > Math.abs(dy)) {
        // jalan di x
        if (x2 > x1) {
            // ke kanan
            var y = y1;
            for (var x = x1; x<x2; x++) {
                y = y + dy/Math.abs(dx)  //  1/m
                drawDot(imageData, x,y, r,g,b)
            }
        } else {
            // ke kiri
            var y = y1;
            for (var x = x1; x>x2; x--) {
                y = y + dy/Math.abs(dx)  //  1/m
                drawDot(imageData, x,y, r,g,b)
            }
        }
    } else {
        // jalan di y
        if (y2 > y1) {
            // ke kanan
            var x = x1;
            for (var y = y1; y<y2; y++) {
                x = x + dx/Math.abs(dy)  //  m
                drawDot(imageData, x,y, r,g,b)
            }
        } else {
            // ke kiri
            var x = x1;
            for (var x = y1; y>y2; y--) {
                x = x + dx/Math.abs(dy)  //  m
                drawDot(imageData, x,y, r,g,b)
            }
        }
    }
}

export function circlePolar(imageData, xc,yc, radius, r,g,b) {
    for(var theta = 0; theta < Math.PI*2; theta += 0.01) {
        const x = xc + radius * Math.cos(theta);
        const y = yc + radius * Math.sin(theta);

        drawDot(imageData, Math.ceil(x),Math.ceil(y), r,g,b)
    }
}

export function ellipsePolar(imageData, xc,yc, radiusX, radiusY, r,g,b) {
    for(var theta = 0; theta < Math.PI*4; theta += 0.01) {
        const x = xc + radiusX * Math.cos(theta);
        const y = yc + radiusY * Math.sin(theta);

        drawDot(imageData, Math.ceil(x),Math.ceil(y), r,g,b)
    }
}

var waktu = new Date();
// console.log(waktu.getHours(), waktu.getMinutes(),waktu.getSeconds());

export function polaJam(imageData, xc,yc, radiusX, radiusY, r,g,b) {
    var nilaiN = 2;
    for(var theta = 0; theta < Math.PI*2; theta += 0.53) {
        const x = xc + radiusX * Math.cos(theta);
        const y = yc + radiusY * Math.sin(theta);
        nilaiN += 1
        var nilaiY = waktu.getHours()
        drawDot(imageData, Math.ceil(x),Math.ceil(y), r,255,255)

        if (nilaiN != nilaiY) {
            ellipsePolar(imageData, x,y, 25, 25, r,g,b);
        } if (nilaiY == 1) {
            dda_line(imageData, 283.1561504268743 , 75.15988366641496, 200, 200, 255,0,0)
            ellipsePolar(imageData, 283.1561504268743 ,75.15988366641496, 25,25, 255,g,b);
        } if (nilaiY == 2) {
            dda_line(imageData, 334.8585556716153, 134.32527151052818, 200, 200, 255,0,0)
            ellipsePolar(imageData, 334.8585556716153, 134.32527151052818, 25,25, 255,g,b);
        } if (nilaiN == nilaiY) {
            dda_line(imageData, x, y, 200, 200, 255,0,0)
            ellipsePolar(imageData, x,y, 25, 25, 255,g,b);
        }
    }
}

export function polygon(imageData, point_array, r,g,b) {
    var point = point_array[0]

    for (var i=1; i<point_array.length; i++) {
        var point_2 = point_array[i];

        dda_line(imageData, point.x, point.y, point_2.x, point_2.y, r,g,b)
        point = point_2;
    }
    dda_line(imageData, point.x, point.y, point_array[0].x, point_array[0].y, r,g,b)
}

export function polaMinutes(imageData, xc,yc, radiusX, radiusY, r,g,b) {
    var nilaiN = 10;
    for(var theta = 0; theta < Math.PI*2; theta += 0.53) {
        const x = xc + radiusX * Math.cos(theta);
        const y = yc + radiusY * Math.sin(theta);
        nilaiN += 5
        var nilaiY = Math.floor(waktu.getMinutes() / 5) * 5; 
        if (nilaiN != nilaiY) {
            ellipsePolar(imageData, x,y, 15, 15, r,g,b);
        } if (nilaiY == 5) {
            ellipsePolar(imageData, 255.4374336179162,116.77325577760998, 15,15, 0,255,0);
        } if (nilaiY == 10) {
            ellipsePolar(imageData, 289.90570378107685 ,156.21684767368546, 15, 15, r,255,b);
        } if (nilaiN == nilaiY) {
            // dda_line(imageData, x, y, 200, 200, 0,255,0)
            dda_line(imageData, x, y, 200, 200, 0,255,0)
            ellipsePolar(imageData, x,y, 15, 15, r,255,b);
        }
        // console.log(nilaiN, nilaiY)
    }
}

// Logo
export function LogoNAMA(imageData, r,g,b) {
    // Logo 1
    // dda_line(imageData, 100, 100, 100,300, r,g,b)
    // dda_line(imageData, 300, 100, 100,100, r,g,b)
    // dda_line(imageData, 300, 100, 300,300, r,g,b)
    // dda_line(imageData, 100, 300, 300,300, r,g,b)
    // dda_line(imageData, 130, 130, 270,130, r,g,b)
    // dda_line(imageData, 200, 100, 200,130, r,g,b)
    // dda_line(imageData, 130, 130, 130,270, r,g,b)
    // dda_line(imageData, 185, 270, 130,270, r,g,b)
    // dda_line(imageData, 185, 160, 185,300, r,g,b)
    // dda_line(imageData, 185, 160, 130,160, r,g,b)
    // dda_line(imageData, 215, 160, 215,300, r,g,b)
    // dda_line(imageData, 270, 220, 215,220, r,g,b)
    // dda_line(imageData, 270, 130, 270,220, r,g,b)
    // dda_line(imageData, 270, 160, 215,160, r,g,b)
    // dda_line(imageData, 245, 250, 270,250, r,g,b)
    // dda_line(imageData, 245, 270, 270,270, r,g,b)
    // dda_line(imageData, 245, 250, 245,270, r,g,b)
    // dda_line(imageData, 270, 250, 270,270, r,g,b)

    // Logo 2
    // c
    dda_line(imageData, 100, 150, 100,250, r,g,b)
    dda_line(imageData, 130, 170, 130,231, r,g,b)
    dda_line(imageData, 170, 120, 100,150, r,g,b)
    dda_line(imageData, 140, 165, 130,170, r,g,b)
    dda_line(imageData, 170, 120, 170,205, r,g,b)
    dda_line(imageData, 140, 165, 140,192, r,g,b)
    dda_line(imageData, 140, 190, 170,205, r,g,b)
    dda_line(imageData, 170, 280, 100,250, r,g,b)
    dda_line(imageData, 130, 230, 140,235, r,g,b)
    dda_line(imageData, 140, 203, 140,235, r,g,b)
    dda_line(imageData, 170, 217, 170,280, r,g,b)
    dda_line(imageData, 170, 217, 140,203, r,g,b)

    // t
    dda_line(imageData, 180, 105, 180,285, r,g,b)
    dda_line(imageData, 180, 283, 195,290, r,g,b)
    dda_line(imageData, 210, 283, 194,290, r,g,b)
    dda_line(imageData, 210, 105, 210,285, r,g,b)
    dda_line(imageData, 180, 105, 100,140, r,g,b)
    dda_line(imageData, 100, 110, 100,140, r,g,b)
    dda_line(imageData, 195, 70, 100,110, r,g,b)
    dda_line(imageData, 295, 110, 195,70, r,g,b)
    dda_line(imageData, 295, 140, 210,105, r,g,b)
    dda_line(imageData, 295, 110, 295,140, r,g,b)

    // a
    dda_line(imageData, 220, 120, 220,280, r,g,b)
    dda_line(imageData, 295, 150, 220,120, r,g,b)
    dda_line(imageData, 295, 150, 295,251, r,g,b)
    dda_line(imageData, 250, 268, 220,280, r,g,b)
    dda_line(imageData, 250, 231, 250,270, r,g,b)
    dda_line(imageData, 265, 236, 265,265, r,g,b)
    dda_line(imageData, 295, 250, 265,264, r,g,b)
    dda_line(imageData, 250, 165, 265,170, r,g,b)
    dda_line(imageData, 250, 205, 265,210, r,g,b)
    dda_line(imageData, 250, 230, 265,235, r,g,b)
    dda_line(imageData, 250, 167, 250,206, r,g,b)
    dda_line(imageData, 265, 172, 265,212, r,g,b)
}


// Belah Ketupat
export function BelahKetupat(imageData, xc,yc, radiusX, radiusY, r,g,b) {
    for(var theta = 0; theta < Math.PI*4; theta += 1) {
        const x = xc + radiusX * Math.cos(theta);
        const y = yc + radiusY * Math.sin(theta);

        // drawDot(imageData, Math.ceil(x),Math.ceil(y), r,g,b)
        console.log(x,y)

        dda_line(imageData, x, y, 150,200, 0,255,0)
        dda_line(imageData, 250,200, x,y, 0,255,0)
    }
}


export function floodfill(imageData, canvas, x, y, toFlood, color) {
    var index = 4 * (x+y*canvasKita.width);

    var r1 = imageData.data[index];
    var g1 = imageData.data[index+1];
    var b1 = imageData.data[index+2];

    if ((r1 == toFlood.r) && (g1 == toFlood.g) && (b1 == toFlood.b)) {
        imageData.data[index] = color.r;
        imageData.data[index+1] = color.g;
        imageData.data[index+2] = color.b;
        imageData.data[index+3] = 255;

        floodfill(imageData, canvas, x+1, y, toFlood, color)
    }
}

export function floodfillstack(imageData, canvas, x0, y0, toFlood, color) {
    var Tumpukan = [];
    Tumpukan.push({ x : x0, y : y0 });

    while(Tumpukan.length>0) {
        var titik_skrg = Tumpukan.pop();
        var index_skrg = 4 * ( titik_skrg.x + titik_skrg.y * canvas.width );
        var r1 = imageData.data[index_skrg];
        var g1 = imageData.data[index_skrg + 1];
        var b1 = imageData.data[index_skrg + 2];
    
        if ((r1 == toFlood.r) && (g1 == toFlood.g) && (b1 == toFlood.b)) {
            imageData.data[index_skrg] = color.r;
            imageData.data[index_skrg + 1] = color.g;
            imageData.data[index_skrg + 2] = color.b;
            imageData.data[index_skrg + 3] = 255;
    
            Tumpukan.push({ x: titik_skrg.x + 1, y:titik_skrg.y });
            Tumpukan.push({ x: titik_skrg.x - 1, y:titik_skrg.y });
            Tumpukan.push({ x: titik_skrg.x, y:titik_skrg.y + 1 });
            Tumpukan.push({ x: titik_skrg.x, y:titik_skrg.y - 1 });
        }
    }
}