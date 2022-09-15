import { Modool } from 'modool'

export default class YourModule extends Modool {
    init() {
       this.click_count = parseInt(this.elements.click_count.innerText);
    }

    events() {
        return {
            'click button': (event) => {
                this.incrementClickCount();
                this.elements.click_count.animate([
                    { transform: 'scale(1.5)' },
                ], {
                    duration: 250,
                    iterations: 1
                });
            }
        }
    }

    incrementClickCount() {
        this.click_count++;
        this.elements.click_count.innerText = this.click_count;
    }
}
