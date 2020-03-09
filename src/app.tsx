import React from 'react'

import './app.css'

export function AlmanacItem(props: {
    content: string,
    description: string,
    image: string
}) {
    const { content, description, image } = props

    return (
        <div className="almanac-item">
            <img className="image" src={image} />
            <span className="content">{content}</span>
            <span className="description">{description}</span>
        </div>
    )
}

export function AlmanacItemCategory(props: {
    color: 'green' | 'red'
    header: string
    items: { content: string, description: string }[]
}) {
    const { color, header, items: itemMetas } = props

    const items = itemMetas.map((item, index) => (
        <AlmanacItem
            content={item.content}
            description={item.description}
            image={`http://cdn.aixifan.com/dotnet/20130418/umeditor/dialogs/emotion/images/td/${index + 1}.gif`}
            key={index}
        />
    ))

    return (
        <div className={`almanac-category ${color}`}>
            <h2><span className="header-dot"></span>{header}</h2>
            {items}
        </div>
    )
}

export function AppMain(props: {
    items: { content: string, description: string }[]
}) {
    return (
        <AlmanacItemCategory
            color="red"
            header="今日不宜"
            items={props.items}
        />
    )
}
