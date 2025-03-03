import { LitElement, html } from "lit";
import { Styles } from "./characters-page-styles.js";
import "../../components/characters-component-dm/index.js";
import "../../components/character-card-list-component/index.js";

export class CharactersPage extends LitElement {
  static styles = [Styles];

  static properties = {
    _data: { type: Object },
  };

  constructor() {
    super();
    this._data = {
      Planet: [],
      Dimension: [],
      "Space station": [],
      // Initialize with common location types
    };
  }

  async firstUpdated() {
    await this.updateComplete;
    const dm = this.shadowRoot.querySelector("characters-component-dm");
    const data = await dm.getLocationsByType();
    this._data = data;
  }

  render() {
    // Create an array of location types to render dynamically
    const locationTypes = Object.keys(this._data);

    return html`
      <div>
        <h1>The <span>Rick & Morty</span> API</h1>
        <h2>Location Types</h2>
        <characters-component-dm></characters-component-dm>
        
        ${locationTypes.map(
          (locationType) => html`
            <div class="content">
              ${this._data[locationType] && this._data[locationType].length
                ? html`<character-card-list-component
                    locationType="${locationType}"
                    .data=${this._data[locationType]}
                  />`
                : html`<p>No locations found for type: ${locationType}</p>`}
            </div>
          `
        )}
      </div>
    `;
  }
}
customElements.define("characters-page", CharactersPage);