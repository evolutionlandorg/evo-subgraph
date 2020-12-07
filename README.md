## Evolution land subgraph

Evolution Land is a virtual simulation blockchain game that supports cross-chain interactions. This Subgraph ingests the contracts

## Networks

This test subgraph can be found on The Graph Hosted Service at https://thegraph.com/explorer/subgraph/freehere107/alphaevo

### Install 

```shell script
yarn install
graph codegen
graph build
graph deploy 
```

### Getting started with querying 
The queries show most of the information that is queryable, but there are many other filtering options that can be used, just check out the [querying api](https://github.com/graphprotocol/graph-node/blob/master/docs/graphql-api.md).


### Querying All Treasure trade

```graphql
{
  treasures{
    id
    buyer
    price
    buyTime
    txid
    amount
    boxType
    status
  }
}
```

### Querying Opened Treasure

```graphql
{
  treasureOpens{
    id
    owner
    ringValue
    tokenId
    txid
    boxIndex
  }
}
```