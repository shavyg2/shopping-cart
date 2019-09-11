import { Controller, View } from "@slick-for/svelte";
import HomePage from "./home.svelte";

import Layout from "../layout/main-layout.svelte";

@Controller("/",{
    layout:Layout
})
export class MainController{



    @View("/",HomePage)
    homepage(){

    }
}