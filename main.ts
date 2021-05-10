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