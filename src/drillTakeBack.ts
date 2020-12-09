import {BigInt, BigDecimal} from "@graphprotocol/graph-ts"

import {
    OpenBox,
} from "../generated/DrillTokenBack/DrillTakeBack"

import {TreasureOpen, Drill} from "../generated/schema"

export function handleOpenBox(event: OpenBox): void {
    let drill = Drill.load(event.params.tokenId.toHex())

    let treasure = new TreasureOpen(event.params.id.toHex())
    treasure.boxIndex = event.params.id
    treasure.owner = event.params.user
    treasure.ringValue = event.params.value.toBigDecimal()
    treasure.txid = event.transaction.hash
    treasure.tokenId = event.params.tokenId.toHex()
    treasure.drill = drill.id
    treasure.openTime = event.block.timestamp.toI32()
    treasure.save()
}
