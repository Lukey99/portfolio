<template src="./main.html"></template>
<style scoped src="./main.css"></style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Zetta&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tomorrow&display=swap');
</style>

<script>
export default{
    data(){
        return{
            menuActive: false
        };
    },
    methods:{
        activateMenu(){
            if(document.getElementById('nav_id').classList.contains('active_nav')){
                document.getElementById('nav_id').classList.add('visuallyhidden');
                setTimeout(function(){
                    document.getElementById('menu_id').classList.remove('extendedmenu');
                }, 500);
                setTimeout(function(){
                    document.getElementById('nav_id').classList.remove('active_nav');
                }, 1020);
            }else{
                document.getElementById('menu_id').classList.add('extendedmenu');
                setTimeout(function(){
                    document.getElementById('nav_id').classList.remove('visuallyhidden');
                }, 20);
                document.getElementById('nav_id').classList.add('active_nav');
                
            }
        },
        chosenTab(){
            if(document.getElementById('nav_id').classList.contains('active_nav')){
                document.getElementById('nav_id').classList.add('visuallyhidden');
                setTimeout(function(){
                    document.getElementById('menu_id').classList.remove('extendedmenu');
                }, 500);
                setTimeout(function(){
                    document.getElementById('nav_id').classList.remove('active_nav');
                }, 1020);
            }else{
                document.getElementById('menu_id').classList.add('extendedmenu');
                setTimeout(function(){
                    document.getElementById('nav_id').classList.remove('visuallyhidden');
                }, 20);
                document.getElementById('nav_id').classList.add('active_nav');
            }
        }
    }
}

// eslint-disable-next-line no-unused-vars
let menu = document.getElementById('menu')
// menu.addEventListener('click', function(){
//     console.log("click !");
// });

</script>