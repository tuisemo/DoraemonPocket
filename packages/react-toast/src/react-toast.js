'use strict';
import React, { useState } from 'react';
module.exports = reactToast;

function reactToast() {
    // TODO
    const [msg, setMsg] = useState('hello world')
    return (
        <div>
            {msg}
        </div>
    )
}
