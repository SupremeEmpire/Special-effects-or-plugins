<template>
    <div class="root-game">
        <!-- 使用组件 -->
        <back-header>所有游戏列表：</back-header>
        <ul class="game-list">
            <li v-for="game in gameList">
                <div :style="{backgroundImage:'url('+game.game_src+')'}"></div>
                <p>{{game.game_name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    // 使用一下混合
    import share from './share.js'
    export default {
        mixins: [share],
        data: function () {
            return {
                gameList: []
            }
        },
        methods: {
            // 获取游戏列表
            getGameList() {
                this.$http.get('/douyuapi/api/RoomApi/game')
                    .then(function (res) {
                        this.gameList = res.body.data;
                        console.log(this.gameList)
                    })
            }
        },
        created() {
            this.getGameList()
        }
    }

</script>
<style scoped>
    .root-game {
        padding: 33px 0;
    }

    .game-list {
        margin-top: 10px;
    }

    .game-list li {
        width: calc(145rem /20);
        float: left;
        height:calc(145rem /20);
        border: 1px solid #ccc;
        margin-left: calc(10rem/20);
        margin-top: calc(10rem/20);
        text-align: center;
    }

    .game-list li div {
        width: calc(144.5rem /20);
        height: calc(130rem /20);
        /* 覆盖 */
        background-size: cover
    }

    .game-list li p {
        width: calc(145rem /20);
        height: 0.8rem;
        line-height: calc(21rem /20);
        overflow: hidden;
        /*text-align: center;*/
    }
</style>