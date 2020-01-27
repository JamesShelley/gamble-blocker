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
           "*://*.quinnbet.com/*",
        ]}, ['blocking']);
}

updateFilters();