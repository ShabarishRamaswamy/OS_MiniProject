const got = require('got')
var min=1; 
var max=24;

const haiku=()=>{
    var printRandomHaiku = Math.floor(Math.random() * (+max - +min)) + +min; 

    list_of_haikus = {
        1: `Delightful display,
        Snowdrops bow their pure white heads,
        To the sun's glory`,

        2: `Like crunchy cornflakes,
        Gold leaves rustle underfoot,
        Beauty in decay.`,

        3: `The chill, worming in
        Shock, pleasure, bursting within
        Summer tongue awakes`,

        4: `You and me alone
        Madness of world locked away
        Peace and quiet reigns`,

        5: `Strokes of affection
        Light and tenderly expressed
        Keep love’s bonds so strong.`,
        6: `The wren
        Earns his living
        Noiselessly.`,

        7:` From time to time
        The clouds give rest
        To the moon-beholders.`,

        8: ` Over-ripe sushi,
        The Master
        Is full of regret.`,

        9: `Consider me
        As one who loved poetry
        And persimmons.`,

        10: `In the cicada's cry
        No sign can foretell
        How soon it must die.`,

        11: `Blowing from the west
        Fallen leaves gather
        In the east.`,

        12: `Winter seclusion -
        Listening, that evening,
        To the rain in the mountain.`,

        13: `Don’t weep, insects –
        Lovers, stars themselves,
        Must part.`,

        14: `My life, -
        How much more of it remains?
        The night is brief.`,

        15: `An old silent pond...
        A frog jumps into the pond,
        splash! Silence again.`,

        16: `I kill an ant
        and realize my three children
        have been watching.`,

        17: `Over the wintry
        forest, winds howl in rage
        with no leaves to blow.`,

        18: `Sparrow's child
        out of the way, out of the way!
        the stallion's coming through`,

        19: `Toward those short trees
        We saw a hawk descending
        On a day in spring.`,

        20: `No one travels
        Along this way but I,
        This autumn evening.`,

        21: `In the twilight rain
        these brilliant-hued hibiscus -
        A lovely sunset`,

        22:`First autumn morning
        the mirror I stare into
        shows my father's face.`,
        
        23: `The lamp once out
        Cool stars enter
        The window frame.`
    }
    return list_of_haikus[printRandomHaiku]
}
module.exports = haiku