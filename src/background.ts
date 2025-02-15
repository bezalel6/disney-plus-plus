function polling() {
  // console.log("polling");
  setTimeout(polling, 1000 * 30);
}
function heartbeat(){
    console.log("heartbeat");
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.id) {
          chrome.tabs.sendMessage(tabs[0].id, { topic: "heartbeat"});
        }
      });

}
chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        if(!details.url.endsWith("heartbeat")) return;
        console.log("Heartbeat made:", details.url);
        heartbeat();
    },
    { urls: ["<all_urls>"] },
    []
);
polling();

