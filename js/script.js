Vue.component('signUp', {
    template: '#signUp',
    data() {
        return {
            email:'',
            newPassword:'',
            confirmPassword:'',
            disableSubmit: true,
        }
    },
    watch: {
        email(value) {
            this.email = value;
            this.check_email(value);
        }
    },
    methods: {
        check_email(value){
            if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(value)){

            } else {
                
            }
        }
    }
});

new Vue ({
    el:'#app',
    data:{
        componentName:'signUp'
    }
})