window.addEventListener('load',function(){
    const headerApp = Vue.createApp({
        data(){
            return{ 
                title: '',
                menu: [['邀請他人簽署','disable','#'],['簽署新文件','','./signing.html'],['登入','','#']],
            }
        },
        methods:{
            open(url){
                window.location= url;
            }
        },
        mounted(){
            let title = window.location.pathname;
            if(title == '/signing.html'){
                this.title = '簽署新文件';
                this.menu = [['邀請他人簽署','disable','#'],['登入','','#']];
            }
        },
    })
    headerApp.mount('#headerApp');
})