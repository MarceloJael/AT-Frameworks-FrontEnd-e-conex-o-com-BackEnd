<template>
    <header>
        <div class="container">
            <div class="row ">
                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 mx-auto py-3 text-center">
                    <img src="@/assets/logo.png">
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 mx-auto py-3 text-center">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <h1>Gerenciador de aula</h1>
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-2">
                                <router-link to="/"><button class="button-30">Homepage</button></router-link>
                            </div>

                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 py-2">
                                <router-link to="/add-aula"><button class="button-30">Adicionar aula</button></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style>
    header { background: #213864; border: 1px solid #021b4e; color: #FFF; }

    .button-30 {
        align-items: center;
        appearance: none;
        background-color: #FCFCFD;
        border-radius: 4px;
        border-width: 0;
        box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
        box-sizing: border-box;
        color: #36395A;
        cursor: pointer;
        display: inline-flex;
        height: 48px;
        justify-content: center;
        line-height: 1;
        list-style: none;
        overflow: hidden;
        padding-left: 16px;
        padding-right: 16px;
        position: relative;
        text-align: left;
        text-decoration: none;
        transition: box-shadow .15s,transform .15s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        will-change: box-shadow,transform;
        font-size: 18px;
    }

    .button-30:focus {
        box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    .button-30:hover {
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
        transform: translateY(-2px);
    }

    .button-30:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    }
    
</style>