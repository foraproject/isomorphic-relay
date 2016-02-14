import fromGraphQL from 'react-relay/lib/fromGraphQL';
import Relay from 'react-relay';
import RelayMetaRoute  from 'react-relay/lib/RelayMetaRoute';
import RelayQuery from 'react-relay/lib/RelayQuery';
import RelayStore from 'react-relay/lib/RelayStore';

const storeData = RelayStore.getStoreData();

export default function injectPreparedData(data) {
    data.forEach(({query: concreteQuery, result}) => {
        const query = fromGraphQL.Query(concreteQuery);

        storeData.handleQueryPayload(query, result);
    });
}
