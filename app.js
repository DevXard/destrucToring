let obj = {
    numbers: {
        a:1,
        b:2
    }
}

let{numbers:{a,b}} = obj

let arr = [1, 2]
// [arr[0], arr[1]] = [arr[1], arr[0]] /////////////////// in Console //////////////////
let raceResult = (first, second, third, ...names) => ({first, second, third, rest: names})

