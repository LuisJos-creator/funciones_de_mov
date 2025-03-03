radio.onReceivedNumber(function (receivedNumber) {
    mov = receivedNumber
})
function Izquierda () {
    motorbit.freestyle(50, -56)
}
function Adelante () {
    motorbit.freestyle(50, 56)
}
function Atrás () {
    motorbit.freestyle(-50, -56)
}
function Derecha () {
    motorbit.freestyle(-50, 56)
}
let mov = 0
radio.setGroup(1)
basic.forever(function () {
    if (mov == 1) {
        Izquierda()
    } else if (mov == 2) {
        Derecha()
    } else if (mov == 3) {
        Adelante()
    } else if (mov == 0) {
        motorbit.brake()
    } else {
    	
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(3)
    } else {
        radio.sendNumber(0)
    }
})
