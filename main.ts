let television = {
    power: [0],
    chup: [0],
    chdown: [0],
    volup: [0],
    voldown: [0],
    source: [0],
    up: [0],
    down: [0],
    left: [0],
    right: [0],
    ok: [0],
    back: [0],
    num1: [0],
    num2: [0],
    num3: [0],
    num4: [0],
    num5: [0],
    num6: [0],
    num7: [0],
    num8: [0],
    num9: [0],
    num0: [0],
    guide: [0],
    buttona: [0],
    buttonb: [0],
    buttonc: [0],
    buttond: [0],
}

let avstereo = {
    power: [0],
    volup: [0],
    voldown: [0],
    source: [0],
    chup: [0],
    chdown: [0],
    mute: [0],
    config: [0],
    surround: [0],
    playpause: [0],
    rewind: [0],
    fastforward: [0],
}

let rgbstrip = {
    power: [0],
    white: [0],
    red: [0],
    orange: [0],
    yellow: [0],
    green: [0],
    blue: [0],
    purple: [0],
    pink: [0],
    teal: [0],
    lightpink: [0],
    flash: [0],
    colorchange: [0],
    fast: [0],
    slow: [0],
    redup: [0],
    reddown: [0],
    greenup: [0],
    greendown: [0],
    blueup: [0],
    bluedown: [0],
}

let blurayplayer = {
    power: [0],
    eject: [0],
    up: [0],
    down: [0],
    left: [0],
    right: [0],
    ok: [0],
    back: [0],
    exit: [0],
    a: [0],
    b: [0],
    c: [0],
    d: [0],
    stop: [0],
    playpause: [0],
    rewind: [0],
    fastforward: [0],
    skipback: [0],
    skipforward: [0],
    record: [0],
    tvvolup: [0],
    tvvoldown: [0],
}

let cdplayer = {
    power: [0],
    eject: [0],
    pauseplay: [0],
    rewind: [0],
    fastforward: [0],
    prev: [0],
    next: [0],
    stop: [0],
    repeat: [0],
    shuffle: [0],
}

let appletv = {
    up: [0],
    down: [0],
    left: [0],
    right: [0],
    ok: [0],
    menu: [0],
    playpause: [0],
    siri: [0],
    volup: [0],
    voldown: [0],
    tv: [0],
}

let cable = {
    power: [0],
    up: [0],
    down: [0],
    left: [0],
    right: [0],
    ok: [0],
    back: [0],
    chup: [0],
    chdown: [0],
    record: [0],
    rewind: [0],
    fastforward: [0],
    playpause: [0],
    ondemand: [0],
    guide: [0],
    info: [0],
    exit: [0],
    a: [0],
    b: [0],
    c: [0],
    d: [0],
    num1: [0],
    num2: [0],
    num3: [0],
    num4: [0],
    num5: [0],
    num6: [0],
    num7: [0],
    num8: [0],
    num9: [0],
    num0: [0],
}

let projector = {
    power: [0],
    up: [0],
    down: [0],
    left: [0],
    right: [0],
    ok: [0],
    back: [0],
    menu: [0],
    freeze: [0],
    zoomin: [0],
    zoomout: [0],
    source: [0],
    eco: [0],
    volup: [0],
    voldown: [0],
    mute: [0],
}























let infared_input = {
    invert: false,
    read: function () {
        let abc = pins.digitalReadPin(DigitalPin.P1);
        if(infared_input.invert) {
            return 1 - abc;
        } else {
            return abc;
        }
    }
}

let infared_output = {
    write: function (abc: number) {
        pins.digitalWritePin(DigitalPin.P0, abc);
    }
}


let i = 0;

let reading = false;
let writing = false;

async function writeto (obj:Object, but:string) {
    let abc: number[] = (<any>obj)[but];
    reading = true;
    (<any>obj)[but] = [];
    let started = false;
    while (reading) {
        if(!started) {
            if(infared_input.read() == 1) {
                started = true;
            }
        } else {
            (<any>obj)[but].push(infared_input.read());
        }
    }
}

async function readfrom (obj:Object, but:string) {
    let abc: number[] = (<any>obj)[but];
    writing = true;
    i = 0;
    while (writing) {
        infared_output.write(abc[i]);
        i++;
        if(i >= abc.length) {
            i = 0;
        }
    }
}

let device = television;
let button = device.power;

basic.showString("TV Power");

function nextbutton () {
    if(device === television && button === device.power) {
        button = television.up;
        basic.showString("GoUp   TV");
    } else if(device === television && button === device.up) {
        button = television.down;
        basic.showString("GoDown   TV");
    } else if(device === television && button === device.down) {
        button = television.left;
        basic.showString("GoLeft   TV");
    } else if(device === television && button === device.left) {
        button = television.right;
        basic.showString("GoRight   TV");
    } else if(device === television && button === device.right) {
        button = television.ok;
        basic.showString("OkEnter   TV");
    } else if(device === television && button === device.ok) {
        button = television.volup;
        basic.showString("VolumeUp   TV");
    } else if(device === television && button === device.volup) {
        button = television.voldown;
        basic.showString("VolumeDown   TV");
    } else if(device === television && button === device.voldown) {
        button = television.chup;
        basic.showString("NextChannel   TV");
    } else if(device === television && button === device.chup) {
        button = television.chdown;
        basic.showString("PreviousChannel   TV");
    } else if(device === television && button === device.chdown) {
        button = television.source;
        basic.showString("Source   TV");
    } else if(device === television && button === device.source) {
        button = television.back;
        basic.showString("GoBack   TV");
    } else if(device === television && button === device.back) {
        button = television.guide;
        basic.showString("Guide   TV");
    } else if(device === television && button === device.guide) {
        button = television.num1;
        basic.showString("Number1   TV");
    } else if(device === television && button === device.num1) {
        button = television.num2;
        basic.showString("Number2   TV");
    } else if(device === television && button === device.num2) {
        button = television.num3;
        basic.showString("Numbe3   TV");
    } else if(device === television && button === device.num3) {
        button = television.num4;
        basic.showString("Number4   TV");
    } else if(device === television && button === device.num4) {
        button = television.num5;
        basic.showString("Number5   TV");
    } else if(device === television && button === device.num5) {
        button = television.num6;
        basic.showString("Number6   TV");
    } else if(device === television && button === device.num6) {
        button = television.num7;
        basic.showString("Number7   TV");
    } else if(device === television && button === device.num7) {
        button = television.num8;
        basic.showString("Number8   TV");
    } else if(device === television && button === device.num8) {
        button = television.num9;
        basic.showString("Number9   TV");
    } else if(device === television && button === device.num9) {
        button = television.num0;
        basic.showString("Number0   TV");
    }
}

input.onButtonPressed(Button.A, nextbutton)