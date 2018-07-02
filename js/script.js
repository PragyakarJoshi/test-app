emailValidated = false;
newPasswordValidated= false;
confirmPasswordValidated = false;

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
                this.emailValidated = true;
            } else {
                this.error['email'] = 'Enter Correct format of Email';
                this.emailValidated = false;
            }
            this.checkSubmit();
        },
        check_newPassword(value){
            requiredChars = 6;
            remainingChars = requiredChars - value.length;
            if (value.length < requiredChars) {
                this.error['newPassword'] = 'Atleast 6 characters required (' +remainingChars+ '/'+ requiredChars + ')' ;
                this.newPasswordValidated = false;
            } else {
                this.error['newPassword'] = '';
                this.newPasswordValidated = true;
            }
            this.checkSubmit();
        },
        check_confirmPassword(value){
            if (value == this.newPassword){
                this.error['confirmPassword'] = '';
                this.confirmPasswordValidated = true;
            } else {
                this.error['confirmPassword'] = 'Passwords do not match';
                this.confirmPasswordValidated = false;
            }
            this.checkSubmit();
        },
        checkSubmit(){
            if (this.emailValidated == true && this.newPasswordValidated == true && this.confirmPasswordValidated){
                this.disableSubmit = false;
            } else {
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