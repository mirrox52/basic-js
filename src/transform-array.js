module.exports = function transform(arr) {
    if (!Array.isArray(arr)) 
    {
        throw new Error('array doesn\'t exist');
    }
    let res = [];
    for (let i = 0; i < arr.length; i++)
    {
        switch (arr[i])
        {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                res.pop();
                break;
            case '--double-next':
                if (i !== arr.length - 1)
                {
                    res.push(arr[i+1]);
                }
                break;
            case '--double-prev':
                if (i > 0)
                {
                    res.push(arr[i - 1]);
                }
                break;
            default:
                res.push(arr[i]);
                break;
        }
    }
    return res;
};
