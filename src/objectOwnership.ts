import {BigInt, BigDecimal} from "@graphprotocol/graph-ts"

import {
    Transfer,
} from "../generated/ObjectOwnership/Contract"
import {NFTTransfer} from "../generated/schema"

export function handleTransfer(event: Transfer): void {
    let transfer = new NFTTransfer(event.transaction.hash.toHex())
    transfer.from = event.params._from
    transfer.to = event.params._to
    transfer.tokenId = event.params._tokenId.toHex()
    transfer.nftType = getAssetTypeByTokenId(event.params._tokenId.toHex())
    transfer.save()
}


function getAssetTypeByTokenId(tokenId: String): string {
    // @ts-ignore
    // todo need use tokenId >>192 && 255
    switch (parseI32(tokenId.substr(17, 1))) {
        case 1:
            return "Land"
        case 2:
            return "Apostle"
        case 3:
            return "MirrorKitty"
        case 4:
            return "Drill"
        default:
            return ""
    }
}
