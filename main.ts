let スプライト = game.createSprite(4, 0)
basic.forever(function () {
    スプライト.move(1)
    basic.pause(50)
    スプライト.ifOnEdgeBounce()
    if (スプライト.get(LedSpriteProperty.X) == 0 || スプライト.get(LedSpriteProperty.X) == 4) {
        スプライト.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (スプライト.get(LedSpriteProperty.X) == 4) {
        if (スプライト.get(LedSpriteProperty.Y) == 4) {
            スプライト.set(LedSpriteProperty.X, 4)
            スプライト.set(LedSpriteProperty.Y, 0)
        }
    }
})
