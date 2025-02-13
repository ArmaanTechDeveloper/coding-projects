"use client";

import { useState } from "react";

export function Button() {
    const [visible , setVisible] = useState(true);
    function greet(event: React.MouseEvent){
        setVisible(false);
    }
    return(
        <div>
            {visible && <button onClick={(e) => greet(e)} className="bg-red-400 p-2 rounded hover:bg-red-500 transition">Click me</button>}
            {
                !visible && 
                <div>
                    <p className="text-2xl my-2 text-center flex flex-wrap justify-center">Happppie baleeentine's to the special one🫣🤗
                        <span className="relative inline-block">
                            <span className="absolute left-0 right-0 mx-auto animate-dil">❤️</span>
                        </span>
                    </p>
                    <p className="text-center text-xs text-red-200">-Don't forget to text me if you watched this 🫣🫣</p>
                
                </div>
            }
        </div>
    )
}