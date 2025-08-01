const edit_select = document.getElementById('edit_select');
const edit_select_li = document.querySelectorAll('.li');
const edit_person = document.getElementById('edit_person');
const edit_kontaktperson = document.getElementById('edit_kontaktperson');
const edit_wohnort = document.getElementById('edit_wohnort');
const edit_bemerkungen = document.getElementById('edit_bemerkungen');
const edit_berechtigungen = document.getElementById('edit_berechtigungen');
const edit_bild = document.getElementById('edit_bild');

edit_select_li.forEach(li => {
    li.addEventListener('click', () => {
        edit_select_li.forEach(item => {
            item.classList.remove('selected');
        });
        li.classList.add('selected');
        switch (li.id) {
            case 'person':
                edit_person.style.display = 'block';
                edit_kontaktperson.style.display = 'none';
                edit_wohnort.style.display = 'none';
                edit_bemerkungen.style.display = 'none';
                edit_berechtigungen.style.display = 'none';
                edit_bild.style.display = 'none';
                break;
            case 'kp_person':
                edit_person.style.display = 'none';
                edit_kontaktperson.style.display = 'block';
                edit_wohnort.style.display = 'none';
                edit_bemerkungen.style.display = 'none';
                edit_berechtigungen.style.display = 'none';
                edit_bild.style.display = 'none';
                break;
            case 'wohnort':
                edit_person.style.display = 'none';
                edit_kontaktperson.style.display = 'none';
                edit_wohnort.style.display = 'block';
                edit_bemerkungen.style.display = 'none';
                edit_berechtigungen.style.display = 'none';
                edit_bild.style.display = 'none';
                break;
            case 'bemerkungen':
                edit_person.style.display = 'none';
                edit_kontaktperson.style.display = 'none';
                edit_wohnort.style.display = 'none';
                edit_bemerkungen.style.display = 'flex';
                edit_berechtigungen.style.display = 'none';
                edit_bild.style.display = 'none';
                break;
            case 'berechtigungen':
                edit_person.style.display = 'none';
                edit_kontaktperson.style.display = 'none';
                edit_wohnort.style.display = 'none';
                edit_bemerkungen.style.display = 'none';
                edit_berechtigungen.style.display = 'block';
                edit_bild.style.display = 'none';
                break;
            case 'bild':
                edit_person.style.display = 'none';
                edit_kontaktperson.style.display = 'none';
                edit_wohnort.style.display = 'none';
                edit_bemerkungen.style.display = 'none';
                edit_berechtigungen.style.display = 'none';
                edit_bild.style.display = 'block';
                break;
        }
    });
});
// This code handles the three-point menu functionality, checkbox selection, and multi-action updates for the Mitglieder page.
// It also manages the edit section visibility based on the selected option from the edit menu.