import './style.css'
import { render } from 'solid-js/web';
import RedirectText  from './RedirectText';

// const url = new URL(window.location.href);
// if (url.host.endsWith("paulfreaknbaker.com")) {
//   url.host = url.host.replaceAll("paulfreaknbaker.com", "nikodunixi.com");
//   window.location.href = url.toString();
// }
// if (redirectButtonContainerDiv != null && redirectButtonContainerDiv instanceof HTMLDivElement) {
//   setupCountdownButton(redirectButtonContainerDiv);
// }

const main = () => {
  const redirectButtonContainerDiv: HTMLElement | null = window.document.getElementById('redirect-button-container');
  if (redirectButtonContainerDiv == null) {
    console.warn("The root element for the redirect button was null!");
    return;
  }
  render(() => <RedirectText seconds={15} destination={new URL("https://www.nikodunixi.com")}/>, redirectButtonContainerDiv);
};

main();
