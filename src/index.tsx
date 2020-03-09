import React from 'react'
import ReactDOM from 'react-dom'

import { AppMain } from './app'

function bootstrap(root: HTMLElement) {
    // TODO: load almanac config

    const items = [
        { content: '单方面开房打 osu', description: '妹子把密码忘了找不到你' },
        { content: '打 True Love 表白', description: '打个 Failed 还表什么白' },
        { content: '在机厅求婚', description: '被拒绝: 音游狗不要' }
    ]

    ReactDOM.render(<AppMain items={items} />, root)
}

const rootElement = document.getElementById('app-main')

if (rootElement === null) {
    console.error('Failed to find app root element')
} else {
    bootstrap(rootElement)
}
