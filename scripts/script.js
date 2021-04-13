"use strict";

// Shortened names of stats.
let stat_shorten = {
	hp: "HP",
	attack: "ATK",
	defense: "DEF",
	"special-attack": "SATK",
	"special-defense": "SDEF",
	speed: "SPD",
};

// Generate html from a JSON object.
function loadPokemon(json, outputArea) {
	// structure
	outputArea.innerHTML += `
		<div id="card-container" class="card-container">
			<div class="card" id="card">
				<div class="top" id="top">
					<div class="top_data" id="top_data">
						<div class="top_data_top" id="top_data_top">
							<p id="name">${json.name}<p>
							<div id="side_grouping">
								<p id="hp"><span id="hp_disp">000</span> HP</p>
								<img src="../assets/images/fire_type.svg" alt="type icon" id="type_icon">
							</div>
						</div>
						<div class="top_data_bottom" id="top_data_bottom">
							<img src="" alt="image of pokemon" id="image_of">
						</div>
					</div>
				</div>
				<div class="middle" id="middle">
					<div class="middle_base_info" id="middle_base_info">
						<p><span id="type_value">TYPE</span> Pokémon.</p>
						<p>Height: <span id="height_value">HEIGHT</span>',</p>
						<p>Weight: <span id="weight_value">WEIGHT</span> lbs.</p>
					</div>
					<div class="middle_abilities" id="middle_abilities">

					</div>

					<div class="middle_stats" id="middle_stats">

					</div>
				</div>
				<div class="bottom" id="bottom">
					<p id="license_info">All Images/Names © The Pokemon Company
				</div>
			</div>
		</div>
	`;

	// static displays.
	let stats_disp = document.getElementById("middle_stats");

	stats_disp.innerHTML += `
		<div id="stat">
			<p>EXP</p>
			<p class="value">${json.base_experience}</p>
		</div>
	`;

	// random stat placement.
	document.getElementById("height_value").innerHTML = json.height;
	document.getElementById("weight_value").innerHTML = json.weight;

	// abilities
	let ab_disp = document.getElementById("middle_abilities");

	// abilities
	for (let ability of json.abilities) {
		ab_disp.innerHTML += `
			<p id="ability">${ability.name}</p>
		`;
	}

	// stats
	for (let stat of json.stats) {
		if (stat.stat.name == "hp") {
			document.getElementById("hp_disp").innerHTML = stat.base_stat;
		} else {
			stats_disp.innerHTML += `
				<div id="stat">
					<p>${stat_shorten[stat.stat.name]}</p>
					<p class="value">${stat.base_stat}</p>
				</div>
			`;
		}
	}

	// types
	let typeString = "";
	for (let type of json.types) {
		typeString += type.type.name + "/";
	}
	typeString = typeString.substring(0, typeString.length - 1).toUpperCase();
	document.getElementById("type_value").innerHTML = typeString;

	document.getElementById("card").style.width =
		(document.getElementById("card").clientHeight / 17.6) * 12.6;
}
