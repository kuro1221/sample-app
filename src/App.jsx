import ReactDOM from "react-dom";
import React from "react";

export const App = () => {
    const clickButton = () => {
        alert("クリックテスト")
    }

    const contentStyle = {
        color: "red",
        fontSize: "20px"
    }

    return(
        <>
            <p style={{ color: "red" }}>テスト</p>
            <h1 style={{ contentStyle }}>こんにちは</h1>
            <button onClick={clickButton} >ボタン</button>
        </>
    )
}