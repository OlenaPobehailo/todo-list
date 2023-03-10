const checkTextLength = text => {
    if (text.length > 40) {
        alert('task description should not be longer than 40 characters');
        return false;
    }
    return true;
};

export default checkTextLength;