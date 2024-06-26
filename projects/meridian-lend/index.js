const abi = require('./abi.json');
const { aaveChainTvl } = require('../helper/aave');

function v2(chain, v2Registry) {
  abi.getAllATokens = abi.getAllOTokens
  const isV3 = false
  const options = { abis: abi }
  const section = borrowed => aaveChainTvl(chain, v2Registry, undefined, undefined, borrowed, isV3, options)
  return {
    tvl: section(false),
    borrowed: section(true)
  }
}

module.exports = {
  telos: v2("telos", "0xb84171C0824B4F3C0B415706C99A4A8ED5779b75"),
}