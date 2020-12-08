import {BigInt, BigDecimal} from "@graphprotocol/graph-ts"

import {
    Create,
} from "../generated/Drill/DrillBase"
import {Drill} from "../generated/schema"

export function handleCreate(event: Create): void {
    let drill = new Drill(event.params.tokenId.toHex())
    drill.createTime = event.params.createTime.toI32()
    drill.grade = event.params.grade
    drill.owner = event.params.owner
    drill.tokenId = event.params.tokenId.toHex()
    drill.save()
}