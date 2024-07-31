"use client"

import { useState } from "react";
import { Button } from "../ui/button";

export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Counter</h1>
            <p style={{ fontSize: '24px' }}>{count}</p>
            <Button variant="default" onClick={() => setCount(count + 1)}>
                Increment
            </Button>
            <Button
                variant="secondary"
                onClick={() => setCount(count - 1)}
                style={{ marginLeft: '10px' }}
            >
                Decrement
            </Button>
        </div>
    );
};

