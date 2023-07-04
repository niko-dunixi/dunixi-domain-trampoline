import './style.css'

const url = new URL(window.location.href);
if (url.host.endsWith("paulfreaknbaker.com")) {
  url.host = url.host.replaceAll("paulfreaknbaker.com", "nikodunixi.com");
  window.location.href = url.toString();
}