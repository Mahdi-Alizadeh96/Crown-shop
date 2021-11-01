import React from 'react'

export default function PrevCollection({title ,items}) {
    return (
        <div className={'collection-prev'}>
            <h1 className={'title'}>{title.toUpperCase()}</h1>
            <div className={'preview'}>
                {
                    items.filter((item,inx)=> inx < 4).map((item) => (
                        <div key={item.id} >{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}
