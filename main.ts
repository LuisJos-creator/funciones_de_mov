radio.onReceivedNumber(function (receivedNumber) {
    mov = receivedNumber
})
function Izquierda () {
    motorbit.freestyle(50, -56)
}
function Adelante () {
    motorbit.freestyle(50, 56)
}
input.onButtonPressed(Button.A, function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(0)
    }
})
function Atrás () {
    motorbit.freestyle(-50, -56)
}
input.onButtonPressed(Button.AB, function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(3)
    } else {
        radio.sendNumber(0)
    }
})
function Derecha () {
    motorbit.freestyle(-50, 56)
}
input.onButtonPressed(Button.B, function () {
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    } else {
        radio.sendNumber(0)
    }
})
input.onGesture(Gesture.ThreeG, function () {
    if (input.isGesture(Gesture.ThreeG)) {
        radio.sendNumber(4)
    } else {
        radio.sendNumber(0)
    }
})
let mov = 0
radio.setGroup(1)
basic.forever(function () {
    if (mov == 1) {
        Izquierda()
    } else if (mov == 2) {
        Derecha()
    } else if (mov == 3) {
        Adelante()
    } else if (mov == 4) {
        motorbit.brake()
    } else if (mov == 0) {
        motorbit.brake()
    } else {
    	
    }
})
