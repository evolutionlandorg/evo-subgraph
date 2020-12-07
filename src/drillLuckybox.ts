import {BigInt, BigDecimal} from "@graphprotocol/graph-ts"

import {
    GoldBoxSale,
    SilverBoxSale
} from "../generated/DrillLuckyBox/Contract"
import {Treasure} from "../generated/schema"

export function handleGoldBoxSale(event: GoldBoxSale): void {
    let treasure = new Treasure(event.transaction.hash.toHex())
    treasure.buyer = event.params.buyer
    treasure.price = event.params.price.toBigDecimal()
    treasure.amount = event.params.amount.toBigDecimal()
    treasure.buyTime = event.block.timestamp.toI32()
    treasure.txid = event.transaction.hash
    treasure.boxType = "Gold"
    treasure.status = "Locked"
    treasure.save()
}

export function handleSilverBoxSale(event: SilverBoxSale): void {
    let treasure = new Treasure(event.transaction.hash.toHex());
    treasure.buyer = event.params.buyer
    treasure.price = event.params.price.toBigDecimal()
    treasure.amount = event.params.amount.toBigDecimal()
    treasure.buyTime = event.block.timestamp.toI32()
    treasure.txid = event.transaction.hash
    treasure.boxType = "Silver"
    treasure.status = "Locked"
    treasure.save()
}
