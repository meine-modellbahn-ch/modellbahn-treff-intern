$("#action_div").load("action_div.html");

var titel_old;
var text_old;

multi_edit.addEventListener('click', () => {
    if (person_count == 1) {
        action_div.style.display = 'flex';
        edit_main.style.display = 'flex';
        toggle_scroll();
    }
});
multi_delete.addEventListener('click', () => {
    if (person_count > 0) {
        action_div.style.display = 'flex';
        delete_main.style.display = 'flex';
        edit_main.style.display = 'none';

        titel_old = document.getElementById('delete_titel').textContent;
        text_old = document.getElementById('delete_text').textContent;

        if (person_count > 1) {
            if (person_count == 2) {
                document.getElementById('delete_text').textContent += 'und ' + (person_count -1) + ' weitere Person löschen möchtest?';
                document.getElementById('delete_titel').textContent += 'und ' + (person_count -1) + ' weitere Person löschen';
            } else {
                document.getElementById('delete_text').textContent += 'und ' + (person_count -1) + ' weitere Personen löschen möchtest?';
                document.getElementById('delete_titel').textContent += 'und ' + (person_count -1)  + ' weitere Personen löschen';
            }
        } else {
            document.getElementById('delete_text').textContent +=  'löschen möchtest?';
            document.getElementById('delete_titel').textContent += 'löschen';
        }
        toggle_scroll();
    }
});
multi_group.addEventListener('click', () => {
    if (person_count > 0) {
        action_div.style.display = 'flex';
        group_main.style.display = 'flex';
        edit_main.style.display = 'none';
        toggle_scroll();
    }
});
multi_type.addEventListener('click', () => {
    if (person_count > 0) {
        action_div.style.display = 'flex';
        type_main.style.display = 'flex'
        edit_main.style.display = 'none';
        toggle_scroll();
    }
});
multi_simulate.addEventListener('click', () => {
    if (person_count == 1) {
        action_div.style.display = 'flex';
        simulation_main.style.display = 'flex';
        edit_main.style.display = 'none';
        toggle_scroll();
    }
});

action_div.addEventListener('click', function (event) {
    if (edit_main && !edit_main.contains(event.target) && edit_main.style.display !== 'none') {
        if (confirm('Möchtest du das Bearbeiten beenden?\nNicht gespeicherte Änderungen gehen verloren!')) {
            action_div.style.display = 'none';
            edit_main.style.display = 'none';
            toggle_scroll();
        }
    } else if (!delete_main.contains(event.target) && !group_main.contains(event.target) && !type_main.contains(event.target) && !edit_main.contains(event.target)) {
        if (delete_main.style.display == 'flex'){
            document.getElementById('delete_titel').textContent = titel_old;
            document.getElementById('delete_text').textContent = text_old;
        }
        action_div.style.display = 'none';
        edit_main.style.display = 'none';
        delete_main.style.display = 'none';
        group_main.style.display = 'none';
        type_main.style.display = "none";
        simulation_main.style.display = 'none';
        toggle_scroll();
    }
});

function toggle_scroll() {
    if (document.body.style.overflow == "hidden") {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
}