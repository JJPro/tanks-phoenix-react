// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import socket from "./socket"
import create_room_field from './room-create-input';
import list_rooms from './list-rooms';
import room_init from './room';

function init(){
  let create_room_field_root = document.getElementById('create-room-field');
  if (create_room_field_root){
    create_room_field(create_room_field_root);
  }

  let list_rooms_root = document.getElementById('rooms-list');
  if (list_rooms_root){
    list_rooms(list_rooms_root);
  }

  let show_room_root = document.getElementById('room');
  if (show_room_root){
    room_init(show_room_root);
  }
}

$(init);
