import ReactDOM from 'react-dom'
import React from 'react'
import { ColoredMessage } from './components/ColoredMessage'

export const App = () => {
  const clickButton = () => {
    alert('クリックテスト')
  }

  const contentStyle = {
    color: 'red',
    fontSize: '20px',
  }

  return (
    <>
      <p style={{ color: 'red' }}>テスト</p>
      <h1 style={{ contentStyle }}>こんにちは</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="blue">元気です！</ColoredMessage>
      <button onClick={clickButton}>ボタン</button>
    </>
  )
}
