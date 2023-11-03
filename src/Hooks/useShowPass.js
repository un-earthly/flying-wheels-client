import { useState } from "react";

export default function useShowPass() {
    const [show, setShow] = useState(false)
    const updateShow = () => {
        setShow(!show)
    }

    return [show, updateShow];
}