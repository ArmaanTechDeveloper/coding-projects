"use client";

import { useState } from "react";

export function Button() {
    const [visible , setVisible] = useState(true);
    function greet(event: React.MouseEvent){
        setVisible(false);
    }
    return(
        <div>
            {visible && <button onClick={(e) => greet(e)} className="bg-blue-400 p-2 rounded hover:bg-blue-500 transition">Click me</button>}
            {!visible && <p className="text-2xl my-2 text-center">You are someone special to me 🫣🤗❤️</p>}
        </div>
    )
}