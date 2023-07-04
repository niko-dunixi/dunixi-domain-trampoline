import './style.css'

// const url = new URL(window.location.href);
// if (url.host.endsWith("paulfreaknbaker.com")) {
//   url.host = url.host.replaceAll("paulfreaknbaker.com", "nikodunixi.com");
//   window.location.href = url.toString();
// }

// const redirectButtonContainerDiv: HTMLElement | null = window.document.getElementById('redirect-button-container');
// if (redirectButtonContainerDiv != null && redirectButtonContainerDiv instanceof HTMLDivElement) {
//   setupCountdownButton(redirectButtonContainerDiv);
// }

const main = () => {
  const hostname = new URL(window.location.href).hostname;
  if (hostname == "localhost") {
    console.log('is localhost, will not redirect')
    return;
  }
  const millis = 1000 * 15
  console.log('setting timeout millis', millis);
  setTimeout(() => {
    window.location.href = "https://www.nikodunixi.com/";
  }, millis);
}

main();
