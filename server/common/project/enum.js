const DbType = {
    SHOP_DB: 1,
    STOCK_DB: 2
}

const ResponseType = {
    ERROR: 0,
    SUCCESS_LIST: 1,
    SUCCESS_OBJ: 2,
    SUCCESS_EMPTY: 3
}

const ActionsType = {
    ADD: 0,
    UPDATE: 1,
    DELETE: 2,

}

module.exports = {
    DbType: DbType,
    ResponseType: ResponseType,
    ActionsType: ActionsType
}