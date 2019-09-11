
import { storiesOf } from "@storybook/svelte";
import ItemList from "./item-list.svelte";

storiesOf("Item List",module).add("Small List",()=>{

    let items = [
        {
            title:"RC Car",
            image:["https://images-na.ssl-images-amazon.com/images/I/81s71zUFWxL._SL1500_.jpg"],
            description:[`
            Imagine Tony Stark gearing up in his Iron Man armor to take on villains alongside fellow Avengers with this 12-inch-scale Iron Man figure
            Connect the Titan Hero Power FX Launcher (not included) to the action figure’s arm port to activate sounds and phrases inspired by the Marvel movie and fire projectiles
            Fans can imagine the action-packed scenes of the Marvel universe with this Iron Man figure, inspired by the Avengers: Endgame movie
            Connect to Titan Hero Series and Titan Hero Power FX figures (each sold separately) for sounds and phrases from the Avengers movies
            Be on the lookout for other Marvel Avenger figures and gear to imagine forming a team of Avengers! Additional products each sold separately. Subject to availability
            `.trim()],
            rating:4.5
        },
        {
            title:"Asus Laptop Charger",
            image:["https://images-na.ssl-images-amazon.com/images/I/61vSLpsoU7L._SY355_.jpg"],
            rating:3
        },
        {
            title:"Iron Man Hot Toy",
            image:["https://media.kapowtoys.co.uk/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/d/pd1532573841mc7.jpg"],
            description:`
            Imagine Tony Stark gearing up in his Iron Man armor to take on villains alongside fellow Avengers 
            with this 12-inch-scale Iron Man figure Connect the Titan Hero Power FX Launcher (not included) 
            to the action figure’s arm port to activate sounds and phrases inspired by the Marvel movie and 
            fire projectiles Fans can imagine the action-packed scenes of the Marvel universe with this 
            Iron Man figure, inspired by the Avengers: Endgame movie Connect to Titan Hero Series and 
            Titan Hero Power FX figures (each sold separately) for sounds and phrases from the Avengers 
            movies Be on the lookout for other Marvel Avenger figures and gear to imagine forming a team 
            of Avengers! Additional products each sold separately. Subject to availability
            `,
            rating:3.5
        }
    ]

    return {
        Component:ItemList,
        props:{
            items
        }
    }

    
})