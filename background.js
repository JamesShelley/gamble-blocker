function blockRequest(details) {
    return {cancel: true};
}

function updateFilters(urls) {
    if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
        chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
    chrome.webRequest.onBeforeRequest.addListener(blockRequest, 
        {urls: [
        "*://*.bet365.com/*", 
        "*://*.888casino.com/*",
        "*://*.coral.co.uk/*",
        "*://*.betway.com/*",
        "*://*.pokerstars.com/*",
        "*://*.pokerstars.uk/*",
        "*://*.32red.com/*",
        "*://*.grosvenorcasinos.com/*",
        "*://*.paddypower.com/*",
        "*://*.ladbrokes.com/*",
        "*://*.virgingames.com/*",
         "*://*.thesunvegas.co.uk/*",
         "*://*.skybet.com/*",
         "*://*.betuk.com/*",
         "*://*.mansionbet.com/*",
          "*://*.21.co.uk/*",
           "*://*.casinojoy.com/*",
           "*://*.rainbowrichescasino.com/*",
           "*://*.vegashero.com/*",
           "*://*.conquestador.com/*",
           "*://*.casumo.com/*",
           "*://*.mansioncasino.com/*",
           "*://*.boylesports.com/*",
           "*://*.interbet.com/*",
           "*://*.rubybet.com/*",
           "*://*.777.com/*",
           "*://*.williamhill.com/*",
           "*://*.betvictor.com/*",
           "*://*.galabingo.com/*",
           "*://*.starsports.bet/*",
           "*://*.spreadex.com/*",
           "*://*.sportnation.bet/*",
           "*://*.supermegafluffyrainbowvegasjackpotcasino.com/*",
           "*://*.latecasino.com/*",
           "*://*.amigoslots.com/*",
           "*://*.bethard.com/*",
           "*://*.kingcasino.com/*",
           "*://*.netbet.co.uk/*",
           "*://*.unibet.co.uk/*",
           "*://*.spacecasino.co.uk/*",
           "*://*.gamebookers.com/*",
           "*://*.mrplay.com/*",
           "*://*.wombatcasino.com/*",
           "*://*.kongcasino.com/*",
           "*://*.betregal.com/*",
           "*://*.moplay.co.uk/*",
           "*://*.kwiff.com/*",
           "*://*.latecasino.com/*",
        ]}, ['blocking']);
}

updateFilters();