import {BigInt, BigDecimal} from "@graphprotocol/graph-ts"
import {Staked, RewardPaid, Withdrawn} from "../generated/Governance/EvolutionTeller";
import {StakedHistory} from "../generated/schema";

export function handleStaked(event: Staked): void {
    let history = new StakedHistory(event.transaction.hash.toHex())
    history.createTime = event.block.timestamp.toI32()
    history.owner = event.params.account
    history.amount = event.params.amount.toBigDecimal()
    history.historyType = "Locked"
    history.save()
}

export function handleRewardPaid(event: RewardPaid): void {
    let history = new StakedHistory(event.transaction.hash.toHex())
    history.createTime = event.block.timestamp.toI32()
    history.owner = event.params.account
    history.amount = event.params.reward.toBigDecimal()
    history.historyType = "Dividend"
    history.save()
}

export function handleWithdrawn(event: Withdrawn): void {
    let history = new StakedHistory(event.transaction.hash.toHex())
    history.createTime = event.block.timestamp.toI32()
    history.owner = event.params.account
    history.amount = event.params.amount.toBigDecimal()
    history.historyType = "Unlocked"
    history.save()
}