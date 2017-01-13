$(document).ready(function() {

    // View Model - Handled by vuejs

    let app = new Vue({
        el: '#anagram-app',
        data: {
            queryMsg: 'Enter a phrase...',
            resultMsg: 'Phrase to be solved:',
        },
        methods: {
            // Quality-of-life query input box stuff
            queryInputClicked: function(e) {
                let $e = $(e.currentTarget);
                // $e.select(); // Either select everything in the input form, or delete everything.
                this.queryMsg = '';
                console.log($e.attr('id') + 'clicked')
            },

            // This method is run right after the user clicks the "Solve!" button.
            queryAnagram: function (e) {
                test(this.queryMsg);
                this.resultMsg = 'Solving: ' + this.queryMsg;
            }
        }
    });

    // Model - Anagram Solving Logic

    function test(t) {
        if(t.length != 0) {
            console.log('Solving phrase ' + t)
        } else {
            console.log('Make sure the input field is not empty!')
        }
    }
});