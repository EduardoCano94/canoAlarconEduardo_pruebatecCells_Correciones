import { LitElement, html } from 'lit';
import '../characters-component-dp/index.js';

export class CharactersComponentDm extends LitElement {

  async getLocationsByType() {
    const dp = this.shadowRoot.querySelector('characters-component-dp');
    const locations = await dp.getLocations();
    
    
    const groupByType = Object.groupBy(locations, location => location.type)
    
   
    this.dispatchEvent(new CustomEvent('locations-loaded', {
        detail: groupByType,
        bubbles: true,
        composed: true
    }));
    
    return groupByType;
}

render() {
    return html`<characters-component-dp></characters-component-dp>`;
}
}