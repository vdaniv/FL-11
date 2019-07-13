function formatTime(minutes) {
    let days = Math.floor(minutes / 1440),
        hours = Math.floor(minutes / 60) % 24,
        min = minutes % 60;

    console.log(`${days} day(s) ${hours} hour(s) ${min} minute(s)`)
}

formatTime(5869);