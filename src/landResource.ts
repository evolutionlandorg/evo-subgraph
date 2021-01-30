import {Equip, Divest, LandResource} from "../generated/LandResource/LandResource";
import {ISettingsRegistry} from "../generated/LandResource/ISettingsRegistry";
import {ItemEquip} from "../generated/schema";

import {store, Address} from '@graphprotocol/graph-ts'

export function handleEquip(event: Equip): void {
    let equip = new ItemEquip(event.params.id.toHex())
    equip.landTokenId = event.params.tokenId.toHex()
    equip.index = event.params.index.toI32()
    equip.itemTokenId = event.params.id.toHex()
    equip.resource = checkResourceType(event.params.resource.toHexString(), event.address)
    equip.owner = event.params.staker
    equip.save()
}

export function handleDivest(event: Divest): void {
    let equip = ItemEquip.load(event.params.id.toHex())
    if (equip !== null) {
        store.remove('ItemEquip', event.params.id.toHex())
    }
}

function checkResourceType(resource: string, landBaseAddress: Address): string {
    let landBase = LandResource.bind(landBaseAddress)
    let Setting = ISettingsRegistry.bind(landBase.registry())
    if (Setting.addressOf(landBase.CONTRACT_GOLD_ERC20_TOKEN()).toHexString() == resource) {
        return "gold"
    }
    if (Setting.addressOf(landBase.CONTRACT_WOOD_ERC20_TOKEN()).toHexString() == resource) {
        return "wood"
    }
    if (Setting.addressOf(landBase.CONTRACT_WATER_ERC20_TOKEN()).toHexString() == resource) {
        return "water"
    }
    if (Setting.addressOf(landBase.CONTRACT_FIRE_ERC20_TOKEN()).toHexString() == resource) {
        return "fire"
    }
    if (Setting.addressOf(landBase.CONTRACT_SOIL_ERC20_TOKEN()).toHexString() == resource) {
        return "soil"
    }
    return ""
}