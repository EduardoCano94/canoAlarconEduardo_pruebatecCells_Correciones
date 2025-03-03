import { LitElement, html } from 'lit';
import { Styles } from "./character-card-component-styles.js";

export class CharacterCardComponent extends LitElement {
  static properties = {
    id: { type: Number },
    name: { type: String },
    type: { type: String },
    dimension: { type: String },
    residents: { type: Array },
    created: { type: String },
    url: { type: String }
  };

  static styles = [Styles];

  constructor() {
    super();
    this.id = NaN;
    this.name = "";
    this.type = "";
    this.dimension = "";
    this.residents = [];
    this.created = "";
    this.url = "";
  }

  render() {
    return html`
      <div class="card">
        <h1 class="card__title">${this.name}</h1>
        <span class="card__body">
          <h2 class="card__body--type">Type: ${this.type || "Unknown"}</h2>
          <h2 class="card__body--dimension">Dimension: ${this.dimension || "Unknown"}</h2>
          <h3 class="card__body--residents">Residents: ${this.residents ? this.residents.length : 0}</h3>
        </span>
      </div>
    `;
  }
}