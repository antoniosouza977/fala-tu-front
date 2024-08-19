<script>
import Request from "@/services/request.js";
import {store} from "@/store.js";

export default {
    name: "HomeView",
    mounted() {
        Request.get("http://localhost:80/api/v1/").then((response) => {
            console.log(store.user);
        })
    }
}
</script>

<template>
    <div class="w-full h-screen flex justify-center">
        <section class="w-1/5 p-3 pt-0 pr-0 h-screen">
            <Panel class="h-">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquam aliquid amet asperiores
                deleniti distinctio dolor dolorum ducimus eum fugit illum ipsa iusto labore laboriosam laborum magni
                maiores maxime modi molestiae molestias mollitia nobis non numquam, perferendis praesentium quae
                quisquam quos recusandae reprehenderit rerum soluta vitae voluptatibus. Aut dicta doloremque esse eum
                facere incidunt laudantium nisi, odio pariatur possimus quisquam reiciendis sequi! A aut error est fugit
                incidunt libero mollitia quae soluta. Ad alias aperiam, aspernatur cumque distinctio dolorem esse est,
                exercitationem facilis fuga inventore itaque iure maiores, nostrum provident qui reprehenderit suscipit
                tempore temporibus veritatis. Eius, qui temporibus?
            </Panel>
        </section>

        <section class="w-4/5 p-3 pt-0 h-screen">
            <Panel class="h-">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis debitis doloremque est et
                ipsum laudantium mollitia non ut voluptatem. A accusantium amet atque commodi consequatur consequuntur
                dicta doloremque dolores eaque eligendi enim exercitationem expedita illo minus, modi obcaecati odit
                perspiciatis praesentium quam quo reiciendis reprehenderit rerum saepe sunt tempora! Explicabo in
                laboriosam maxime odio quam quod saepe sunt tempora voluptate. At corporis deserunt doloremque dolores
                dolorum eligendi error eum expedita facilis fugiat fugit id inventore maiores nam neque non numquam
                optio pariatur quasi, quisquam, repudiandae, vel voluptatem voluptates. A aliquam cum, eaque eveniet
                itaque iusto nemo nulla qui rem.
            </Panel>
        </section>
    </div>
</template>
