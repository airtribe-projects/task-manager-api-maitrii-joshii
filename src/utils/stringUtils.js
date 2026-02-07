const convertStringToBool = (str) => {
    if (str == 'true') {
        return true;
    }
    return false;
}

module.exports = { convertStringToBool }