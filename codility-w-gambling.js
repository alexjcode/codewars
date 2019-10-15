function solution (N, K){
    // let chips = 1
    let turns = 0
    let allIns = K
    if (K === 0) {
        turns = N - 1
    } else {
        // K = ???
        // N = ???
        let i = N
        for (i > 0) {
            if (allIns > 0 && i % 2 === 0) {
                i = i / 2
                turns++
                allIns--
            } else {
                turns++
                i--
            }
        }
    }
    return turns
}
