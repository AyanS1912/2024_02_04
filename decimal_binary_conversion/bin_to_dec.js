/**
 * bin_todec Function is used to convert binary to decimal value, it takes along binary value 
 * in the array, convert them to decimal values 
 */

/**
 * @param {Array<number>} binary Function will take binary number as input, then it will convert
 * it to decimal.
 * @returns {number}
 */

function getSimpleDecimalfrom2sComplement(binary_value){
    
    const len = binary_value.length 
    let ans=0

    //len of array should be more than 0 and less than 52 as per JS representaion
    if(0 < len <= 52){

        // if the binary is positive 
        if(binary_value[0] === 0){
            let count = 0
            for(let i = len-1; i > 0 ; i--){
                ans += (binary_value[i]*(2**count));
                count += 1
            }
            return ans
        }

        else{
            let count = 0
            for(let i= len-1; i> 0 ; i--){
                ans += (binary_value[i]*(2**count));
                count += 1
            }
            ans += 1
            ans = -ans
            return ans
        }
    }

    else{
        return 'Value cannot be calculated.'
    }

}

arr = [1,1,1,0,1]
console.log(getSimpleDecimalfrom2sComplement(arr))