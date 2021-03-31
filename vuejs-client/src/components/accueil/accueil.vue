<template src="./accueil.html"></template>
<style scoped src="./accueil.css"></style>
<style scoped src="./deco.css"></style>
<style scoped src="./text_deco.css"></style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
</style>

<script src="https://unpkg.com/scroll-out/dist/scroll-out.min.js"></script>

<script type="text/javascript">
    // var item = document.getElementsById('container')[0];
    // window.addEventListener('wheel', function(e) {})

export default {
    mounted(){
        window.addEventListener('wheel', function(e){
            if(e.deltaY > 0){
                document.getElementById('container').scrollLeft += 1000;
                document.getElementById('line').classList.add('left');
            }
            else {
                document.getElementById('container').scrollLeft -= 1000;
                document.getElementById('line').classList.remove('left');
            }
        }),
        document.querySelector('.main').scrollIntoView({
            behavior: 'smooth'
        });
    }
}
</script>