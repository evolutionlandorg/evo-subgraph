// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Treasure extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Treasure entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Treasure entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Treasure", id.toString(), this);
  }

  static load(id: string): Treasure | null {
    return store.get("Treasure", id) as Treasure | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get price(): BigDecimal {
    let value = this.get("price");
    return value.toBigDecimal();
  }

  set price(value: BigDecimal) {
    this.set("price", Value.fromBigDecimal(value));
  }

  get buyTime(): i32 {
    let value = this.get("buyTime");
    return value.toI32();
  }

  set buyTime(value: i32) {
    this.set("buyTime", Value.fromI32(value));
  }

  get txid(): Bytes {
    let value = this.get("txid");
    return value.toBytes();
  }

  set txid(value: Bytes) {
    this.set("txid", Value.fromBytes(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get boxType(): string {
    let value = this.get("boxType");
    return value.toString();
  }

  set boxType(value: string) {
    this.set("boxType", Value.fromString(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}

export class TreasureOpen extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TreasureOpen entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TreasureOpen entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TreasureOpen", id.toString(), this);
  }

  static load(id: string): TreasureOpen | null {
    return store.get("TreasureOpen", id) as TreasureOpen | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get ringValue(): BigDecimal {
    let value = this.get("ringValue");
    return value.toBigDecimal();
  }

  set ringValue(value: BigDecimal) {
    this.set("ringValue", Value.fromBigDecimal(value));
  }

  get tokenId(): string {
    let value = this.get("tokenId");
    return value.toString();
  }

  set tokenId(value: string) {
    this.set("tokenId", Value.fromString(value));
  }

  get txid(): Bytes {
    let value = this.get("txid");
    return value.toBytes();
  }

  set txid(value: Bytes) {
    this.set("txid", Value.fromBytes(value));
  }

  get boxIndex(): BigInt {
    let value = this.get("boxIndex");
    return value.toBigInt();
  }

  set boxIndex(value: BigInt) {
    this.set("boxIndex", Value.fromBigInt(value));
  }

  get drill(): string {
    let value = this.get("drill");
    return value.toString();
  }

  set drill(value: string) {
    this.set("drill", Value.fromString(value));
  }

  get openTime(): i32 {
    let value = this.get("openTime");
    return value.toI32();
  }

  set openTime(value: i32) {
    this.set("openTime", Value.fromI32(value));
  }
}

export class NFTTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NFTTransfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NFTTransfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NFTTransfer", id.toString(), this);
  }

  static load(id: string): NFTTransfer | null {
    return store.get("NFTTransfer", id) as NFTTransfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes | null {
    let value = this.get("to");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes | null) {
    if (value === null) {
      this.unset("to");
    } else {
      this.set("to", Value.fromBytes(value as Bytes));
    }
  }

  get tokenId(): string {
    let value = this.get("tokenId");
    return value.toString();
  }

  set tokenId(value: string) {
    this.set("tokenId", Value.fromString(value));
  }

  get nftType(): string {
    let value = this.get("nftType");
    return value.toString();
  }

  set nftType(value: string) {
    this.set("nftType", Value.fromString(value));
  }
}

export class Drill extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Drill entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Drill entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Drill", id.toString(), this);
  }

  static load(id: string): Drill | null {
    return store.get("Drill", id) as Drill | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get tokenId(): string {
    let value = this.get("tokenId");
    return value.toString();
  }

  set tokenId(value: string) {
    this.set("tokenId", Value.fromString(value));
  }

  get createTime(): i32 {
    let value = this.get("createTime");
    return value.toI32();
  }

  set createTime(value: i32) {
    this.set("createTime", Value.fromI32(value));
  }

  get grade(): i32 {
    let value = this.get("grade");
    return value.toI32();
  }

  set grade(value: i32) {
    this.set("grade", Value.fromI32(value));
  }
}

export class StakedHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakedHistory entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakedHistory entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakedHistory", id.toString(), this);
  }

  static load(id: string): StakedHistory | null {
    return store.get("StakedHistory", id) as StakedHistory | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get createTime(): i32 {
    let value = this.get("createTime");
    return value.toI32();
  }

  set createTime(value: i32) {
    this.set("createTime", Value.fromI32(value));
  }

  get historyType(): string {
    let value = this.get("historyType");
    return value.toString();
  }

  set historyType(value: string) {
    this.set("historyType", Value.fromString(value));
  }
}

export class StakedReward extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakedReward entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakedReward entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakedReward", id.toString(), this);
  }

  static load(id: string): StakedReward | null {
    return store.get("StakedReward", id) as StakedReward | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }
}

export class ItemEquip extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ItemEquip entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ItemEquip entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ItemEquip", id.toString(), this);
  }

  static load(id: string): ItemEquip | null {
    return store.get("ItemEquip", id) as ItemEquip | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get resource(): string {
    let value = this.get("resource");
    return value.toString();
  }

  set resource(value: string) {
    this.set("resource", Value.fromString(value));
  }

  get landTokenId(): string {
    let value = this.get("landTokenId");
    return value.toString();
  }

  set landTokenId(value: string) {
    this.set("landTokenId", Value.fromString(value));
  }

  get index(): i32 {
    let value = this.get("index");
    return value.toI32();
  }

  set index(value: i32) {
    this.set("index", Value.fromI32(value));
  }

  get itemTokenId(): string {
    let value = this.get("itemTokenId");
    return value.toString();
  }

  set itemTokenId(value: string) {
    this.set("itemTokenId", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get objectClassExt(): i32 {
    let value = this.get("objectClassExt");
    return value.toI32();
  }

  set objectClassExt(value: i32) {
    this.set("objectClassExt", Value.fromI32(value));
  }

  get objectClass(): i32 {
    let value = this.get("objectClass");
    return value.toI32();
  }

  set objectClass(value: i32) {
    this.set("objectClass", Value.fromI32(value));
  }

  get grade(): i32 {
    let value = this.get("grade");
    return value.toI32();
  }

  set grade(value: i32) {
    this.set("grade", Value.fromI32(value));
  }
}
