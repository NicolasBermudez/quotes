const fibonacci = limit => {
    let array = []
    let n = 0
    let m = 1
    for (let i = 0; i<=limit; i++){
        array[i] = n + m 
    }
    return array
    }

  console.log(fibonacci(10))