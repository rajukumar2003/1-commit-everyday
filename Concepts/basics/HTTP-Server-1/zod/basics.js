// zod without express 

const z = require('zod')

function validateInput(arr,email) {
    const schema1 = z.array(z.number())
    const schema2 = z.string().email()

    const response = schema1.safeParse(arr)
    const res2 = schema2.safeParse(email)

    console.log(response)
    console.log(res2)

}

validateInput([1, 2, 3], "dev.rajukumar@gmail.com")
