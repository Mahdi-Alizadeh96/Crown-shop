import React, { Component } from 'react';
import PrevCollection from '../../components/PrevCollection/PrevCollection';
import ShopDATA from './ShopData';

export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collections : ShopDATA
        }
    }

    render() {
        const collections = this.state.collections;

        console.log(collections);
        return (
            <div className={'shop-page'}>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <PrevCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}
