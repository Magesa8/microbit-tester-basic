input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("&")
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    basic.pause(100)
})
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
