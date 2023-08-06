<template>
    <TheHeader />
    
    <div class="row">
        <div class="col-3">
        SLIDER BAR
        
        </div>
        <div class="col-9">
            <router-view></router-view>
        </div>

    </div>

    <p>
        {{ users }}
    </p>
    
    
</template>
<script>
import TheHeader from "../components/TheHeader.vue";
import { defineComponent, ref } from "vue";

export default{
    components: {
        TheHeader
    },
    data() {
        return {
            data_user: []
        }
    },
    setup() {
        const users = ref([])
        const getUsers = () => {
            axios.get('https://api.placeholderjson.dev/shipments/')
            .then(function (response) {
                users.value = response.data
                
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        getUsers()
        return {
            users
        }
        
    }
}

</script>