Vue.component('signUp', {
    template: '#signUp',
    data() {
        return {
            email:'',
            newPassword:'',
            confirmPassword:'',
            disableSubmit: true,
            error:[],
        }
    },
    watch: {
        email(value) {
            this.email = value;
            this.check_email(value);
        },
        newPassword(value) {
            this.newPassword = value;
            this.check_newPassword(value);
        },
        confirmPassword(value) {
            this.confirmPassword = value;
            this.check_confirmPassword(value);
        }
    },
    methods: {
        check_email(value){
            if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(value)){
                this.error['email'] = '';
            } else {
                this.error['email'] = 'Enter Correct format of Email';
            }
        },
        check_newPassword(value){
            requiredChars = 6;
            remainingChars = requiredChars - value.length;
            if (value.length < requiredChars) {
                this.error['newPassword'] = 'Atleast 6 characters required (' +remainingChars+ '/'+ requiredChars + ')' ;
            } else {
                this.error['newPassword'] = '';
            }
        },
        check_confirmPassword(value){
            if (value == this.newPassword){
                this.error['confirmPassword'] = '';
                this.disableSubmit = false;
            } else {
                this.error['confirmPassword'] = 'Passwords do not match';
                this.disableSubmit = true;
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