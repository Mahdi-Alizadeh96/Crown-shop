import React from 'react';
import CollectionItem from '../Collection-item/Collection-item';

export default function PrevCollection({title ,items}) {
    return (
        <div className={'collection-prev'}>
            <h1 className={'title'}>{title.toUpperCase()}</h1>
            <div className={'preview'}>
                {
                    items.filter((item,inx)=> inx < 4).map(({id , ...otherProps}) => (
                        <CollectionItem key={id} {...otherProps} />
                    ))
                }
            </div>
        </div>
    )
}
