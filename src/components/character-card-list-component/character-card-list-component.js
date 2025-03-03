import { LitElement, html } from 'lit';
import { Styles } from "./character-card-list-component-styles.js";
import '../character-card-component/index.js'
export class CharacterCardListComponent extends LitElement {
  static properties = {
    locationType: { type: String },
    data: { type: Array },
  };

  static styles = [Styles];

  constructor() {
    super();
    this.locationType = "";
    this.data = [];
  }

  render() {
    return html`
      <h1>Type: ${this.locationType}</h1>
      <div class="grid-container">
        ${this.data && this.data.length ? this.data.map((location) => {
          return html`<character-card-component
            id=${location.id}
            name=${location.name}
            type=${location.type || ''}
            dimension=${location.dimension || ''}
            .residents=${location.residents || []}
            created=${location.created || ''}
            url=${location.url || ''}
          />`;
        }) : html`<p>No locations to display</p>`}
      </div>
    `;
  }
}