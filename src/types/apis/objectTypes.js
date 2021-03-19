import { 
  GraphQLBoolean, 
  GraphQLInt, 
  GraphQLList, 
  GraphQLString, 
  GraphQLNonNull, 
  GraphQLObjectType} from 'graphql';
import {GraphQLJSON} from 'graphql-type-json';

const ApiType = new GraphQLObjectType({
  name: 'Api',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    port: { type: GraphQLInt },
    routes: { type: new GraphQLList(RouteType) },
    settings: { type: new SettingType() }
  })
});

const RouteType = new GraphQLObjectType({
  name: 'Route',
  fields: () => ({
    _id: { type: GraphQLString },
    path: { type: GraphQLString },
    resources: { type: GraphQLJSON }
  })
});

const SettingType = new GraphQLObjectType({
  name: 'Setting',
  fields: () => ({
    enabled: { type: new GraphQLBoolean() },
    created_on: { type: new GraphQLString() }
  })
});

export {ApiType};
