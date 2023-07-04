import type { Component } from 'solid-js';
import { createSignal, onCleanup, createEffect } from "solid-js";

const redirect = (url: URL) => {
  const currentURL = new URL(window.location.href);
  if (currentURL.hostname == "localhost") {
    console.log('is localhost, will not redirect')
    return;
  }
  window.location.href = url.toString();
}

const RedirectText: Component<{seconds: number, destination: URL}> = (props) => {
  const [seconds, setSeconds] = createSignal(props.seconds);

  const timer = setInterval(() => setSeconds(seconds() - 1), 1000);
  createEffect(() => {
    if (seconds() <= 0) {
      clearInterval(timer);
      redirect(props.destination);
    }
  });
  onCleanup(() => clearInterval(timer));

  return (
    <div class="flex flex-col justify-end w-100 text-right text-teal-50" >
      <div class="text-xs">
        You will be automatically redirected [{seconds()}] ...
      </div>
      <div>
        <a
          class="text-xl underline bold"
          href="https://www.nikodunixi.com"
        >
          https://www.nikodunixi.com
        </a>
      </div>
    </div>
  )
}

export default RedirectText;