function Izquierda () {
    motorbit.brake()
    basic.pause(100)
    motorbit.freestyle(50, -56)
    basic.pause(1000)
    motorbit.brake()
}
function Adelante () {
    motorbit.brake()
    basic.pause(100)
    motorbit.freestyle(50, 56)
    basic.pause(1000)
    motorbit.brake()
}
input.onButtonPressed(Button.A, function () {
    Adelante()
    basic.pause(100)
    Atrás()
    basic.pause(100)
    Izquierda()
    basic.pause(100)
    Derecha()
})
function Atrás () {
    motorbit.brake()
    basic.pause(100)
    motorbit.freestyle(-50, -56)
    basic.pause(1000)
    motorbit.brake()
}
function Derecha () {
    motorbit.brake()
    basic.pause(100)
    motorbit.freestyle(-50, 56)
    basic.pause(1000)
    motorbit.brake()
}
basic.forever(function () {
	
})
