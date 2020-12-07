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

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
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
}
