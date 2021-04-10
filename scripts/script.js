"use strict";

// Generate html from a JSON object.
function loadPokemon(json, outputArea) {
	// structure
	outputArea.innerHTML += `
		<div class="card" id="card">
			<div class="top" id="top">
				<div class="top_data" id="top_data">
					<div class="top_data_top" id="top_data_top">
						<p id="name">${json.name.toUpperCase()}<p>
						<p id="hp">000 HP</hp>
						<img src="" alt="type icon" id="type_icon">
					</div>
					<div class="top_data_bottom" id="top_data_bottom">
						<img src="" alt="image of pokemon" id="image_of">
					</div>
				</div
			</div>
			<div class="middle" id="middle">
				<div class="middle_base_info" id="middle_base_info">
					<p><span id="type_value">TYPE</span> Pokémon.</p>
					<p>Height: <span id="height_value">HEIGHT</span>,</p>
					<p>Weight: <span id="weight_value">WEIGHT</span>.</p>
				</div>
				<div class="middle_abilities" id="middle_abilities">

				</div>
			</div>
			<div class="bottom" id="bottom">
				<p id="license_info">All Images/Names © The Pokemon Company
			</div>
		</div>
	`;
}
