import { 
  GraphQLBoolean, 
  GraphQLInt, 
  GraphQLList, 
  GraphQLString, 
  GraphQLNonNull, 
  GraphQLObjectType} from 'graphql';
import {GraphQLJSON} from 'graphql-type-json';

const ResponseType = new GraphQLObjectType({
  name: 'Response',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    response: { type: GraphQLJSON },
    tracking_assignation: { type: TrackingAssignationType },
    created_on: { type: GraphQLString }
  })
});

const TrackingAssignationType = new GraphQLObjectType({
  name: 'TrackingAssignation',
  fields: () => ({
    api_id: { type: GraphQLString },
    routes: { type: new GraphQLList(TrackingRouteType) }
  })
});

const TrackingRouteType = new GraphQLObjectType({
  name: 'TrackingRoute',
  fields: () => ({
    path: { type: new GraphQLString() },
    method: { type: new GraphQLString() },
    date: { type: new GraphQLString() }
  })
});

export {ResponseType};
