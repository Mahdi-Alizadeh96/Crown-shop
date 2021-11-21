import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview  } from '../../redux/shopDATA/shop-selector';
import PrevCollection from '../PrevCollection/PrevCollection';

function CollectionsOverview({collections}) {
    return (
        <div className='collections-overview' >
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PrevCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview);