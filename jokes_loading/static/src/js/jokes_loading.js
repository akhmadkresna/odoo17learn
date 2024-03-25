/** @odoo-module **/
import { LoadingIndicator } from "@web/webclient/loading_indicator/loading_indicator";
import { patch } from "@web/core/utils/patch";

patch(LoadingIndicator.prototype, {
    speak(text) {
        // Create a SpeechSynthesisUtterance
        const utterance = new SpeechSynthesisUtterance(text);
      
        utterance.lang = 'id-ID'
      
        // Speak the text
        speechSynthesis.speak(utterance);
    },
    requestCall({ detail }) {
        var self = this
        if (this.state.count === 0) {
            // Define the API URL
            const apiUrl = 'https://candaan-api.vercel.app/api/text/random';

            // Make a GET request
            fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                self.speak(data.data)
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
        return super.requestCall({ detail })
    }
});
