
import {storiesOf} from "@storybook/svelte"
import Features from "./features.svelte";

storiesOf("Features",module)

.add("Basic Feature",()=>{


    return {
        Component:Features,
        props:{
            features:[]
        }
    }
})