/** @odoo-module **/
import { LoadingIndicator } from "@web/webclient/loading_indicator/loading_indicator";
import { patch } from "@web/core/utils/patch";

patch(LoadingIndicator.prototype, {
    speak(text) {
        // Create a SpeechSynthesisUtterance
        const utterance = new SpeechSynthesisUtterance(text);
      
        // Select a voice
        
        utterance.lang = "id-ID";
        // Speak the text
        speechSynthesis.speak(utterance);
    },
    requestCall({ detail }) {
        var self = this
        let rpccall = super.requestCall({ detail });
        if (this.state.count === 0) {
            fetch('https://candaan-api.vercel.app/api/text/random')
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                self.speak(data.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }

        // menampilkan jokes image
        // if ($('.img-jokes-loading').length == 0){
        //     var $jokes_container = $("<img class='img-jokes-loading' src='https://jokesbapak2.reinaldyrafli.com/api/'/>")
        //     $jokes_container.css({
        //         'width': '70vw',
        //         'margin': 'auto',
        //         'object-fit': 'contain',

        //     })
        //     $jokes_container.appendTo('body')
        // }
        return rpccall
    },
    responseCall({ detail }) {
        let rpcresponse = super.responseCall({ detail });
        $('.jokes').remove()
        return rpcresponse
    }
});