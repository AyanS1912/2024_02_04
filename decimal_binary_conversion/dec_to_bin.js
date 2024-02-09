/**
 * @param {number} value The value we need to convert from decimal to binary.
 * @param {number} nlen It's the length of the array, which should be less than 53.
 * @returns {Array<number>} Return array of number that represents decimal in binary
 */


function getSimple2sComplement(value,nlen){

    if(nlen <= 52 && Math.abs(value) < 2**(nlen) -1){
        if(typeof(value) === 'number'){
            const binary = new Array(nlen)
            
            if(value > 0){
                binary[0] = 0
                for(let i = nlen-1; i > 0; i--){
                    qt = Math.floor(value/2)
                    rem = value % 2
                    value = qt
                    binary[i] = rem
                }
            }
            else{
                binary[0] = 1
                value = Math.abs(value) - 1
                // console.log(value)

                for(let i = nlen-1; i > 0; i--){
                    rem = value % 2
                    value = Math.floor(value/2)
                    binary[i] = rem
                }
            }
            
            return binary

        }

        else{
            return `Entered value is of type ${typeof(value)} instead of number.`
        }
    }

    else{
        return ' Error cannot be calculated'
    }

}

function repr(res){
    let ans = ''
    for(const i of res){
        ans+=i
    }
    console.log(ans)
}

const res = getSimple2sComplement(-1,11)
repr(res)

