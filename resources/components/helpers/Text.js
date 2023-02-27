import React from 'react';

const Text = {
    specialRemove: 
    function(str) {
        const result = str?.replace(/[^A-Z0-9]+/ig, '');
        return result;
    },
}

export default Text;