const three_points = document.querySelectorAll('.three_points');
var active_div = null;
var person_count = 0;
const checkboxen = document.querySelectorAll('.person_select_box');
const checkbox_check_all = document.getElementById('select_all');
const select_count_span = document.getElementById('select_count');
const table_rows = document.getElementById('mitglieder_tabelle').querySelectorAll('.row_content');
const action_div = document.getElementById('action_div');
const edit_main = document.getElementById('edit_main');
const delete_main = document.getElementById('delete_main');
const group_main = document.getElementById('group_main');
const type_main = document.getElementById('type_main');
const simulation_main = document.getElementById('simulation_main');

const multi_edit = document.getElementById('multi_edit');
const multi_delete = document.getElementById('multi_delete');
const multi_group = document.getElementById('multi_group');
const multi_type = document.getElementById('multi_type');
const multi_simulate = document.getElementById('multi_simulate');

table_rows.forEach(row => {
    row.addEventListener('click', (event) => {
        if (event.target.classList.contains('person_select_box')) return; // Ignore clicks on checkboxes
        const checkbox = row.querySelector('.person_select_box');
        if (checkbox.checked) {
            checkbox.parentElement.classList.remove('person_select_box_checked');
            checkbox.checked = false;
            person_count--;
        } else {
            checkbox.parentElement.classList.add('person_select_box_checked');
            checkbox.checked = true;
            person_count++;
        }
        select_count_span.textContent = person_count;
        setMultiActions();
    });
    row.addEventListener('dblclick', (event) => {
        if (event.target.classList.contains('person_select_box')) return; // Ignore clicks on checkboxes
        const checkbox = row.querySelector('.person_select_box');
        if (checkbox.checked) {
            checkbox.parentElement.classList.remove('person_select_box_checked');
            checkbox.checked = false;
            person_count--;
        } else {
            checkbox.parentElement.classList.add('person_select_box_checked');
            checkbox.checked = true;
            person_count++;
            if (person_count == 1) {
                action_div.style.display = 'flex';
                edit_main.style.display = 'flex';
            }
        }
        select_count_span.textContent = person_count;
        setMultiActions();
    });
});

fetch('three_point_menu.html')
    .then(response => response.text())
    .then(html => {
        three_points.forEach(points => {
            points.insertAdjacentHTML('afterend', html);
        });
    })
    .catch(error => console.error('Fehler beim Laden:', error));

three_points.forEach(points => {
    points.addEventListener('click', () => {
        three_points.forEach(point => {
            const dropdown = point.parentElement.querySelector('.three_point_menu');
            if (dropdown && dropdown.classList.contains('show'))
                dropdown.classList.remove('show');
        });
        const dropdown = points.parentElement.querySelector('.three_point_menu');
        if (active_div && active_div == dropdown) {
            dropdown.classList.remove('show');
            active_div = null;
        } else if (dropdown) {
            dropdown.classList.add('show');
            active_div = dropdown;
        }
    });
});

document.addEventListener('click', function (event) {
    const div = active_div;
    if (div && !div.contains(event.target) && !event.target.classList.contains('three_points') && event.target.tagName != 'span') {
        const dropdowns = document.querySelectorAll('.three_point_menu');
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('show');
            active_div = null;
        });
    }
});

checkboxen.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            if (checkbox.parentElement.tagName !== 'TH') {
                checkbox.parentElement.classList.add('person_select_box_checked');
                person_count++;
            }
        } else {
            checkbox.parentElement.classList.remove('person_select_box_checked');
            if (checkbox.parentElement.tagName !== 'TH') {
                person_count--;
            }
        }
        select_count_span.textContent = person_count;
        setMultiActions();
    });
});

checkbox_check_all.addEventListener('change', () => {
    if (checkbox_check_all.checked) {
        checkboxen.forEach(checkbox => {
            checkbox.checked = true;
            if (checkbox.parentElement.tagName !== 'TH') {
                checkbox.parentElement.classList.add('person_select_box_checked');
            }
            person_count = checkboxen.length - 1; // Exclude the header checkbox
        });
    } else {
        checkboxen.forEach(checkbox => {
            checkbox.checked = false;
            checkbox.parentElement.classList.remove('person_select_box_checked');
            person_count = 0;
        });
    }
    select_count_span.textContent = person_count;
    setMultiActions();
});

function setMultiActions() {
    if (person_count > 0) {
        multi_edit.setAttribute('type', 'normal');
        multi_delete.setAttribute('type', 'löschen');
        multi_group.setAttribute('type', 'normal');
        multi_type.setAttribute('type', 'normal');
        multi_simulate.setAttribute('type', 'normal');
    }
    if (person_count > 1) {
        multi_edit.setAttribute('type', 'disabled');
        multi_delete.setAttribute('type', 'löschen');
        multi_group.setAttribute('type', 'normal');
        multi_type.setAttribute('type', 'normal');
        multi_simulate.setAttribute('type', 'disabled');
    }
    if (person_count == 0) {
        multi_edit.setAttribute('type', 'disabled');
        multi_delete.setAttribute('type', 'disabled');
        multi_group.setAttribute('type', 'disabled');
        multi_type.setAttribute('type', 'disabled');
        multi_simulate.setAttribute('type', 'disabled');
    }
}