const menu_opt = document.getElementById("menu_option");
const line = document.getElementById("line");
const lst = document.getElementById("list");
let query;
let count = 0;

function over_out() {
  if (count === 0) {
    count += 1;
    line.style.visibility = "visible";
    lst.style.visibility = "visible";
  } else {
    count -= 1;
    line.style.visibility = "hidden";
    lst.style.visibility = "hidden";
  }
}

function over_menu(variety_name) {
  query = variety_name;
  document.getElementById(query).style.visibility = "visible";
}
function out_menu(variety_name) {
  query = variety_name;
  document.getElementById(query).style.visibility = "hidden";
}

function over_tub(variety_name) {
  query = variety_name + "_cont";
  document.getElementById(query).style.visibility = "visible";
}
function out_tub(variety_name) {
  query = variety_name + "_cont";
  document.getElementById(query).style.visibility = "hidden";
}
function over_v2(variety_name) {
  query = "jumbo-cup-" + variety_name + "-cont";
  document.getElementById(query).style.visibility = "visible";
}
function out_v2(variety_name) {
  query = "jumbo-cup-" + variety_name + "-cont";
  document.getElementById(query).style.visibility = "hidden";
}

function over_cup(variety_name) {
  query = "Cup-" + variety_name + "-cont";
  document.getElementById(query).style.visibility = "visible";
}

function out_cup(variety_name) {
  query = "Cup-" + variety_name + "-cont";
  document.getElementById(query).style.visibility = "hidden";
}
function over_combo(variety_name) {
  query = "combo-" + variety_name + "-cont";
  document.getElementById(query).style.visibility = "visible";
}

function out_combo(variety_name) {
  query = "combo-" + variety_name + "-cont";
  document.getElementById(query).style.visibility = "hidden";
}
function over_bulk(variety_name) {
  query = "bulk-" + variety_name + "-cont";
  document.getElementById(query).style.visibility = "visible";
}

function out_bulk(variety_name) {
  query = "bulk-" + variety_name + "-cont";
  document.getElementById(query).style.visibility = "hidden";
}

function over_cone(variety_name) {
  query = variety_name + "-cont";
  document.getElementById(query).style.visibility = "visible";
}

function out_cone(variety_name) {
  query = variety_name + "-cont";
  document.getElementById(query).style.visibility = "hidden";
}
