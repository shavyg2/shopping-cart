import { Module, SlickForSvelteFactory } from "@slick-for/svelte";
import { createBrowserHistory } from "history";
import Template from "./Template.svelte";
import Error404 from "./404.svelte";
import ErrorPage from "./Error.svelte";
import { MainController } from "./controller/main/main-controller";

const history = createBrowserHistory();


@Module({
  controllers: [MainController],
  provider: [
   
  ]
})
export class ApplicationModule {


}

const app = SlickForSvelteFactory.create(ApplicationModule, {
  base: Template, // Remember that template i told you to keep in your back pocket, take it out.
  history, //https://www.npmjs.com/package/history
  component404: Error404, //svelte 404 Page, make it up or copy from somewhere else,
  error: ErrorPage,
  target: document.body //Where to render to https://svelte.dev/svelte/docs#Creating_a_component
});

/**
 * Do you know express and the listen api, if you do great, basically the same thing.
 * If you don't, DON'T WORRY, This makes things work. With out it it is configured, but not working.
 * Call it.
 */
app.Initialize();
