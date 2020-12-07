import {BigInt, BigDecimal} from "@graphprotocol/graph-ts"

import {
    OpenBox,
} from "../generated/DrillTokenBack/Contract"
import {TreasureOpen} from "../generated/schema"

export function handleOpenBox(event: OpenBox): void {
    let treasure = new TreasureOpen(event.params.id.toHex())
    treasure.boxIndex = event.params.id
    treasure.owner = event.params.user
    treasure.ringValue = event.params.value.toBigDecimal()
    treasure.txid = event.transaction.hash
    treasure.tokenId = event.params.tokenId
    treasure.save()
}
